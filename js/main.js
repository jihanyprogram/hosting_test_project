const collapsible = document.querySelectorAll('.collapsible__header');

collapsible.forEach(item => {
    item.addEventListener('click', e => {
        item.parentElement.classList.toggle('collapsible--expanded');
    });
});