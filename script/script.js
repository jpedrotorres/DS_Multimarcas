class Cproduct {
	constructor(name, price, category, tag) {
		this.name= name;
		this.price= price;
		this.category= category;
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

		navCategory.appendChild(li);
	})
}

function fillSpeedAcess(listCategory) {
	let speedAcess= document.querySelector(".speed-access")

	const teste = listCategory.filter(function(e) { return e.important})
	.map((category) => {
		const element= document.createElement("div")

		element.classList.add("access-button")

		element.innerHTML= `<div class= "access-icon">${category.icon}</div>
				<p class= "name-access">${category.name}</p>`

		speedAcess.appendChild(element);
	})
}

fillSpeedAcess(getCategories())
fillCategoryMenu(getCategories())
document.querySelector("#icon-burguer").onclick= openMenu

