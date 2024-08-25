import { Post } from "@/interfaces/post";

const endpoint = process.env.COLLECTIONS_API_ENDPOINT;
const key = process.env.COLLECTIONS_API_KEY;

export async function getPostBySlug(slug: string): Promise<Post> {

  const res = await fetch(`${endpoint}/api/v1/posts/${slug}`, {
    headers: {
      "Authorization": `Bearer ${key}`,
    }
  });
  const data = await res.json();
  return data.post;
}

export async function getAllPosts(): Promise<Post[]> {
  const res = await fetch(`${endpoint}/api/v1/posts`, {
    headers: {
      "Authorization": `Bearer ${key}`,
    }
  });
  const data = await res.json();
  return data.posts;
}
