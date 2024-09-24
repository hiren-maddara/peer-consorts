import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Btn({ children, href, className }: { children: ReactNode, href: string, className?: string }) {
    return <Button
        className={cn(
            "text-muted-foreground font-semibold dark:text-foreground",
            className
        )}
        variant="link"
        asChild>
        <Link href={href}>

            {children}
        </Link>
    </Button>
}