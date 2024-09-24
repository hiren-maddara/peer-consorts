"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "../logo";
import MaxWidthWrapper from "../max-width-wrapper";
import Navigation from "./navigation";

export default function Navbar() {
    const scrolled = useScrollTop()
    return (
        <nav className={cn(
            "z-[100] h-20 min-h-[5rem] inset-x-0 top-0 w-full backdrop-blur-lg transition-all",
            scrolled ? "sticky top-0 border-b border-gray-200 shadow-md backdrop-blur-lg bg-white/75 dark:bg-muted/75" : "relative"
        )}>
            <MaxWidthWrapper className="flex space-x-0 p-4">
                <Logo />
                <Navigation />
            </MaxWidthWrapper>

        </nav>

    )
}