import { client } from "./client";
import {
  documentsQuery,
  jobVacanciesQuery,
  jobVacancyByIdQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  latestBlogPostsQuery,
  categoriesQuery,
} from "./queries";
import type { PortableTextBlock } from "@portabletext/types";

// Types
export interface Document {
  _id: string;
  title: string;
  description: string;
  fileUrl: string;
}

export interface JobVacancy {
  _id: string;
  title: string;
  location: string;
  type: string;
  description: PortableTextBlock[];
  requirements: string[];
  publishedAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  authorImage: unknown;
  mainImage: unknown;
  categories: string[];
  tags: string[];
  publishedAt: string;
  excerpt: string;
  body?: unknown[];
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  count: number;
}

// Fetch functions
export async function getDocuments(): Promise<Document[]> {
  return client.fetch(documentsQuery);
}

export async function getJobVacancies(): Promise<JobVacancy[]> {
  return client.fetch(jobVacanciesQuery);
}

export async function getJobVacancyById(id: string): Promise<JobVacancy | null> {
  return client.fetch(jobVacancyByIdQuery, { id });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(blogPostsQuery);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(blogPostBySlugQuery, { slug });
}

export async function getLatestBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(latestBlogPostsQuery);
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(categoriesQuery);
}


