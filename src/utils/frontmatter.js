/**
 * Simple frontmatter parser for the browser.
 * Parses YAML-like frontmatter from the start of a markdown string.
 * 
 * @param {string} markdown 
 * @returns {{ data: object, content: string }}
 */
export const parseFrontmatter = (markdown) => {
    const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
    const match = frontmatterRegex.exec(markdown);

    if (!match) {
        return {
            data: {},
            content: markdown
        };
    }

    const frontmatterBlock = match[1];
    const content = match[2];

    const data = {};
    const lines = frontmatterBlock.split(/[\r\n]+/);

    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();

            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }

            data[key] = value;
        }
    });

    return { data, content };
};
