import data from '../data/data.json' assert { type: 'json' };
import showModal from './modalScript.js';

const menuList = document.querySelector('.menu-list');

function showMenu() {
    for (const pizza of data) {
        let newPizza = document.createElement('div');
        newPizza.className = 'pizza-item';
        let pizzaText = document.createElement('span');
        pizzaText.innerHTML = pizza.title;
        let pizzaImage = document.createElement('img');
        pizzaImage.src = pizza.imageUrl;
        newPizza.addEventListener('click', () => eventHandler(pizza));
        newPizza.appendChild(pizzaImage);
        newPizza.appendChild(pizzaText);
        menuList.append(newPizza);
    }
}

const eventHandler = (data) => {
    showModal(data);
};

window.onload = () => {
    showMenu();
};
