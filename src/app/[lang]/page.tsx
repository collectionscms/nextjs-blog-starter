import { Locale } from "@/i18n-config";
import { getAllPosts } from "@/lib/api";
import Container from "./_components/container";
import { HeroPost } from "./_components/hero-post";
import { Intro } from "./_components/intro";
import { MoreStories } from "./_components/more-stories";

export default async function Index({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.contents[lang]);
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.contents[lang].title}
            coverUrl={heroPost.contents[lang].coverUrl}
            publishedAt={heroPost.contents[lang].publishedAt}
            author={heroPost.contents[lang].author}
            slug={heroPost.slug}
            excerpt={heroPost.contents[lang].body}
            lang={lang}
          />
        )}
        {morePosts.length > 0 && <MoreStories lang={lang} posts={morePosts} />}
      </Container>
    </main>
  );
}
