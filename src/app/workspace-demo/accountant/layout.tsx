import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finza Accountant Workspace Demo",
  description: "Internal preview route for the Finza accountant workspace demo.",
  robots: { index: false, follow: false },
};

export default function AccountantDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
