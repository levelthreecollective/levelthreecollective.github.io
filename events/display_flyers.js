import { eventData } from './event_data.js';

function loadFlyers() {
    const gallery = document.querySelector('.flyer-gallery');

    // --- UPCOMING ---
    let upcoming_count = 0;
    const upcomingElements = [];

    Object.keys(eventData).forEach(key => {
        const event = eventData[key];
        if (event.archive === false) {
            upcoming_count++;

            const a = document.createElement('a');
            a.href = event.link;

            const img = document.createElement('img');
            img.src = event.flyerSrc;
            img.alt = event.title;
            img.style.border = '4px solid #00663600';
            img.style.borderRadius = '10px';

            a.appendChild(img);
            upcomingElements.push(a);
        }
    });

    if (upcoming_count > 0) {
        const h2u = document.createElement('h2');
        h2u.textContent = 'UPCOMING';
        h2u.style.borderTop = '5px solid #f9f9f9';
        h2u.style.borderBottom = '5px solid #f9f9f9';
        gallery.appendChild(h2u);

        upcomingElements.forEach(el => gallery.appendChild(el));
    }

    // --- ARCHIVE ---
    const h2a = document.createElement('h2');
    h2a.textContent = 'ARCHIVE';
    h2a.style.borderTop = '5px solid #f9f9f9';
    h2a.style.borderBottom = '5px solid #f9f9f9';
    gallery.appendChild(h2a);

    Object.keys(eventData).forEach(key => {
        const event = eventData[key];
        if (event.archive === true) {
            const a = document.createElement('a');
            a.href = `gallery/?event=${event.id}`;

            const img = document.createElement('img');
            img.src = event.flyerSrc;
            img.alt = event.title;
            img.style.border = '4px solid #00663600';
            img.style.borderRadius = '10px';

            a.appendChild(img);
            gallery.appendChild(a);
        }
    });
}

document.addEventListener('DOMContentLoaded', loadFlyers);