function initTabAnimals(){
	const tabMenu = document.querySelectorAll('.js-tabmenu li')
	const tabContent = document.querySelectorAll('.js-tabcontent section')

	if(tabMenu.length && tabContent.length){
		tabContent[0].classList.add('ativo')

		function activeTab(index){
			tabContent.forEach((section) => {
				section.classList.remove('ativo')
			})
			tabContent[index].classList.add('ativo')
		}

		tabMenu.forEach((itemMenu, index) => {
			itemMenu.addEventListener('click', () => {
				activeTab(index)
			})
		})
	}
}
initTabAnimals()

function initAccordion(){
	const accordionFaq = document.querySelectorAll('.js-accordion dt')
	const activeClass = 'ativo'

	if(accordionFaq.length){
		accordionFaq[0].classList.add(activeClass)
		accordionFaq[0].nextElementSibling.classList.add(activeClass)

		function activeAccordion(){
			this.classList.toggle(activeClass)
			this.nextElementSibling.classList.toggle(activeClass)
		}

		accordionFaq.forEach((item) => {
			item.addEventListener('click', activeAccordion)
		})
	}
}
initAccordion()

const linksInternos = document.querySelectorAll('.js-cabecalho__navegacao a[href^="#"]')

function scrollToSection(event){
	event.preventDefault()
	const href = event.currentTarget.getAttribute('href')
	const section = document.querySelector(href)

	section.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
}

linksInternos.forEach((link) => {
	link.addEventListener('click', scrollToSection)
})
