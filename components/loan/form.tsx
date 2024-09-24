// "use client"

// import MaxWidthWrapper from "../max-width-wrapper";

// // import { zodResolver } from "@hookform/resolvers/zod"
// // import { useForm } from "react-hook-form"
// // import { z } from "zod"

// // import { toast } from "@/hooks/use-toast"
// // import { Button } from "@/components/ui/button"
// // import {
// //     Form,
// //     FormControl,
// //     FormDescription,
// //     FormField,
// //     FormItem,
// //     FormLabel,
// //     FormMessage,
// // } from "@/components/ui/form"
// // import { Input } from "@/components/ui/input"

// // const FormSchema = z.object({
// //     username: z.string().min(2, {
// //         message: "Username must be at least 2 characters.",
// //     }),
// // })

// // export default function LoanForm() {
// //     const form = useForm<z.infer<typeof FormSchema>>({
// //         resolver: zodResolver(FormSchema),
// //         defaultValues: {
// //             username: "",
// //         },
// //     })

// //     function onSubmit(data: z.infer<typeof FormSchema>) {
// //         toast({
// //             title: "You submitted the following values:",
// //             description: (
// //                 <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
// //                     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
// //                 </pre>
// //             ),
// //         })
// //     }

// //     return (
// //         <Form {...form}>
// //             <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
// //                 <FormField
// //                     control={form.control}
// //                     name="username"
// //                     render={({ field }) => (
// //                         <FormItem>
// //                             <FormLabel>Username</FormLabel>
// //                             <FormControl>
// //                                 <Input placeholder="shadcn" {...field} />
// //                             </FormControl>
// //                             <FormDescription>
// //                                 This is your public display name.
// //                             </FormDescription>
// //                             <FormMessage />
// //                         </FormItem>
// //                     )}
// //                 />
// //                 <Button type="submit">Submit</Button>
// //             </form>
// //         </Form>
// //     )
// // }


// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */


// import { Button } from "@/components/ui/button"; // shadcn button
// import { Checkbox } from "@/components/ui/checkbox"; // shadcn checkbox
// import { Input } from "@/components/ui/input"; // Assuming shadcn input component is being used
// import { Label } from "@/components/ui/label"; // shadcn label
// import { Textarea } from "@/components/ui/textarea"; // Assuming shadcn textarea component is being used
// import { useState } from "react";
// import { useForm } from "react-hook-form";



// export default function LoanForm() {

//     const [formData, setFormData] = useState({
//         fullName: "",
//         dob: "",
//         email: "",
//         residence: "",
//         contact: "",
//         amount: "",
//         description: "",
//         document: null,
//         loanPeriod: "",
//         security: "",
//         agreeToTerms: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === "checkbox" ? checked : value,
//         });
//     };

//     const handleFileChange = (e: Event) => {
//         setFormData({
//             ...formData
//         });
//     };

//     // const handleSubmit = (e: Event) => {
//     //     e.preventDefault();
//     //     // Process the form data
//     //     console.log(formData);
//     // };



//     return (
//         <MaxWidthWrapper className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//             <form className="">
//                 <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
//                     <div className="col-span-5 lg:col-span-2 lg:py-12">
//                         <p className="max-w-xl text-lg">
//                             Fill the data and click send. Feel free to directly call, to
//                             secure an appointment, or get in person assistance
//                         </p>

//                         <div className="mt-8">
//                             <a href="tel:0151 475 4450" className="text-2xl font-bold text-orange-600"> 0151 475 4450 </a>

//                             <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
//                         </div>
//                     </div>

//                     <div className="col-span-5 lg:col-span-3 lg:p-12 flex flex-col gap-4 bg-background">
//                         <p className="font-normal text-sm">* : Mandatory field</p>

