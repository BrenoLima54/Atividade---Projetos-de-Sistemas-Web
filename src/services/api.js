export async function getFighterById(id) {
  const response = await fetch(
    "https://v1.mma.api-sports.io/fighters?id=" + id,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.mma.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data.response[0];
  }
}

export async function searchFighterByName(name) {
  if (name.length < 3) return;

  const response = await fetch(
    "https://v1.mma.api-sports.io/fighters?search=" + name,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.mma.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data.response;
  }
}
