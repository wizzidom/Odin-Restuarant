content = document.querySelector("#content");

//home
function home(){

content.innerHTML = "";
home = document.createElement('div')
home.className = 'home';
welcome = document.createElement('p');
welcome.innerHTML = "<h1>Welcome to steakhouse</h1>"
image = document.createElement('img')
image.src = "https://www.seriouseats.com/thmb/-KA2hwMofR2okTRndfsKtapFG4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg"
home.appendChild(welcome)
home.appendChild(image)
//Append home to content
content.appendChild(home)

}

//Menu
function menu(){

    content.innerHTML = "";

menu = document.createElement('div')
menu.className = 'menu';
menu_title = document.createElement('p');
menu_title.innerHTML = "<h1>Menu</h1>sd"
menu.appendChild(menu_title)
content.appendChild(menu)
}
//About
function about(){

    content.innerHTML = "";
    about = document.createElement('div')
    about.className = 'about';
    about_title = document.createElement('p');
    about_title.innerHTML = "<h1>About</h1>sd"
    about.appendChild(about_title)
    content.appendChild(about)
}



homeclick = document.getElementById("home");

homeclick.addEventListener("click", home)

aboutclick = document.getElementById("about");

aboutclick.addEventListener("click", about)

menuclick = document.getElementById("menu");

menuclick.addEventListener("click", menu)