//                         <div>
//                             <Label htmlFor="fullName" className="block text-sm font-normal italic">
//                                 Full Name*
//                             </Label>
//                             <Input
//                                 id="fullName"
//                                 name="fullName"
//                                 type="text"
//                                 required
//                                 value={formData.fullName}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full ring-0 border border-gray-700"
//                             />
//                         </div>
//                         {/* <FormField
//                             name=""
//                             render={() => (
//                                 <FormItem>
//                                     <FormLabel>Username</FormLabel>
//                                     <FormControl>
//                                         <Input placeholder="Username" />
//                                     </FormControl>
//                                     <FormDescription>
//                                         This is your public display name.
//                                     </FormDescription>
//                                     <FormMessage />
//                                 </FormItem>
//                             )} */}
//                         {/*
//                         /> */}

//                         {/* Date of Birth */}

//                         <div className="grid w-full max-w-sm items-center gap-1.5">
//                             <Label htmlFor="picture">Picture</Label>
//                             <Input id="picture" type="file" className="border border-black" />
//                         </div>

//                         <div>
//                             <Label htmlFor="dob" className="block text-sm font-medium text-gray-700">
//                                 Date of Birth*
//                             </Label>
//                             <Input
//                                 id="dob"
//                                 name="dob"
//                                 type="date"
//                                 required
//                                 value={formData.dob}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Email */}
//                         <div>
//                             <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email*
//                             </Label>
//                             <Input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 required
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Residence Address */}
//                         <div>
//                             <Label htmlFor="residence" className="block text-sm font-medium text-gray-700">
//                                 Residence Address*
//                             </Label>
//                             <Input
//                                 id="residence"
//                                 name="residence"
//                                 type="text"
//                                 required
//                                 value={formData.residence}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Contact */}
//                         <div>
//                             <Label htmlFor="contact" className="block text-sm font-medium text-gray-700">
//                                 Contact*
//                             </Label>
//                             <Input
//                                 id="contact"
//                                 name="contact"
//                                 type="text"
//                                 required
//                                 value={formData.contact}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Amount */}
//                         <div>
//                             <Label htmlFor="amount" className="block text-sm font-medium text-gray-700">
//                                 Amount*
//                             </Label>
//                             <Input
//                                 id="amount"
//                                 name="amount"
//                                 type="number"
//                                 required
//                                 value={formData.amount}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Description (optional) */}
//                         <div>
//                             <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                                 Description?
//                             </Label>
//                             <Textarea
//                                 id="description"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Document (optional) */}
//                         <div>
//                             <Label htmlFor="document" className="block text-sm font-medium text-gray-700">
//                                 Document? (Optional)
//                             </Label>
//                             <Input
//                                 id="document"
//                                 name="document"
//                                 type="file"
//                                 onChange={handleFileChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Loan Period */}
//                         <div>
//                             <Label htmlFor="loanPeriod" className="block text-sm font-medium text-gray-700">
//                                 Loan Period*
//                             </Label>
//                             <Input
//                                 id="loanPeriod"
//                                 name="loanPeriod"
//                                 type="number"
//                                 required
//                                 value={formData.loanPeriod}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Security */}
//                         <div>
//                             <Label htmlFor="security" className="block text-sm font-medium text-gray-700">
//                                 Security*
//                             </Label>
//                             <Input
//                                 id="security"
//                                 name="security"
//                                 type="text"
//                                 required
//                                 value={formData.security}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                             />
//                         </div>

//                         {/* Agree to Terms */}
//                         <div className="flex items-center">
//                             <Checkbox
//                                 id="agreeToTerms"
//                                 name="agreeToTerms"
//                                 checked={formData.agreeToTerms}
//                                 onChange={handleChange}
//                             />
//                             <Label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900">
//                                 I agree to the terms and conditions*
//                             </Label>
//                         </div>

//                         {/* Submit Button */}
//                         <Button type="submit" className="w-full">
//                             Submit
//                         </Button>

//                         <div className="mt-6 flex items-center justify-end gap-x-6">
//                             <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//                                 Cancel
//                             </button>
//                             <button
//                                 type="submit"
//                                 className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//             </form>
//         </MaxWidthWrapper>
//     )
// }

export default function LoanForm() {
    return (
        <div className=""></div>
    )
}