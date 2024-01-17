// import { eventData } from './load_event.js';

const upcoming_images = [

];

const upcoming_gallery = document.querySelector('.flyer-gallery');
const h2u = document.createElement('h2');
h2u.textContent = 'UPCOMING';
upcoming_gallery.appendChild(h2u);

if (upcoming_images.length == 0) {
    const h3u = document.createElement('h3');
    h3u.textContent = 'Loading...';
    upcoming_gallery.appendChild(h3u);
} else {
    upcoming_images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    
    upcoming_gallery.appendChild(img);
});
}

const archive_images = [
    'flyers/ludlow_house.jpeg',
    'flyers/lume_green.jpeg',
    'flyers/kind_regards.jpeg',
    'flyers/its_too_loud.jpeg',// ... more image paths
];

const archive_gallery = document.querySelector('.flyer-gallery');
const h2a = document.createElement('h2');
h2a.textContent = 'ARCHIVE';
archive_gallery.appendChild(h2a);

// Object.keys(eventData).forEach(key => {
//     const event = eventData[key];
//     console.log(key, event.title, event.id, event.archive);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     Object.keys(eventData).forEach(key => {
//         const event = eventData[key];
//         if (event.archive == true) {
//             console.log(event.archive, event.title)
//             // Create the anchor tag
//             // const a = document.createElement('a');
//             // a.href = `event_template.html?event=${event.id}`;

//             // // Create the image tag
//             // const img = document.createElement('img');
//             // img.src = event.imgSrc;
//             // img.alt = event.altText;

//             // // Append the image to the link, and the link to the container
//             // a.appendChild(img);
//             // container.appendChild(a);
//         }
//     });
// });

archive_images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;

    const archive_a = document.createElement('a');
    archive_a.href = 'gallery/?event=ludlow'; // Set href like this
    archive_a.appendChild(img); // Append img to the anchor

    archive_gallery.appendChild(archive_a); // Append anchor to the gallery
});