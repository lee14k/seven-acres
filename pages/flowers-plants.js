import Image from "next/image";
import Slideshow from "../components/Slideshow";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import ServicesTripleBox from "@/components/ServicesTripleBox";
import PhotoRightTextLeft from "@/components/PhotoRightTextLeft";
import HeadlineBox from "@/components/HeadlineBox";
import Footer from "@/components/Footer";
import FlowersGrid from "@/components/FlowersGrid";
import NewMenu from "@/components/NewMenu";

export default function FlowersPlants () {
    return (
        <div>
<Navbar/>
<HeadlineBox backgroundImage="/Flowers_Lo-Res-8338.jpg" headline="Flowers & Plants" />
<p className="flex justify-center items-center my-4 text-4xl">Click the tabs below to learn more about our plants and flowers</p>
<NewMenu/>
        </div>
    )
}