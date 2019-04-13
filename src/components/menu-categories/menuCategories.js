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
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Shrimps, Onion]
      },
      {
        name: 'dishes.margherita',
        price: 75,
        ingredients: [TomatoSauce, Cheese]
      },
      {
        name: 'dishes.vezuvio',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham]
      },
      {
        name: 'dishes.capricciosa',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms]
      },
      {
        name: 'dishes.hawaii',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple]
      },
      {
        name: 'dishes.lepini',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Bacon]
      },
      {
        name: 'dishes.fantasi',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Egg]
      },
      {
        name: 'dishes.bolognese',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Bolognese]
      },
      {
        name: 'dishes.venenzia',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Shrimps]
      },
      {
        name: 'dishes.vegetarisk',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Mushrooms, Pineapple, Onion, Paprika, Olives, Artichoke]
      },
      {
        name: 'dishes.portofino',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Tuna, Shrimps]
      },
      {
        name: 'dishes.hockey',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Bolognese, Shrimps]
      },
      {
        name: 'dishes.lagondola',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Bacon, Egg, Onion]
      },
      {
        name: 'dishes.tuttiFrutti',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple, Banana, Curry]
      },
      {
        name: 'dishes.quattro',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps, Asparagus, Clams]
      },
      {
        name: 'dishes.vera',
        price: 90,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps, Paprika]
      },
      {
        name: 'dishes.husetsSpecial',
        price: 90,
        ingredients: [TomatoSauce, Cheese, Shrimps, Asparagus, BlackCaviar]
      },
      {
        name: 'dishes.mammaMia',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Salami, Mushrooms, Olives]
      },
      {
        name: 'dishes.panza',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Mushrooms, Shrimps]
      },
      {
        name: 'dishes.hotPepper',
        price: 90,
        ingredients: [TomatoSauce, Cheese, Ham, Salami, Onion, Peperoni, HotPepper]
      },
      {
        name: 'dishes.bastia',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Bacon, Mushrooms, Onion, Artichoke]
      },
      {
        name: 'dishes.kebabPizza',
        price: 99,
        ingredients: [TomatoSauce, Cheese, Kebab, Onion, Peperoni, BearniseSauce]
      },
      {
        name: 'dishes.filePizza',
        price: 99,
        ingredients: [TomatoSauce, Cheese, FilletOfBeef, TomatoSlices, Onion, BearniseSauce]
      },
    ]
  },
  {
    name: 'categories.closedPizza',
    dishes: [
      {
        name: 'dishes.calzone',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham]
      },
      {
        name: 'dishes.calzoneCapri',
        price: 85,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms]
      },
      {
        name: 'dishes.calzoneVerona',
        price: 90,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple, Shrimps]
      },
      {
        name: 'dishes.calzoneSpecial',
        price: 90,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps]
      }
    ]
  },
  {
    name: 'categories.doublePizza',
    dishes: [
      {
        name: 'dishes.veronaForTva',
        price: 170,
        ingredients: [TomatoSauce, Cheese, Ham, Pineapple, Shrimps]
      },
      {
        name: 'dishes.specialForTva',
        price: 170,
        ingredients: [TomatoSauce, Cheese, Ham, Mushrooms, Shrimps]
      },
    ]
  },
  {
    name: 'categories.sallad',
    dishes: [
      {
        name: 'dishes.skinkSallad',
        price: 90,
        ingredients: [Ham, IcebergLettuce, TomatoSlices, Cucumber, Cheese, Bread, Dressing]
      },
      {
        name: 'dishes.rakSallad',
        price: 99,
        ingredients: [Shrimps, IcebergLettuce, TomatoSlices, Cucumber, Cheese, Bread, Dressing]
      },
      {
        name: 'dishes.tonfiskSallad',
        price: 99,
        ingredients: [Tuna, IcebergLettuce, TomatoSlices, Cucumber, Cheese, Bread, Dressing]
      }
    ]
  },
  {
    name: 'categories.alCarte',
    dishes: [
      {
        name: 'dishes.vasterbottenSchnitzel',
        price: 149,
        ingredients: [VasterbottenSchnitzel, FriedPotatoes, ParsleyButter]
      },
      {
        name: 'dishes.kalvschnitzel',
        price: 145,
        ingredients: [Kalvschnitzel, FriedPotatoes, ParsleyButter]
      },
      {
        name: 'dishes.oxfile',
        price: 199,
        ingredients: [FilletOfBeef, FrenchFries, BearniseSauce]
      },
      {
        name: 'dishes.entrecote',
        price: 180,
        ingredients: [Entrecote, FrenchFries, BearniseSauce]
      },
      {
        name: 'dishes.lovbiff',
        price: 145,
        ingredients: [Lovbiff, FrenchFries, ParsleyButter]
      },
      {
        name: 'dishes.gronpepparbiff',
        price: 95,
        ingredients: [Gronpepparbiff, FriedPotatoes, GreenPepperSauce]
      },
      {
        name: 'dishes.kebabrulle',
        price: 99,
        ingredients: [PizzaBottom, TomatoSauce, Cheese, Kebab, IcebergLettuce, TomatoSlices, Cucumber, Onion, Peperoni, Dressing]
      },
      {
        name: 'dishes.kebabtallrik',
        price: 99,
        ingredients: [Kebab, FrenchFries, IcebergLettuce, TomatoSlices, Cucumber, Onion, Peperoni, Dressing]
      },
      {
        name: 'dishes.skrovmal90',
        price: 85,
        ingredients: [Hamburger, FrenchFries]
      },
      {
        name: 'dishes.skrovmal150',
        price: 95,
        ingredients: [Hamburger, FrenchFries]
      },
      {
        name: 'dishes.bracktSkinka',
        price: 90,
        ingredients: [BracktSkinka, FriedPotatoes, FriedEgg]
      },
      {
        name: 'dishes.bracktBacon',
        price: 90,
        ingredients: [BracktBacon, FriedPotatoes, FriedEgg]
      },
      {
        name: 'dishes.pyttIPanna',
        price: 85,
        ingredients: [PyttIPanna, FriedEgg]
      }
    ]
  }
]
