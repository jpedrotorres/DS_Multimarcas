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

fillProductHome(getProducts(), "news-product")
fillProductHome(getProducts(), "favorite-product")
fillSpeedAcess(getCategories())
fillCategoryMenu(getCategories())
document.querySelector("#menu-category").onclick= openMenuDp
document.querySelector("#menu-category").addEventListener("mouseenter", openMenuDp)

document.querySelector("#icon-burguer").onclick= openMenu

