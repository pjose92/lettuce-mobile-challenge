import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogApi';
import { Blog } from '../types/blog';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const blogData = await fetchBlogs();
        setBlogs(blogData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Something went wrong loading blogs.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return {
    blogs,
    isLoading,
    error,
  };
};