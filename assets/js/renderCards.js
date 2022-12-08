const cardsContainer = document.querySelector('.pets__cards');

getCards();

// Асинхронная функция получения данных из файла pets.json
async function getCards() {
	// Получаем данные из products.json
    const response = await fetch('../../assets/js/pets.json');
    // Парсим данные из JSON формата в JS
    const petsArray = await response.json();
    // Запускаем ф-ю рендера (отображения карточек)
	renderCards(petsArray);
}

function renderCards(petsArray) {
    petsArray.forEach(function (item) {
        const cardHTML = `<div class="card" id="${item.id}">
        <div class="card__image">
            <img class="card__inner-image" src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="card__title">${item.name}</h4>
        <button data-learn class="button button-secondary">Learn more</button>
    </div>`;
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}