import { restaurantData } from '@dreckly/data-access';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  const restaurant = restaurantData.find((r) => String(r.id) === id);

  if (!restaurant) {
    return new Response(JSON.stringify({ error: 'Restaurant not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(restaurant), {
    headers: { 'Content-Type': 'application/json' },
  });
}
