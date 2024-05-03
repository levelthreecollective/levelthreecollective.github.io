import { editorialData } from '../editorial_data.js';

function loadLines(gallery, text_list) {
    text_list.forEach((item, index) => {
        if (typeof item === 'string' && item.slice(-4) == '.jpg') {
            const img = document.createElement('img');
            img.src = item;  // Directly using the item as the source for images
            gallery.appendChild(img);
        } else if (typeof item === 'string' && item.slice(0,1) == '"' && item.slice(-1) == '"') {
            const bigQuote = document.createElement('h2');
            bigQuote.textContent = item;
            gallery.appendChild(bigQuote);
        }
        else if (typeof item === 'string' && item.slice(0,2) == 'Q:') {
            const p = document.createElement('p');
            p.style.textAlign = 'justify';
            p.style.fontWeight = 'bold';
            p.textContent = item.slice(2);
            gallery.appendChild(p);
        }
        else {
            const p = document.createElement('p');
            p.style.textAlign = 'justify';
            p.textContent = item;
            gallery.appendChild(p);
        }
    });
}

function loadEditorial() {
    const urlParams = new URLSearchParams(window.location.search);
    const editorialId = urlParams.get('profile').replaceAll(' ', '+'); // Assuming URL is like event_template.html?event=event1
    const editorial = editorialData[editorialId];

    const gallery = document.querySelector('.editorial');
    
    if (editorial.link) {
        const link = document.createElement('a');
        link.href = editorial.link;
        const h2g = document.createElement('h2');
        h2g.textContent = editorial.title;
        link.appendChild(h2g);
        gallery.appendChild(link);
    }
    else {
        const h2g = document.createElement('h2');
        h2g.textContent = editorial.title;
        gallery.appendChild(h2g);
    }

    const pg = document.createElement('p');
    pg.className = 'editorial-subheader';
    pg.innerHTML = `<b>Words</b> by ${editorial.interviewer}<br><b>Photos</b> by ${editorial.photographer}<br>Editorial <b>${editorial.date}</b>`;
    gallery.appendChild(pg); 
    fetch(editorial.content)
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n').filter(line => line.trim() !== '');
            loadLines(gallery, lines);
        })
        .catch(error => console.error('Error fetching the file:', error));
}

document.addEventListener('DOMContentLoaded', loadEditorial);
