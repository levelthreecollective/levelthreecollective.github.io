import { episodeData } from './episode_data.js';

function loadEpisodes(episodeData) {
    const episodeList = document.querySelector('.episode-list');
    
    console.log(window.innerWidth < 1000);
    console.log(window.innerWidth);
    if (window.innerWidth < 1000) {
        const col = document.createElement('episodeColumn');
        Object.values(episodeData).reverse().forEach((episode,index) => {
            const episodeItem = createEpisodeItem(episode);
            // Append the item to the gallery container
            col.appendChild(episodeItem);
            episodeList.appendChild(col);
     
        });
    } else if (window.innerWidth >= 1000) {
        const column1 = document.createElement('episodeColumn1');
        const column2 = document.createElement('episodeColumn2');

        Object.values(episodeData).reverse().forEach((episode,index) => {
            const episodeItem = createEpisodeItem(episode);
            // Append the item to the gallery container

            if (index % 2 === 0) {
                column1.appendChild(episodeItem);
            } else {
                column2.appendChild(episodeItem);
            }
            episodeList.appendChild(column1);
            episodeList.appendChild(column2);
        });
    }
}

function windowRefresh() {
    let wasAbove1000 = window.innerWidth >= 1000;
    window.addEventListener('resize', function() {

        const isAbove1000 = window.innerWidth >= 1000;

        if (isAbove1000 !== wasAbove1000) {
            window.location.reload();
        }

        wasAbove1000 = isAbove1000;

    });
}

function createEpisodeItem(episode) {
    // Create a container for each image and caption
    const episodeItem = document.createElement('div');
    episodeItem.className = 'episode-item';

    // Create and append the image
    const episodeLink = document.createElement('a');
    episodeLink.href = episode.link;

    const img = document.createElement('img');
    img.src = episode.cover;
    img.className = 'episode-image';
    episodeLink.appendChild(img);
    episodeItem.appendChild(episodeLink);
    
    // Create and append Name
    const episodeLink2 = document.createElement('a');
    episodeLink2.className = 'episode-link';
    episodeLink2.href = episode.link;

    const nameh2 = document.createElement('h2');
    nameh2.className = 'episode-name';
    nameh2.textContent = episode.name;
    episodeLink2.appendChild(nameh2);
    episodeItem.appendChild(episodeLink2);

    // Create and append the caption
    const captionDiv = document.createElement('div');
    captionDiv.className = 'episode-bio';
    captionDiv.textContent = episode.caption;
    episodeItem.appendChild(captionDiv);

    return episodeItem;
}

// Call this function when you want to load the gallery
loadEpisodes(episodeData);
windowRefresh();