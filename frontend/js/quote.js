class Quote {
    getTemplate() {
        let template = require("../../view/layout/quote.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Quote;