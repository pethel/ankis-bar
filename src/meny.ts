import { Tab, FoodCategory } from './types';

export const meny: { [K in Tab]: FoodCategory } = {
  pizza: {
    name: 'Pizza',
    dishes: [
      {
        name: "Anki's Pizza",
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'räkor', 'lök'],
      },
      {
        name: 'Margherita',
        price: 110,
        ingredients: ['tomatsås', 'ost'],
      },
      {
        name: 'Vesuvio',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka'],
      },
      {
        name: 'Capricciosa',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner'],
      },
      {
        name: 'Hawaii',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas'],
      },
      {
        name: 'Lepini',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'bacon'],
      },
      {
        name: 'Fantasi',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ägg'],
      },
      {
        name: 'Bolognese',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'köttfärssås'],
      },
      {
        name: 'Venezia',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'räkor'],
      },
      {
        name: 'Vegetarisk',
        price: 115,
        ingredients: [
          'tomatsås',
          'ost',
          'champinjoner',
          'ananas',
          'lök',
          'paprika',
          'oliver',
          'kronärtskocka',
        ],
      },
      {
        name: 'Portofino',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'tonfisk', 'räkor'],
      },
      {
        name: 'Hockey',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'köttfärssås', 'räkor'],
      },
      {
        name: 'Lagondola',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'bacon', 'ägg', 'lök'],
      },
      {
        name: 'Tutti Frutti',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas', 'banan', 'curry'],
      },
      {
        name: 'Quattro',
        price: 115,
        ingredients: [
          'tomatsås',
          'ost',
          'skinka',
          'champinjoner',
          'räkor',
          'sparris',
          'musslor',
        ],
      },
      {
        name: 'Vera',
        price: 125,
        ingredients: [
          'tomatsås',
          'ost',
          'skinka',
          'champinjoner',
          'räkor',
          'paprika',
        ],
      },
      {
        name: 'Husets Special',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'räkor', 'sparris', 'svart kaviar'],
      },
      {
        name: 'Mamma Mia',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'salami', 'champinjoner', 'oliver'],
      },
      {
        name: 'Panza',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'champinjoner', 'räkor'],
      },
      {
        name: 'Hot Pepper',
        price: 125,
        ingredients: [
          'tomatsås',
          'ost',
          'skinka',
          'salami',
          'lök',
          'peperoni',
          'stark paprika',
        ],
      },
      {
        name: 'Bastia',
        price: 115,
        ingredients: [
          'tomatsås',
          'ost',
          'skinka',
          'bacon',
          'champinjoner',
          'lök',
          'kronärtskocka',
        ],
      },
      {
        name: 'Kebabpizza',
        price: 125,
        ingredients: [
          'tomatsås',
          'ost',
          'kebab',
          'lök',
          'peperoni',
          'bearnaisesås',
        ],
      },
      {
        name: 'Filépizza',
        price: 155,
        ingredients: [
          'tomatsås',
          'ost',
          'oxfilé',
          'tomatskivor',
          'lök',
          'bearnaisesås',
        ],
      },
    ],
  },
  inbakadPizza: {
    name: 'Inbakad pizza',
    dishes: [
      {
        name: 'Calzone',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka'],
      },
      {
        name: 'Calzone Capri',
        price: 115,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner'],
      },
      {
        name: 'Calzone Verona',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas', 'räkor'],
      },
      {
        name: 'Calzone Special',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner', 'räkor'],
      },
    ],
  },
  dubbelInbakadPizza: {
    name: 'Dubbel inbakad pizza',
    dishes: [
      {
        name: 'Verona för två',
        price: 210,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas', 'räkor'],
      },
      {
        name: 'Special för två',
        price: 210,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner', 'räkor'],
      },
    ],
  },
  sallad: {
    name: 'Sallad',
    dishes: [
      {
        name: 'Skinksallad',
        price: 120,
        ingredients: [
          'skinka',
          'isbergssallad',
          'tomatskivor',
          'gurka',
          'ost',
          'bröd',
          'dressing',
        ],
      },
      {
        name: 'Räksallad',
        price: 140,
        ingredients: [
          'räkor',
          'isbergssallad',
          'tomatskivor',
          'gurka',
          'ost',
          'bröd',
          'dressing',
        ],
      },
      {
        name: 'Tonfisksallad',
        price: 130,
        ingredients: [
          'tonfisk',
          'isbergssallad',
          'tomatskivor',
          'gurka',
          'ost',
          'bröd',
          'dressing',
        ],
      },
    ],
  },
  aLaCarte: {
    name: 'À la carte',
    dishes: [
      {
        name: 'Västerbottenschnitzel',
        price: 199,
        ingredients: [
          'fläskschnitzel fylld med Västerbottensost',
          'stekt potatis',
          'persiljesmör',
        ],
      },
      {
        name: 'Kalvschnitzel',
        price: 199,
        ingredients: ['kalvschnitzel', 'stekt potatis', 'persiljesmör'],
      },
      {
        name: 'Oxfilé',
        price: 299,
        ingredients: ['oxfilé', 'pommes frites', 'bearnaisesås'],
      },
      {
        name: 'Entrecôte',
        price: 280,
        ingredients: ['entrecôte', 'pommes frites', 'bearnaisesås'],
      },
      {
        name: 'Lövbiff',
        price: 190,
        ingredients: [
          'lövbiff gjord på oxfilé',
          'pommes frites',
          'persiljesmör',
        ],
      },
      {
        name: 'Grönpepparbiff',
        price: 130,
        ingredients: ['färsbiff', 'stekt potatis', 'grönpepparsås'],
      },
      {
        name: 'Kebabrulle',
        price: 125,
        ingredients: [
          'pizzabotten',
          'tomatsås',
          'ost',
          'kebab',
          'isbergssallad',
          'tomatskivor',
          'gurka',
          'lök',
          'peperoni',
          'dressing',
        ],
      },
      {
        name: 'Kebabtallrik',
        price: 135,
        ingredients: [
          'kebab',
          'pommes frites',
          'isbergssallad',
          'tomatskivor',
          'gurka',
          'lök',
          'peperoni',
          'dressing',
        ],
      },
      {
        name: 'Skrovmål 90g',
        price: 115,
        ingredients: ['hamburgare', 'pommes frites'],
      },
      {
        name: 'Skrovmål 150g',
        price: 125,
        ingredients: ['hamburgare', 'pommes frites'],
      },
      {
        name: 'Bräckt skinka',
        price: 120,
        ingredients: ['bräckt skinka', 'stekt potatis', 'stekt ägg'],
      },
      {
        name: 'Bräckt bacon',
        price: 120,
        ingredients: ['bräckt bacon', 'stekt potatis', 'stekt ägg'],
      },
      {
        name: 'Pytt i panna',
        price: 115,
        ingredients: ['pytt i panna', 'stekt ägg'],
      },
    ],
  },
};
