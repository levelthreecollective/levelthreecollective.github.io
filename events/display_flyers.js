import { eventData } from './event_data.js';

function loadFlyers() {
    const upcoming_gallery = document.querySelector('.flyer-gallery');
    const h2u = document.createElement('h2');
    h2u.textContent = 'UPCOMING';
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

            // Append the image to the link, and the link to the container
            a.appendChild(img);
            upcoming_gallery.appendChild(a);
        }
    });

    if (upcoming_count == 0) {
        const h3u = document.createElement('h3');
        h3u.textContent = 'Loading...';
        upcoming_gallery.appendChild(h3u);
    }

    const archive_gallery = document.querySelector('.flyer-gallery');
    const h2a = document.createElement('h2');
    h2a.textContent = 'ARCHIVE';
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

            // Append the image to the link, and the link to the container
            a.appendChild(img);
            archive_gallery.appendChild(a);
        }
    });
};

document.addEventListener('DOMContentLoaded', (loadFlyers));
