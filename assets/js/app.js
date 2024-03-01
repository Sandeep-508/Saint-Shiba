let icon = document.querySelector("#menuicon");
let view = document.querySelector(".lg-view");
icon.addEventListener("click", () => { 
    view.classList.toggle("show");
});