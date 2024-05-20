import Image from "next/image";
import Paintsvg from "./Paintsvg";
const PhotoRightTextLeft = () => {
  return (
    <div className="grid lg:grid-cols-2 relative">
          <div className="lg:my-0 sm:my-48">
     
        <Paintsvg/>
        <Image
 src='/sa.png'
 height={400}
 width={400}
 className="lg:absolute lg:bottom-10 left-128 z-10"

/>
      </div>
      <div className="text-center lg:flex flex-col justify-center items-center lg:ml-24">
        <h1 className="text-6xl">
        Flowers, trees, and more
        </h1>
        <p className="text-3xl">Local blooms at affordable prices. Seven Acre Garden has you covered with beautiful flowers, vegetables, trees, herbs, and so much more. Come check us out and see the gorgeous blooms we have to offer, located just outside of Escanaba, MI.</p>
      </div>
    
    </div>
  );
};
export default PhotoRightTextLeft