if (document.querySelector('.show-text')) {
	const showText = () => {
		let showText = document.querySelectorAll('.show-text');	
	
		showText.forEach(element => {
			const hiddenText = element.previousElementSibling;
	
			if (hiddenText.className == 'hidden-text') {
				element.addEventListener("click", (e) => {
					e.preventDefault();
					console.dir(e);
					hiddenText.classList.toggle('active');
					if (hiddenText.classList.value === 'hidden-text') {
						e.srcElement.innerText = "Читать далее";
					} else {
						e.srcElement.innerText = "Скрыть";
					};
				});
			};
		});
	};
	
	showText();	
}

