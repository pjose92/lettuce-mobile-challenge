import { Blog, RawBlog } from '../types/blog';

const BLOG_API_URL = 'https://www.lettuce.com/wp-json/lettuce/blog-content';

const normalizeBlog = (rawBlog: RawBlog): Blog => {
  return {
    id: rawBlog.ID,
    title: rawBlog.title,
    content: rawBlog.content,
    image: rawBlog.featured_image?.url ?? '',
    imageAlt: rawBlog.featured_image?.alt_text ?? '',
    date: rawBlog.created_at,
    topics: rawBlog.topics ?? [],
    tagline: rawBlog.tagline,
  };
};

export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(BLOG_API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch blog content.');
  }

  const data: RawBlog[] = await response.json();

  return data.map(normalizeBlog);
};