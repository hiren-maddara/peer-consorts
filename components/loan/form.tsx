"use client"


import { Button } from "@/components/ui/button"; // shadcn button
import { Checkbox } from "@/components/ui/checkbox"; // shadcn checkbox
import { Input } from "@/components/ui/input"; // Assuming shadcn input component is being used
import { Label } from "@/components/ui/label"; // shadcn label
import { Textarea } from "@/components/ui/textarea"; // Assuming shadcn textarea component is being used
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Asterisk, ImageIcon, Loader2, MousePointerSquareDashed } from "lucide-react";
import { ReactNode, useState, useTransition } from "react";
import Dropzone, { FileRejection } from 'react-dropzone';
import BlobBg from "../blob-bg";
import MaxWidthWrapper from "../max-width-wrapper";
import { Progress } from "../ui/progress";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";


function InputGroup({
    required,
    label,
    className,
    children
}: {
    required?: boolean,
    label: string,
    children: ReactNode,
    className?: string
}) {
    return (
        <div className={cn(
            "relative mb-4",
            className
        )}
        >
            <Label className="flex  items-center mb-2 text-secondary-foreground text-sm font-medium">
                {label}
                {required && (
                    <Asterisk fill="#EF4444" className="ml-1 h-3 w-3" color="#EF4444" />
                )}

                {/* <p className="absolute text-[#EF4444] text-xs font-normal left-32 italic">
                    Invalid name
                </p> */}
            </Label>

            {children}
        </div>
    )
}

