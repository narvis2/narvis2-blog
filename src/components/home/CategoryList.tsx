"use client";

import { CategoryDetail } from "@/config/types";
import { useRouter } from "next/navigation";
import { CategoryButton } from "./CategoryButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryListProps {
  categoryList: CategoryDetail[];
  allPostCount: number;
  currentCategory?: string;
}

const CategoryList = ({
  allPostCount,
  categoryList,
  currentCategory = "all",
}: CategoryListProps) => {
  const router = useRouter();

  const onCategoryChange = (value: string) => {
    if (value === "all") {
      router.push("/home");
    } else {
      router.push(`/home/${value}`);
    }
  };

  return (
    <>
      <section className="mb-10 hidden sm:block">
        <ul className="flex gap-3">
          <CategoryButton
            href="/home"
            isCurrent={currentCategory === "all"}
            displayName="All"
            count={allPostCount}
          />
          {categoryList.map((cg) => (
            <CategoryButton
              key={cg.dirName}
              href={`/home/${cg.dirName}`}
              displayName={
                cg.publicName === "Eip" ? "정보처리기사" : cg.publicName
              }
              isCurrent={cg.dirName === currentCategory}
              count={cg.count}
            />
          ))}
        </ul>
      </section>
      {/* 반응형 👇 */}
      <section className="mb-10 sm:hidden">
        <Select onValueChange={onCategoryChange} defaultValue={currentCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All ({allPostCount})</SelectItem>
            {categoryList.map((cg) => (
              <SelectItem key={cg.dirName} value={cg.dirName}>
                {cg.publicName} ({cg.count})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </>
  );
};

export default CategoryList;
