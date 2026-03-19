-- ============================================================
-- Finza Marketing CMS — Schema Migration 001
-- Run this in the Supabase SQL editor
-- ============================================================

-- ── Authors ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS authors (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  role       TEXT,
  bio        TEXT,
  image_url  TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Categories ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS categories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Blog Posts ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS posts (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            TEXT NOT NULL,
  slug             TEXT UNIQUE NOT NULL,
  excerpt          TEXT,
  content          TEXT,
  cover_image      TEXT,
  author_id        UUID REFERENCES authors(id) ON DELETE SET NULL,
  status           TEXT NOT NULL DEFAULT 'draft'
                     CHECK (status IN ('draft', 'published')),
  seo_title        TEXT,
  meta_description TEXT,
  og_title         TEXT,
  og_description   TEXT,
  og_image         TEXT,
  canonical_url    TEXT,
  noindex          BOOLEAN NOT NULL DEFAULT false,
  published_at     TIMESTAMPTZ,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Post ↔ Category join ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS post_categories (
  post_id     UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- ── CMS Pages ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS pages (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            TEXT NOT NULL,
  slug             TEXT UNIQUE NOT NULL,
  template         TEXT NOT NULL DEFAULT 'default',
  status           TEXT NOT NULL DEFAULT 'draft'
                     CHECK (status IN ('draft', 'published')),
  seo_title        TEXT,
  meta_description TEXT,
  og_title         TEXT,
  og_description   TEXT,
  og_image         TEXT,
  canonical_url    TEXT,
  excerpt          TEXT,
  noindex          BOOLEAN NOT NULL DEFAULT false,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  published_at     TIMESTAMPTZ
);

-- ── Page Sections ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS page_sections (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id      UUID NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL
                 CHECK (section_type IN (
                   'hero', 'feature_grid', 'rich_text', 'faq', 'cta', 'trust_bar'
                 )),
  sort_order   INTEGER NOT NULL DEFAULT 0,
  data_json    JSONB NOT NULL DEFAULT '{}',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── FAQs ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS faqs (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question   TEXT NOT NULL,
  answer     TEXT NOT NULL,
  page_slug  TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_active  BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Site Settings ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS site_settings (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key        TEXT UNIQUE NOT NULL,
  value_json JSONB NOT NULL DEFAULT 'null',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ── Indexes ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS posts_slug_idx       ON posts(slug);
CREATE INDEX IF NOT EXISTS posts_status_idx     ON posts(status);
CREATE INDEX IF NOT EXISTS posts_author_idx     ON posts(author_id);
CREATE INDEX IF NOT EXISTS posts_published_idx  ON posts(published_at DESC);
CREATE INDEX IF NOT EXISTS pages_slug_idx       ON pages(slug);
CREATE INDEX IF NOT EXISTS pages_status_idx     ON pages(status);
CREATE INDEX IF NOT EXISTS faqs_page_slug_idx   ON faqs(page_slug);
CREATE INDEX IF NOT EXISTS faqs_sort_idx        ON faqs(sort_order);
CREATE INDEX IF NOT EXISTS page_sections_page_idx ON page_sections(page_id, sort_order);

-- ── updated_at trigger function ──────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER authors_updated_at
  BEFORE UPDATE ON authors
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER faqs_updated_at
  BEFORE UPDATE ON faqs
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER page_sections_updated_at
  BEFORE UPDATE ON page_sections
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE OR REPLACE TRIGGER site_settings_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ── Row Level Security ───────────────────────────────────────
ALTER TABLE posts          ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages          ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections  ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors        ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories     ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs           ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings  ENABLE ROW LEVEL SECURITY;

-- Drop existing policies so this migration can be safely re-run
DROP POLICY IF EXISTS "public_read_published_posts" ON posts;
DROP POLICY IF EXISTS "public_read_published_pages" ON pages;
DROP POLICY IF EXISTS "public_read_page_sections" ON page_sections;
DROP POLICY IF EXISTS "public_read_authors" ON authors;
DROP POLICY IF EXISTS "public_read_categories" ON categories;
DROP POLICY IF EXISTS "public_read_post_categories" ON post_categories;
DROP POLICY IF EXISTS "public_read_active_faqs" ON faqs;
DROP POLICY IF EXISTS "public_read_site_settings" ON site_settings;
DROP POLICY IF EXISTS "admin_all_posts" ON posts;
DROP POLICY IF EXISTS "admin_all_pages" ON pages;
DROP POLICY IF EXISTS "admin_all_page_sections" ON page_sections;
DROP POLICY IF EXISTS "admin_all_authors" ON authors;
DROP POLICY IF EXISTS "admin_all_categories" ON categories;
DROP POLICY IF EXISTS "admin_all_post_categories" ON post_categories;
DROP POLICY IF EXISTS "admin_all_faqs" ON faqs;
DROP POLICY IF EXISTS "admin_all_site_settings" ON site_settings;

-- Public can read published posts
CREATE POLICY "public_read_published_posts" ON posts
  FOR SELECT USING (status = 'published');

-- Public can read published pages
CREATE POLICY "public_read_published_pages" ON pages
  FOR SELECT USING (status = 'published');

-- Public can read published page sections
CREATE POLICY "public_read_page_sections" ON page_sections
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM pages p
      WHERE p.id = page_sections.page_id AND p.status = 'published'
    )
  );

-- Public can read authors
CREATE POLICY "public_read_authors" ON authors
  FOR SELECT USING (true);

-- Public can read categories
CREATE POLICY "public_read_categories" ON categories
  FOR SELECT USING (true);

-- Public can read post_categories
CREATE POLICY "public_read_post_categories" ON post_categories
  FOR SELECT USING (true);

-- Public can read active FAQs
CREATE POLICY "public_read_active_faqs" ON faqs
  FOR SELECT USING (is_active = true);

-- Public can read site settings
CREATE POLICY "public_read_site_settings" ON site_settings
  FOR SELECT USING (true);

-- Authenticated users (admins) have full access to all tables
CREATE POLICY "admin_all_posts"           ON posts          FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_pages"           ON pages          FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_page_sections"   ON page_sections  FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_authors"         ON authors        FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_categories"      ON categories     FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_post_categories" ON post_categories FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_faqs"            ON faqs           FOR ALL USING (auth.uid() IS NOT NULL);
CREATE POLICY "admin_all_site_settings"   ON site_settings  FOR ALL USING (auth.uid() IS NOT NULL);

-- ============================================================
-- Storage bucket setup (run separately in Supabase dashboard
-- or via the Storage UI):
--
-- 1. Create a bucket named "cms-media"
-- 2. Set it to PUBLIC (public read access)
-- 3. Add an RLS policy for INSERT/UPDATE/DELETE:
--      USING (auth.uid() IS NOT NULL)
--
-- Or run these SQL statements:
-- ============================================================

INSERT INTO storage.buckets (id, name, public)
VALUES ('cms-media', 'cms-media', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "cms_media_public_read" ON storage.objects;
DROP POLICY IF EXISTS "cms_media_admin_write" ON storage.objects;
DROP POLICY IF EXISTS "cms_media_admin_update" ON storage.objects;
DROP POLICY IF EXISTS "cms_media_admin_delete" ON storage.objects;

CREATE POLICY "cms_media_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'cms-media');

CREATE POLICY "cms_media_admin_write" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'cms-media' AND auth.uid() IS NOT NULL
  );

CREATE POLICY "cms_media_admin_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'cms-media' AND auth.uid() IS NOT NULL
  );

CREATE POLICY "cms_media_admin_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'cms-media' AND auth.uid() IS NOT NULL
  );

-- ============================================================
-- Seed: default site settings
-- ============================================================
INSERT INTO site_settings (key, value_json) VALUES
  ('seo_title_template',   '"Finza — %s"'),
  ('default_meta_description', '"Finza is accounting software built for Ghanaian businesses."'),
  ('default_og_image',     '"https://www.finza.africa/og-default.png"'),
  ('contact_email',        '"hello@finza.africa"'),
  ('footer_text',          '"© 2026 Finza Africa Ltd. All rights reserved."'),
  ('social_twitter',       '"https://twitter.com/finzaafrica"'),
  ('social_linkedin',      '"https://linkedin.com/company/finzaafrica"')
ON CONFLICT (key) DO NOTHING;
