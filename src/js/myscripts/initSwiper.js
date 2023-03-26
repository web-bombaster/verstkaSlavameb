// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.home-hero__slider')) {
		const homeHeroSlider = new Swiper('.home-hero__slider', {
			spaceBetween: 0,
			// loop: true,
			autoplay: {
				delay: 2500,
			},
			// direction: 'vertical',

			breakpoints: {
				320: {
					grid: {
						rows: 2,
					},
					slidesPerView: 2,
				},

				768: {
					grid: {
						rows: 2,
					},
					slidesPerView: 2,
				},

				992: {
					grid: {
						rows: 3,
					},
					slidesPerView: 2,
				},
			},
		});
	};

	if (document.querySelector('.prod-slider__inner')) {
		const prodSliderInner = new Swiper('.prod-slider__inner', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".prod-slider__pagination",
			},
			navigation: {
				nextEl: ".prod-slider__next",
				prevEl: ".prod-slider__prev",
			},
		});
	};

	if (document.querySelector('.reviews__list')) {
		let swiperReviews = new Swiper('.reviews__list', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: ".reviews__next",
				prevEl: ".reviews__prev",
			},
		});
	};

	if (document.querySelector('.partners__wrapper')) {
		let swiperPartners = new Swiper('.partners__wrapper', {

			slidesPerView: "auto",
			spaceBetween: 0,
			loop: true,
			pagination: {
				el: ".partners__pagination",
			},
			// resizeObserver: true,
			observeParents: true,

			breakpoints: {
				320: {
					// slidesPerView: 2,
					slidesPerView: "auto",
					centeredSlides: false,
					loop: true,
					spaceBetween: 10,
				},
				769: {
					slidesPerView: "auto",
					// slidesPerView: 1,
					loop: true,
					centeredSlides: false,
					spaceBetween: 15,
				},
				1601: {
					// slidesPerView: 6,
					watchOverflow: true,
					loop: false,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},
		});
	};

	if (document.querySelector('.projects-slider__box')) {
		const projectsSliderBox = new Swiper('.projects-slider__box', {
			// slidesPerView: "auto",
			slidesPerView: 4,
			autoplay: {
				delay: 3500,
			},
			pagination: {
				el: ".projects-slider__pagination",
			},
			// observer: true,
			// observerUpdate: true,
			// observeParents: true,
			// observeSlideChildren: true,

			breakpoints: {
				220: {
					spaceBetween: 10,
					slidesPerView: 1,
					loop: true,
				},

				481: {
					spaceBetween: 10,
					slidesPerView: 2,
					slidesPerGroup: 1,
					loop: true,
				},

				769: {
					watchOverflow: true,
					loop: false,
					destroy: true, // уничтожение слайдера
				}
			},
		});

		window.addEventListener('resize', (e) => {
			projectsSliderBox.update();
			// projectsSliderBox.destroy();
		});
	};

	if (document.querySelector('.collection__slider')) {
		const collectionSlider = new Swiper('.collection__slider', {
			slidesPerView: "auto",
			autoplay: {
				delay: 2500,
			},
			// spaceBetween: 0,
			// loop: true,
			pagination: {
				el: ".collection__pagination",
			},
			navigation: {
				nextEl: ".collection__next",
				prevEl: ".collection__prev",
			},
			// resizeObserver: true,
			observeParents: true,

			breakpoints: {
				220: {
					spaceBetween: 10,
					slidesPerView: 1,
					loop: true,
				},

				481: {
					spaceBetween: 10,
					slidesPerView: 2,
					slidesPerGroup: 1,
					loop: true,
				},

				993: {
					spaceBetween: 20,
					slidesPerView: 3,
					slidesPerGroup: 1,
					loop: true,
				},
				1201: {
					spaceBetween: 36,
					watchOverflow: true,
					loop: false,
				},
			},
		});
	};

	if (document.querySelector('.collection-big-slider')) {
		let collectionMiniSlider = new Swiper('.collection-mini-slider', {
			slidesPerView: "auto",
			direction: 'vertical',
			spaceBetween: 10,
			freeMode: true,
			watchSlidesProgress: true,
			// freeMode: true, // при перетаскивании превью ведет себя как при скролле
			loop: true,
			navigation: {
				nextEl: ".collection-mini-slider__next",
				prevEl: ".collection-mini-slider__prev",
			},
		});

		let collectionBigSlider = new Swiper('.collection-big-slider', {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			thumbs: {
				swiper: collectionMiniSlider,
			},
			navigation: {
				nextEl: ".collection-big-slider__next",
				prevEl: ".collection-big-slider__prev",
			},
			pagination: {
				el: ".collection-big-slider__pagination",
				type: "fraction",
			},
		});
	};

	if (document.querySelector('.pp-big-slider')) {

		let ppMiniSlider = new Swiper('.pp-mini-slider', {
			spaceBetween: 18,
			slidesPerView: 2,
			grid: {
				rows: 2,
			},
			watchSlidesProgress: true,
			loop: true,
			// direction: "vertical",
		});

		let ppBigSlider = new Swiper('.pp-big-slider', {
			spaceBetween: 18,
			slidesPerView: 1,
			loop: true,
			navigation: {
				nextEl: ".pp-big-slider__next",
				prevEl: ".pp-big-slider__prev",
			},
			pagination: {
				el: ".pp-big-slider__pagination",
				dynamicBullets: true,
			},
			thumbs: {
				swiper: ppMiniSlider,
			},
		});

		// Вычисляем и задаем высоту слайдеров в зависимости от высоты картинки .pp-big-slider__img
		const heightSliders = () => {
			if (document.querySelector('.pp-big-slider__img')) {
				const heightBigSliderImg = document.querySelector('.pp-big-slider__img').height + 'px';
				// console.log(heightBigSliderImg);
				document.querySelector('.pp-big-slider').style.height = heightBigSliderImg;
				document.querySelector('.pp-mini-slider').style.height = heightBigSliderImg;
			}
		};

		heightSliders();
		window.addEventListener("resize", heightSliders);
	};

	if (document.querySelector('.ready-project__imaeges')) {
		const readyProjectImaeges = new Swiper('.ready-project__imaeges', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".ready-project__pagination",
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".ready-project__next",
				prevEl: ".ready-project__prev",
			},
		});
	};

	if (document.querySelector('.slider-two-columns__box')) {
		const readyProjectImaeges = new Swiper('.slider-two-columns__box', {
			spaceBetween: 20,
			slidesPerView: 2,
			loop: true,
			pagination: {
				el: ".slider-two-columns__pagination",
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".slider-two-columns__next",
				prevEl: ".slider-two-columns__prev",
			},

			breakpoints: {
				220: {
					spaceBetween: 10,
					slidesPerView: 1,
				},

				481: {
					slidesPerView: 2,
				},

				993: {
					spaceBetween: 20,
				},
			},
		});
	};
};

// window.addEventListener("resize", initSwiper);
initSwiper();


