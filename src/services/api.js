import axios from 'axios';

const API_URL = 'https://v1.mma.api-sports.io/fighters?id=';
const API_KEY = '2165239fd0477aa6447448dcd51a3aa5';

export async function fetchAthletes(search) {
  try {
    const response = await axios.get(`https://v1.mma.api-sports.io/fighters?search=${search}`, {
      headers: {
        'x-apisports-key': API_KEY
      }
    });
    console.log(response.data);
    return response.data.response;
  } catch (error) {
    console.error('Erro na busca de atletas:', error);
    return [];
  }
}

