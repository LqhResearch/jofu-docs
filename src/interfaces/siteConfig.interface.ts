export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    logo: string;
    favicon: string;
    theme: {
        default: 'light' | 'dark' | 'system';
        availableThemes: ('light' | 'dark' | 'system')[];
    };
    githubRepo: string;
    docsPath: string;
    branchName: string;
    githubToken?: string;
    navigation: {
        name: string;
        href: string;
        external?: boolean;
    }[];
    sideBar: {
        section: string;
        links: {
            name: string;
            href: string;
        }[];
    }[];
}
