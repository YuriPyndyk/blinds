class Header {

    getTemplate() {
        const template = require("../../view/layout/header.handlebars");
        return template;
    }
    getJson() {
        const json = require("../../fixtures/index.json");
        return json;
    }
}
// 'use strict';
// function Header() {
//     const template = require("../../view/layout/header.handlebars");
//     const json = require("../../fixtures/index.json");
//
//     this.getTemplate = function () {
//         return template;
//     };
//     this.getJson = function () {
//         return json;
//     }
//
// }

export default Header;