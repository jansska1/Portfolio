const nav = document.querySelector('.nav__items');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav__item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    nav.classList.toggle('nav__items--active')
	document.body.classList.toggle('sticky-body')
	
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active')
			navBtn.classList.remove('is-active')
			document.body.classList.remove('sticky-body')
		})
	})
	
    handleNavItemsAnimation()
	deleteAnimation()
}

navBtn.addEventListener('click', handleNav)

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		// animation-delay: .3s;
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			allNavItems.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear();
