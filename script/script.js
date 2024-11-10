class Cproduct {
	constructor(id, name, price, category, image, tag) {
		this.id= id;
		this.name= name;
		this.price= price;
		this.category= category;
		this.image= image;
		this.tag= tag;
	}
}

class Ccategory {
	constructor(id, name, icon, important) {
		this.id= id;
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
		new Cproduct("cm01", "camisa flamengo 2024", 100.00, "camisas", "./img/products/camisas/camisa-flamengo2024/", ["new", "favorite"]),
		new Cproduct("cm02", "camisa Al-Hilal", 125.00, "camisas", "./img/products/camisas/camisa-alhilal/", []),
		new Cproduct("cm03", "camisa fluminense 2023", 100.00, "camisas", "./img/products/camisas/camisa-fluminense2023/", ["favorite"]),
		new Cproduct("cm04", "camisa vasco 2023", 100.00, "camisas", "./img/products/camisas/camisa-vasco2023/", ["favorite"]),
		new Cproduct("cm05", "camisa botafogo 2024", 100.00, "camisas", "./img/products/camisas/camisa-botafogo2024/", []),
		new Cproduct("cm06", "camisa seleção brasileira 2024", 125.00, "camisas", "./img/products/camisas/camisa-selecao-brasil2024/", []),
		new Cproduct("cm07", "camisa seleção japão animes", 150.00, "camisas", "./img/products/camisas/camisa-selecao-japao-anime/", ["new"]),
		new Cproduct("rl01", "diesel 5 bar", 175.00, "relogios", "./img/products/relogios/diesel-5bar/", ["new"]),
		new Cproduct("rl02", "armani funcional", 199.00, "relogios", "./img/products/relogios/armani-funcional/", [""]),
		new Cproduct("rl03", "invicta venom hybrid", 300.00, "relogios", "./img/products/relogios/invicta-venom-hybrid/", ["new"]),
		new Cproduct("rl04", "invicta tria magnum", 700.00, "relogios", "./img/products/relogios/invicta-tria-magnum/", [""]),
		new Cproduct("tn01", "bota jordan chicago prime", 185.00, "tenis", "./img/products/tenis/bora-jordan-chicago-prime/", [""]),
		new Cproduct("tn02", "tênis nike dunk infantil", 150.00, "tenis", "./img/products/tenis/nike-dunk-infantil/", ["favorite"]),
		new Cproduct("tn03", "adidas falcon run", 160.00, "tenis", "./img/products/tenis/adidas-falcon-run/", [""]),
		new Cproduct("tn04", "mizuno creation 22", 145.00, "tenis", "./img/products/tenis/mizuno-creation22/", [""]),
		new Cproduct("el01", "earpods usb-c", 20.00, "eletronicos", "./img/products/eletronicos/earpods-usbc/", ["favorite"]),
		new Cproduct("el02", "aspirador portátil usb", 30.00, "eletronicos", "./img/products/eletronicos/aspirador-portatil-usb/", [""]),
		new Cproduct("el03", "carregador iphone 15", 30.00, "eletronicos", "./img/products/eletronicos/carregador-iphone15/", ["new"]),
		new Cproduct("el04", "scooter elétrica 2024", 8200.00, "eletronicos", "./img/products/eletronicos/scooter-eletrica/", [""]),
		new Cproduct("el05", "fone bluetooth", 20.00, "eletronicos", "./img/products/eletronicos/fone-bluetooth/", ["new"]),
		new Cproduct("cp01", "caneca térmica stanley", 85.00, "copos", "./img/products/copos/caneca-stanley/", [""]),
		new Cproduct("cp02", "copo térmico stanley", 50.00, "copos", "./img/products/copos/copo-stanley/", ["favorite"]),
		new Cproduct("cp03", "garrafa térmica", 25.00, "copos", "./img/products/copos/garrafa-termica/", [""]),
		new Cproduct("pf01", "212 men 100ml", 70.00, "perfumes", "./img/products/perfumes/212-men/", [""]),
		new Cproduct("pf02", "ferrari black 100ml", 65.00, "perfumes", "./img/products/perfumes/ferrari-black/", [""])
	]

	return products
}

function getCategories() {
	const category= [
		new Ccategory("cm", "camisas", "<i class='bx bxs-t-shirt'></i>", true),
		new Ccategory("rl", "relogios", "<i class='bx bxs-watch'></i>", true),
		new Ccategory("tn", "tenis", "<i class='bx bx-closet'></i>", true),
		new Ccategory("el", "eletronicos", "<i class='bx bx-devices'></i>", true),
		new Ccategory("cp", "copos", "<i class='bx bx-coffee-togo'></i>", false),
		new Ccategory("pf", "perfumes", "<i class='bx bx-spray-can'></i>", false)
	]

	return category
}

