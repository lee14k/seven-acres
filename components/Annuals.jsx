import FlowersGrid from "./FlowersGrid";
const services = [
    {
      title: "pansies",
      link: "/mediation",
      className: "griditem",
      description:
        "Three nutritional home cooked meals and snacks daily, can be tailored and customized to meet resident needs.",
      img: "/Flowers_Lo-Res-8305.jpg",
    },
  ];
export default function Annuals () {
    return (
        <div>
            <h1>Annuals</h1>
            <FlowersGrid services={services} />
        </div>
    )
}