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
        // Create a container for horizontal scrolling
        const videoContainer = document.createElement('div');
        videoContainer.style.display = 'flex';
        videoContainer.style.overflowX = 'auto';
        videoContainer.style.gap = '20px'; // Optional: to add space between the videos
        videoContainer.style.marginBottom = '20px';
    
        event.yt_links.forEach(yt_link => {
            const iframe = document.createElement('iframe');
    
            if (window.innerWidth > 1000) {
                iframe.style.width = '500px'; // Increase width for larger screens
                iframe.style.height = '300px'; // Increase height for larger screens
            }
            iframe.src = yt_link + "?controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1";
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.referrerpolicy = 'strict-origin-when-cross-origin';
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = '5px';
    
            videoContainer.appendChild(iframe);
        });
    
        gallery.appendChild(videoContainer); // Add the scrolling container to the gallery
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
