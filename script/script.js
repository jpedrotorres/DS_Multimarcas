class Cproduct {
	constructor(name, price, category, image, tag) {
		this.name= name;
		this.price= price;
		this.category= category;
		this.image= image;
		this.tag= tag;
	}
}

class Ccategory {
	constructor(name, icon, important) {
		this.name= name;
		this.icon= icon;
		this.important= important;
	}
}


function openMenu() {
	let menuH= document.querySelector("#menu-category")

	if(menuH.style.display== "block") menuH.style.display= "none"
	else menuH.style.display= "block"
}

function openMenuDp() {
	const listDp= document.querySelector("#nav-category")

	if(listDp.style.display== "block") listDp.style.display= "none"
	else listDp.style.display= "block"
}

function getProducts() {
	const products= [
		new Cproduct("camisa flamengo 2024", 100.00, "camisas", "./img/products/camisas/camisa-flamengo2024/", ["new", "favorite"]),
		new Cproduct("camisa Al-Hilal", 125.00, "camisas", "./img/products/camisas/camisa-alhilal/", []),
		new Cproduct("camisa fluminense 2023", 100.00, "camisas", "./img/products/camisas/camisa-fluminense2023/", ["favorite"]),
		new Cproduct("camisa vasco 2023", 100.00, "camisas", "./img/products/camisas/camisa-vasco2023/", ["favorite"]),
		new Cproduct("camisa botafogo 2024", 100.00, "camisas", "./img/products/camisas/camisa-botafogo2024/", []),
		new Cproduct("camisa seleção brasileira 2024", 125.00, "camisas", "./img/products/camisas/camisa-selecao-brasil2024/", []),
		new Cproduct("camisa seleção japão animes", 150.00, "camisas", "./img/products/camisas/camisa-selecao-japao-anime/", ["new"]),
		new Cproduct("diesel 5 bar", 175.00, "relógios", "./img/products/relogios/diesel-5bar/", ["new"]),
		new Cproduct("armani funcional", 199.00, "relógios", "./img/products/relogios/armani-funcional/", [""]),
		new Cproduct("invicta venom hybrid", 300.00, "relógios", "./img/products/relogios/invicta-venom-hybrid/", ["new"]),
		new Cproduct("invicta tria magnum", 700.00, "relógios", "./img/products/relogios/invicta-tria-magnum/", [""]),
		new Cproduct("bota jordan chicago prime", 185.00, "tênis", "./img/products/tenis/bora-jordan-chicago-prime/", [""]),
		new Cproduct("tênis nike dunk infantil", 150.00, "tênis", "./img/products/tenis/nike-dunk-infantil/", ["favorite"]),
		new Cproduct("adidas falcon run", 160.00, "tênis", "./img/products/tenis/adidas-falcon-run/", [""]),
		new Cproduct("mizuno creation 22", 145.00, "tênis", "./img/products/tenis/mizuno-creation22/", [""]),
		new Cproduct("earpods usb-c", 20.00, "eletrônicos", "./img/products/eletronicos/earpods-usbc/", ["favorite"]),
		new Cproduct("aspirador portátil usb", 30.00, "eletrônicos", "./img/products/eletronicos/aspirador-portatil-usb/", [""]),
		new Cproduct("carregador iphone 15", 30.00, "eletrônicos", "./img/products/eletronicos/carregador-iphone15/", ["new"]),
		new Cproduct("scooter elétrica 2024", 8200.00, "eletrônicos", "./img/products/eletronicos/scooter-eletrica/", [""]),
		new Cproduct("fone bluetooth", 20.00, "eletrônicos", "./img/products/eletronicos/fone-bluetooth/", ["new"]),
		new Cproduct("caneca térmica stanley", 85.00, "copos", "./img/products/copos/caneca-stanley/", [""]),
		new Cproduct("copo térmico stanley", 50.00, "copos", "./img/products/copos/copo-stanley/", ["favorite"]),
		new Cproduct("garrafa térmica", 25.00, "copos", "./img/products/copos/garrafa-termica/", [""]),
		new Cproduct("212 men 100ml", 70.00, "perfumes", "./img/products/perfumes/212-men/", [""]),
		new Cproduct("ferrari black 100ml", 65.00, "perfumes", "./img/products/perfumes/ferrari-black/", [""])
	]

	return products
}

function getCategories() {
	const category= [
		new Ccategory("camisas", "<i class='bx bxs-t-shirt'></i>", true),
		new Ccategory("relógios", "<i class='bx bxs-watch'></i>", true),
		new Ccategory("tênis", "<i class='bx bx-closet'></i>", true),
		new Ccategory("eletrônicos", "<i class='bx bx-devices'></i>", true),
		new Ccategory("copos", "<i class='bx bx-coffee-togo'></i>", false),
		new Ccategory("perfumes", "<i class='bx bx-spray-can'></i>", false)
	]

	return category
}

