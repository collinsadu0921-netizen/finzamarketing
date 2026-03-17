import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center">
            <Container>
                <div className="text-center max-w-lg mx-auto space-y-8 py-24">
                    <div className="text-8xl font-bold text-zinc-100 select-none">404</div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                            Page not found
                        </h1>
                        <p className="text-lg text-zinc-600">
                            This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="rounded-md bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0F172A]/90 transition-colors w-full sm:w-auto text-center"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/demo"
                            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-colors w-full sm:w-auto text-center"
                        >
                            View Demo
                        </Link>
                    </div>
                </div>
            </Container>
        </main>
    );
}
