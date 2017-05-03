class Price {
    getTemplate() {
        let template = require("../../view/layout/price.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Price;