// Start: siblings() ------------------------------------------------------------------------------------------------------------------ >
$(selector).siblings(); // выбор всех смежных элементов
$(selector).siblings(selector); // выбор смежного элемента с определенным селектором

$(document).ready(function () {
	$('li.second').siblings().css('color', 'red'); // выбираем все смежные элементы элемента <li> с классом second в документе
	$('li').siblings().css('background', 'khaki'); // выбираем все смежные элементы элемента <li> в документе
	$('li').siblings('.active').css('color', 'green'); // выбираем все смежные элементы элемента <li> в документе, которые имеют определенный селектор
});
// End: siblings() --------------------------------------------------------------------------------------------------------------------- >

// Start: find() ----------------------------------------------------------------------------------------------------------------------- >
$(selector).find(selector); // возвращает потомков, если они соответствуют селектору

$(document).ready(function () {
	$('.children').click(function () {
		// запускаем функцию при нажатии на элемент с классом children
		$('*').css('background', '#fff'); // устанавливаем всем элементам цвет заднего фона белый
		$('div').children('span').css('background', 'red'); // выбираем все дочерние элементы <span> элементов <div> в документе
	});
	$('.find').click(function () {
		// запускаем функцию при нажатии на элемент с классом find
		$('*').css('background', '#fff'); // устанавливаем всем элементам цвет заднего фона белый
		$('div').find('span').css('background', 'green'); // выбираем всех потомки <span> элементов <div>
	});
});
// End: find() ------------------------------------------------------------------------------------------------------------------------- >

// Start: Клик вне области ------------------------------------------------------------------------------------------------------------- >
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is('.select *')) {
		$('.select').removeClass('active');
	}
});
// End: Клик вне области --------------------------------------------------------------------------------------------------------------- >
