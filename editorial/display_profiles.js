import { editorialData } from './editorial_data.js';

function loadProfiles(editorialData) {
    const profileList = document.querySelector('.episode-list');

    if (window.innerWidth < 1000) {
        const col = document.createElement('episodeColumn');
        Object.values(editorialData).forEach((profile,index) => {
            const profileItem = createProfileItem(profile);
            // Append the item to the gallery container
            col.appendChild(profileItem);
            profileList.appendChild(col);
     
        });
    } else if (window.innerWidth >= 1000) {
        const column1 = document.createElement('episodeColumn1');
        const column2 = document.createElement('episodeColumn2');
        console.log(column1);
        Object.values(editorialData).forEach((profile,index) => {
            const profileItem = createProfileItem(profile);
            // Append the item to the gallery container
            console.log(profileItem)
            if (index % 2 === 0) {
                column1.appendChild(profileItem);
            } else {
                column2.appendChild(profileItem);
            }
            profileList.appendChild(column1);
            profileList.appendChild(column2);
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

function createProfileItem(profile) {
    // Create a container for each image and caption
    const profileItem = document.createElement('div');
    profileItem.className = 'episode-item';

    // Create and append the image
    const profileLink = document.createElement('a');
    profileLink.href = `profile/?profile=${profile.id}`;
    console.log(`profile/?profile=${profile.id}`);

    const img = document.createElement('img');
    img.src = profile.cover;
    img.className = 'episode-image';
    profileLink.appendChild(img);
    profileItem.appendChild(profileLink);
    
    // Create and append Name
    const profileLink2 = document.createElement('a');
    profileLink2.className = 'profile-link';
    profileLink2.href = `profile/?profile=${profile.id}`;

    // const nameh2 = document.createElement('h2');
    // nameh2.className = 'profile-name';
    // nameh2.textContent = profile.title;
    // profileLink2.appendChild(nameh2);
    // profileItem.appendChild(profileLink2);

    // Create and append the caption
    // const captionDiv = document.createElement('div');
    // captionDiv.className = 'profile-bio';
    // captionDiv.textContent = profile.caption;
    // profileItem.appendChild(captionDiv);

    // const readMore = document.createElement('a');
    // readMore.className = '.editorial-read';
    // readMore.textContent = `Read more \u2192`;
    // readMore.href = `profile/?profile=${profile.id}`;
    // profileItem.appendChild(readMore)

    return profileItem;
}

// Call this function when you want to load the gallery
loadProfiles(editorialData);
windowRefresh();
