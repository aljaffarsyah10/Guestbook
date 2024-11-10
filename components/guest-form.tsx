"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

// Define the shape of the form errors
interface FormErrors {
  name?: string[];
  phoneNumber?: string[];
  gender?: string[];
  email?: string[];
  address?: string[];
  age?: number;
}

// Define the shape of the form state
interface FormState {
  errors: FormErrors;
}

// Define the props that the GuestForm component expects
interface GuestFormProps {
  formAction: any; // The action to perform when the form is submitted
  initialData: {
    // The initial data for the form fields
    name: string;
    phoneNumber: string;
    gender: string;
    email: string;
    address: string;
    age: number;
  };
}

// The formAction is the action to perform when the form is submitted. We use it as a props because
// we will use this for create and edit page which both page doesn't have the same action
// The initialData is the initial data for the form fields.
export default function GuestForm({ formAction, initialData }: GuestFormProps) {
  // Initialize the form state and action
  const [formState, action] = useFormState<FormState>(formAction, {
    errors: {},
  });

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        {initialData.name ? "Update" : "Create"} Guest
      </h1>
      <form action={action}>
        <div className="w-96">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={initialData.name}
              className="rounded p-2 w-full"
            />
            {formState.errors.name && (
              <div className="text-red-500">
                {formState.errors.name?.join(", ")} // Display form errors
                related to the name field
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">
              phoneNumber
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={initialData.phoneNumber}
              className="rounded p-2 w-full"
            />
            {formState.errors.phoneNumber && (
              <div className="text-red-500">
                {formState.errors.phoneNumber?.join(", ")} // Display form
                errors related to the name field
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">
              address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={initialData.address}
              className="rounded p-2 w-full"
            />
            {formState.errors.address && (
              <div className="text-red-500">
                {formState.errors.address?.join(", ")} // Display form errors
                related to the name field
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-2">
              gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              defaultValue={initialData.gender}
              className="rounded p-2 w-full"
            />
            {formState.errors.gender && (
              <div className="text-red-500">
                {formState.errors.gender?.join(", ")} // Display form errors
                related to the name field
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={initialData.email}
              className="rounded p-2 w-full"
            />
            {formState.errors.email && (
              <div className="text-red-500">
                {formState.errors.email?.join(", ")} // Display form errors
                related to the name field
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">
              age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              defaultValue={initialData.age}
              className="rounded p-2 w-full"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="content" className="block mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={initialData.phoneNumber}
              className="rounded p-2 w-full"
            ></textarea>
            {formState.errors.phoneNumber && (
              <div className="text-red-500">
                {formState.errors.phoneNumber?.join(", ")} // Display form errors
                related to the phoneNumber field
              </div>
            )}
          </div> */}
          <div className="mb-4">
            <button type="submit" className="bg-white px-4 py-2 rounded mr-2">
              Save
            </button>
            <Link href="/" className="bg-transparent px-4 py-2 rounded">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

// // this is a client component
// "use client";

// import Link from "next/link";
// import { useFormState } from "react-dom";
// import { GuestField } from "@/app/lib/definitions";
// import * as icon from "@heroicons/react/24/outline";
// import { Button } from "@/app/ui/button";
// import { createInvoice, State } from "@/app/lib/actions";
// import { useActionState } from "react";

// // Define the shape of the form errors
// interface FormErrors {
//   title?: string[];
//   content?: string[];
// }

// // Define the shape of the form state
// interface FormState {
//   errors: FormErrors;
// }

// // Define the props that the GuestForm component expects
// interface GuestFormProps {
//   formAction: any; // The action to perform when the form is submitted
//   initialData: {
//     // The initial data for the form fields
//     name: string;
//     phoneNumber: string;
//     gender: string;
//     email: string;
//     address: string;
//     age: number;
//   };
// }

// // The formAction is the action to perform when the form is submitted. We use it as a props because
// // we will use this for create and edit page which both page doesn't have the same action
// // The initialData is the initial data for the form fields.
// export default function GuestForm({ formAction, initialData }: GuestFormProps) {
//   // Initialize the form state and action
//   const [formState, action] = useActionState<FormState>(formAction, {
//     errors: {},
//   });

//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-6">
//         {initialData.name ? "Update" : "Create"} Guest
//       </h1>

//       <form action={action}>
//         {/* <form action={formAction}> */}
//         <div className="rounded-md bg-gray-50 p-4 md:p-6">
//           <label htmlFor="guest" className="mb-2 block text-m font-medium">
//             Personal Information
//           </label>
//           {/* Guest Name */}
//           <div className="mb-4">
//             <label htmlFor="guest" className="mb-2 block text-sm font-medium">
//               Input Name
//             </label>
//             <div className="relative">
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Input name"
//                 defaultValue={initialData.name}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 aria-describedby="name-error"
//               />
//               <icon.UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>
//           {/* Guest Phone Number*/}
//           <div className="mb-4">
//             <label htmlFor="guest" className="mb-2 block text-sm font-medium">
//               Input Phone Number
//             </label>
//             <div className="relative">
//               <input
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 type="text"
//                 placeholder="Input phone number"
//                 defaultValue={initialData.phoneNumber}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 aria-describedby="phoneNumber-error"
//               />
//               <icon.PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Guest Gender */}
//           <div className="mb-4">
//             <label htmlFor="guest" className="mb-2 block text-sm font-medium">
//               Input Gender
//             </label>
//             <div className="relative">
//               <input
//                 id="gender"
//                 name="gender"
//                 type="text"
//                 placeholder="Input gender"
//                 defaultValue={initialData.gender}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 aria-describedby="gender-error"
//               />
//               <icon.UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Guest email */}
//           <div className="mb-4">
//             <label htmlFor="guest" className="mb-2 block text-sm font-medium">
//               Input Email
//             </label>
//             <div className="relative">
//               <input
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Input Email"
//                 defaultValue={initialData.email}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 aria-describedby="email-error"
//               />
//               <icon.ComputerDesktopIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Guest Address */}
//           <div className="mb-4">
//             <label htmlFor="guest" className="mb-2 block text-sm font-medium">
//               Input Address
//             </label>
//             <div className="relative">
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 placeholder="Input Address"
//                 defaultValue={initialData.address}
//                 className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 aria-describedby="address-error"
//               />
//               <icon.HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
//             </div>
//           </div>

//           {/* Guest Age */}
//           <div className="mb-4">
//             <label htmlFor="age" className="mb-2 block text-sm font-medium">
//               Choose your age
//             </label>
//             <div className="relative mt-2 rounded-md">
//               <div className="relative">
//                 <input
//                   id="age"
//                   name="age"
//                   type="number"
//                   step="1"
//                   placeholder="choose your age"
//                   defaultValue={initialData.age}
//                   className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
//                   aria-describedby="age-error"
//                 />
//                 <icon.UsersIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//               </div>
//             </div>
//           </div>
//           <div className="mt-6 flex justify-end gap-4">
//             <button type="submit" className="bg-white px-4 py-2 rounded mr-2">
//               Save
//             </button>
//             <Link
//               href="/"
//               className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//             >
//               Cancel
//             </Link>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
