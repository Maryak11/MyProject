import './scss/style.scss'
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar} from 'swiper/core';
import 'swiper/swiper-bundle.css';
import './Products/ProductsPage'
import './Products/Products'
import './Products/Catalog'
import './Util/LocalStorageUtil'
import Menu from "./menu";
import {Products} from "./Products/Products";

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


