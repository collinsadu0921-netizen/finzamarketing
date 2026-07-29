# Finza product screenshots

Place sanitized Finza product images in this folder. The marketing site reads them from `/images/finza/<filename>`.

## Expected files

| Filename | Registry ID |
|----------|-------------|
| `finza-dashboard-hero.webp` | `dashboard` |
| `invoice-create.png` | `invoice-create` |
| `invoice-sample.png` | `invoice-sample` |
| `receipt-payment.png` | `receipt-payment` |
| `customer-statement.png` | `customer-statement` |
| `expenses.png` | `expenses` |
| `payroll.png` | `payroll` |
| `reports-export.png` | `reports-export` |
| `tax-settings.png` | `tax-settings` |
| `user-roles-security.png` | `user-roles-security` |

## Guidelines

- Use real or sanitized Finza UI only.
- Do not include customer names, logos, phone numbers, or other identifying details unless intentionally sanitized.
- Prefer PNG or WebP; keep file names exactly as listed so `src/lib/finza-product-assets.ts` resolves them.
- Recommended width: at least 1200px on the long edge for marketing sections.

## Replace an asset

1. Export a new image with the same filename, or
2. Add a new file, update `FINZA_PRODUCT_ASSET_IDS` and `FINZA_PRODUCT_ASSETS` in `src/lib/finza-product-assets.ts`, then wire the new ID in `src/lib/finza-product-placements.ts`.

Missing files are skipped at render time (no broken images).
