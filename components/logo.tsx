import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center lg:w-0 lg:flex-1 max-w-20">
            <span className="sr-only">Logo</span>
            <span className="h-10 w-32 rounded-lg text-orange-600 inline-flex justify-center font-extrabold text-3xl sm:text-xl md:text-2xl">
                <h1 className="flex items-center justify-center">P2P</h1>
            </span>
        </Link>
    )
}