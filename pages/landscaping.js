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
import LandscapeFill from "@/components/LandscapeFill";
export default function landscaping () {
    return (
        <div>
<Navbar/>
<HeadlineBox backgroundImage="/Flowers_Lo-Res-8338.jpg" headline="Landscaping" />
<LandscapeFill/>
        </div>
    )
}