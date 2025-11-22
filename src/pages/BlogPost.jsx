import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { parseFrontmatter } from '../utils/frontmatter';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import 'highlight.js/styles/github-dark.css';
import '../styles/blog.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });
                const postPath = `../posts/${slug}.md`;
                const postContent = modules[postPath];

                if (postContent) {
                    const { content, data } = parseFrontmatter(postContent);
                    setContent(content);
                    setMeta(data);
                } else {
                    setContent('# Post not found\n\nThe blog post you are looking for does not exist.');
                    setMeta({ title: 'Not Found' });
                }
            } catch (error) {
                console.error("Error loading post:", error);
                setContent('# Error loading post\n\nThere was an error loading this blog post.');
                setMeta({ title: 'Error' });
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        );
    }

    const tags = meta.tags ? (Array.isArray(meta.tags) ? meta.tags : meta.tags.split(',').map(t => t.trim())) : [];

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Back Navigation */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                {/* Article Container */}
                <article className="bg-card/50 border border-border/50 rounded-xl p-8 md:p-12 backdrop-blur-sm">
                    {/* Article Header */}
                    <header className="space-y-6 pb-8 border-b border-border/50 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            {meta.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-mono">
                            {meta.date && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {meta.date}
                                </div>
                            )}
                            {meta.readTime && (
                                <>
                                    <span>•</span>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {meta.readTime}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Tags */}
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Description */}
                        {meta.description && (
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {meta.description}
                            </p>
                        )}
                    </header>

                    {/* Markdown Content with Custom CSS Class */}
                    <div className="blog-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
