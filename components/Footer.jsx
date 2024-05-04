import Image from "next/image";
const Footer = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

        </ul>
      </div>
      <div>
      <Image
          src='/SevenAcregarden_logo.png'
          height={300}
          width={300}
          className="overlay-logo"
          />
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};
