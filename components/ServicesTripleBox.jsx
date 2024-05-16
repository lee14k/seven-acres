import Image from "next/image";
const ServicesTripleBox =()=> {
    return (
        <div className="flex flex-col justify-center items-center">     
            <h1 className="text-6xl">Our Services</h1>  
            <p className="text-3xl">In addition to our blooms, we offer a wide range of services.</p>
            <div className="grid grid-cols-3 gap-24">
            <div className="services-triple-box-item">
                <Image
                    src="/Flowers_Lo-Res-8305.jpg"
                    alt="Landscaping"
                    width={300}
                    height={300}/>
                <h2>Tree Planting</h2>
                <p>Service 1 description</p>
            </div>
            <div className="services-triple-box-item">
            <Image
                    src="/Flowers_Lo-Res-8305.jpg"
                    alt="Landscaping"
                    width={300}
                    height={300}/>
                <h2>Landscaping</h2>
                <p>Service 2 description</p>
            </div>
            <div className="services-triple-box-item">
            <Image
                    src="/Flowers_Lo-Res-8305.jpg"
                    alt="Landscaping"
                    width={300}
                    height={300}/>
                <h2>Home Repair</h2>
                <p>Service 3 description</p>
            </div>
            </div>
            </div>
 
    )
}
export default ServicesTripleBox;