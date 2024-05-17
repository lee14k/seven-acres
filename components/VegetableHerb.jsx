import FlowersGrid from "./FlowersGrid";
const services = [
    {
      title: 'Asparagus',
      description: '',
       className:'griditem',
    },
    {
      title: 'Basil',
      description: '',
       className:'griditem',
    },
    {
      title: 'Beans',
      description: '',
       className:'griditem',
    },
    {
      title: 'Beets',
      description: '',
       className:'griditem',
    },
    {
      title: 'Broccoli',
      description: '',
       className:'griditem',
    },
    {
      title: 'Cabbage',
      description: '',
       className:'griditem',
    },
    {
      title: 'Carrots',
      description: '',
       className:'griditem',
    },
    {
      title: 'Cauliflower',
      description: '',
       className:'griditem',
    },
    {
      title: 'Cilantro',
      description: '',
       className:'griditem',
    },
    {
      title: 'Corn',
      description: '',
       className:'griditem',
    },
    {
      title: 'Cucumber',
      description: '',
       className:'griditem',
    },
    {
      title: 'Dill',
      description: '',
       className:'griditem',
    },
    {
      title: 'Egg Plant',
      description: '',
       className:'griditem',
    },
    {
      title: 'English Thyme',
      description: '',
       className:'griditem',
    },
    {
      title: 'Fennel',
      description: '',
       className:'griditem',
    },
    {
      title: 'Lemon Balm',
      description: '',
       className:'griditem',
    },
    {
      title: 'Lettuce',
      description: '',
       className:'griditem',
    },
    {
      title: 'Musk Melon',
      description: '',
       className:'griditem',
    },
    {
      title: 'Oregano',
      description: '',
       className:'griditem',
    },
    {
      title: 'Parsley',
      description: '',
       className:'griditem',
    },
    {
      title: 'Peas',
      description: '',
       className:'griditem',
    },
    {
      title: 'Peppers',
      description: '',
       className:'griditem',
    },
    {
      title: 'Pumpkin',
      description: '',
       className:'griditem',
    },
    {
      title: 'Radish',
      description: '',
       className:'griditem',
    },
    {
      title: 'Rosemary',
      description: '',
       className:'griditem',
    },
    {
      title: 'Sage',
      description: '',
       className:'griditem',
    },
    {
      title: 'Spinach',
      description: '',
       className:'griditem',
    },
    {
      title: 'Squash',
      description: '',
       className:'griditem',
    },
    {
      title: 'Stevia',
      description: '',
       className:'griditem',
    },
    {
      title: 'Tomato',
      description: '',
       className:'griditem',
    },
    {
      title: 'Winter Squash',
      description: '',
       className:'griditem',
    },
    {
      title: 'Zucchini',
      description: ' ',
       className:'griditem',
    },
  ]
export default function VegetableHerb () {
    return (
      <div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="my-10 text-8xl">Vegetables and Herbs</h1>
            </div>
            <FlowersGrid services={services} />
        </div>
    )
}