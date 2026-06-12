export type BlogTopic = 'All Articles' | 'Openings' | 'Guides';

export interface FeaturedImage {
  url: string;
  alt_text?: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  imageAlt?: string;
  date: string;
  topics: string[];
  tagline?: string;
}

export interface RawBlog {
  ID: number;
  title: string;
  content: string;
  topics: string[];
  regions?: string[];
  restaurants?: string[];
  created_at: string;
  updated_at?: string;
  featured_image?: FeaturedImage;
  tagline?: string;
}