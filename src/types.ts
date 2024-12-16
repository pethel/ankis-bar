export type Tab =
  | 'pizza'
  | 'inbakadPizza'
  | 'dubbelInbakadPizza'
  | 'sallad'
  | 'aLaCarte';

export interface Dish {
  name: string;
  price: number;
  ingredients: string[];
}

export interface FoodCategory {
  name: string;
  dishes: Dish[];
}
