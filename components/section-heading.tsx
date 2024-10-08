import { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
    return (
        <h2 className="mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-accent-foreground">
            {children}
        </h2>
    )
}