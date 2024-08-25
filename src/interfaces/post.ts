import { Content } from "./content";

export type Post = {
  slug: string;
  contents: {
    [language: string]: Content;
  };
};