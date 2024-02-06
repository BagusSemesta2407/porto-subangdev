// navbar fixed

window.onscroll = function()
{
    const header =document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        updateMenuTextColor('text-white'); // Panggil fungsi untuk mengubah warna teks
    } else {
        header.classList.remove('navbar-fixed');
        updateMenuTextColor('text-slate-900'); // Kembalikan warna teks ke nilai semula
    }
}
// hamburger

const hamburger =document.querySelector('#hamburger');
const navMenu=document.querySelector('#menu-nav');
const logoText = document.querySelector('#logo-text');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

function updateMenuTextColor(colorClass) {
    const menuItems = document.querySelectorAll('#menu-nav a');
    menuItems.forEach(item => {
        item.classList.remove('text-slate-900', 'text-white');
        item.classList.add(colorClass);
    });

    // Tambahkan penanganan khusus untuk elemen logo
    const logoText = document.querySelector('.px-4 a');
    logoText.classList.remove('text-slate-900', 'text-white');
    logoText.classList.add(colorClass);
}