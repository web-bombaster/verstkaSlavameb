if (document.querySelector('.smooth-scroll')) {

	const menuListLink = document.querySelectorAll('.smooth-scroll'); // ссылки меню
	// const mainScroll = document.querySelector('.main__scroll'); // кнопка вниз
	// const linkToScroll = [...menuListLink, mainScroll]; // объединим все ссылки для плавной прокрутки в один масив с помощь spread "..."

	// Для всех ссылок плавной прокрутки
	menuListLink.forEach(element => {
		// Навешиваем событие клика на ссылку меню
		element.addEventListener('click', (event) => {
			event.preventDefault(); // отключаем стандартное поведение ссылки

			const menuLink = event.target.getAttribute('href').slice(1); // значение атрибута href ссылки мюню, по которой кликнем, без решетки

			// Прокрутка страницы до нужного блока при клике на пункт меню
			document.getElementById(menuLink).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});
	
}



