import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Footer() {
    return (
        <MaxWidthWrapper className="order-10 flex flex-col items-center justify-stretch h-20">
            <footer className="flex items-center justify-center lg:justify-between">

            </footer>
            <Link href="https://www.instagram.com/hrn_mddr/" className="text-xs tracking-tight">
                &copy; {new Date().getFullYear()}
                <span>
                    Hiren Maddara
                </span>
            </Link>
        </MaxWidthWrapper>
    )
}