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
 className="absolute bottom-10 left-128 z-10"

/>
      </div>
      <div className=" lg:flex flex-col justify-center items-center">
        <h1 className="text-6xl">
        Flowers, trees, and more
        </h1>
        <p className="text-3xl">Local blooms at affordable prices. Seven Acre Gardens is the premier stop for all of your landscaping, floral, and tree needs. Come check us out and see the gorgeous blooms we have to offer</p>
      </div>
    
    </div>
  );
};
export default PhotoRightTextLeft