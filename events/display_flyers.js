import { eventData } from './event_data.js';

function loadFlyers() {
    const upcoming_gallery = document.querySelector('.flyer-gallery');
    const h2u = document.createElement('h2');
    h2u.textContent = 'UPCOMING';
    h2u.style.borderTop = '5px solid #f9f9f9';
    h2u.style.borderBottom = '5px solid #f9f9f9';
    upcoming_gallery.appendChild(h2u);
    let upcoming_count=0;
    Object.keys(eventData).forEach(key => {
        const event = eventData[key];
        if (event.archive == false) {
            upcoming_count++;
            // Create the anchor tag
            const a = document.createElement('a');
            // a.href = `gallery/?event=${event.id}`;
            a.href = event.link

            // Create the image tag
            const img = document.createElement('img');
            img.src = event.flyerSrc;
            img.alt = event.title;
            img.alt = event.link;
            img.style.border = '4px solid #f9f9f9';
            img.style.borderRadius = '10px';

            // Append the image to the link, and the link to the container
            a.appendChild(img);
            upcoming_gallery.appendChild(a);
        }
    });

    if (upcoming_count == 0) {
        const h3u = document.createElement('h3');
        h3u.textContent = 'Loading...';
        h3u.style.fontSize = '25px';
        upcoming_gallery.appendChild(h3u);
    }

    const archive_gallery = document.querySelector('.flyer-gallery');
    const h2a = document.createElement('h2');
    h2a.textContent = 'ARCHIVE';
    h2a.style.borderTop = '5px solid #f9f9f9';
    h2a.style.borderBottom = '5px solid #f9f9f9';
    archive_gallery.appendChild(h2a);
    Object.keys(eventData).forEach(key => {
        const event = eventData[key];
        if (event.archive == true) {
            // Create the anchor tag
            const a = document.createElement('a');
            a.href = `gallery/?event=${event.id}`;

            // Create the image tag
            const img = document.createElement('img');
            img.src = event.flyerSrc;
            img.alt = event.title;
            img.style.border = '4px solid #006636ba';
            img.style.borderRadius = '4px';

            // Append the image to the link, and the link to the container
            a.appendChild(img);
            archive_gallery.appendChild(a);
        }
    });
};

document.addEventListener('DOMContentLoaded', (loadFlyers));
