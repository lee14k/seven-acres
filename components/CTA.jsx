import Image from "next/image";
export default function CTA () {
return (
    <div className="grid grid-cols-2">
<div> <Image
        src='/hang2.png'
        height={900}
        width={900}

        /></div>
<div className="flex flex-col justify-center items-center">
   
  <h1 className="text-8xl">Hey!</h1>
  <p>Buy our stuff!</p>
</div>
    </div>
)
}