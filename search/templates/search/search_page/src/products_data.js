export async function getProducts({nextPage='', searchKeyWord=''}) {
  let query;
  if (searchKeyWord !== '') {
    query = `${searchKeyWord}`;
  } else {
    query = `${nextPage}${searchKeyWord}`
  }
  const response = await fetch(`http://127.0.0.1:8000/products/?${query}`);
  const products = await response.json();
  return products
}