function fillCategoryMenu(listCategory) {
	let navCategory= document.querySelector("#nav-category")

	listCategory.map((category) => {
		const li= document.createElement("li")

		li.innerHTML= `<a href= "category.html" class= "link-category">${category.name}</a>`

		navCategory.appendChild(li)
	})
}

function fillSpeedAcess(listCategory) {
	let speedAcess= document.querySelector(".speed-access")

	listCategory.filter(function(e) { return e.important})
		.map((category) => {
			const element= document.createElement("div")

			element.classList.add("access-button")

			element.innerHTML= `<div class= "access-icon">${category.icon}</div>
					<p class= "name-access">${category.name}</p>`

			speedAcess.appendChild(element)
		})
}

function fillProductHome(listProduct, type) {
	const productHome= document.querySelector(`#${type}`)
	const productShop= productHome.querySelector(".group-shop")

	const typeList= {
		"news-product": "new",
		"favorite-product": "favorite"
	}

	let teste= listProduct.filter(function(e) { return e.tag.includes(typeList[type]) })
		.map(product => {
			const productCard= document.createElement("div")

			productCard.classList.add("product-card")

			productCard.innerHTML= `<div class= "product-img-card">
						<img loading= "lazy" class= "img-inside-card-product"/>
					</div>
					<div class= "info-product-card">
						<p class= "category-product-card">${product.category}</p>
						<h3 class= "title-product-card">${product.name}</h3>
						<p class= "price-product-card">r$${product.price}</p>
					</div>`

			const imgInside= productCard.querySelector(".img-inside-card-product")

			imgInside.src= `${product.image}/icon.webp` 
			imgInside.alt= `Imagem do produto: ${product.name}`

			productShop.appendChild(productCard);
		})
}

function changeSlider() {
	const sliders= document.getElementsByClassName("item-main-carousel")

	const amtSlider= sliders.length
	let sliderActual= sliders[positionActual]

	positionActual<(amtSlider - 1) ? positionActual++ : positionActual= 0

	sliderActual.classList.remove("item-checked-carousel")
	sliderActual= sliders[positionActual]
	sliderActual.classList.add("item-checked-carousel")
}

function autoSlider() {
	setInterval(changeSlider, 5000)
}

function btnChangeSlider() {
	changeSlider()
}

function getProductofCategory(category, listProduct) {
	return listProduct.filter(product=> product.category == category)
}

function changeH1Page(category) {
	document.querySelector(".title-page").innerText = `${category}`
}

function changePathGeneral(category, product= "") {
	const pathContainer= document.querySelector(".path-general")
	const pathActual= pathContainer.querySelector("#path-child")

	let pathChild= `${category}`

	if(product!= "") pathChild.concat(` > ${product}`)

	pathActual.innerText= pathChild
}

function fillCategoryPage(category, listProduct) {
	const containerProducts= document.querySelector("#product-group-category")

	let amtProduct= listProduct.length
	let positionActual= 0
	let pages= []

	changePathGeneral(category)
	changeH1Page(category)

	if(amtProduct== 0) {
		containerProducts.innerHTML= "Não há produtos nessa categoria!"

		return 0
	}

	do {
		if(amtProduct> 7) {
			pages.push(listProduct.slice(positionActual, positionActual+ 7))

			amtProduct-= 7
		} else pages.push(listProduct.slice(positionActual, amtProduct))

	} while(amtProduct > 7)

	pages.forEach(page=> page.map(product=> {
		const element= document.createElement("div")

		element.classList.add("product-category")

		element.innerHTML= `<div class= "img-product-category">
						<img loading= "lazy" id= "img-inside-categoryPage">
					</div>
					<div class= "info-product-category">
						<h2 class= "title-product-category">${product.name}</h2>
						<p class= "price-product-category">r$${product.price.toFixed(2)}</p>
					</div>`

		const imgInside= element.querySelector("#img-inside-categoryPage")

		imgInside.src= `${product.image}/icon.webp`
		imgInside.alt= `Imagem do produto: ${product.name}`

		containerProducts.appendChild(element);
	}))
}

fillCategoryPage("camisas", getProductofCategory("camisas", getProducts()))

fillProductHome(getProducts(), "news-product")
fillProductHome(getProducts(), "favorite-product")
fillSpeedAcess(getCategories())
fillCategoryMenu(getCategories())
document.querySelector("#menu-category").onclick= openMenuDp
//document.querySelector("#menu-category").addEventListener("mouseenter", openMenuDp)
document.querySelector("#icon-burguer").onclick= openMenu

var positionActual= 0
document.addEventListener('DOMContentLoaded', autoSlider)