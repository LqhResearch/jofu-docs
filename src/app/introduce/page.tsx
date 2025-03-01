import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6 text-white">
            <div className="max-w-2xl text-center">
                <h1 className="mb-4 text-5xl font-bold text-blue-400">JofuDocs</h1>
                <p className="text-lg text-gray-300">Markdown-powered documentation platform</p>

                <Link
                    href="/docs"
                    className="mt-6 inline-block rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-600"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
}
