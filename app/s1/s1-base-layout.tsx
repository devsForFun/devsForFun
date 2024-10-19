import { Button } from "@/components/ui/button";
import Link from "next/link";

const S1BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="w-full sticky top-0 flex justify-between items-center px-4 py-4 border-b border-dashed bg-background/50 backdrop-blur z-[99]">
        <h1 className="font-semibold text-3xl">devsForFun</h1>
        <Button variant="outline" disabled className="rounded-full">
          <Link href="/s1/about">about</Link>
        </Button>
      </header>

      {children}

      <footer className="text-center text-xs pt-6 pb-4">
        <Button variant="link" asChild>
          <Link href="/">devsForFun</Link>
        </Button>
        <p className="text-muted-foreground pb-2">
          by
          <span className="text-foreground"> gdscrec, </span>
          <span className="text-foreground">gdsc.ui, </span>
          <span className="text-foreground">gdsc.kjc, </span>
          <span className="text-foreground">gdsc_hull</span>
        </p>
        <p className="text-muted-foreground pb-2">
          design inspired by{" "}
          <a className="text-foreground" href="https://buildspace.so/">
            buildspace
          </a>
        </p>
        <p className="text-muted-foreground pb-4">
          this program is not endorsed by Google, the GDSC program, or
          buiildspace in any way.
        </p>
      </footer>
    </>
  );
};
export default S1BaseLayout;
