import axios from 'axios';

const url="https://api.themoviedb.org/3"

const instance=axios.create({
    baseURL:url,
})

export default instance;