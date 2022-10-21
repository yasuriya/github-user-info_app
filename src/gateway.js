const API_URL = 'https://api.github.com/users'

export async function fetchData(userId) {
  const response = await fetch(`${API_URL}/${userId}`)
  const data = await response.json()
  return data
}
