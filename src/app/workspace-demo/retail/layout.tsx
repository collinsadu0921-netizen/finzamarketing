import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finza Retail Workspace Demo",
  description: "Internal preview route for the Finza retail workspace demo.",
  robots: { index: false, follow: false },
};

export default function RetailDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
