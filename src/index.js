import './scss/style.scss'

import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
import 'swiper/swiper-bundle.css';
//
// const newSlider = document.querySelector(".swiper-container")

const swiper = new SwiperCore(".main-double-center", {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },
    autoplay: {
        delay: 2000,
    },


    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // }
})