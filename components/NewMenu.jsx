import React, { useState } from "react";
import Annuals from "./Annuals";
import Perennials from "./Perennials";
import ShrubsTrees from "./ShrubsTrees";
import SmallFruits from "./SmallFruits";
import VegetableHerb from "./VegetableHerb";


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
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mt-12">
        <div>
          <ul className="grid lg:grid-cols-5 gap-4">
            {[
              { label: "Annuals", value: "A" },
              { label: "Perennials", value: "B" },
              { label: "Shrubs & Trees", value: "C" },
              { label: "Small Fruits", value: "D" },
              { label: "Vegetables & Herbs", value: "E" },
            ].map((item) => (
              <li
                key={item.value}
                className="flex flex-col justify-center items-center"
              >
                <button
                  onClick={() => setActiveComponent(item.value)}
                  className="bg-rose-700 py-2 mt-2 w-full max-w-xs text-white text-xl"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default ParentComponent;
