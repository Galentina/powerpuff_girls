import axios from 'axios';

// Api request for getting data from server
export const api = Object.freeze({

    async getAllEpisodes() {
        const data = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes');
        return data;
    },
});
