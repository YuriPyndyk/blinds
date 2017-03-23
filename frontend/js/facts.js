class Facts {
    getTemplate() {
        let template = require("../../view/layout/facts.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Facts;
