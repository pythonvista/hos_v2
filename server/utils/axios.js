const axios = require('axios');

const useAxios = axios.create({
    baseURL: 'https://medfestapi.vercel.app/api/v1/',
    headers: { 'authorization': 'xmnopqrst' }
});


module.exports = useAxios;