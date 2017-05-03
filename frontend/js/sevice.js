class Service {
    getTemplate() {
        let template = require("../../view/layout/service.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Service;