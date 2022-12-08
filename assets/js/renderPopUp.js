// Div в котором будем показывать поп-ап
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const popUp = document.querySelector('.pet__popup');
const popUpImage = document.querySelector('.popup__image > img');
const popUpTitle = document.querySelector('.popup__title');
const popUpPetTypeAndBreed = document.querySelector('.popup__type-breed');
const popUpDescription = document.querySelector('.popup__description');
const popUpPetAge = document.querySelector('.popup__age');
const popUpPetInoculations = document.querySelector('.popup__inoculations');
const popUpPetDiseases = document.querySelector('.popup__diseases');
const popUpPetParasites = document.querySelector('.popup__parasites');
const popUpCloseButton = document.querySelector('.popup__button');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Learn more"
	if (event.target.hasAttribute('data-learn')) {
		// Находим карточку с pet, внутри котрой был совершен клик
		const card = event.target.closest('.card');  

        getData();         

        async function getData() {
            const response = await fetch('../../assets/js/pets.json');
            // Парсим данные из JSON формата в JS
            const petsArray = await response.json();

            renderPopUp(petsArray);
        }

        function renderPopUp(petsArray) {  
            petsArray.forEach(function (item) { 
                if(card.id == item.id) {
                    popUp.classList.remove('pet__popup_close');
                    popUpImage.src = item.img;
                    popUpImage.alt = item.name;
                    popUpTitle.innerText = item.name;
                    popUpPetTypeAndBreed.innerText = `${item.type} - ${item.breed}`
                    popUpDescription.innerText = item.description;
                    popUpPetAge.innerText = item.age;
                    popUpPetInoculations.innerText = item.inoculations;
                    popUpPetDiseases.innerText = item.diseases;
                    popUpPetParasites.innerText = item.parasites;
                    overlay.classList.add('overlay_active');
                    body.style.overflow = 'hidden';

                    overlay.addEventListener('click', () => {
                        popUp.classList.add('pet__popup_close');
                        overlay.classList.remove('overlay_active');
                        body.style.overflow = 'unset';
                    })

                    popUpCloseButton.addEventListener('click', () => {
                        popUp.classList.add('pet__popup_close');
                        overlay.classList.remove('overlay_active');
                        body.style.overflow = 'unset';
                    })

                    overlay.addEventListener('mouseover', () => {
                        if(!popUp.classList.contains('pet__popup_close')) {
                            popUpCloseButton.classList.add('_hover')
                        }
                    })
                    
                    overlay.addEventListener('mouseout', () => {
                        if(!popUp.classList.contains('pet__popup_close')) {
                            popUpCloseButton.classList.remove('_hover')
                        }
                    })
                }
            })    
        }
        
        
        
        
        }


        
    }
);


