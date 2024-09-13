import { eventData } from '../event_data.js';

function loadEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event').replaceAll(' ', '+'); // Assuming URL is like event_template.html?event=event1
    const event = eventData[eventId];

    const gallery = document.querySelector('.gallery');


    
    if (event.link) {
        const link = document.createElement('a');
        link.href = event.link;
        const h2g = document.createElement('h2');
        h2g.textContent = event.title;
        link.appendChild(h2g);
        gallery.appendChild(link);
    }
    else {
        const h2g = document.createElement('h2');
        h2g.textContent = event.title;
        gallery.appendChild(h2g);
    }

    const pg = document.createElement('p');
    pg.innerHTML = `Location: ${event.location}<br>Date: ${event.date}`;
    gallery.appendChild(pg);

    if (event.yt_links && event.yt_links.length > 0) {
        event.yt_links.forEach(yt_link => {
            const iframe = document.createElement('iframe');

            iframe.width = "70%";
            iframe.height = "425px";
            iframe.src = yt_link + "?controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1";
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.referrerpolicy = 'strict-origin-when-cross-origin';
            iframe.allowFullscreen = true;

            gallery.appendChild(iframe);
        });
    }

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
