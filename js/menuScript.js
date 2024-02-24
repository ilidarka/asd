import data from '../data/data.json' assert { type: 'json' };

const menuList = document.querySelector('.menu-list');

function showMenu() {
    for (const pizza of data) {
        let newPizza = document.createElement('div');
        newPizza.className = 'pizza-item';
        let pizzaText = document.createElement('span');
        pizzaText.innerHTML = pizza.title;
        let pizzaImage = document.createElement('img');
        pizzaImage.src = pizza.imageUrl;
        newPizza.appendChild(pizzaImage);
        newPizza.appendChild(pizzaText);
        menuList.append(newPizza);
    }
}

window.onload = () => {
    showMenu();
};
