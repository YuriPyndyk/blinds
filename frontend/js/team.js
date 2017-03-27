class Team {
    getTemplate() {
        let template = require("../../view/layout/team.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
    getSwiperTeam() {
        let swiperTeam = new Swiper ('.swiper-container-team', {
            loop: true,
            slidesPerView: 6,
            centeredSlides: true,
            spaceBetween: 30
        });
        return swiperTeam;
    }
}

export default Team;