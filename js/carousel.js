'use strict';

const carousel = () => {

	const $carousels = Array.from(document.querySelectorAll('.js-carousel')) || null;
	if (!$carousels.length) return;

	$carousels.forEach($carousel => {
		const $nonLinearNav = $carousel.querySelector('.js-carousel-nav--non-linear');
		const $carouselItems = Array.from($carousel.querySelectorAll('.js-carousel__item'));

		const createNonLinearNav = ($nav) => {
			$carouselItems.forEach(function($item, index) {
				index = index + 1;
				const $navItem = document.createElement('button');
				$navItem.setAttribute('id', `carousel-nav--non-linear-${index}`);
				$navItem.setAttribute('class', `carousel-nav__item`);
				$navItem.textContent = index;
				$nav.appendChild($navItem);
			});
		};

		if ($carouselItems.length > 1) {
			createNonLinearNav($nonLinearNav);
		}

	});

	// Create non-linear nav

	// create linear nav

	// get current position

};
carousel();
