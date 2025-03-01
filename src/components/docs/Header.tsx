'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa6';
import siteConfig from '@/config/siteConfig';
import { SiteConfig } from '@/interfaces/siteConfig.interface';

export default function DocsHeader() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'system' | null>(null);

    useEffect(() => {
        const getDefaultTheme = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme as 'light' | 'dark';
            if (siteConfig.theme.default === 'system') {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return siteConfig.theme.default;
        };

        setTheme(getDefaultTheme());
    }, []);

    useEffect(() => {
        if (!theme) return;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    if (!theme) return null;

    return (
        <div className="fixed top-0 right-0 left-0 z-10 bg-gray-50 px-4 py-2 text-gray-800 shadow-sm dark:bg-gray-800 dark:text-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={'/'} className="flex items-center justify-center">
                        <Image src={siteConfig.logo} alt="Logo" width={44} height={44} />
                        <div className="hover:text-primary mx-2 font-bold">{siteConfig.name}</div>
                    </Link>

                    <div className="flex">
                        {siteConfig.navigation.map(
                            (item: SiteConfig['navigation'][number], index: number) => (
                                <Link
                                    key={index}
                                    href={item.href || '#'}
                                    className="hover:text-primary px-4 py-1 font-semibold"
                                    target={item.external ? '_blank' : '_self'}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ),
                        )}
                    </div>
                </div>

                <div className="flex items-center">
                    <Link
                        href={siteConfig.githubRepo}
                        className="hover:text-primary px-4 py-1 font-semibold"
                        target={'_blank'}
                    >
                        <FaGithub size={24} />
                    </Link>

                    {theme === 'dark' ? (
                        <FaSun
                            className="ml-4 cursor-pointer text-yellow-400"
                            size={20}
                            onClick={() => setTheme('light')}
                        />
                    ) : (
                        <FaMoon
                            className="ml-4 cursor-pointer text-gray-600"
                            size={20}
                            onClick={() => setTheme('dark')}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
