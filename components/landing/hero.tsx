import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../max-width-wrapper";
import { Button } from "../ui/button";
import Phone from "./phone";
import HiringBanner from "./hiring";

export default function Hero() {
    return (
        <MaxWidthWrapper className="flex gap-10">
            <div className="flex flex-col gap-y-6 justify-center items-start ">

                <HiringBanner />

                <h1 className="font-extrabold text-7xl text-wrap">
                    Peer to peer consorts

                </h1>
                <h2 className="font-semibold text-4xl">
                    Your money, your terms
                </h2>
                <p className="tracking-wide">
                    Unlock financial opportunities with peer-powered lending. No banks, no hassle —just fast, secure, and flexible loans.
                </p>

                <Button
                    className="text-muted bg-orange-600 gap-3 flex justify-center items-center py-4 rounded-xl hover:bg-orange-600/95 transition-all shadow-sm hover:shadow-md"
                    variant="secondary" asChild>
                    <Link href="/loan">
                        <span className="text-sm font-semibold hover:underline">

                            Get a loan
                        </span>

                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>

            {/* image */}
            <div className="hidden md:flex items-center justify-center">
                <Phone />
            </div>
        </MaxWidthWrapper>
    )
}