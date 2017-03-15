class About {
    getTemplate() {
        let template = require("../../view/layout/about.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default About;
