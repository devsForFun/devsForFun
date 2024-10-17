import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "devsForFun",
  description:
    "devsForFun is a cool place for everyone who wants to be a developer or already are a developer. We got blogs, podcasts, and a discord community for developers, technical founders, and anyone interested in creating their own software to solve peoblems, have fun, or both! Welcome aboard so.. *ahem* developer!",
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
