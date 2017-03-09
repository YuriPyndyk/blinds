class Header {

    getTemplate() {
        let template = require("../../view/layout/header.hbs");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Header;