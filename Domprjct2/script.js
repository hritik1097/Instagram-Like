const card = document.querySelector("#card");
const dil = document.querySelector("i");

card.addEventListener("dblclick", function () {
    dil.style.transform = " translate(-50%, -50%) scale(1)"
    dil.style.color = "red"
    setTimeout(() => {
        dil.style.transform = " translate(-50%, -50%) scale(0)"

    }, 1000);


})