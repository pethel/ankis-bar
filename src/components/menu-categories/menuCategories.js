import {
  TomatoSauce,
  Cheese,
  Ham,
  Shrimps,
  Onion,
  Mushrooms,
  Pineapple,
  Bacon,
  Egg,
  Bolognese,
  Paprika,
  Olives,
  Artichoke,
  Tuna,
  Banana,
  Curry,
  Asparagus,
  Clams,
  BlackCaviar,
  Salami,
  HotPepper,
  Peperoni,
  Kebab,
  BearniseSauce,
  FilletOfBeef,
  TomatoSlices,
  IcebergLettuce,
  Cucumber,
  Bread,
  Dressing,
  VasterbottenSchnitzel,
  FriedPotatoes,
  ParsleyButter,
  FrenchFries,
  Kalvschnitzel,
  Entrecote,
  Lovbiff,
  GreenPepperSauce,
  Gronpepparbiff,
  PizzaBottom,
  Hamburger,
  BracktSkinka,
  BracktBacon,
  PyttIPanna,
  FriedEgg,
} from './ingridients';

export default [
  {
    name: 'categories.pizza',
    dishes: [
      {
        name: 'dishes.ankisPizza',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Shrimps, Onion]
      },
      {
        name: 'dishes.margherita',
        price: 95,
        ingredients: [TomatoSauce, Cheese]
      },
      {
        name: 'dishes.vezuvio',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham]
      },
      {
        name: 'dishes.capricciosa',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms]
      },
      {
        name: 'dishes.hawaii',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple]
      },
      {
        name: 'dishes.lepini',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Bacon]
      },
      {
        name: 'dishes.fantasi',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Egg]
      },
      {
        name: 'dishes.bolognese',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Bolognese]
      },
      {
        name: 'dishes.venenzia',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Shrimps]
      },
      {
        name: 'dishes.vegetarisk',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Mushrooms, Pineapple, Onion, Paprika, Olives, Artichoke]
      },
      {
        name: 'dishes.portofino',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Tuna, Shrimps]
      },
      {
        name: 'dishes.hockey',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Bolognese, Shrimps]
      },
      {
        name: 'dishes.lagondola',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Bacon, Egg, Onion]
      },
      {
        name: 'dishes.tuttiFrutti',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple, Banana, Curry]
      },
      {
        name: 'dishes.quattro',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps, Asparagus, Clams]
      },
      {
        name: 'dishes.vera',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps, Paprika]
      },
      {
        name: 'dishes.husetsSpecial',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Shrimps, Asparagus, BlackCaviar]
      },
      {
        name: 'dishes.mammaMia',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Salami, Mushrooms, Olives]
      },
      {
        name: 'dishes.panza',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Mushrooms, Shrimps]
      },
      {
        name: 'dishes.hotPepper',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Salami, Onion, Peperoni, HotPepper]
      },
      {
        name: 'dishes.bastia',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Bacon, Mushrooms, Onion, Artichoke]
      },
      {
        name: 'dishes.kebabPizza',
        price: 120,
        ingredients: [TomatoSauce, Cheese, Kebab, Onion, Peperoni, BearniseSauce]
      },
      {
        name: 'dishes.filePizza',
        price: 135,
        ingredients: [TomatoSauce, Cheese, FilletOfBeef, TomatoSlices, Onion, BearniseSauce]
      },
    ]
  },
  {
    name: 'categories.closedPizza',
    dishes: [
      {
        name: 'dishes.calzone',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham]
      },
      {
        name: 'dishes.calzoneCapri',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms]
      },
      {
        name: 'dishes.calzoneVerona',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple, Shrimps]
      },
      {
        name: 'dishes.calzoneSpecial',
        price: 105,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps]
      }
    ]
  },
  {
    name: 'categories.doublePizza',
    dishes: [
      {
        name: 'dishes.veronaForTva',
        price: 180,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple, Shrimps]
      },
      {
        name: 'dishes.specialForTva',
        price: 180,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps]
      },
    ]
  },
  {
    name: 'categories.sallad',
    dishes: [
      {
        name: 'dishes.skinkSallad',
        price: 105,
        ingredients: [Ham, IcebergLettuce, TomatoSlices, Cucumber, Cheese, Bread, Dressing]
      },
      {
        name: 'dishes.rakSallad',
        price: 125,
        ingredients: [Shrimps, IcebergLettuce, TomatoSlices, Cucumber, Cheese, Bread, Dressing]
      },
      {
        name: 'dishes.tonfiskSallad',
        price: 115,
        ingredients: [Tuna, IcebergLettuce, TomatoSlices, Cucumber, Cheese, Bread, Dressing]
      }
    ]
  },
  {
    name: 'categories.alCarte',
    dishes: [
      {
        name: 'dishes.vasterbottenSchnitzel',
        price: 165,
        ingredients: [VasterbottenSchnitzel, FriedPotatoes, ParsleyButter]
      },
      {
        name: 'dishes.kalvschnitzel',
        price: 155,
        ingredients: [Kalvschnitzel, FriedPotatoes, ParsleyButter]
      },
      {
        name: 'dishes.oxfile',
        price: 215,
        ingredients: [FilletOfBeef, FrenchFries, BearniseSauce]
      },
      {
        name: 'dishes.entrecote',
        price: 190,
        ingredients: [Entrecote, FrenchFries, BearniseSauce]
      },
      {
        name: 'dishes.lovbiff',
        price: 180,
        ingredients: [Lovbiff, FrenchFries, ParsleyButter]
      },
      {
        name: 'dishes.gronpepparbiff',
        price: 110,
        ingredients: [Gronpepparbiff, FriedPotatoes, GreenPepperSauce]
      },
      {
        name: 'dishes.kebabrulle',
        price: 115,
        ingredients: [PizzaBottom, TomatoSauce, Cheese, Kebab, IcebergLettuce, TomatoSlices, Cucumber, Onion, Peperoni, Dressing]
      },
      {
        name: 'dishes.kebabtallrik',
        price: 115,
        ingredients: [Kebab, FrenchFries, IcebergLettuce, TomatoSlices, Cucumber, Onion, Peperoni, Dressing]
      },
      {
        name: 'dishes.skrovmal90',
        price: 105,
        ingredients: [Hamburger, FrenchFries]
      },
      {
        name: 'dishes.skrovmal150',
        price: 110,
        ingredients: [Hamburger, FrenchFries]
      },
      {
        name: 'dishes.bracktSkinka',
        price: 105,
        ingredients: [BracktSkinka, FriedPotatoes, FriedEgg]
      },
      {
        name: 'dishes.bracktBacon',
        price: 105,
        ingredients: [BracktBacon, FriedPotatoes, FriedEgg]
      },
      {
        name: 'dishes.pyttIPanna',
        price: 105,
        ingredients: [PyttIPanna, FriedEgg]
      }
    ]
  }
]