function fillCategoryMenu(listCategory) {
	let navCategory= document.querySelector("#nav-category")

	listCategory.map((category) => {
		const li= document.createElement("li")

		li.innerHTML= `<a href= "category.html" class= "link-category">${category.name}</a>`

		li.querySelector(".link-category").href= `category.html?category=${category.name}`

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

	if(product!= "") pathChild= pathChild.concat(` > ${product}`)

	pathActual.innerText= pathChild
}

function addBtnPage(page, pages= 1) {
	const btnsPage= document.querySelector("#btn-pages-category")

	if(pages>1) {
		const btnFront= document.createElement("div")
		btnFront.classList.add("btn-page", "change-page", "front-page")

		btnFront.innerHTML= "seguinte <i class='bx bx-chevron-right'></i>"

		btnsPage.appendChild(btnFront)

		for(let i=1; i< pages; i++) {
			const btnNumber= document.createElement("div")
			btnNumber.classList.add("btn-page", "number-pages")

			btnNumber.innerHTML= `${i+1}`

			btnsPage.appendChild(btnNumber)
		}

		if(page> 0) {
			const btnBack= document.createElement("div")
			btnBack.classList.add("btn-page", "change-page", "back-page")

			btnBack.innerHTML= "<i class='bx bx-chevron-left'></i> anterior"

			btnsPage.appendChild(btnBack)
		}
	}
}

function fillCategoryPage(category, listProduct) {
	const containerProducts= document.querySelector("#product-group-category")

	let amtProduct= listProduct.length
	let positionActual= 0
	let pages= []

	document.title = `${category} | DS Multimarcas`

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

	addBtnPage(0, pages.length)

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

		imgInside.src= `${product.image}icon.webp`
		imgInside.alt= `Imagem do produto: ${product.name}`

		containerProducts.appendChild(element)
	}))
}

function setQueryURL(category, product= "") {
	const urlActual= window.location.href

	let urlCategory= urlActual + `?category=${category}`
	if(product!= "")urlCategory += `&product=${product}`

	window.open(urlCategory, target= "_self")
}

function getEspecialURL() {
	const url= window.location.href
	let queries= []

	let urlActual= url.split("?")

	let requests= urlActual[1].split("&")

	requests.forEach(request=> {
			let query= request.split("=")
			let queryOBJ= {}

			queryOBJ[query[0]]= query[1]

			queries.push(queryOBJ)
		})
	return queries
}

function setPageCategory() {
	let query= getEspecialURL()

	let category= Object.values(query[0])

	console.log(category)
	fillCategoryPage(category, getProductofCategory(category, getProducts()))
}

function fillProductPage(product) {
	const main= document.querySelector("#main-product")
	const imgProduct= main.querySelector("#img-inside-product-carousel")
	const infoProduct= main.querySelector("#info-product-page")
	const categoryP= infoProduct.querySelector("#category-product-page")
	const nameP= infoProduct.querySelector("#title-product-page")
	const priceP= infoProduct.querySelector("#price-product-page")

	console.log(product)

	document.title = `${product.name} | DS Multimarcas`

	changePathGeneral(product.category, product.name)

	imgProduct.src= `${product.image}image.webp`
	imgProduct.alt= `Imagem para o produto ${product.name}`

	categoryP.innerHTML= `${product.category}`
	nameP.innerHTML= `${product.name}`
	priceP.innerHTML= `r$${product.price.toFixed(2)}`
}

function getOBJById(id, listOBJ) {
	return listOBJ.filter(element=> element.id == id)
}

function setPageProduct() {
	let query= getEspecialURL()

	let idProduct= Object.values(query[1])
	console.log(idProduct)

	let product= getOBJById(idProduct, getProducts())
	console.log(product)
	fillProductPage(product[0])
}

function clickSpeedAcess() {
	const btnAcess= document.querySelectorAll(".access-button")	
}

var positionActual= 0


document.addEventListener('DOMContentLoaded', event=> {
	if(window.location.href.includes("category.html")) {
		setPageCategory()
	}
})

document.addEventListener('DOMContentLoaded', event=> {
	if(window.location.href.includes("product.html")) {
		setPageProduct()
	}
})


document.addEventListener('DOMContentLoaded', event=> {
	if(window.location.href.includes("index.html")) {
		fillProductHome(getProducts(), "news-product")
		fillProductHome(getProducts(), "favorite-product")
		fillSpeedAcess(getCategories())
		fillCategoryMenu(getCategories())
		document.querySelector("#menu-category").onclick= openMenuDp
		document.querySelector("#icon-burguer").onclick= openMenu
		autoSlider()
	}
})