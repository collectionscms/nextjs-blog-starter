import { Author } from "./author";

export type Content = {
  title: string;
  body: string;
  bodyHtml: string;
  coverUrl: string | null,
  publishedAt: string,
  author: Author
};
