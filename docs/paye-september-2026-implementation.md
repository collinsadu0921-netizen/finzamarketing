# September 2026 PAYE implementation brief

Status: preparation only. This marketing repository change does not update the Finza application tax engine. Do not advertise engine readiness until app implementation and staging verification pass.

## Verified source, checked 2 October 2026

GRA PAYE page: https://gra.gov.gh/domestic-tax/tax-types/paye/

GRA notice: https://gra.gov.gh/wp-content/uploads/2026/09/Amendments-To-The-Income-Tax-2015-Act-896_Updated-1.pdf

Both specify 1 September 2026 and GH₵30,332 for the sixth monthly band. The PDF is a public notice, not the text of Act 1178. Parliamentary passage, assent, Gazette date and first public announcement have not been independently verified in this task.

## Resident monthly schedule

| Upper cumulative chargeable income (GHS) | Marginal rate |
| --- | --- |
| 588 | 0% |
| 668 | 5% |
| 768 | 10% |
| 3,668 | 17.5% |
| 19,668 | 25% |
| 50,000 | 30% |
| Above 50,000 | 35% |

Annual band widths: 7,056; 960; 1,200; 34,800; 192,000; 363,984; excess over 600,000. Do not replace full-year historical payroll with the revised annual schedule without confirming transition guidance.

## App implementation scope

- Inventory calculation entry points, SQL functions, previews, exports, payslips and stored snapshots before editing.
- Add an effective-dated schedule starting 2026-09-01. Retain the previous schedule for earlier payroll. Select by the existing legally relevant payroll date; confirm its meaning before using period start, end or payment date, particularly for periods crossing the effective date.
- Persist the selected schedule version with each payroll calculation. Reopening historical runs must not silently apply today's schedule.
- Preserve approved, locked and paid payroll snapshots. Provide an explicit reviewed adjustment path for September payroll calculated under previous bands; do not bulk recalculate historical runs.
- Check resident and non-resident routing, reliefs, pension deductions, taxable benefits, bonuses and overtime independently. This notice does not establish a change to those rules or SSNIT.
- Keep app calculations, previews, payslips and statutory exports consistent.
- Stage first. Promote to production only after user review and explicit approval.

## Required checks

- Test one pesewa below, at, and above every cumulative monthly threshold.
- Independent reference totals for monthly chargeable income: 588 => 0; 668 => 4; 768 => 14; 3,668 => 521.50; 19,668 => 4,521.50; 50,000 => 13,621.10; 50,001 => 13,621.45.
- Verify August uses its retained schedule and September uses the revised schedule, including reopening, saved snapshots and exports.
- Test tax rounding, zero income, non-resident routing and periods crossing 1 September.
- Verify no stored approved or paid run changes as a side effect of deployment.

## Website scope

Add the sourced monthly table, effective date and matching FAQ to the payroll page. Do not claim that Finza's tax engine has been updated. Confirm rollout before adding any product-readiness announcement.
