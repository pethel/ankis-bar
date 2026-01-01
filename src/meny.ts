import { Tab, FoodCategory } from './types';

export const meny: { [K in Tab]: FoodCategory } = {
  pizza: {
    name: 'Pizza',
    dishes: [
      {
        name: "Anki's Pizza",
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'räkor', 'lök'],
      },
      {
        name: 'Margherita',
        price: 120,
        ingredients: ['tomatsås', 'ost'],
      },
      {
        name: 'Vesuvio',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka'],
      },
      {
        name: 'Capricciosa',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner'],
      },
      {
        name: 'Hawaii',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas'],
      },
      {
        name: 'Lepini',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'bacon'],
      },
      {
        name: 'Fantasi',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ägg'],
      },
      {
        name: 'Bolognese',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'köttfärssås'],
      },
      {
        name: 'Venezia',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'räkor'],
      },
      {
        name: 'Vegetarisk',
        price: 125,
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
        price: 125,
        ingredients: ['tomatsås', 'ost', 'tonfisk', 'räkor'],
      },
      {
        name: 'Hockey',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'köttfärssås', 'räkor'],
      },
      {
        name: 'Lagondola',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'bacon', 'ägg', 'lök'],
      },
      {
        name: 'Tutti Frutti',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas', 'banan', 'curry'],
      },
      {
        name: 'Quattro',
        price: 125,
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
        price: 135,
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
        price: 135,
        ingredients: ['tomatsås', 'ost', 'räkor', 'sparris', 'svart kaviar'],
      },
      {
        name: 'Mamma Mia',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'salami', 'champinjoner', 'oliver'],
      },
      {
        name: 'Panza',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'champinjoner', 'räkor'],
      },
      {
        name: 'Hot Pepper',
        price: 135,
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
        price: 125,
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
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka'],
      },
      {
        name: 'Calzone Capri',
        price: 125,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner'],
      },
      {
        name: 'Calzone Verona',
        price: 135,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas', 'räkor'],
      },
      {
        name: 'Calzone Special',
        price: 135,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner', 'räkor'],
      },
    ],
  },
  dubbelInbakadPizza: {
    name: 'Dubbel inbakad pizza',
    dishes: [
      {
        name: 'Verona för två',
        price: 220,
        ingredients: ['tomatsås', 'ost', 'skinka', 'ananas', 'räkor'],
      },
      {
        name: 'Special för två',
        price: 220,
        ingredients: ['tomatsås', 'ost', 'skinka', 'champinjoner', 'räkor'],
      },
    ],
  },
  sallad: {
    name: 'Sallad',
    dishes: [
      {
        name: 'Skinksallad',
        price: 130,
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
        price: 150,
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
        price: 140,
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
        price: 209,
        ingredients: [
          'fläskschnitzel fylld med Västerbottensost',
          'stekt potatis',
          'persiljesmör',
        ],
      },
      {
        name: 'Kalvschnitzel',
        price: 209,
        ingredients: ['kalvschnitzel', 'stekt potatis', 'persiljesmör'],
      },
      {
        name: 'Oxfilé',
        price: 309,
        ingredients: ['oxfilé', 'pommes frites', 'bearnaisesås'],
      },
      {
        name: 'Entrecôte',
        price: 290,
        ingredients: ['entrecôte', 'pommes frites', 'bearnaisesås'],
      },
      {
        name: 'Lövbiff',
        price: 200,
        ingredients: [
          'lövbiff gjord på oxfilé',
          'pommes frites',
          'persiljesmör',
        ],
      },
      {
        name: 'Grönpepparbiff',
        price: 140,
        ingredients: ['färsbiff', 'stekt potatis', 'grönpepparsås'],
      },
      {
        name: 'Kebabrulle',
        price: 135,
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
        price: 145,
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
        price: 125,
        ingredients: ['hamburgare', 'pommes frites'],
      },
      {
        name: 'Skrovmål 150g',
        price: 135,
        ingredients: ['hamburgare', 'pommes frites'],
      },
      {
        name: 'Bräckt skinka',
        price: 130,
        ingredients: ['bräckt skinka', 'stekt potatis', 'stekt ägg'],
      },
      {
        name: 'Bräckt bacon',
        price: 130,
        ingredients: ['bräckt bacon', 'stekt potatis', 'stekt ägg'],
      },
      {
        name: 'Pytt i panna',
        price: 125,
        ingredients: ['pytt i panna', 'stekt ägg'],
      },
    ],
  },
};
