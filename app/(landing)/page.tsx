import BlobBg from "@/components/blob-bg";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import Intro from "@/components/landing/intro";
import Testimonials from "@/components/landing/testimonials";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <Intro />
            <CTA />
            <FAQ />
            <Testimonials />
            <BlobBg />

        </>
    )
}