export default function LoanForm() {

    const { toast } = useToast()
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [uploadProgress] = useState<number>(0)

    // const router = useRouter()

    // const { startUpload, isUploading } = useUploadThing('imageUploader', {
    //   onClientUploadComplete: ([data]) => {
    //     const configId = data.serverData.configId
    //     startTransition(() => {
    //       router.push(`/configure/design?id=${configId}`)
    //     })
    //   },
    //   onUploadProgress(p) {
    //     setUploadProgress(p)
    //   },
    // })

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles

        setIsDragOver(false)

        toast({
            title: `${file.file.type} type is not supported.`,
            description: "Please choose a PNG, JPG, or JPEG image instead.",
            variant: "destructive"
        })
    }

    const onDropAccepted = (acceptedFiles: File[]) => {
        console.log(acceptedFiles)
        //   startUpload(acceptedFiles, { configId: undefined })

        setIsDragOver(false)
    }

    const [isPending] = useTransition()

    //placeholder vars
    const isUploading = false

    return (
        <MaxWidthWrapper className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

            <form className="">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-7">
                    <div className="col-span-5 lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                            Fill the data and click send. Feel free to directly call, to
                            secure an appointment, or get in person assistance
                        </p>

                        <div className="mt-8">
                            <a href="tel:0151 475 4450" className="text-2xl font-bold text-orange-600"> 0151 475 4450 </a>

                            <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                        </div>
                        <BlobBg />
                    </div>

                    <div className="col-span-5 lg:col-span-5 lg:p-12 flex flex-col gap-4 shadow-md border-solid border border-gray-400/20 rounded-lg p-6">
                        <InputGroup required label="Full name">
                            <Input type="text" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="Name..." required />
                        </InputGroup>

                        <InputGroup
                            required
                            label="Email">
                            <Input type="text" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="Email address..."
                                required
                            />
                        </InputGroup>

                        <InputGroup
                            required
                            label="Address">
                            <Input type="text" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="Residential address..."
                                required
                            />
                        </InputGroup>

                        <InputGroup
                            required
                            label="Date of birth">
                            <Input type="date" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="24-10-2000..."
                                required
                            />
                        </InputGroup>

                        <InputGroup
                            required
                            label="Amount">
                            <Input type="number" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="UGX"
                                required
                            />
                        </InputGroup>

                        <InputGroup
                            required
                            label="Department (students)">
                            <Input type="text" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="CEDAT"
                                required
                            />
                        </InputGroup>

                        <InputGroup
                            required
                            label="Document">

                            <Select>
                                <SelectTrigger
                                    className="w-full h-11 mb-4 shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm ring-offset-0 text-muted-foreground focus-visible:ring-offset-0 focus:ring-offset-0 focus:ring-orange-600/80"
                                >
                                    <SelectValue
                                        placeholder="Choose a document type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Documents</SelectLabel>
                                        <SelectItem value="apple">Student ID</SelectItem>
                                        <SelectItem value="banana">National ID</SelectItem>
                                        <SelectItem value="blueberry">Passport</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <div className={cn(
                                'h-32 rounded-lg bg-gray-800/5 p-2   ring-gray-900/10 lg:rounded-lg flex justify-center flex-col items-center border border-dashed border-x-gray-400',
                                {
                                    'ring-blue-900/25 bg-blue-900/10': isDragOver,
                                }
                            )}>

                                <Dropzone
                                    onDropRejected={onDropRejected}
                                    onDropAccepted={onDropAccepted}
                                    accept={{
                                        'image/png': ['.png'],
                                        'image/jpeg': ['.jpeg'],
                                        'image/jpg': ['.jpg'],
                                        'application/pdf': ['.pdf']
                                    }}
                                    onDragEnter={() => setIsDragOver(true)}
                                    onDragLeave={() => setIsDragOver(false)}>
                                    {({ getRootProps, getInputProps }) => (
                                        <div
                                            className='h-full w-full flex-1 flex flex-col items-center justify-center select-none'
                                            {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            {isDragOver ? (
                                                <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' />
                                            ) : isUploading || isPending ? (
                                                <Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2' />
                                            ) : (
                                                <ImageIcon className='h-6 w-6 text-zinc-500 mb-2' />
                                            )}
                                            <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                                                {isUploading ? (
                                                    <div className='flex flex-col items-center'>
                                                        <p>Uploading...</p>
                                                        <Progress
                                                            value={uploadProgress}
                                                            className='mt-2 w-40 h-2 bg-gray-300'
                                                        />
                                                    </div>
                                                ) : isPending ? (
                                                    <div className='flex flex-col items-center'>
                                                        <p>Redirecting, please wait...</p>
                                                    </div>
                                                ) : isDragOver ? (
                                                    <p>
                                                        <span className='font-semibold'>Drop file</span> to upload
                                                    </p>
                                                ) : (
                                                    <p>
                                                        <span className='font-semibold'>Click to upload</span> or
                                                        drag and drop
                                                    </p>
                                                )}
                                            </div>

                                            {isPending ? null : (
                                                <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
                                            )}
                                        </div>
                                    )}
                                </Dropzone>
                            </div>
                        </InputGroup>


                        <InputGroup
                            required
                            label="Security item">
                            <Input type="text" id="default-search"
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="Laptop..."
                                required
                            />
                        </InputGroup>


                        <InputGroup
                            label="Description">
                            <Textarea id="default-search"
                                cols={5}
                                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 font-normal shadow-xs  bg-transparent border-solid border border-gray-300 rounded-md text-sm placeholder:text-muted-foreground text-foreground   focus-visible:ring-orange-600/80 focus-visible:ring-offset-0"
                                placeholder="Some background could increase the chances of consideration..."
                                required
                            />
                        </InputGroup>

                        <div className="mb-2 px-8 flex items-center gap-x-4 text-muted-foreground">
                            <Checkbox className="checked:bg-orange-600/90 border-solid" id="terms" />
                            <Label htmlFor="terms" className="text-sm">By filling this form your agree to our Terms and conditions</Label>
                        </div>



                        <div className="mt-6 flex items-center justify-end gap-x-6">

                            <Button
                                className="text-muted !bg-orange-600 gap-3 flex justify-center items-center py-4 rounded-xl hover:bg-orange-600/95 transition-all shadow-sm hover:shadow-md dark:text-foreground"
                                variant="secondary">
                                Submit

                            </Button>
                        </div>
                    </div>

                </div>
            </form>


        </MaxWidthWrapper>
    )
}
