import Swiper from '../../frontend/js/swiper.js'
class Banner {

    getTemplate() {
        let template = require("../../view/layout/banner.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }

    getSwiper() {
        const mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            //direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: '.swiper-pagination',

            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // And if we need scrollbar
            // scrollbar: '.swiper-scrollbar'
        });
        return mySwiper;
    }
}
export default Banner;