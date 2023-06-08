let links = document.querySelectorAll("a");

links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.parentElement.classList.contains('link-item')) {
            document.querySelector('.link-item a.active')?.classList.remove('active');
            e.currentTarget.classList.add('active');
        }
    });
});