import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Intro />
      <div className="max-w-3xl m-auto px-3 py-5">
        <p className="my-2">Hello to any strangers who may stumble across this page 👋</p>

        <p className="my-2">
          I'm just another ordinary human going about my day to day, corporate life. Once in a while I may scribble down some idle
          thoughts while on the train to work or on a dull weekend. Some of them may make it here. Topics aren't necessarily defined,
          but could tend to be about life in general, languages, music.
        </p>

        <p className="my-2">
          Anyone who wants to can reach <i>me :at: naoey.pw</i> using good old-fashioned internet mail.
        </p>

        <hr className="my-4 border-t border-b-slate-400 dark:border-slate-700" />

        <div className="dark:bg-slate-900">{allPosts.length > 0 && <MoreStories posts={allPosts} />}</div>
      </div>
    </main>
  );
}
