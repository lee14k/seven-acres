import { useState } from "react";

export default function FlowersGrid({ services }) {
  const defaultImages = ["fleurs.png", "fleurs2.png", "fleurs3.png"];

  const [flipStates, setFlipStates] = useState(
    new Array(services.length).fill(false)
  );

  const handleFlip = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };

  // Construct the service elements
  const serviceElements = services.map((service, index) => {
    const currentImage = defaultImages[index % defaultImages.length];

    return (
      <div
        onClick={() => handleFlip(index)}
        className={`${service.className} ${flipStates[index] ? "flip" : ""}`}
        key={service.title}
        style={{
          backgroundImage: `url(${service.img || currentImage})`,
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
    );
  });

  // Return the overall structure with the service elements
  return (
    <div>
      <div className="gridwrapper front">
        {serviceElements}
      </div>
    </div>
  );
}
