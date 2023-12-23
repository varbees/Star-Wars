import axios from 'axios';
axios.defaults.baseURL = 'https://swapi.dev/api/';

const getData = async type => {
  const res = await axios.get(type);
  const data = await res.data.results;
  return data;
};

export { getData };
