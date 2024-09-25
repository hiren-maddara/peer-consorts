import MaxWidthWrapper from "../max-width-wrapper";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function Intro() {
    return (
        <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10 mt-10 mb-24 px-8">

            <Card className="p-6 flex flex-col gap-2 border-solid border-orange-600/50">
                <CardTitle className="text-4xl font-semibold">
                    Loans on your terms
                    <CardDescription className="mt-1">
                        Easy and flexible loans
                    </CardDescription>
                </CardTitle>

                <CardContent className="tracking-wide">
                    We offer financial support you need, when you need it. With flexible repayment plans and low interest rates that adapt to your unique situation
                </CardContent>
            </Card>

            <Card className="p-6 flex flex-col gap-2 border-solid border-orange-600/50">
                <CardTitle className="text-4xl font-semibold">
                    Grow with the community
                    <CardDescription className="mt-1">
                        Built by students, for students
                    </CardDescription>
                </CardTitle>

                <CardContent className="tracking-wide">
                    We offer financial support you need, when you need it. With flexible repayment plans and low interest rates that adapt to your unique situation
                </CardContent>
            </Card>
            <Card className="p-6 flex flex-col gap-y-2 border-solid border-orange-600/50">
                <CardTitle className="text-4xl font-semibold">
                    Hassle-free solutions
                    <CardDescription className="mt-1">
                        No lengthy paper work and hidden fees
                    </CardDescription>
                </CardTitle>

                <CardContent className="tracking-wide">
                    Skip the traditional loan applications. No complicated paperwork, short approval times, and flexible terms.
                    We offer flexible plans designed around your schedule and needs, so you can focus on what matters most -- your education and goals
                </CardContent>
            </Card>

        </MaxWidthWrapper>
    )
}