//import styles
import '../../../styles/index.scss';
//storage
import {storage} from "../../storage";
//import all needed components
import {getAllEpisodes} from "./getAllEpisodes";
import {addEpisode} from "../../help/addEpisode";
import {addLinkNav} from "../../help/addLinkNav";

//request for getting data from server; set data to storage
const allEpisodes = async () => {
    try {
        const episodes = await getAllEpisodes();
        storage.setItems('episodes', episodes._embedded.episodes);
    } catch (error) { console.log(error.message); }
};

//call function creat all windows for all episodes
allEpisodes();

//take data for storage to create nav links to original movies
const allEp = document.getElementById('allEp');
const allItems = storage.getItems('episodes');
addLinkNav();
allItems.forEach((item, index) => {
    const newEpisode = addEpisode(item, index);
    allEp.insertAdjacentHTML('beforeend', newEpisode);
});

//going though all episodes and creating links for second page with description for any episode
for (let i=0; i<allItems.length; i++) {
    const aboutEpisode = document.getElementById(`${i}I`);

    aboutEpisode.addEventListener('click',()=> {
        storage.setItems('curentItem', allItems[i]);
        setTimeout(() => {
            window.location.href = 'episode.html';
        }, 300);
    } );
}



