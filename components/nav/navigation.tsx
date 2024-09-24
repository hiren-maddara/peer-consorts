import { Menu } from "lucide-react";
import Btn from "./btn";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";


export default function Navigation() {
    return (
        <>

            <div className="!ml-auto items-center justify-between gap-x-2 flex">

                <div className="hidden md:flex">

                    <Btn href="/">Home</Btn>
                    <Btn href="/about">About</Btn>
                    <Btn href="/members">Members</Btn>
                    <Btn href="/admin">Admin</Btn>
                </div>

                <Button className="text-muted bg-orange-600" variant="default" asChild>
                    <Link href="/loan">
                        Get Loan
                    </Link>
                </Button>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="md:hidden flex items-center justify-center h-10 w-10 bg-transparent hover:bg-muted cursor-pointer text-muted-foreground p-0 transition-all"
                            role="button">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-start justify-center">
                        <Btn href="/">Home</Btn>
                        <Btn href="/about">About</Btn>
                        <Btn href="/members">Members</Btn>
                        <Btn href="/admin">Contact</Btn>
                    </DropdownMenuContent>
                </DropdownMenu>


                <ModeToggle />


            </div>



        </>
    )
}
