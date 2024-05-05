import Image from "next/image";
import Paintsvg from "./Paintsvg";
const PhotoRightTextLeft = () => {
  return (
    <div className="grid grid-cols-2 relative">
          <div>
     
        <Paintsvg/>
        <Image
 src='/sa.png'
 height={400}
 width={400}
 className="absolute bottom-10 left-128 z-10"

/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">
        Flowers, trees, and more
        </h1>
        <p className="text-3xl">Local</p>
      </div>
    
    </div>
  );
};
export default PhotoRightTextLeft