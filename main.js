let openBtn = document.getElementById('openMenu');
let closeBtn = document.getElementById('closeBtn');
let mobileMenu = document.getElementById('mobileMenu');

openBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'block';

    closeBtn.addEventListener('click', function(){
        mobileMenu.style.display = 'none';
    })
})