import LoanForm from "@/components/loan/form";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Peer to peer consorts loan form",
    description: "Fill in the application form to get your loan today",
};

export default function LoanPage() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-y-2 justify-center items-center">

            <h2 className="font-bold text-xl text-center">Peer to peer consort</h2>


            <p className="mt-2 text-center text-lg leading-8 text-muted-foreground">
                Loan application form
                <br />
                Fill in the following form, to get your loan today
            </p>

            <LoanForm />
        </MaxWidthWrapper>
    )
}