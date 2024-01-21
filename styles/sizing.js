function adjustMainHeight() {
    const main = document.querySelector('main');
    const header = document.querySelector('nav').offsetHeight;
    const footer = document.querySelector('footer').offsetHeight;
    const viewportHeight = window.innerHeight;

    // Calculate the total height required for the content of 'main'
    const totalContentHeight = header + main.scrollHeight + footer;

    if (totalContentHeight < viewportHeight) {
        // If the content of 'main' does not fill the viewport, adjust its height
        main.style.height = `calc(${viewportHeight - header - footer}px)`;
        main.style.display = 'flex';
        main.style.flexDirection = 'column';
        main.style.justifyContent = 'center';
        main.style.alignItems = 'center';
    }
}

// Adjust the height on load and on window resize
window.addEventListener('load', adjustMainHeight);
window.addEventListener('resize', adjustMainHeight);
