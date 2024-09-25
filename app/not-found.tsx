import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, House } from "lucide-react";
import Link from "next/link";

export default function notFound() {
    return (
        <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8 h-[80vh]">
            <h3 className="text-5xl font-bold text-foreground">
                404
            </h3>
            <p className="text-lg text-muted-foreground font-semibold">
                Unauthorised to access page or page doesn't exist
            </p>
            <Button asChild variant="link" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-all">
                <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Go Home
                </Link>
            </Button>
        </MaxWidthWrapper>
    )
}