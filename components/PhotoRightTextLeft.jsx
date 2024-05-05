import Image from "next/image";
import Paintsvg from "./Paintsvg";
const PhotoRightTextLeft = () => {
  return (
    <div className="grid grid-cols-2">
          <div>
      <Image
        src='/Flowers_Lo-Res-8305.jpg'
        height={500}
        width={500}

        />
        <Paintsvg/>
        <Image
 src='/sa.png'
 height={500}
 width={500}

/>
      </div>
      <div>
        <h1>
        Flowers, trees, and more
        </h1>
        <p>Local</p>
      </div>
    
    </div>
  );
};
export default PhotoRightTextLeft