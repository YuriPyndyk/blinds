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
        const swiperTeam = new Swiper ('.swiper-container', {
            loop: true,
            slidesPerView: 6,
            spaceBetween: 30
        });
        return swiperTeam;
    }
}

export default Team;