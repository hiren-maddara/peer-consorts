import BlobBg from "@/components/blob-bg";
import AboutHero from "./about-hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import Values from "./values";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="h-auto mx-auto w-full max-w-screen-xl px-2.5">
            <AboutHero />

            <div className="my-20 mx-auto px-8 flex flex-col gap-y-4">
                <h2 className="text-2xl font-bold lg:text-3xl">
                    Our mission
                </h2>
                <p className="tracking-wide text-sm font-normal text-muted-foreground">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                </p>
                <p className="tracking-wide text-sm font-normal text-muted-foreground">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                </p>

            </div>

            <div className="w-full h-auto m-0 p-0 max-h-[50rem]">
                <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="team image"
                    className="object-cover w-full aspect-[5/2]"
                // fill
                // width={1000}
                // height={500}
                />
            </div>

            <Values />

            <MaxWidthWrapper className="flex gap-y-8 items-center justify-center transition-all">
                <Button variant="link" className="flex gap-1">
                    View Members
                    <ArrowRight className="h-4 w-4 text-foreground" />
                </Button>
            </MaxWidthWrapper>
            <BlobBg />
        </div>
    )
}