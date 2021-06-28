import './scss/style.scss'

import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/core';
import 'swiper/swiper-bundle.css';
import Menu from "./menu";
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
    const burger = new Menu(".hamburger", ".main-navbar")
    burger.initMenu()


