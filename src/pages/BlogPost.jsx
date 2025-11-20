import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { parseFrontmatter } from '../utils/frontmatter';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const loadPost = async () => {
            try {
                // Dynamic import for the specific post
                // Note: Vite requires the import path to be static or match a glob pattern known at build time.
                // We can use the same glob approach or just import all and find the one.
                // For efficiency in a small blog, importing all is fine. For larger, we might need a different strategy.
                // However, dynamic import with variable needs to match a pattern.

                const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });
                const postPath = `../posts/${slug}.md`;
                const postContent = modules[postPath];

                if (postContent) {
                    const { content, data } = parseFrontmatter(postContent);
                    setContent(content);
                    setMeta(data);
                } else {
                    setContent('# Post not found');
                }
            } catch (error) {
                console.error("Error loading post:", error);
                setContent('# Error loading post');
            }
        };

        loadPost();
    }, [slug]);

    return (
        <div className="blog-post-page container">
            <Link to="/blog" className="back-link">← Back to Blog</Link>
            <article className="blog-content">
                <header className="post-header">
                    <h1 className="post-title">{meta.title}</h1>
                    <p className="post-date">{meta.date}</p>
                </header>
                <div className="markdown-body">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
