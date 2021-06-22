import './scss/style.scss'

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
//
// const newSlider = document.querySelector(".swiper-container")

new Swiper(".main-double-center", {
    pagination: {
        el: '.swiper-pagination'
    }

})