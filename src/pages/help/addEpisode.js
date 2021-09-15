
// creating space for each episode on the main (index.html) page

export const addEpisode = (episode, index) => {
    const newEpDiv = `<div class="movie">
            <img id="${index}I" class="movie__image" src=${episode.image.medium} alt="" 
            title="Click on the picture to see a description of the episode">
            <div id="${index}N" class="movie__title">${episode.name}</div>
            <div class="movie__info">
              </div>
              <div>
                <a href=${episode.url} class="movie__link" target="_blank">Don't miss this episode</a>
              </div>
            
          </div>`;

    return newEpDiv;
};
