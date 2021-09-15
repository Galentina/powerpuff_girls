import {storage} from "../storage";

// function for creating all links on Navigation bar from data taken from server
export const addLinkNav = () => {

    const allItems = storage.getItems('episodes');
    const allLinks = document.getElementById('allLinks');
    allLinks.innerHTML = '';
    allItems.map((episode, index) => {
        const newEpA = `<a  href="${episode.url}" target="_blank">
            <p class="movie_bar__aLink">
            <span>${index+1}</span>&nbsp;-&nbsp;
            <span style="display: block">${episode.name}</span>
            </p>
            </a>`;
        allLinks.insertAdjacentHTML('beforeend', newEpA);
    });
};
