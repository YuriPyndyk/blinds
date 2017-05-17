class Footer {
    getTemplate() {
        let template = require("../../view/layout/footer.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Footer;