import GitHubIcon from "@/components/icon/GithubIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 pb-16 pt-20 text-center">
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/d5br5" target="_blank">
          <GitHubIcon
            className="fill-foreground transition hover:fill-pink-600"
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        © 2024. <span className="font-semibold">NarviS2</span> all rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
