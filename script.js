document.querySelectorAll('.navbar-li').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.navbar-li').forEach(nav => {
            nav.classList.remove('active');
        });
        this.classList.add('active');
    });
});


function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById('overlay');
    menu.classList.toggle("active");
    overlay.classList.toggle('active');

    var hamburgerIcon = document.getElementById('hamburger').getElementsByTagName('i')[0];
    
    if (hamburgerIcon.classList.contains('fa-bars')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times'); 
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
}

