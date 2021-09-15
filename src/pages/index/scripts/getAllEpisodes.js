import {api} from "../../api/api";

// Api request for getting all episodes from server
export const getAllEpisodes = async () => {
    try {
        const data = await api.getAllEpisodes();
        return data.data;
    } catch (error) { console.log(error.message); }
};
