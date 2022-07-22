import axios from 'axios';

const getCharacters = async (
  apiUrl = 'https://rickandmortyapi.com/api/character'
) => {
  const responseApi = await axios.get(apiUrl);
  const data = responseApi.data.results;
  const prev = responseApi.data.info.prev;
  const next = responseApi.data.info.next;
  return { prev, data, next };
};

const RickAndMortyService = {
  getCharacters: getCharacters,
};

export default RickAndMortyService;
