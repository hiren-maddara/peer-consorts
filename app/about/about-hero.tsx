import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function AboutHero() {
    return (
        <MaxWidthWrapper className="overflow-clip flex flex-col md:flex-row items-center gap-8 my-8">
            <div className="flex flex-col p-2 gap-y-2 basis-1/2 shrink-0">
                <h1 className="text-3xl font-bold lg:text-5xl">
                    We're changing how students view loans.
                </h1>
                <h2 className="tracking-wide text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla aperiam expedita voluptatibus nemo ab quam non, illum quibusdam soluta praesentium perferendis sunt molestiae error laborum. Consequuntur perspiciatis architecto iusto!
                </h2>
            </div>

            <div className="flex gap-4 shrink-0 flex-grow-0 basis-full md:basis-[50%]">

                {/* col 1 */}
                <div className="pt-0 md:pt-80 order-1 w-32">
                    <div className="relative">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                            className="object-cover rounded-xl border-solid border border-orange-600/50 w-full aspect-[2/3]"
                        />
                    </div>
                </div>

                {/* col 2 */}
                <div className="pt-0 md:pt-36 w-32 order-2 flex flex-col gap-8">
                    <div className="relative ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=.4&amp;w=396&amp;h=528&amp;q=80"
                            className="object-cover rounded-xl w-full aspect-[2/3] border-solid border border-orange-600/50"
                        />
                    </div>
                    <div className="relative">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                            className="object-cover rounded-xl border-solid border border-orange-600/50 w-full aspect-[2/3]"
                        />
                    </div>
                </div>

                {/* col 3 */}
                <div className="pt-0 w-32 order-3 flex flex-col gap-8">
                    <div className="relative">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;crop=left&amp;w=400&amp;h=528&amp;q=80"
                            className="object-cover rounded-xl border-solid border border-orange-600/50 w-full aspect-[2/3]"
                        />
                    </div>
                    <div className="relative">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;h=528&amp;q=80"
                            className="object-cover rounded-xl border-solid border border-orange-600/50 w-full aspect-[2/3]"
                        />
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}