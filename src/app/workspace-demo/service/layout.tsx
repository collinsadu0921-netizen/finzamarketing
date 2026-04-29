import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finza Service Workspace Demo",
  description: "Internal preview route for the Finza service workspace demo.",
  robots: { index: false, follow: false },
};

export default function ServiceDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
