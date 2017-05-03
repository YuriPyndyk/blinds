class Imoniol {
    getTemplate() {
        let template = require("../../view/layout/imoniol.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
    getSwiperImoniol() {
        let swiperImoniol = new Swiper ('.swiper-container-imoniol', {
            pagination: '.swiper-pagination-imoniol',
            paginationClickable: true
        });
        return swiperImoniol;
    }
}

export default Imoniol;