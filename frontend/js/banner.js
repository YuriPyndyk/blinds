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
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
        return mySwiper;
    }
}
export default Banner;