-- Optional defaults for new social keys (no-op if keys already exist)
INSERT INTO site_settings (key, value_json) VALUES
  ('social_instagram', '"https://www.instagram.com/finzaafrica/"'),
  ('social_tiktok', '"https://www.tiktok.com/@finzaafrica"')
ON CONFLICT (key) DO NOTHING;
