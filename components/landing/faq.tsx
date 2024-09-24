
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import MaxWidthWrapper from "../max-width-wrapper"
import SectionHeading from "../section-heading";

const faqs = [
    {
        title: "How does Peer to Peer Consort work?",
        content: "Peer to Peer Consort connects borrowers directly with investors, eliminating the middlemen like banks. Borrowers can get competitive rates while investors can earn higher returns on their investments."
    },
    {
        title: "What are the benefits of using Peer to Peer Consort?",
        content: "For borrowers, we offer flexible loan terms and fast approvals. For investors, we provide transparency and the potential for higher returns compared to traditional savings or investment accounts."
    },
    {
        title: "Is Peer to Peer Consort secure?",
        content: "Yes. We use industry-standard encryption to protect your data and ensure all transactions are secure. Additionally, our risk management strategies help protect lenders from default risks."
    },
    {
        title: "How do I apply for a loan?",
        content: "Simply sign up on our platform, fill out a loan application, and once approved, your loan request will be visible to potential investors."
    },
    {
        title: "How do I become a lender?",
        content: "You can start lending by creating an account, browsing loan requests, and choosing the ones you'd like to invest in. You’ll earn returns based on the agreed loan terms."
    }
];


export default function FAQ() {
    return (
        <MaxWidthWrapper className="text-base">

            <SectionHeading>
                Frequently asked questions
            </SectionHeading>

            <Accordion type="single" collapsible className="w-full mt-6 px-6 text-base font-medium">

                {faqs.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                        <AccordionTrigger className="font-bold">{item.title}</AccordionTrigger>
                        <AccordionContent>
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </MaxWidthWrapper>
    )
}