import siteConfig from '@/config/siteConfig';
import { GitHubItem } from '@/interfaces/github.interface';

export async function fetchGitHubMarkdown(path: string) {
    const { githubRepo, docsPath, branchName, githubToken } = siteConfig;

    const match = githubRepo.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) {
        throw new Error(`Invalid GitHub repository URL: ${githubRepo}`);
    }

    const [, owner, repo] = match;
    const basePath = docsPath ? `${docsPath}/` : '';
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${basePath}${path}?ref=${branchName}`;

    try {
        const res = await fetch(url, {
            headers: {
                ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
                Accept: 'application/vnd.github.v3.raw',
            },
        });

        if (!res.ok) {
            throw new Error(
                `Failed to fetch ${path} from GitHub (Status: ${res.status} - ${res.statusText})`,
            );
        }

        return await res.text();
    } catch {
        throw new Error('Error');
    }
}

export async function fetchGitHubDocsTree(path: string = ''): Promise<GitHubItem[]> {
    const { githubRepo, docsPath, branchName, githubToken } = siteConfig;

    const match = githubRepo.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) throw new Error('Invalid GitHub repository URL');

    const [, owner, repo] = match;
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${docsPath}/${path}?ref=${branchName}`;

    const res = await fetch(apiUrl, {
        headers: {
            Authorization: githubToken ? `Bearer ${githubToken}` : '',
            Accept: 'application/vnd.github.v3+json',
        },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch docs tree: ${res.statusText}`);
    }

    const data: GitHubItem[] = await res.json();

    return await Promise.all(
        data
            .filter((item) => !item.name.match(/\.(png|jpg|jpeg|svg|gif)$/i))
            .map(async (item) => ({
                name: item.name,
                path: item.path.replace(`${docsPath}/`, ''),
                type: item.type,
                children:
                    item.type === 'dir'
                        ? await fetchGitHubDocsTree(item.path.replace(`${docsPath}/`, ''))
                        : [],
            })),
    );
}
