import { useState } from "react";

export default function FlowersGrid({services}) {
  // Define the services data

  const [flipStates, setFlipStates] = useState(
    new Array(services.length).fill(false)
  );
  const handleFlip = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };
  return (
    <div>
      <div className="gridwrapper front ">
        {services.map((service, index) => (
          <div
            onClick={() => handleFlip(index)}
            className={`${service.className}  ${
              flipStates[index] ? "flip" : ""
            }`}
            key={service.title}
            style={{
              backgroundImage: `url(${service.img || "fleurs.png"})`,
              backgroundSize: "60% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="gridhead bg-gray-200">{service.title}</h2>

            <div className="back" onClick={() => handleFlip(index)}>
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
