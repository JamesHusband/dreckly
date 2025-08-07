export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minimumOrder: number;
  featured: boolean;
  address: string;
  description: string;
  reviewCount: number;
  menu: any[];
}

export interface Cuisine {
  id: number;
  name: string;
  description: string;
}

export interface CartItemType {
  id: string;
  restaurantId: string;
  restaurantName: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  deliveryFee: number;
  minimumOrder: number;
}
