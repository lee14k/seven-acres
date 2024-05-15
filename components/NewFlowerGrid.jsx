import { useState } from "react";

export default function FlowersGrid({ services }) {
  const [flipStates, setFlipStates] = useState(new Array(services.length).fill(false));

  const handleFlip = (index) => {
    const newFlipStates = [...flipStates];
    newFlipStates[index] = !newFlipStates[index];
    setFlipStates(newFlipStates);
  };

  return (
    <div>
      <div className="gridwrapper front">
        {services.map((service, index) => (
          <div
            onClick={() => handleFlip(index)}
            className={`${service.className} ${flipStates[index] ? "flip" : ""}`}
            key={service.title}
            style={{
              backgroundImage: `url(${service.img || "default_image_path_here.jpg"})`,
              backgroundSize: "60% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="gridhead">{service.title}</h2>
            <div className="back" onClick={() => handleFlip(index)}>
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
