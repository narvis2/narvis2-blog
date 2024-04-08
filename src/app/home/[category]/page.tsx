import HomePage from "@/components/home";
import { blogName } from "@/config/constants";
import { getCategoryList, getCategoryPublicName } from "@/lib/post";
import { Metadata } from "next";

type Props = {
  params: { category: string };
};

// 허용된 param 외 접근시 404
export const dynamicParams = false;

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

export async function generateMetadata({
  params: { category },
}: Props): Promise<Metadata> {
  const cg = getCategoryPublicName(category);
  const title = `${cg} | ${blogName}`;

  return {
    title,
  };
}

const CategoryPage = async ({ params }: Props) => {
  return <HomePage category={params.category} />;
};

export default CategoryPage;
