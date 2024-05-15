import FlowersGrid from "./FlowersGrid";
const services = [
  {
    title: 'Ageratum',
    description: 'Mounding 8"-12"',
    color: 'Blue, Purple, Pink',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Alyssum',
    description: 'Mounding 6" - 10"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Bacopa',
    description: 'Trailing 18"-24"',
    color: 'Blue, pink, white',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Begonia',
    description: 'Upright and Trailing',
    color: 'Red, Pink, Yellow,',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Bidens',
    description: 'Mounding 12"-16"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Bridal Veil',
    description: 'Trailing 12"-18"',
    color: 'Purple/White',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Calibrachoa',
    description: 'Mounding/Semi-Trailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Canna',
    description: 'Upright 30"-48"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Celosia',
    description: 'Upright 6"-40"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Cleome',
    description: 'Upright 36"-44"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Coleus',
    description: 'Mounding 8"-18"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Cosmos',
    description: 'Upright 12"-48"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Cuphea',
    description: 'Mounding 10"-24"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Dahlia',
    description: 'Upright/Mounding 8"-22"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Dianthus',
    description: 'Upright 8"-10"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Dichondra',
    description: 'Trailing 40"-60"',
    color: 'Silver/Green',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Dusty Miller',
    description: 'Mounding',
    color: 'Silver/Green',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Fuchsia',
    description: 'Upright and Trailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Fuseable',
    description: 'Petunia/Bacopa mix- Mounding',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Gazania',
    description: 'Upright 8"-10"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Geranium',
    description: 'Upright 12" -22"',
    color: 'Red, White, Pink, Orange',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Gerbera',
    description: 'Mounding/ Large blooms',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Gomphrena',
    description: 'Upright 36"-48"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Grandaisy',
    description: 'Mounding18"-24"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Impatiens',
    description: 'Mounding 10"-28"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Ipomoea/Sweet Potato Vine',
    description: "Trailing 4'-15'",
    color: 'Purple/Green',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Kwik Kombos',
    description: 'Mounding 12"-18"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Lantana',
    description: 'Mounding/Semi-Trailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Lobelia',
    description: 'Mounding 6"- 12"',
    color: 'Blue.Purple, White',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Marigold',
    description: 'Mounding 10"-36"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Melampodium',
    description: 'Mounding 6"-12"',
    color: 'Golden',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Mimulus',
    description: 'Trailing',
    color: 'Mulitcolor',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Nasturtium',
    description: 'Upright and Trailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Nemesia',
    description: 'Mounding 12"-14"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Nicotiana',
    description: 'Mounding 16"20"',
    color: 'Purple',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Ornamental Oregano',
    description: "Trailing 12'-16'",
    color: 'Shades of purple',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Osteospermum',
    description: 'Mounding 6"-24"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Pansy',
    description: 'Upright and Trailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Pentas',
    description: 'Mounding 24"-36"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Petunia',
    description: 'Mounding/Tailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Phlox',
    description: 'Mounding 14"-16"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Portulaca',
    description: 'Trailing 8"-15"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Ptilotus',
    description: 'Mounding 12"-22"',
    color: 'Purple/Pink shades',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Salvia',
    description: 'Upright 15"-20"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Senecio',
    description: 'Mounding 10"-16"',
    color: 'Silver',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Snapdragon',
    description: 'Mounding 6"-12"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Spikes',
    description: 'Upright 24"-36"',
    color: 'Green/Brown',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Stock',
    description: 'Mounding 15"-18"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Sunflower',
    description: 'Upright Dwarf 12"-15"',
    color: 'Yellow',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Supertunia/ PW',
    description: 'Mounding/Tailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Thunbergia',
    description: 'Climbing Vine 72"-96"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Torenia',
    description: 'Mounding 8"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Assorted colors'
  },
  {
    title: 'Trixi Combos',
    description: 'Mounding 12"-18"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Verbena',
    description: 'Upright and Trailing',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
  {
    title: 'Vinca Vine',
    description: 'Trailing 8"-15"',
    color: 'Variegated',
     className:'griditem',
    lightRequirement: 'Sun to Shade'
  },
  {
    title: 'Zinnia',
    description: 'Mounding 6"-40"',
    color: 'Assorted colors',
     className:'griditem',
    lightRequirement: 'Sun'
  },
]
export default function Annuals () {
    return (
        <div>
            <h1>Annuals</h1>
            <FlowersGrid services={services} />
        </div>
    )
}