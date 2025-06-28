
// Задача 1: Получение данных пользователя
// Напишите функцию, которая получает данные пользователя
// с https://jsonplaceholder.typicode.com/users/1 и выводит их в консоль.

function userData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

userData();




// Задача 2: Отправка данных
// Создайте функцию, которая отправляет данные на сервер (например, новый пост) и выводит ответ.

function postData(newData) {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

postData({
    name: "John",
    email: "john@gmail.com",
    password: "123456",
});



// Задача 3: Обработка ошибок
// Напишите функцию, которая обрабатывает ошибки при запросе к несуществующему URL.

function errorProcess() {
    fetch('https://jsonplaceholder.typicode.com/error')
        .then(res => {
            if (!res.ok) throw new Error(`Ошибка ${res.status}`);
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Всё сломалось:', error.message));
}

errorProcess();


// Задача 4. Получить данные с https://jsonplaceholder.typicode.com,
// сделать карточки (можно взять с бутстрап) и сделать постраничный вывод.
// ?_start=5&_limit=5


let currentPage = 1;
let allCards = [];
let totalPages = 1;

const cards_container = document.getElementById('cards-container');
const prev_btn = document.getElementById('prev-btn');
const next_btn = document.getElementById('next-btn');
const page_counter = document.getElementById('page-counter');

async function loadCards() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        allCards = await response.json();
        totalPages = Math.ceil(allCards.length / 5);
        updatePage();
    } catch (error) {
        console.error('Error:', error);
        cards_container.innerHTML = '<div class="alert alert-danger">Failed to load cards</div>';
    }
}

function createCard(cardData) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-3';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const name = document.createElement('h5');
    name.className = 'card-title';
    name.textContent = cardData.name || `Card ${cardData.id}`;

    const email = document.createElement('p');
    email.className = 'card-text';
    email.textContent = cardData.email ? `Email: ${cardData.email}` : '';

    const phone = document.createElement('p');
    phone.className = 'card-text';
    phone.textContent = cardData.phone ? `Phone: ${cardData.phone}` : '';

    cardBody.append(name, email, phone);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

function updatePage() {
    cards_container.innerHTML = '';

    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const cardsToShow = allCards.slice(startIndex, endIndex);

    cardsToShow.forEach(cardData => {
        cards_container.appendChild(createCard(cardData));
    });

    page_counter.textContent = `Page ${currentPage} of ${totalPages}`;
    prev_btn.disabled = currentPage === 1;
    next_btn.disabled = currentPage === totalPages;
}

prev_btn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

next_btn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
});

loadCards();