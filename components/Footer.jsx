import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around items-center py-4">
      <div className="flex-1 px-4">
        <ul>
          <li>Seven Acre Garden & Gifts</li>
          <li>5253 I RD, Escanaba, MI 49829</li>
          <li>sevenacregardens@outlook.com</li>
        </ul>
        <ul>
          <li>Hours of Operation:</li>
          <li>M-F: 8:30am-6:00pm</li>
          <li>Saturday: 8:30am-5:00pm</li>
          <li>Sunday: 8:30am-4:00pm</li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center ">
        <Image
          src="/strokesa2.png"
          height={300}
          width={300}
          className="overlay-logo"
        />
      
      </div>
   
    </div>
  );
};

export default Footer;
