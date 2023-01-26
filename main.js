// Аккордіон для фільтра

$(function () {

	$(".filter__accordion__title").on("click", function (e) {

		e.preventDefault();
		let $this = $(this);

		if (!$this.hasClass("filter__accordion-active")) {
			$(".filter__accordion__content").slideUp(400);
			$(".filter__accordion__title").removeClass("filter__accordion-active");
			$('.filter__accordion__arrow').removeClass('filter__accordion__rotate');
		}

		$this.toggleClass("filter__accordion-active");
		$this.next().slideToggle();
		$('.filter__accordion__arrow', this).toggleClass('filter__accordion__rotate');
	});
});


$(document).ready(function () {
	$("div:first").css("display", "block");

	$(".filter__accordion__sub__item__box").click(function () {
		$(this).next().slideToggle(500);
		$(".filter__accordion__sub__item").not($(this).next()).slideUp(500);
	});
});

$(document).ready(function () {
	$(".filter__accordion__sub__item__box").click(function () {
		$(".filter__accordion__sub__item__arrow").toggleClass("filter__accordion__sub__item__arrow__open");
	});
});


// Аордіон для кошика 

$(function () {

	$(".basket__popup__accordion__title").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);

		// if (!$this.hasClass("basket__popup__accordion-active")) {
		// 	$(".basket__popup__accordion__content").slideUp(400);
		// 	$(".basket__popup__accordion__title").removeClass("basket__popup__accordion-active");
		// 	$('.basket__popup__accordion__arrow').removeClass('basket__popup__accordion__rotate');
		// }

		$this.toggleClass("basket__popup__accordion-active");
		$this.next().slideToggle();
		$('.basket__popup__accordion__arrow', this).toggleClass('basket__popup__accordion__rotate');
	});

});

// Виклик модалки і її закриття 

let basketPopup = document.querySelector(".basket__popup__wrapper");
let moreDetailsButtons = document.querySelectorAll(".modal-test");
let closeBasketBtn = document.querySelector(".basket__popup__close__btn");

moreDetailsButtons.forEach(item => {
	item.addEventListener("click", openBasketPopup)
})

function openBasketPopup() {
	basketPopup.classList.add("show__basket__popup");
	basketPopup.classList.remove("hide__basket__popup");
}

function closeBasketPopup() {
	basketPopup.classList.remove("show__basket__popup");
	basketPopup.classList.add("hide__basket__popup");
}

closeBasketBtn.addEventListener("click", closeBasketPopup);

basketPopup.addEventListener("click", function (e) {
	if (e.target === basketPopup) {
		closeBasketPopup()
	}
})