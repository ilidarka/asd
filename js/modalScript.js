const modal = document.querySelector('.pizza-modal');
const modalContent = document.querySelector('.modal-content');

modal.addEventListener('click', (event) => {
    if (event.target.closest('.modal-content')) {
        event.stopImmediatePropagation();
    } else {
        closeModal();
    }
});

export default function showModal(data) {
    modal.classList.add('pizza-modal-opened');
    let contentLeft = modalContent.children[0];
    let title = modalContent.querySelector('.title');
    let price = modalContent.querySelector('.price');
    let sizes = modalContent.querySelector('.sizes');
    for (const size of data.sizes) {
        let sizeSpan = document.createElement('span');
        sizeSpan.className = 'pizza-size';
        sizeSpan.innerHTML = size;
        sizeSpan.addEventListener('click', (event) =>
            sizeSpanEventHandler(event.target, data.price),
        );
        sizes.appendChild(sizeSpan);
    }
    sizes.children[0].classList.add('active');
    contentLeft.children[0].src = data.imageUrl;
    title.innerHTML = data.title;
    let activeSize = modalContent.querySelector('.pizza-size.active').innerHTML * 10;
    price.innerHTML = `Стоимость: ${Number(data.price) + Number(activeSize)}`;
}

const sizeSpanEventHandler = (target, price) => {
    let sizeSpanList = document.querySelectorAll('.pizza-size');
    sizeSpanList.forEach((item) => {
        item.classList.remove('active');
    });
    target.classList.toggle('active');
    let activeSize = modalContent.querySelector('.pizza-size.active').innerHTML * 10;
    modalContent.querySelector('.price').innerHTML = `Стоимость: ${
        Number(price) + Number(activeSize)
    }`;
};

const closeModal = () => {
    modal.classList.remove('pizza-modal-opened');
    let sizesList = modalContent.querySelectorAll('.pizza-size');
    sizesList.forEach((item) => {
        item.remove();
    });
};
