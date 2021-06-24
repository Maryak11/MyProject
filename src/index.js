import './scss/style.scss'

import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/core';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);


const swiper = new SwiperCore(".main-double-center", {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    autoplay: {
        delay: 2000,
    },
})


    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".main-navbar")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        mobileMenu.classList.toggle("main-active")
    });
