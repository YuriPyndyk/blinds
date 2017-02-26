import Header from '../frontend/js/header';
import '../frontend/styles/styles.scss';

function createElement(elem, data, className) {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = elem(data);
    return div;
}
const head = new Header();

document.body.appendChild(createElement(head.getTemplate(), head.getJson(), 'header'));