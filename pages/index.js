import Image from "next/image";
import Slideshow from "../components/Slideshow";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import ServicesTripleBox from "@/components/ServicesTripleBox";
export default function Home() {
  return (
    <main
      className
    >
      <Navbar/>
     <Slideshow/>
     <CTA/>
     <ServicesTripleBox/>
    </main>
  );
}
