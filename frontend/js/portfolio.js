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
        let arr = ["французкие шторы", "римские шторы", "шторы с ламбрекеном", 
            "австрийские шторы", "итальянские шторы", "английские шторы"];
        let swiperPortfolio = new Swiper ('.swiper-container-portfolio', {
            pagination: '.swiper-pagination-portfolio',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + arr[index] + '</span>';
            }
        });
        return swiperPortfolio;
    }
}

export default Portfolio;