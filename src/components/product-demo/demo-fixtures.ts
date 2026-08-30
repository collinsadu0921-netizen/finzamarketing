/** Fictional demo values verified against finza-job-materials-workflow screenshot. */
export const JOBS_MATERIALS_DEMO = {
  jobName: "Legacy Sands: Development of a beach-front eco-resort",
  jobStatus: "In Progress",
  startDate: "18 Jun 2026",
  endDate: "21 Aug 2026",
  proformaLabel: "— No proforma linked —",
  materialsSectionTotal: "₵106,465.00",
  totalMaterialCost: "₵106,465.00",
  statusAllocated: "Allocated",
  statusConfirmed: "Confirmed",
  cementRowIndex: 2,
} as const;

export type MaterialRow = {
  material: string;
  qty: number;
  unitCost: string;
  total: string;
  date: string;
  animatable?: boolean;
};

export const JOBS_MATERIAL_ROWS: MaterialRow[] = [
  {
    material: "Security doors (pcs)",
    qty: 15,
    unitCost: "₵5,500.00",
    total: "₵82,500.00",
    date: "29 Jul",
  },
  {
    material: "Iron rods (pcs)",
    qty: 25,
    unitCost: "₵300.00",
    total: "₵7,500.00",
    date: "29 Jul",
  },
  {
    material: "Cement (pcs)",
    qty: 185,
    unitCost: "₵89.00",
    total: "₵16,465.00",
    date: "29 Jul",
    animatable: true,
  },
];

export type JobsMaterialsDemoScene =
  | "static"
  | "cement-focus"
  | "cursor-confirm"
  | "confirm-press"
  | "confirming"
  | "confirmed"
  | "success-highlight"
  | "total-emphasis"
  | "cursor-invoice"
  | "invoice-pulse"
  | "hold";

export const JOBS_DEMO_SCENE_MS: Record<JobsMaterialsDemoScene, number> = {
  static: 500,
  "cement-focus": 400,
  "cursor-confirm": 500,
  "confirm-press": 300,
  confirming: 200,
  confirmed: 400,
  "success-highlight": 500,
  "total-emphasis": 500,
  "cursor-invoice": 400,
  "invoice-pulse": 400,
  hold: 3000,
};

export const JOBS_DEMO_SCENE_ORDER: JobsMaterialsDemoScene[] = [
  "static",
  "cement-focus",
  "cursor-confirm",
  "confirm-press",
  "confirming",
  "confirmed",
  "success-highlight",
  "total-emphasis",
  "cursor-invoice",
  "invoice-pulse",
  "hold",
];

export const JOBS_DEMO_TABLET_SCENE_ORDER: JobsMaterialsDemoScene[] = [
  "static",
  "cement-focus",
  "confirm-press",
  "confirming",
  "confirmed",
  "success-highlight",
  "total-emphasis",
  "invoice-pulse",
  "hold",
];

export const SCREENSHOT = {
  src: "/images/finza/finza-job-materials-workflow.webp",
  alt: "Finza job materials workflow showing material usage linked to a customer job",
  width: 2400,
  height: 1350,
  sizes: "(max-width: 1024px) 96vw, 60vw",
} as const;

const SCENE_RANK: Record<JobsMaterialsDemoScene, number> = Object.fromEntries(
  JOBS_DEMO_SCENE_ORDER.map((scene, index) => [scene, index]),
) as Record<JobsMaterialsDemoScene, number>;

export function sceneReached(
  scene: JobsMaterialsDemoScene,
  target: JobsMaterialsDemoScene,
): boolean {
  return SCENE_RANK[scene] >= SCENE_RANK[target];
}
