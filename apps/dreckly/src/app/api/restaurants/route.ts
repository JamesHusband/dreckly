import { restaurantData } from '@dreckly/data-access';

export async function GET(request: Request) {
  const restaurants = restaurantData;

  return new Response(JSON.stringify(restaurants), {
    headers: { 'Content-Type': 'application/json' },
  });
}
