import Header from '../frontend/js/header.js'
import '../frontend/styles/styles.scss'
import Banner from '../frontend/js/banner.js'
import About from '../frontend/js/about.js'
import Quote from '../frontend/js/quote.js'
import Team from '../frontend/js/team.js'
import Facts from '../frontend/js/facts.js'
import Service from '../frontend/js/sevice'

function createElement(elem, data, tagName, className) {
    let tag = document.createElement(tagName);
    tag.innerHTML = elem(data);
    tag.className = className;
    return tag;
}

let head = new Header();
document.body.appendChild(createElement(head.getTemplate(), head.getJson(), 'header', 'header'));

let banner = new Banner();
document.body.appendChild(createElement(banner.getTemplate(), banner.getJson(), 'div', 'banner'));
banner.getSwiperBanner();

let about = new About();
document.body.appendChild(createElement(about.getTemplate(), about.getJson(), 'div', 'about'));

let quote = new Quote();
document.body.appendChild(createElement(quote.getTemplate(), quote.getJson(), 'div', 'quote'));

let team = new Team();
document.body.appendChild(createElement(team.getTemplate(), team.getJson(), 'div', 'team'));
team.getSwiperTeam();

let facts = new Facts();
document.body.appendChild(createElement(facts.getTemplate(), facts.getJson(), 'div', 'facts'));

let service = new Service();
document.body.appendChild(createElement(service.getTemplate(), service.getJson(), 'div', 'service'));