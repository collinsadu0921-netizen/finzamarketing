import Link from "next/link";
import { RelatedClusterLinks } from "@/components/related-cluster-links";

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 py-20 px-6 flex justify-center">
            <div className="w-full max-w-[1024px] space-y-10">

                {/* Header */}
                <div className="text-center space-y-3">
                    <Link href="/" className="text-zinc-900 font-bold text-xl block mb-6">
                        Finza
                    </Link>

                    <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                        Finza Platform Demo
                    </h1>
                    <p className="text-base text-zinc-600 max-w-md mx-auto leading-relaxed">
                        Watch this 8-minute walkthrough to see how Finza fits into your business workflow.
                    </p>
                </div>

                {/* Video Embed */}
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-4 md:p-6">
                    <iframe 
                        className="w-full aspect-video rounded-lg"
                        src="https://www.youtube.com/embed/ScD8LXyYcTw?si=hmE7b36-nPYlpcs2" 
                        title="Finza Demo" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                    </iframe>
                </div>

                {/* CTA */}
                <div className="text-center space-y-3 max-w-xl mx-auto pt-4">
                    <h2 className="text-xl font-bold text-zinc-900">Ready to start?</h2>
                    <p className="text-sm text-zinc-600">
                        Join other businesses managing their finances on Finza.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://app.finza.africa/signup?workspace=service&plan=starter&trial=true"
                            className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors w-full sm:w-auto"
                        >
                            Start your 14-day free trial
                        </a>
                        <Link 
                            href="/pricing"
                            className="rounded-md border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-zinc-300 hover:bg-zinc-50 transition-colors w-full sm:w-auto"
                        >
                            View pricing
                        </Link>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </div>

            <RelatedClusterLinks
                related={[
                    {
                        href: "/features",
                        label: "Platform Features",
                        desc: "Explore all capabilities",
                    },
                    { href: "/pricing", label: "Pricing", desc: "View plans" },
                ]}
            />
        </main>
    );
}
