'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubDocsTree } from '@/lib/github';
import { GitHubItem } from '@/interfaces/github.interface';
import DocsSidebarSection from './SidebarSection';

export default function DocsSidebar() {
    const [docsTree, setDocsTree] = useState<GitHubItem[]>([]);

    useEffect(() => {
        async function fetchDocs() {
            try {
                const tree = await fetchGitHubDocsTree();
                setDocsTree(tree);
            } catch (error) {
                console.error('Error fetching docs:', error);
            }
        }
        fetchDocs();
    }, []);

    return (
        <aside className="fixed top-0 bottom-0 left-0 z-10 mt-[3.75rem] w-[18.75rem] border-r border-gray-300 bg-white p-2 dark:bg-gray-900">
            {docsTree.map((section, index) => (
                <DocsSidebarSection key={index} section={section} />
            ))}
        </aside>
    );
}
