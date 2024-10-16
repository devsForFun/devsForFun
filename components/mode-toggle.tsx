"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  React.useEffect(() => {
    setTheme("dark");
  }, []);
  const [currentTheme, setCurrentTheme] = React.useState("light");

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full p-2"
      onClick={() => {
        setCurrentTheme(currentTheme === "light" ? "dark" : "light");
        setTheme(currentTheme);
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
