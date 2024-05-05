import Image from "next/image";
import Slideshow from "../components/Slideshow";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import ServicesTripleBox from "@/components/ServicesTripleBox";
import PhotoRightTextLeft from "@/components/PhotoRightTextLeft";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main
      className
    >
      <Navbar/>
     <Slideshow/>
     <PhotoRightTextLeft/>

     <CTA/>
     <ServicesTripleBox/>
     <Footer/>
    </main>
  );
}
