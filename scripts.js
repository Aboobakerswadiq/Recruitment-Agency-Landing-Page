const navbar = document.getElementById('mainNavbar');

        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                navbar.classList.add('fixed-top', 'shadow');
            } else {
                navbar.classList.remove('fixed-top', 'shadow');
            }
        });