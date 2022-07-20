// Добавление класса при скролле
const element = document.querySelector('.box');

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		element.classList.add('shadow');
	} else {
		element.classList.remove('shadow');
	}
});
