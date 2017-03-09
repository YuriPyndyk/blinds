import Header from '../frontend/js/header.js';
import '../frontend/styles/styles.scss';
import Banner from '../frontend/js/banner.js'
//import Swiper from '../frontend/js/swiper.js'

function createElement(elem, data, className) {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = elem(data);
    return div;
}

let head = new Header();

document.body.appendChild(createElement(head.getTemplate(), head.getJson(), 'header'));


// let mySwiper = new Swiper ('.swiper-container', {
//     // Optional parameters
//     //direction: 'vertical',
//     loop: true,
//
//     // If we need pagination
//     pagination: '.swiper-pagination',
//
//     // Navigation arrows
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//
//     // And if we need scrollbar
//     scrollbar: '.swiper-scrollbar'
// });
let banner = new Banner();
document.body.appendChild(createElement(banner.getTemplate(), banner.getJson(), 'banner'));
banner.getSwiper();