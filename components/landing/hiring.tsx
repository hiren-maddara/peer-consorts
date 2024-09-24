import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HiringBanner() {
    return (
        <Button variant="outline" className="flex justify-center items-center py-4 rounded-xl shadow">
            <span className="text-sm font-semibold ">We’re hiring</span>
            <span aria-hidden="true" className="mx-2 ">|</span>
            <a href="#" className="flex items-center space-x-2 text-sm font-medium hover:underline">
                <span>See deals</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
        </Button>
    )
}
