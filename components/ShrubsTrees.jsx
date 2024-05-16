import FlowersGrid from "./FlowersGrid";
const services = [
    {
      "type": "Fruit Trees",
      "title": "Apple, Braeburn",
      "description": "Medium to large fruits are green-striped with dark red.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Cortland",
      "description": "Bears heavy crops of large red-striped fruit with white flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Empire",
      "description": "Medium sized dark red, striped fruit.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Fuji",
      "description": "Medium sized fruits are reddish-green in color.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Gala",
      "description": "Medium sized fruits have golden-yellow skin with reddish blush.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Granny Smith",
      "description": "Large, waxy, smooth green skin with small white lenticels.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Honeycrisp",
      "description": "Very large fruits are scarlet-red over a yellow background.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Honeygold",
      "description": "Golden with red blush, very sweet.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, McIntosh",
      "description": "Medium to large, nearly round fruit with bright red skin.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Pink Lady",
      "description": "Attractive pink blush over a yellow undertone.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Red Delicious",
      "description": "Medium to large with red to striped skin.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, State Fair",
      "description": "Medium-sized fruit striped with reddish-orange over a yellow background.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Wealthy",
      "description": "Large red-skinned fruit with white pink-veined flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Wolf River",
      "description": "Pale yellow skin with a dull red blush on enormous fruit.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Yellow Delicious",
      "description": "Large with clear yellow skin, similar in shape to 'Red Delicious'.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apple, Zestar",
      "description": "Mostly red, crisp, with sweet and tart taste.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apricot, Chinese Mormon",
      "description": "Medium sized fruit with yellow to medium orange color and a red blush.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Apricot, Moorpark",
      "description": "Juicy, sweet fruit. Good for fresh eating, drying or canning.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Cherry, Montmorency",
      "description": "Fruit is large with brilliant red skin and firm yellow flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Cherry, North Star",
      "description": "A genetic dwarf, excellent for the home garden.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Peach, Contender",
      "description": "Zone 4 hardiness.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Pear, Bartlett",
      "description": "Medium to large yellow fruit with sweet and tender flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Pear, Summercrisp",
      "description": "Medium-sized fruit with green skin and crisp sweet flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Plum, Methley",
      "description": "Small to medium fruit with reddish skin and red flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Plum, Stanley",
      "description": "Large dark blue fruits with sweet, greenish-yellow, juicy flesh.",
      "className": "griditem"
    },
    {
      "type": "Fruit Trees",
      "title": "Plum, Toka",
      "description": "Large red-skinned fruits with yellow flesh.",
      "className": "griditem"
    }
  ]
const evergreens=[
    {
      type: "Evergreens",
      title: "Pine, White",
      description: "Soft, bluish-green needles large specimen tree.",
      className: "griditem"
    },
    {
      type: "Evergreens",
      title: "Spruce, Norway",
      description: "Pyramidal shape and drooping branches, specimen tree.",
      className: "griditem"
    }
  ]

const shade=[
    {
      type: "Ornamental/Shade Trees",
      title: "Althea, Magenta Chiffon Tree",
      description: "Magenta-purple powderpuff blooms; tree form.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Birch, Whitespire Clump",
      description: "Borer resistant white birch with a pyramidal growth habit.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Cherry, Pink Weeping (3' Graft)",
      description: "Showy double pink flowers, low-grafted at about 3'.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Cherry, Pink Weeping (6' Graft)",
      description: "Showy double pink flowers, high-grafted at about 6'.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Crabapple, Coralburst",
      description: "Coral-pink buds open to double pink flowers.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Crabapple, Prairie Fire",
      description: "Single pink/red flowers.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Hydrangea, Little Lime Tree",
      description: "Flowers open soft green and fade to pink/burgundy; tree form.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Hydrangea, Pinky Winky Tree",
      description: "Two toned flower heads white/pink; tree form.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Lilac, Bloomerang Dark Purple Tree",
      description: "Reblooming dark purple flowers; tree form.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Maple, Autumn Blaze",
      description: "Great orange-red fall color.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Maple, Crimson King",
      description: "Dark red leaf color throughout the growing season.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Maple, Green Mountain Sugar",
      description: "Range of yellow to red fall color, good heat tolerance.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Maple, October Glory",
      description: "Fall color is brilliant orange or red.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Maple, Red",
      description: "Foliage turns yellow to bright red in the fall.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Maple, Silver",
      description: "Foliage is bright green with yellowish fall color.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Mountain Ash, Cardinal Royal",
      description: "Bright red fruits in August to September.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Ninebark, Diabolo Tree",
      description: "Stunning deep purple foliage.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Redbud, Eastern Tree Form",
      description: "Rosy-pink flowers appear on bare branches in spring.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Serviceberry, Autumn Brilliance (Tree)",
      description: "Fall color is yellow to gold, sometimes orange to red.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Smoketree, Royal Purple",
      description: "Velvety purple foliage all season long.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Sycamore, American",
      description: "Exfoliating tree bark provides unique winter interest.",
      className: "griditem"
    },
    {
      type: "Ornamental/Shade Trees",
      title: "Tulip Tree",
      description: "Foliage is bright green in summer and turns yellow in fall.",
      className: "griditem"
    }
  ]
    
export default function ShrubsTrees () {
    return (
        <div>
            <h1>Fruit Trees</h1>
            <FlowersGrid services={services} />
            <h1>Evergreens</h1>
            <FlowersGrid services={evergreens} />
            <h1>Ornamental & Shade Trees</h1>
            <FlowersGrid services={shade} />
            <h1></h1>
        </div>
    )
}