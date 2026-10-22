import { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbListSchema, softwareApplicationSchema } from "@/lib/schema";

const title = "Finza Product Tour | Accounting and Business Software for Ghana";
const description =
  "Explore a self-guided Finza product tour with sample invoices, payments, expenses, and reports for Ghanaian businesses. Request a guided trial to use Finza with your own data.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://www.finza.africa/product-tour",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://www.finza.africa/product-tour",
    siteName: "Finza",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Finza Product Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@finzagh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Product tour", path: "/product-tour" },
          ]),
          softwareApplicationSchema(),
        ]}
      />
      {children}
    </>
  );
}
