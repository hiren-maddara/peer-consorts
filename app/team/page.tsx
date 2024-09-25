import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const admins = [
    {
        fullname: "John Doe",
        initials: "JD",
        role: "CEO",
        contact: "+1 (555) 123-4567",
        email: "john.doe@lendingstartup.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        ig: "",
        x: "",
        "github": ""
    },
    {
        fullname: "Emily Carter",
        initials: "EC",
        role: "Chief Financial Officer (CFO)",
        contact: "+1 (555) 234-5678",
        email: "emily.carter@lendingstartup.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
    },
    {
        fullname: "Michael Lee",
        initials: "ML",
        role: "Chief Operations Officer (COO)",
        contact: "+1 (555) 345-6789",
        email: "michael.lee@lendingstartup.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
    },
    {
        fullname: "Sarah Martinez",
        initials: "SM",
        role: "Chief Technology Officer (CTO)",
        contact: "+1 (555) 456-7890",
        email: "sarah.martinez@lendingstartup.com",
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
    }
];

const collaborators = [
    {
        fullname: "John Doe",
        initials: "JD",
        image: "https://avatar.iran.liara.run/public/24",
        role: "Developer"
    },
    {
        fullname: "Jane Smith",
        initials: "JS",
        image: "https://avatar.iran.liara.run/public/35",
        role: "Designer"
    },
    {
        fullname: "Michael Brown",
        initials: "MB",
        image: "https://avatar.iran.liara.run/public/100",
        role: "Project Manager"
    },
    {
        fullname: "Emily Davis",
        initials: "ED",
        image: "https://avatar.iran.liara.run/public/1",
        role: "Data Analyst"
    },
    {
        fullname: "Robert Wilson",
        initials: "RW",
        image: "https://avatar.iran.liara.run/public/35",
        role: "QA Engineer"
    },
    {
        fullname: "Sophia Turner",
        initials: "ST",
        image: "https://avatar.iran.liara.run/public/35",
        role: "UX Researcher"
    },
    {
        fullname: "Daniel Harris",
        initials: "DH",
        image: "https://avatar.iran.liara.run/public/35",
        role: "Backend Engineer"
    },
    {
        fullname: "Olivia Lewis",
        initials: "OL",
        image: "https://avatar.iran.liara.run/public/50",
        role: "Marketing Specialist"
    },
    {
        fullname: "Ethan Clark",
        initials: "EC",
        image: "https://avatar.iran.liara.run/public/75",
        role: "Front-End Developer"
    },
    {
        fullname: "Isabella Moore",
        initials: "IM",
        image: "https://avatar.iran.liara.run/public/3",
        role: "Content Strategist"
    }
];



export default function TeamPage() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-y-4 px-8">
            <SectionHeading>Welcome to our team page</SectionHeading>

            <p className="mt-2 text-center text-lg text-muted-foreground">
                You can see the leading team members, and our collaborators
                <br />
                Feel free to reach out to any of us for any form of assistance.
            </p>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                {admins.map(admin => (

                    <Card className="sm:flex items-center rounded-lg shadow-md bg-background border-dashed border border-orange-600/40 p-0">
                        <CardContent
                            className="p-0 shrink-0 basis-1/3 sm:h-full">
                            <img className="w-full h-full object-cover rounded-lg sm:rounded-r-none"
                                src={admin.image} alt={`${admin.fullname}-avatar`} />
                        </CardContent>

                        <CardContent className="p-5">
                            <CardTitle className="text-xl font-bold tracking-tight">
                                {admin.fullname}
                            </CardTitle>
                            <CardDescription>
                                {admin.role}
                            </CardDescription>


                            <CardDescription>
                                <Button asChild variant="link"
                                    className="p-0 text-inherit font-light">
                                    <Link href={`tel:${admin.contact}`}>
                                        {admin.contact}
                                    </Link>
                                </Button>
                            </CardDescription>

                            <CardDescription className="mt-0">
                                <Button asChild variant="link"
                                    className="p-0 text-inherit font-light">
                                    <Link href={`mailto:${admin.email}`}>
                                        {admin.email}
                                    </Link>
                                </Button>
                            </CardDescription>

                        </CardContent>
                    </Card>
                ))}

            </div>

            <div className="flex flex-col items-center justify-center mb-20">
                <h2 className="text-2xl font-bold text-foreground/80">
                    Other collaborators
                </h2>
                <p className="mt-2 text-center text-base text-muted-foreground">
                    The support you get comes from a collaboration of many people, whose thanks we can't fully offer in a page
                </p>

                <div className=" mt-16 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {collaborators.map(coll => (
                        <div className="aspect-[5/4] sm:aspect-[6/5]  md:aspect-square flex flex-col items-center justify-center border-none">
                            <Avatar className="h-24 w-24">
                                <AvatarImage className="" src={coll.image} alt="" />
                                <AvatarFallback>{coll.initials}</AvatarFallback>
                            </Avatar>

                            <h3 className="text-lg mt-3 font-bold text-foreground/95" >
                                {coll.fullname}
                            </h3>
                            <h3 className="text-base font-normal text-muted-foreground" >
                                {coll.role}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </MaxWidthWrapper>
    )
}