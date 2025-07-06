export interface BaseRestaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  featured: boolean;
}

export interface Restaurant extends BaseRestaurant {
  menu: MenuCategory[];
  description: string;
  reviewCount: number;
  address: string;
  minimumOrder: number;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  ageRestricted?: boolean;
}
