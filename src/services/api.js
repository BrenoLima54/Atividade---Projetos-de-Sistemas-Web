import axios from "axios";

const dotenv = import.meta.env;
export async function fetchAthletes(search) {
  try {
    const response = await axios.get(
      `${dotenv.VITE_API_URL}/fighters?search=${search}`,
      {
        headers: { "x-rapidapi-key": dotenv.VITE_API_KEY },
      }
    );
    console.log(response.data);
    return response.data.response;
  } catch (error) {
    console.error("Erro na busca de atletas:", error);
    return [];
  }
}
