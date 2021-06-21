import axios from 'axios';

const KEY = 'AIzaSyD_RyjxEwZT4KDL5dJEmUHqLPFFZwIMpl4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})

