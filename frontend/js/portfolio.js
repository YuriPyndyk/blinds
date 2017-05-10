class Portfolio {
    getTemplate() {
        let template = require("../../view/layout/portfolio.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
    getSwiperPortfolio() {
        let swiperPortfolio = new Swiper ('.swiper-container-portfolio', {
            pagination: '.swiper-pagination-portfolio',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        });
        return swiperPortfolio;
    }
}

export default Portfolio;