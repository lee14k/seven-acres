import React, { ComponentType, useState } from "react";
import Annuals from "./Annuals";
import Perennials from "./Perennials";
import ShrubsTrees from "./ShrubsTrees";
import SmallFruits from "./SmallFruits";
import VegetableHerb from "./VegetableHerb";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const ParentComponent = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "A":
        return <Annuals />;
      case "B":
        return <Perennials />;
      case "C":
        return <ShrubsTrees />;
      case "D":
        return <SmallFruits />;
      case "E":
        return <VegetableHerb />;
    }
  };

  return (
    <div className={merriweather.className}>
      <div className="mt-12 ">
        <div className="">
          <ul className="grid grid-cols-3">
            <li className="flex flex-col justify-center items-center">
              <button
                onClick={() => setActiveComponent("A")}
                className="bg-emerald-950 py-2 mt-2 px-48 text-white text-xl"
              >
                Annuals{" "}
              </button>
            </li>
            <li className="flex flex-col justify-center items-center">
              <button
                onClick={() => setActiveComponent("B")}
                className="bg-emerald-950 py-2 mt-2 px-48 text-white text-xl"
              >
                Perennials{" "}
              </button>{" "}
            </li>

            <li className="flex flex-col justify-center items-center">
              <button
                onClick={() => setActiveComponent("C")}
                className="mt-2 bg-emerald-950 py-2 px-52 text-white text-xl"
              >
                Shrubs & Trees{" "}
              </button>
            </li>

            <li className="flex flex-col justify-center items-center">
              <button
                onClick={() => setActiveComponent("D")}
                className="mt-2 bg-emerald-950 py-2 px-52 text-white text-xl"
              >
                Small Fruits{" "}
              </button>
            </li>

            <li className="flex flex-col justify-center items-center">
              <button
                onClick={() => setActiveComponent("C")}
                className="mt-2 bg-emerald-950 py-2 px-52 text-white text-xl"
              >
                Vegetables & Herbs
              </button>
            </li>
          </ul>
        </div>
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default ParentComponent;
