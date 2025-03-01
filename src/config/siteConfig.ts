import { SiteConfig } from '@/interfaces/siteConfig.interface';

const siteConfig: SiteConfig = {
    name: 'JofuDocs',
    description:
        'Nền tảng hiển thị tài liệu Markdown từ GitHub với hiệu suất cao và giao diện chuyên nghiệp.',
    url: 'https://vite.dev/guide',

    logo: '/img/logo.png',
    favicon: '/img/logo.png',
    theme: {
        default: 'dark',
        availableThemes: ['light', 'dark', 'system'],
    },

    githubRepo: 'https://github.com/vitejs/vite',
    docsPath: 'docs',
    branchName: 'main',
    githubToken: '',

    navigation: [
        { name: 'Docs', href: '/docs' },
        { name: 'API', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Showcase', href: '/showcase' },
        { name: 'Community', href: '/community' },
    ],

    sideBar: [
        {
            section: 'Getting Started',
            links: [
                { name: 'Introduction', href: '/docs/introduction' },
                { name: 'Installation', href: '/docs/installation' },
                { name: 'Configuration', href: '/docs/configuration' },
            ],
        },
        {
            section: 'Guides',
            links: [
                { name: 'Fetching Data', href: '/docs/fetching-data' },
                { name: 'Custom Themes', href: '/docs/custom-themes' },
                { name: 'Plugins', href: '/docs/plugins' },
            ],
        },
        {
            section: 'Advanced',
            links: [
                { name: 'GitHub Webhooks', href: '/docs/github-webhooks' },
                { name: 'Caching Strategy', href: '/docs/caching-strategy' },
                { name: 'i18n Support', href: '/docs/i18n-support' },
            ],
        },
    ],
};

export default siteConfig;
