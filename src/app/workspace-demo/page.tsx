export default function WorkspaceDemoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
            <div className="text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                    Welcome to your Finza workspace
                </h1>
                <p className="text-lg text-zinc-600">
                    Your environment has been successfully initialized.
                </p>
            </div>
        </main>
    );
}
