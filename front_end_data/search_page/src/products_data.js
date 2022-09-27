export async function getProducts(nextPageQuery) {
  const response = await fetch(`http://127.0.0.1:8000/products/?${nextPageQuery}`);
  const products = await response.json();
  return products
}