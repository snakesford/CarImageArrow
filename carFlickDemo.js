const init = () => {
    var flicker = Flicker(CARS, document.getElementById("content"));
    document.getElementById("leftButton").addEventListener("click", flicker.leftClick)
    document.getElementById("rightButton").addEventListener("click", flicker.rightClick)
}

window.addEventListener("load", init);