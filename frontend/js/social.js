class Social {
    getTemplate() {
        let template = require("../../view/layout/social.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Social;