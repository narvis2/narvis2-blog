import Link from "next/link";
import { Button } from "../ui/button";

interface CategoryButtonProps {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

export const CategoryButton = ({
  count,
  displayName,
  href,
  isCurrent,
}: CategoryButtonProps) => {
  return (
    <li>
      <Button asChild size="sm" variant={isCurrent ? "default" : "ghost"}>
        <Link href={href}>
          {displayName} ({count})
        </Link>
      </Button>
    </li>
  );
};
