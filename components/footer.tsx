import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Footer() {
    return (
        <MaxWidthWrapper className="relative text-base flex flex-col gap-3 lg:flex-row md:justify-between items-center justify-stretch min-h-20 h-auto mb-1">
            <ul className="flex items-center gap-x-2 justify-center lg:justify-between min-w-min">
                <li>
                    <Link href="/about" className="text-muted-foreground hover:text-black/80 hover:underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-muted-foreground hover:text-black/80 hover:underline">
                        Support
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-muted-foreground hover:text-black/80 hover:underline">
                        Terms & conditions
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-muted-foreground hover:text-black/80 hover:underline">
                        Report issue
                    </Link>
                </li>
            </ul>
            <div className="text-sm">
                <span>

                    &copy; {new Date().getFullYear()} &nbsp; All rights reserved. &nbsp;
                </span>
                <Link href="https://www.instagram.com/hrn_mddr/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <span>
                        Hiren Maddara
                    </span>
                </Link>
            </div>

        </MaxWidthWrapper>
    )
}