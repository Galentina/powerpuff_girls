//import styles
import '../../../styles/index.scss';
//local storage
import {storage} from "../../storage";
//import needed component
import {addLinkNav} from "../../help/addLinkNav";


const currentEpisode = storage.getItems('curentItem');
//take data for storage to create nav links to original movies
const allItems = storage.getItems('episodes');
addLinkNav();

// connection to all needed elements by id from html file
const title = document.getElementById('epTitle');
const epNumber = document.getElementById('epNumber');
const imageEp = document.getElementById('imageEp');
const epDescr = document.getElementById('epDescr');

//show first element on Episode page in case if there is no any chosen episode for showing
if (!currentEpisode) {
    title.innerHTML = allItems[0].name;
    epNumber.querySelector('span').innerHTML = allItems[0].number;
    imageEp.src = allItems[0].image.original;
    epDescr.querySelector('p').innerHTML = allItems[0].summary;
}
// show chosen episode on the Episode page
else {
    title.innerHTML = currentEpisode.name;
    epNumber.querySelector('span').innerHTML = currentEpisode.number;
    imageEp.src = currentEpisode.image.original;
    epDescr.querySelector('p').innerHTML = currentEpisode.summary;
}

