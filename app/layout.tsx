import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
