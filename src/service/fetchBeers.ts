export async function fetchBeers(page: number = 1) {
  let res = null;

  res = await fetch(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=25`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch beers");
  }
  return res.json();
}
