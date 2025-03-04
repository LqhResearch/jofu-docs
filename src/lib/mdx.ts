import { remark } from 'remark';
import html from 'remark-html';

export async function parseMarkdown(markdown: string) {
    const content = await remark().use(html).process(markdown);
    return content.toString();
}
