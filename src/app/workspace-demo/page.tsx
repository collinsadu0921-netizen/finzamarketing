import { RelatedClusterLinks } from "@/components/related-cluster-links";

export default function WorkspaceDemoPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <div className="flex min-h-[50vh] items-center justify-center p-6">
                <div className="max-w-md space-y-4 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-100 bg-green-50 text-green-600">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                        Welcome to your Finza workspace
                    </h1>
                    <p className="text-lg text-zinc-600">
                        Your environment has been successfully initialized.
                    </p>
                </div>
            </div>
            <RelatedClusterLinks
                related={[
                    { href: "/features", label: "Features", desc: "Full product map" },
                    { href: "/pricing", label: "Pricing", desc: "Workspaces" },
                ]}
            />
        </main>
    );
}
