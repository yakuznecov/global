// Метрики ----------------------------------------------------------------------------------------------------------------->
let elem = document.querySelector('.main-header-bottom-left');
elem.clientWidth, elem.clientHeight; // Ширина и высота с учетом паддингов, марджинов за вычетом скролла
elem.scrollTop; // Высота прокрутки содержимого блока
elem.scrollLeft; // величина прокрутки содержимого в левую сторону блока, скроллингом можно управлять программно
elem.scrollWidth; // Ширина содержимого с учетом прокрутки
elem.scrollHeight; // Высота содержимого с учетом прокрутки, менять значения нельзя
elem.offsetLeft; // содержит смещение блока от левого края экрана (отступ)
elem.offsetTop; // содержит смещение блока от верхнего края, обычно относительно body, либо предка объекта
elem.clientTop; // смещение сверху внутренней части области от края элемента
elem.clientLeft; // смещение слева внутренней части области от края элемента, может быть border
elem.offsetWidth; // Ширина элемента с учетом всех отступов
elem.offsetHeight; // Высота элемента с учетом всех отступов
window.innerWidth; // полная ширина окна браузера вместе с полосой прокрутки (если она есть)
window.innerHeight; // полная высота окна браузера вместе с полосой прокрутки (если она есть)
elem.scrollWidth, elem.scrollHeight; // ширина и высота всего html документа
window.pageXOffset; // смещение документа в окне браузера по оси x
window.pageYOffset; // смещение документа в окне браузера по оси y
window.scrollBy(offX, offY); // Прокручивает страницу относительно ее текущего положения на смещения offX и offY пикселей
window.scrollTo(pageX, pageY); // Прокручивает страницу до указанных координат pageX, pageY, работают после полной загрузки документа
elem.scrollIntoView(true); // Элемент при прокрутке будет вверху браузера. Если false в скобках, то элемент будет внизу окна браузера
document.body.style.overflow = 'hidden'; // скрывает скролл у страницы
document.body.style.overflow = ''; // показывает скролл у страницы
document.documentElement.style.setProperty('--color-primary', 'orangered'); // изменение цвета переменной css, определенной в стилях в :root
elem.getBoundingClientRect(); // полные координаты объекта
let x = document.elementFromPoint(x, y); // что находится в данной позиции на странице
getComputedStyle(message).color; // получить цвет, который записан в стилях message
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'; // увеличить высоту элемента на 40px

el.closest('.header') // выбирает ближайший родительский элемент
el.nextElementSibling // следующий элемент на одном уровне

// ------------------------------------------------------------------------------------------------------------------------->

// Позволяет избежать ошибки null на других страницах сайта ---------------------------------------------------------------->
nextBtn && nextBtn.addEventListener('click', function () {});

window.addEventListener('scroll', function () {
	if (window.scrollY > 5) {
		shopFilterWrapper && shopFilterWrapper.classList.add('maxHeight');
	} else {
		shopFilterWrapper && shopFilterWrapper.classList.remove('maxHeight');
	}
});

this.control = this.accordion?.querySelector('.accordion__control'); // либо оператор ? опциональной последовательности
// ------------------------------------------------------------------------------------------------------------------------->

// Убирает overflow при клике и добавляет обратно при клике на кнопку закрыть ----------------------------------------------->
const massActors = document.querySelector('.dropdown-text-js');
const transferActorsCloseBtn = document.querySelector('.transfer-actors-close-btn');

massActors.addEventListener('click', function () {
	mainItemsWrapper.style.overflow = 'inherit';
});

transferActorsCloseBtn.addEventListener('click', function () {
	mainItemsWrapper.style.overflow = 'overlay';
});

// ------------------------------------------------------------------------------------------------------------------------>

// Установить плейсхолдер -------------------------------------------------------------------------------------------------->
inputTopSearch.placeholder = 'Актёры';
// ------------------------------------------------------------------------------------------------------------------------->

// Установить 3 точки в конце обрезанного текста --------------------------------------------------------------------------->
const cutTextString = () => {
	let cutText = document.querySelector('.js-cutText');
	let text = cutText.innerHTML;

	function truncateString(str, n) {
		if (str.length > n) {
			return str.substring(0, n) + ' ...';
		} else {
			return str;
		}
	}

	cutText.innerHTML = truncateString(text, 14);
};

cutTextString();
// ------------------------------------------------------------------------------------------------------------------------->
// Выбрать все параграфы и поменять им атрибуты --------------------------------------------------------------------------->
document.querySelectorAll('p').forEach((p) => {
	if (p.getAttribute('align') == 'left') p.setAttribute('align', 'right');
	else p.setAttribute('align', 'left');
});
// ------------------------------------------------------------------------------------------------------------------------->

elem.getElementById('hours1').checked = true;

for (let elem of input) {
	console.log(elem);
}

// Плавная прокрутка до элемента, современный способ
const btnScrollTo = document.querySelector('.btn');
const section = document.querySelector('.section');

btnScrollTo.addEventListener('click', function () {
	section.scrollIntoView({ behavior: 'smooth' });
});
