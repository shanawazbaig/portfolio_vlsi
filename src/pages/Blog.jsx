import React from 'react';
import SplitLayout from '../components/SplitLayout';
import { Water } from "@paper-design/shaders-react";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock } from 'lucide-react';
import { loadAllPosts } from '../utils/blogLoader';

// Load blog posts from markdown files
const blogPosts = loadAllPosts();

const Blog = () => {
    const LeftContent = (
        <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">Thoughts & Notes</h2>

            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id}>
                        <Card className="group hover:border-primary transition-all cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-2 text-xs font-mono text-muted-foreground">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="text-sm leading-relaxed">
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );

    const RightContent = (
        <Water
            style={{ height: "100%", width: "100%" }}
            image="/hand.png"
            colorBack="#8f8f8f"
            colorHighlight="#ffffff"
            highlights={0.07}
            layering={0.5}
            edges={0.8}
            waves={0.3}
            caustic={0.1}
            size={1}
            speed={1}
            scale={1.24}
            fit="contain"
        />
    );

    return <SplitLayout leftContent={LeftContent} rightContent={RightContent} />;
};

export default Blog;
