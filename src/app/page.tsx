import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Intro />
      <Container>
        <p className="italic my-2">
          Idle musings late at night, occasional writing inspiration, words rambled at no one in particular...
        </p>

        <p className="my-2">Hello, any wanderers who may stumble across this page 👋</p>

        <p className="my-2">
          I'm just another ordinary human going about my day to day, corporate life. Once in a while I tend to scribble down some
          random thoughts and some of them may make it here.
        </p>

        <p className="my-2">Anyone who wants to can reach me :at: naoey.pw using good old fashioned internet post.</p>

        <hr className="my-4 border-t border-b-slate-400 dark:border-slate-700" />

        <div className="dark:bg-slate-900">{allPosts.length > 0 && <MoreStories posts={allPosts} />}</div>
      </Container>
    </main>
  );
}
