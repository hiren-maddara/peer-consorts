import { Contact, FilePen, HandCoins, Send } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../max-width-wrapper";
import SectionHeading from "../section-heading";
import { Button } from "../ui/button";

const steps = [
    {
        title: "Step 1: Fill Out Your Application",
        content: "Provide your personal details, including your name, email, and income information.",
        icon: FilePen,
    },
    {
        title: "Step 2: Submit Your Application",
        content: "Review your information and submit the application for processing.",
        icon: Send
    },
    {
        title: "Step 3: Contact from our company",
        content: "You will contacted by one of our company members to negotiate the terms.",
        icon: Contact
    },

    {
        title: "Step 4: Get Your Funds",
        content: "Once approved, receive your funds directly into your bank account.",
        icon: HandCoins,
    },
];

export default function CTA() {
    return (
        <MaxWidthWrapper className="flex flex-col px-10 py-2 items-center">
            <SectionHeading>How to get started</SectionHeading>

            <p className="mt-2 text-center text-lg leading-8 text-muted-foreground">
                Here is your path to simple borrowing
                <br />
                Follow these simple steps to secure your loan and unlock financial freedom.
            </p>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {/* Steps to Complete */}
                    {steps.map((step, index) => (
                        <div className="relative pl-16" key={`step-${index + 1}`}>
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                                    <step.icon />
                                </div>
                                {step.title}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                {step.content}
                            </dd>
                        </div>
                    ))}

                </div>
            </div>
            <div className="mt-12 text-center">
                <Button
                    className="rounded-md bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-700"
                    asChild
                    variant="link"
                >
                    <Link href="/loan">

                        Start Your Application Now
                    </Link>
                </Button>
            </div>

        </MaxWidthWrapper>
    )
}
