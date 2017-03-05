class Header {

    getTemplate() {
        let template = require("../../view/layout/header.handlebars");
        return template;
    }
    getJson() {
        let json = require("../../fixtures/index.json");
        return json;
    }
}

export default Header;