import Link from "next/link";
import Image from "next/image";
export default function CTA () {
return (
   

<div className="flex flex-col justify-center items-center flower-bg text-white">
   
  <h1 className="text-8xl my-4">Looking for flowers?</h1>
  <p className="text-4xl my-4">Spring has sprung. Come visit us in Hyde and see our gorgeous blooms</p>
  <Link href='/flowers-plants'>
  <button
        type="button"
        className="rounded-md bg-sky-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Learn more
      </button></Link></div>
)
}