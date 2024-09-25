import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const values = [
    {
        title: "Customer First",
        content: "We prioritize our customers’ financial well-being by providing clear, fair, and accessible lending solutions."
    },
    {
        title: "Transparency",
        content: "We believe in clear and honest communication, ensuring that all terms and conditions are straightforward and easy to understand."
    },
    {
        title: "Trust & Integrity",
        content: "We build trust with our customers through ethical lending practices, fostering long-term relationships."
    },
    {
        title: "Innovation",
        content: "We leverage technology to streamline the lending process, making it faster, easier, and more convenient for our customers."
    },
    {
        title: "Financial Empowerment",
        content: "We empower our customers by offering flexible financial solutions that help them achieve their goals."
    },
    {
        title: "Responsible Lending",
        content: "We ensure responsible lending by assessing customers' needs and ability to repay, helping them avoid debt traps."
    }
];


export default function Values() {
    return (
        <MaxWidthWrapper className="h-auto flex flex-col gap-4 px-10 my-20">
            <h2 className="text-2xl font-bold lg:text-3xl">
                Our Values
            </h2>
            <p className="tracking-wide text-sm font-normal text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit est repellendus necessitatibus minima doloribus ratione voluptates corrupti facilis quisquam.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((item, index) => (
                    <Card
                        key={`item-${index + 1}`}
                        className="h-max mt-4 tracking-wide flex flex-col gap-y-1 border-none shadow-none">
                        <CardTitle className="text-xl">
                            {item.title}
                        </CardTitle>
                        <CardContent className="p-0">
                            <CardDescription>
                                {item.content}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </MaxWidthWrapper>
    )
}