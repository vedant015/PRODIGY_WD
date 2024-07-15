let NavBar = document.getElementById("topbar");
let items = document.querySelectorAll(".menu-item");

NavBar.addEventListener("mouseover", function(){
    NavBar.style.backgroundColor = "#000";
    items.forEach(item => item.style.color = "#FFF");
});

NavBar.addEventListener("mouseout", function(){
    NavBar.style.backgroundColor = "#FFF";
    items.forEach(item => item.style.color = "#000");
});