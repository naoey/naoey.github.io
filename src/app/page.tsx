import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Intro />
      <Container>
        <div className="dark:bg-slate-900">
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </div>
      </Container>
    </main>
  );
}
