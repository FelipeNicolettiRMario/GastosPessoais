import axios from 'axios';

const apiURL = axios.create({
    baseURL:"http://localhost:3333"
});

export default apiURL;
