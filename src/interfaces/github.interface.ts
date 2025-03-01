export interface GitHubItem {
    name: string;
    path: string;
    type: 'file' | 'dir';
    children?: GitHubItem[];
}
