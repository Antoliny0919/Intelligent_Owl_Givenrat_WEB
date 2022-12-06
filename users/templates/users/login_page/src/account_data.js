export async function accountLogin() {
  const response = await fetch(`http://127.0.0.1:8000/account/`)
  const user = await response.json();
  return user
}