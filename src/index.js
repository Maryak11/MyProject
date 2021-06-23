import './scss/style.scss'

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);
import 'swiper/swiper-bundle.css';
//
// const newSlider = document.querySelector(".swiper-container")

const swiper = new SwiperCore(".main-double-center", {
    pagination: {
        el: '.swiper-pagination'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
})