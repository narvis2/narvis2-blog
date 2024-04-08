import Giscus from "@/components/detail/Giscus";
import { PostBody } from "@/components/detail/PostBody";
import { PostHeader } from "@/components/detail/PostHeader";
import {
  getPostDetail,
  getPostPaths,
  parsePostAbstract,
  parseToc,
} from "@/lib/post";
import { Metadata } from "next";
import TocSidebar from "@/components/detail/TableOfContentSidebar";
import TocTop from "@/components/detail/TableOfContentTop";
import FloatingButton from "@/components/common/FloatingButton";

type Props = {
  params: { category: string; slug: string };
};

export const dynamicParams = false;

export async function generateMetadata({
  params: { category, slug },
}: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug);

  const title = `${post.title} | NarviS2`;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: "article",
      publishedTime: post.date.toISOString(),
    },
    twitter: {
      title,
      description: post.desc,
    },
  };
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({ category: item.categoryPath, slug: item.slug }));
  return paramList;
}

const PostDetail = async ({ params: { category, slug } }: Props) => {
  const post = await getPostDetail(category, slug);
  const toc = parseToc(post.content);

  return (
    <div className="prose mx-auto w-full max-w-[750px] px-4 dark:prose-invert">
      <PostHeader post={post} />
      <TocTop toc={toc} />
      <article className="relative">
        <TocSidebar toc={toc} />
        <PostBody content={post.content} />
      </article>
      <hr />
      <Giscus />
      <FloatingButton />
    </div>
  );
};

export default PostDetail;
