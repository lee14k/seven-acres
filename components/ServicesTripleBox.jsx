import Link from 'next/link'
import Image from "next/image";
const ServicesTripleBox =()=> {
    return (
        <div className="flex flex-col justify-center items-center my-10">     
            <h1 className="text-6xl">Our Services</h1>  
            <p className="text-3xl">In addition to our blooms, we offer a wide range of services.</p>
            <div className="grid lg:grid-cols-3 gap-24">
            <div className="services-triple-box-item flex flex-col justify-center items-center my-12 mb-12">
                <Image
                    src="/trees7.jpeg"
                    alt="Landscaping"
                    width={300}
                    height={300}/>
                <h2 className="text-4xl">Tree Planting</h2>
                <Link href="/trees">
                <button
        type="button"
        className=" my-2 rounded-md bg-sky-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Learn more
      </button>
      </Link>
            </div>
            <div className="services-triple-box-item flex flex-col justify-center items-center">
            <Image
                    src="/Flowers_Lo-Res-8305.jpg"
                    alt="Landscaping"
                    width={270}
                    height={270}/>
                <h2 className="text-4xl">Landscaping</h2>
                <Link href="/landscaping">
                <button
        type="button"
        className=" my-2 rounded-md bg-sky-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Learn more
      </button>
      </Link>
            </div>
            <div className="services-triple-box-item flex flex-col justify-center items-center">
            <Image
                    src="/repair7.jpeg"
                    alt="Landscaping"
                    width={300}
                    height={300}/>
                <h2 className="text-4xl">Home Repair</h2>
                <Link href="/home-repair"> 
                <button
        type="button"
        className=" my-2 rounded-md bg-sky-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Learn more
      </button>
      </Link>
            </div>
            </div>
            </div>
 
    )
}
export default ServicesTripleBox;