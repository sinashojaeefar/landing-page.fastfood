const food = document.getElementById("food");
const food1 = document.getElementById("food1");
const food2 = document.getElementById("food2");
const food3 = document.getElementById("food3");
const food4 = document.getElementById("food4");

food1.addEventListener("click", () => {
    food.src = "img/Hamburger.png";
})

food2.addEventListener("click", () => {
    food.src = "img/pizza.jpg";
})

food3.addEventListener("click", () => {
    food.src = "img/kalbas sandwich.webp";
})

food4.addEventListener("click", () => {
    food.src = "img/hotdog sandwich.jpg";
})
