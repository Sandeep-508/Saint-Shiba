let icon = document.querySelector("#menuicon");
let view = document.querySelector(".lg-view");
icon.addEventListener("click", () => {
    view.classList.toggle("show");
});

let accordion = document.querySelectorAll(".accord_item");
let disp_text = document.querySelector(".amet_lorem");
let svg_switch = document.querySelector(".svg_icon");

disp_text.style.display = "block";
svg_switch.style.transform = "rotate(180deg)";

accordion.forEach(element => {
    let text_disp = element.querySelector(".amet_lorem");
    let svg = element.querySelector(".svg_icon");
    let touch = element.querySelector(".touch");

    touch.addEventListener("click", () => {
        accordion.forEach(other => {
            if (other !== element) {
                let text_disp = other.querySelector(".amet_lorem");
                let svg = other.querySelector(".svg_icon");
                text_disp.style.display = "none";
                svg.style.transform = "rotate(0deg)";
            }
        });
        let disp = window.getComputedStyle(text_disp).display;
        if (disp === "none") {
            text_disp.style.display = "block";
            svg.style.transform = "rotate(180deg)";
        } else {
            text_disp.style.display = "none";
            svg.style.transform = "rotate(0deg)";
        }
    });
});