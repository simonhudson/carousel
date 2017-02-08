'use strict';

const carousel = () => {

	const $carousels = Array.from(document.querySelectorAll('.js-carousel')) || null;
	if (!$carousels.length) return;

	$carousels.forEach($carousel => {
		const $nonLinearNav = $carousel.querySelector('.js-carousel-nav--non-linear');
		const $linearNav = $carousel.querySelector('.js-carousel-nav--linear');
		const $carouselInner = $carousel.querySelector('.js-carousel__inner');
		const $carouselItems = Array.from($carousel.querySelectorAll('.js-carousel__item'));
		const itemWidth = $carouselItems[0].offsetWidth;

		const setCurrentVisible = (index) => {
			index = index || 1;
			$carousel.setAttribute('data-carousel-current-visible', index);
		};

		const getCurrentVisible = () => $carousel.getAttribute('data-carousel-current-visible');

		const createLinearNav = ($nav) => {
			const $btnPrev = document.createElement('button');
			$btnPrev.setAttribute('id', `carousel-nav--linear-prev`);
			$btnPrev.setAttribute('class', `carousel-nav--linear__item`);
			$btnPrev.textContent = 'Previous';
			$nav.appendChild($btnPrev);
			const $btnNext = document.createElement('button');
			$btnNext.setAttribute('id', `carousel-nav--linear-next`);
			$btnNext.setAttribute('class', `carousel-nav--linear__item`);
			$btnNext.textContent = 'Next';
			$nav.appendChild($btnNext);
		};

		const moveNonLinear = (index) => {
			setCurrentVisible(index);
		};

		const createNonLinearNav = ($nav) => {
			$carouselItems.forEach(function($item, index) {
				index = index + 1;
				const $navItem = document.createElement('button');
				$navItem.setAttribute('id', `carousel-nav--non-linear-${index}`);
				$navItem.setAttribute('class', `carousel-nav--non-linear__item`);
				$navItem.textContent = index;
				$nav.appendChild($navItem);

				$navItem.addEventListener('click', (e) => {
					moveNonLinear(index);
					e.preventDefault();
				});

			});
		};

		if ($carouselItems.length > 1) {
			setCurrentVisible();
			createNonLinearNav($nonLinearNav);
			createLinearNav($linearNav);
		}

	});

	// create linear nav

	// get current position

};
carousel();
