import { eventData } from '../load_event.js';

function loadEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event').replaceAll(' ', '+'); // Assuming URL is like event_template.html?event=event1
    const event = eventData[eventId];

    const gallery = document.querySelector('.gallery');
    
    const h2g = document.createElement('h2');
    h2g.textContent = event.title;
    gallery.appendChild(h2g);

    const pg = document.createElement('p');
    pg.innerHTML = `Location: ${event.location}<br>Date: ${event.date}`;
    gallery.appendChild(pg); 

    if (event.archive == true) {
        event.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            gallery.appendChild(img);
        });
    }
    else if (event.archive==false) {
        const capt = document.createElement('p');
        capt.textContent = event.caption;
        capt.classList.add('caption');
        gallery.appendChild(capt);

        gallery.classList.add('lone-image-container');
        const img = document.createElement('img');
        img.src = '../' + event.flyerSrc;
        img.classList.add('lone-image');
        gallery.appendChild(img);
    }
}

document.addEventListener('DOMContentLoaded', loadEvent);
