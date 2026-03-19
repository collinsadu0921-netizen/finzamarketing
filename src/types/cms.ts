// ── Author ────────────────────────────────────────────────────
export interface Author {
  id: string;
  name: string;
  role: string | null;
  bio: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

export type AuthorInsert = Omit<Author, "id" | "created_at" | "updated_at">;
export type AuthorUpdate = Partial<AuthorInsert>;

// ── Category ──────────────────────────────────────────────────
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export type CategoryInsert = Omit<Category, "id" | "created_at" | "updated_at">;
export type CategoryUpdate = Partial<CategoryInsert>;

// ── Post ──────────────────────────────────────────────────────
export type PostStatus = "draft" | "published";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  author_id: string | null;
  status: PostStatus;
  seo_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  noindex: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface PostWithAuthor extends Post {
  author: Author | null;
  categories: Category[];
}

export type PostInsert = Omit<Post, "id" | "created_at" | "updated_at">;
export type PostUpdate = Partial<PostInsert>;

// ── Page ──────────────────────────────────────────────────────
export type PageStatus = "draft" | "published";

export interface CmsPage {
  id: string;
  title: string;
  slug: string;
  template: string;
  status: PageStatus;
  seo_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  excerpt: string | null;
  noindex: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export type CmsPageInsert = Omit<CmsPage, "id" | "created_at" | "updated_at">;
export type CmsPageUpdate = Partial<CmsPageInsert>;

// ── Page Section ──────────────────────────────────────────────
export type SectionType =
  | "hero"
  | "feature_grid"
  | "rich_text"
  | "faq"
  | "cta"
  | "trust_bar";

export interface PageSection {
  id: string;
  page_id: string;
  section_type: SectionType;
  sort_order: number;
  data_json: SectionData;
  created_at: string;
  updated_at: string;
}

// Typed section payloads
export interface HeroSectionData {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primary_cta_text?: string;
  primary_cta_href?: string;
  secondary_cta_text?: string;
  secondary_cta_href?: string;
}

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface FeatureGridSectionData {
  title?: string;
  intro?: string;
  items: FeatureItem[];
}

export interface RichTextSectionData {
  title?: string;
  body: string;
}

export interface FaqSectionData {
  title?: string;
  page_slug?: string;
}

export interface CtaSectionData {
  heading: string;
  text?: string;
  button_text?: string;
  button_href?: string;
}

export interface TrustBarItem {
  label: string;
  sub?: string;
}

export interface TrustBarSectionData {
  items: TrustBarItem[];
}

export type SectionData =
  | HeroSectionData
  | FeatureGridSectionData
  | RichTextSectionData
  | FaqSectionData
  | CtaSectionData
  | TrustBarSectionData
  | Record<string, unknown>;

// ── FAQ ───────────────────────────────────────────────────────
export interface Faq {
  id: string;
  question: string;
  answer: string;
  page_slug: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type FaqInsert = Omit<Faq, "id" | "created_at" | "updated_at">;
export type FaqUpdate = Partial<FaqInsert>;

// ── Site Settings ─────────────────────────────────────────────
export interface SiteSetting {
  id: string;
  key: string;
  value_json: unknown;
  updated_at: string;
}

export interface SiteSettingsMap {
  seo_title_template: string;
  default_meta_description: string;
  default_og_image: string;
  contact_email: string;
  footer_text: string;
  social_twitter: string;
  social_linkedin: string;
  [key: string]: unknown;
}

// ── Server action return type ─────────────────────────────────
export interface ActionResult<T = null> {
  data: T | null;
  error: string | null;
}
