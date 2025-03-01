import type { Metadata } from 'next';
import siteConfig from '@/config/siteConfig';
import DocsHeader from '@/components/docs/Header';
import DocsSidebar from '@/components/docs/Sidebar';

export const metadata: Metadata = {
    title: {
        template: `%s | ${siteConfig.name}`,
        default: siteConfig.name,
    },
    description: siteConfig.description,
    icons: {
        icon: siteConfig.favicon,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DocsHeader />

            <div className="flex">
                <DocsSidebar />

                <div className="flex-1">{children}</div>
            </div>
        </>
    );
}
