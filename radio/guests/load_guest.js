import { guestData } from './guest_data.js';

function loadGuests(guestData) {
    const guestList = document.querySelector('.guest-list');
    const column1 = document.getElementById('guestColumn1');
    const column2 = document.getElementById('guestColumn2');

    Object.values(guestData).forEach((guest,index) => {
        const guestItem = createGuestItem(guest);
        // Append the item to the gallery container
        if (index % 2 === 0) {
            column1.appendChild(guestItem);
        } else {
            column2.appendChild(guestItem);
        }
        // guestList.appendChild(guestItem);
        guestList.appendChild(column1);
        guestList.appendChild(column2);
    });
}

function createGuestItem(guest) {
    // Create a container for each image and caption
    const guestItem = document.createElement('div');
    guestItem.className = 'guest-item';

    // Create and append the image
    const profileLink = document.createElement('a');
    profileLink.href = guest.link;

    const img = document.createElement('img');
    img.src = guest.profilePic;
    img.className = 'guest-image';
    profileLink.appendChild(img);
    guestItem.appendChild(profileLink);
    
    // Create and append Name
    const nameh2 = document.createElement('h2');
    nameh2.className = 'guest-name';
    nameh2.textContent = guest.name;
    guestItem.appendChild(nameh2);

    // Create and append the caption
    const captionDiv = document.createElement('div');
    captionDiv.className = 'guest-bio';
    captionDiv.textContent = guest.bio;
    guestItem.appendChild(captionDiv);

    return guestItem;
}

// Call this function when you want to load the gallery
loadGuests(guestData);
