import { parseFrontmatter } from './frontmatter';

/**
 * Load all blog posts from the posts directory
 * @returns {Array} Array of blog post metadata with slugs
 */
export const loadAllPosts = () => {
    // Import all markdown files from the posts directory
    const modules = import.meta.glob('../posts/*.md', {
        query: '?raw',
        import: 'default',
        eager: true
    });

    const posts = [];

    for (const path in modules) {
        const content = modules[path];
        const { data } = parseFrontmatter(content);

        // Extract slug from filename
        const slug = path.replace('../posts/', '').replace('.md', '');

        posts.push({
            id: slug,
            slug,
            title: data.title || 'Untitled',
            date: data.date || '',
            excerpt: data.description || data.excerpt || '',
            readTime: data.readTime || '5 min read',
            tags: data.tags ? (Array.isArray(data.tags) ? data.tags : data.tags.split(',').map(t => t.trim())) : []
        });
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return posts;
};
