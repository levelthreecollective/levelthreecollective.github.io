import { episodeData } from './episode_data.js';

function loadEpisodes(episodeData) {
    const episodeList = document.querySelector('.episode-list');
    const column1 = document.getElementById('episodeColumn1');
    const column2 = document.getElementById('episodeColumn2');

    Object.values(episodeData).forEach((episode,index) => {
        const episodeItem = createEpisodeItem(episode);
        // Append the item to the gallery container
        if (index % 2 === 0) {
            column1.appendChild(episodeItem);
        } else {
            column2.appendChild(episodeItem);
        }
        // episodeList.appendChild(episodeItem);
        episodeList.appendChild(column1);
        episodeList.appendChild(column2);
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
