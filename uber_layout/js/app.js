window.addEventListener('DOMContentLoaded', () => {

	const burgerTriger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	menuItem = document.querySelectorAll('.menu__item');

	burgerTriger.addEventListener('click', function() {
		this.classList.toggle('active');
		menu.classList.toggle('active')
	})

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burgerTriger.classList.toggle('active');
			menu.classList.toggle('active');
		})
	})
	
})

