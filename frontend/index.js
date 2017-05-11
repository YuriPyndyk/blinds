import Header from '../frontend/js/header.js'
import '../frontend/styles/styles.scss'
import Banner from '../frontend/js/banner.js'
import About from '../frontend/js/about.js'
import Quote from '../frontend/js/quote.js'
import Team from '../frontend/js/team.js'
import Facts from '../frontend/js/facts.js'
import Service from '../frontend/js/sevice'
import Price from '../frontend/js/price'
import Imoniol from '../frontend/js/imoniol'
import Portfolio from '../frontend/js/portfolio'
import Social from '../frontend/js/social'

function createElement(elem, data, tagName, className) {
    let tag = document.createElement(tagName);
    tag.innerHTML = elem(data);
    tag.className = className;
    return tag;
}

const head = new Header();
document.body.appendChild(createElement(head.getTemplate(), head.getJson(), 'header', 'header'));

const banner = new Banner();
document.body.appendChild(createElement(banner.getTemplate(), banner.getJson(), 'div', 'banner'));
banner.getSwiperBanner();

const about = new About();
document.body.appendChild(createElement(about.getTemplate(), about.getJson(), 'div', 'about'));

const quote = new Quote();
document.body.appendChild(createElement(quote.getTemplate(), quote.getJson(), 'div', 'quote'));

const team = new Team();
document.body.appendChild(createElement(team.getTemplate(), team.getJson(), 'div', 'team'));
team.getSwiperTeam();

const facts = new Facts();
document.body.appendChild(createElement(facts.getTemplate(), facts.getJson(), 'div', 'facts'));

const service = new Service();
document.body.appendChild(createElement(service.getTemplate(), service.getJson(), 'div', 'service'));

const price = new Price();
document.body.appendChild(createElement(price.getTemplate(), price.getJson(),'div', 'price'));

const imoniol = new Imoniol();
document.body.appendChild(createElement(imoniol.getTemplate(), imoniol.getJson(), 'div', 'imoniol'));
imoniol.getSwiperImoniol();

const portfolio = new Portfolio();
document.body.appendChild(createElement(portfolio.getTemplate(), portfolio.getJson(), 'div', 'portfolio'));
portfolio.getSwiperPortfolio();

const social = new Social();
document.body.appendChild(createElement(social.getTemplate(), social.getJson(), 'div', 'social'));
