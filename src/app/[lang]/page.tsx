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
  const heroPost = allPosts[0];
  const langContent = heroPost.contents[lang];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {langContent && (
          <HeroPost
            title={langContent.title}
            coverUrl={langContent.coverUrl}
            publishedAt={langContent.publishedAt}
            author={langContent.author}
            slug={heroPost.slug}
            excerpt={langContent.body}
          />
        )}
        {morePosts.length > 0 && <MoreStories lang={lang} posts={morePosts} />}
      </Container>
    </main>
  );
}
