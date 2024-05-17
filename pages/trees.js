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
import TreeFill from "@/components/TreeFill";

export default function trees () {
    return (
        <div>
<Navbar/>
<HeadlineBox backgroundImage="/Flowers_Lo-Res-8338.jpg" headline="Trees" />
<TreeFill/>
        </div>
    )
}