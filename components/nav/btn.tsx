import { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Btn({ children, href }: { children: ReactNode, href: string }) {
    return <Button className="text-muted-foreground font-semibold" variant="link" asChild>
        <Link href={href}>

            {children}
        </Link>
    </Button>
}