import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Create a FormData object, passing in the form event target
    const form = event.target;
    const formData = new FormData(form);
  
    // Retrieve form data using FormData methods
    const data = {
      firstName: formData.get('firstName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      message: formData.get('message'),
    };
    console.log({
      firstName: formData.get('firstName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      message: formData.get('message'),
    });
    
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setIsModalOpen(true);
        console.log("Form submitted successfully");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
      const closeModal = () => {
     setIsModalOpen(false);
   };
  return (
    <div className="relative isolate bridal-one fancy-font pb-12">
      <div className="flex flex-col justify-center items-center mt-16 text-6xl">
    <h1>Contact Us</h1>
    </div>
        <form onSubmit={handleSubmit}
        method="POST" className=" pt-12 ">
          <div className="px-16">
            <div className="flex flex-col gap-x-8 gap-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 "
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Send message
              </button>
            </div>
            {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-content bg-white p-4 rounded-lg shadow-lg z-50">
            <p className="text-lg font-semibold text-green-600">Submission Successful!</p>
            <p>Your submission was successful. Thank you!</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
          </div>
        </form>
      </div>
  );
}
