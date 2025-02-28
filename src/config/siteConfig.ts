const siteConfig = {
    name: 'JofuDocs',
    description:
        'Nền tảng hiển thị tài liệu Markdown từ GitHub với hiệu suất cao và giao diện chuyên nghiệp.',
    url: 'https://vite.dev/guide',
    githubRepo: `${process.env.GITHUB_REPO_URL}/tree/main${process.env.GITHUB_DOCS_PATH ? `/${process.env.GITHUB_DOCS_PATH}` : ''}`,
    theme: {
        default: 'system',
        availableThemes: ['light', 'dark', 'system'],
    },
    navigation: [
        { name: 'Home', href: '/' },
        { name: 'Docs', href: '/docs' },
        { name: 'GitHub', href: process.env.GITHUB_REPO_URL, external: true },
    ],
};

export default siteConfig;
