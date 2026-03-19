import { AdminSidebar } from "@/components/admin/sidebar";

export const metadata = {
  title: { template: "%s — Finza CMS", default: "Finza CMS" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50">
      <AdminSidebar />
      <main className="flex flex-1 flex-col overflow-y-auto">{children}</main>
    </div>
  );
}
