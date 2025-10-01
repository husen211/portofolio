document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav .nav-menu a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
