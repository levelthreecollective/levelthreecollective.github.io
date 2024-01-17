function loadEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event'); // Assuming URL is like event_template.html?event=event1
    const event = eventData[eventId];

    if (event) {
        document.getElementById('event-title').textContent = event.title;
        const gallery = document.getElementById('event-gallery');
        event.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            gallery.appendChild(img);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadEvent);