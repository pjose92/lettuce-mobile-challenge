export const isNewBlog = (dateString: string): boolean => {
  if (!dateString) return false;

  const blogDate = new Date(dateString);
  const now = new Date();

  if (Number.isNaN(blogDate.getTime())) return false;

  const diffInMs = now.getTime() - blogDate.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return diffInDays <= 7;
};

export const formatBlogDate = (dateString: string): string => {
  if (!dateString) return '';

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};