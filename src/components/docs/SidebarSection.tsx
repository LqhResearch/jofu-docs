'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { GitHubItem } from '@/interfaces/github.interface';

interface Props {
    section: GitHubItem;
}

export default function DocsSidebarSection({ section }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-3">
            {section.type === 'dir' ? (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-bold text-gray-600 uppercase dark:text-gray-300"
                >
                    {section.name}

                    {isOpen ? (
                        <IoIosArrowDown size={20} className="text-gray-500 dark:text-gray-400" />
                    ) : (
                        <IoIosArrowForward size={20} className="text-gray-500 dark:text-gray-400" />
                    )}
                </button>
            ) : (
                <Link
                    href={`/docs/${section.path.replace('.md', '')}`}
                    className="block rounded-sm px-3 py-1.5 text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                    {section.name.replace('.md', '')}
                </Link>
            )}

            {section.type === 'dir' && isOpen && section.children && (
                <div className="ms-4 border-l border-gray-300 pl-2 dark:border-gray-700">
                    {section.children.map((child) => (
                        <DocsSidebarSection key={child.path} section={child} />
                    ))}
                </div>
            )}
        </div>
    );
}
