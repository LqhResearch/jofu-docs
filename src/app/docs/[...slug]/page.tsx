import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchGitHubMarkdown } from '@/lib/github';

interface Props {
    params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params: paramsPromise }: Props): Promise<Metadata> {
    const params = await paramsPromise;

    const lastSegment = params.slug?.[params.slug.length - 1] || 'Docs';

    return {
        title: lastSegment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    };
}

export default async function DocsPage({ params: paramsPromise }: Props) {
    const params = await paramsPromise;
    const slugPath = params.slug?.join('/') || '';

    try {
        const content = await fetchGitHubMarkdown(`${slugPath}.md`);

        return (
            <div className="ms-[18.75rem] mt-[3.75rem] bg-white p-3 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <article className="prose dark:prose-invert">
                    <pre>{content}</pre>
                </article>
            </div>
        );
    } catch {
        notFound();
    }
}
