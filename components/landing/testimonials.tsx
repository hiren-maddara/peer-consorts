import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";
import Btn from "../nav/btn";
import SectionHeading from "../section-heading";
import { Card, CardContent, CardFooter } from "../ui/card";

import BlobBg from "../blob-bg";
import { Button } from "../ui/button";
const testimonials = [
    {
        name: "Brenna Goyette",
        occupation: "Student, MUK",
        feedback:
            "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.",
    },
    {
        name: "Leslie Alexander",
        occupation: "Studet, @CEDAT",
        feedback: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil.",
    },
    {
        name: "Michael Foster",
        occupation: "Student, @CHS",
        feedback: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
    },
    {
        name: "Dries Vincent",
        occupation: "@driesvincent",
        feedback: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.",
    },
    {
        name: "Michael Foster",
        occupation: "Student, @CHS",
        feedback: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
    },
]



export default function Testimonials() {
    return (
        <MaxWidthWrapper className="relative flex flex-col my-20 gap-y-8 overflow-visible h-auto">
            {/* <h3 className="text-center font-bold text-sm tracking-wide">What others say</h3> */}
            <SectionHeading>Hear from our recent clients</SectionHeading>

            <div className="px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto mb-">

                {testimonials.map((testimonial, index) => (
                    <Card key={`testimonial-${index + 1}`} className="shadow-lg border border-dashed h-min pt-6">

                        <CardContent>
                            <blockquote className="text-gray-700 italic">{testimonial.feedback}</blockquote>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start justify-center">
                            <p className="font-bold">
                                {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">{testimonial.occupation}</p>

                        </CardFooter>

                    </Card>
                ))}
            </div>

            <div className="flex w-full items-center justify-around mt-4">
                <Button className="bg-orange-600">
                    Add your review
                </Button>
                <Btn className="flex gap-x-2" href="/testimonials">
                    Go to testimonials pages
                    <ArrowRight className="h-4 w-4" />
                </Btn>

            </div>

            <BlobBg />

        </MaxWidthWrapper>
    )
}

