'touchstart'; // событие схоже с «mousedown», происходит при касании пальцем экрана
'touchend'; // убираем палец с экрана, ака «mouseup»
'touchmove'; // водим пальцем по экрану — «mousemove»

// Start: siblings() ------------------------------------------------------------------------------------------------------------------ >
$(selector).siblings(); // выбор всех смежных элементов
$(selector).siblings(selector); // выбор смежного элемента с определенным селектором

$(document).ready(function () {
    $('li.second').siblings().css('color', 'red'); // выбираем все смежные элементы элемента <li> с классом second в документе
    $('li').siblings().css('background', 'khaki'); // выбираем все смежные элементы элемента <li> в документе
    $('li').siblings('.active').css('color', 'green'); // выбираем все смежные элементы элемента <li> в документе, которые имеют определенный селектор
});
// End: siblings() --------------------------------------------------------------------------------------------------------------------- >

// выбор родительского элемента
$( selector ).parent();

// выбор следующего сестринского элемента
$( selector ).next();

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

// Start: выполнение кода при повторном нажатии кнопки
checkboxPro65.on('click', function () {
    if (!$(this).hasClass('clicked')) {
        $(this).addClass('clicked');
        showPro65();
    } else {
        $(this).removeClass('clicked');
        hidePro65();
    }
});
// End: выполнение кода при повторном нажатии кнопки

// Start: выполнение кода при повторном нажатии кнопки
let isSwitch = false;

checkboxPro65.on('click', function () {
    if (!isSwitch) {
        showPro65();
        isSwitch = true;
    } else {
        hidePro65();
        isSwitch = false;
    }
});
// End: выполнение кода при повторном нажатии кнопки

// Start: Проверка наличия элемента на странице
if (mainHeaderBottomLeft.length > 0) {
}

if ($('.input-time').length > 0) {
}
// End: Проверка наличия элемента на странице


// Открыть дропдаун на мобильных и закрыть при клике на кнопку и при клике вне дропдауна
$(function () {
    $('.dropdown-profile').on('touchstart', function () {
        $('.profile-menu').toggleClass('active');
    });

    $(document).on('touchstart', function (e) {
        var field = $('.dropdown-profile');
        if (!field.is(e.target) && field.has(e.target).length === 0) {
            $('.profile-menu').removeClass('active');
        }
    });
});

// Start: nav-castings-menu close dropdown on mobile (6 дропдаунов, которые нужно закрывать при клике в мобильной версии от 1024)
$(function () {
    // .menu-header__bottom-link (ссылка, на которую происходит нажатие и открытие дропдауна)
    $('.menu-header__bottom-link').on('touchstart', function (e) {
        var drops = $(this).parent().siblings(); // родитель ссылки и всего дропдауна, соседние элементы, кроме текущего
        var navCastingsMenu = $(this).next(); // следующий элемент после ссылки - это сам родитель меню дропдауна

        // проверка на открытый дропдаун, чтобы закрывать и открывать нажатием одной кнопки ссылки
        if (navCastingsMenu.hasClass('active')) {
            navCastingsMenu.removeClass('active');
            $(this).removeClass('active'); // удаление цвета активной ссылки после нажатия, была желтая
        } else {
            navCastingsMenu.addClass('active');
            $(this).addClass('active'); // добавление цвета активной ссылки на желтый
            drops.children('.menu-header__bottom-link').removeClass('active'); // получение ссылки у соседних дропдаунов и удаление желтого цвета ссылки
        }

        drops.children('.nav-castings-menu').removeClass('active'); // скрытие соседних меню
    });

    // скрытие меню и активного цвета ссылки после нажатия на пункты внутри меню через 2 сек
    $('.castings-menu-item').on('touchend', function () {
        setTimeout(function () {
            $('.nav-castings-menu').removeClass('active');
            $('.menu-header__bottom-link').removeClass('active');
        }, 200);
    });

    // скрытие всех открытых меню и активного цвета ссылки после нажатия на любое поле, кроме самих меню
    $(document).on('touchstart', function (e) {
        var field = $('.dropdown__сastings_actor'); // родительский элемент дропдауна
        if (!field.is(e.target) && field.has(e.target).length === 0) {
            $('.nav-castings-menu').removeClass('active');
            $('.menu-header__bottom-link').removeClass('active');
        }
    });
});
// End: nav-castings-menu close dropdown on mobile

// Добавить класс active в svg с классом arrow, которая находится внутри кнопки button
$(this).find('.arrow').attr('class', 'arrow active');

// Назначить цвет инлайн с important
$(this).attr('style', 'color: #ffca28 !important');