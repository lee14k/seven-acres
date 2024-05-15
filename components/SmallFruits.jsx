import FlowersGrid from "./FlowersGrid";
const services = [
    {
      title: 'Blackberry',
      description: '1yr',
       className:'griditem',
    },
    {
      title: 'Blueberry',
      description: '2yr',
       className:'griditem',
    },
    {
      title: 'Grapes',
      description: 'Sweet seedless',
       className:'griditem',
    },
    {
      title: 'Raspberry',
      description: '1 yr',
       className:'griditem',
    },
    {
      title: 'Strawberry',
      description: 'June bearing & Everbearing',
       className:'griditem',
    },
    {
      title: 'Watermelon',
      description: '9" round   6-12 lbs',
       className:'griditem',
    },
    {
      title: 'Blackberry',
      description: '2yr',
       className:'griditem',
    },
  ]
export default function SmallFruits () {
    return (
        <div>
            <h1>Small Fruits</h1>
            <FlowersGrid services={services} />
        </div>
    )
}