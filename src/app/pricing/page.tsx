import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Simple, transparent pricing for Finza workspaces. Retail and Service at 150 GHS/month. Accountant Workspace at 300 GHS/month. No hidden fees.",
    alternates: {
        canonical: "https://finza.africa/pricing",
    },
};

export default function PricingPage() {
    redirect("/#pricing");
}
