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

    hamburger.addEventListener("click", () => {
       debugger
        hamburger.classList.toggle("is-active");
    });