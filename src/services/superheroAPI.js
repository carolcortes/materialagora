import axios from 'axios';

const superheroAPI = axios.create({
  baseURL: 'https://www.superheroapi.com/api.php/5557834940960399/',
});

export default superheroAPI;
