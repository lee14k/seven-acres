import FlowersGrid from "./FlowersGrid";
const services = [
    {
      title: 'Allium',
      description: 'Ornamental Onion',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Aster',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Astilbe',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Bee Balm',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Black Eyed Susan',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Bleeding Hearrt',
      description: 'Spring blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun\/Shade'
    },
    {
      title: 'Butterfly weed',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Catmint',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Columbine',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Crocus',
      description: 'Spring blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Daffodil',
      description: 'Spring blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Dianthus',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Echinacea',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Eucalyptus',
      description: 'Fragrant',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun\/Shade'
    },
    {
      title: 'Foxglove',
      description: 'Bi-annual \/ late spring',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun\/Shade'
    },
    {
      title: 'Grasses',
      description: 'Ornamental',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Heliopsis',
      description: 'Summer blooming',
      color: 'yellow\/orange',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Holly hock',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Hyacinth',
      description: 'Spring blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Iris',
      description: 'Ornamental Rhizome',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Lavender',
      description: 'Summer blooming',
      color: 'Purple',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Mums',
      description: 'Fall Blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Phlox',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Poppy',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Primrose',
      description: 'Sring\/Summer blooming',
      color: 'Pale Yellow',
       className:'griditem',
      lightRequirement: 'Sun\/Shade'
    },
    {
      title: 'Sedium',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun\/Shade'
    },
    {
      title: 'Shasta Daisy',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Tickseed',
      description: 'Summer blooming',
      color: 'Yellow',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Tulip',
      description: 'Spring blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
    {
      title: 'Vinca Minor',
      description: 'Summer blooming',
      color: 'Purple shades',
       className:'griditem',
      lightRequirement: 'Sun\/Shade'
    },
    {
      title: 'Viola',
      description: 'Summer blooming',
      color: 'Assorted',
       className:'griditem',
      lightRequirement: 'Sun'
    },
  ]
export default function Perennials () {
    return (
        <div>
            <h1>Perennials</h1>
            <FlowersGrid services={services} />
        </div>
    )
}