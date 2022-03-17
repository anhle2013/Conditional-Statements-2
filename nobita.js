// thiết lập nhấn phím thì...
function upArrowPressed() {
    let element = document.getElementById("nobi");
    element.style.top = parseInt(element.style.top) - 100 + 'px';
}
function downArrowPressed() {
    let element = document.getElementById("nobi");
    element.style.top = parseInt(element.style.top) + 100 + 'px';
}
function leftArrowPressed() {
    let element = document.getElementById("nobi");
    element.style.left = parseInt(element.style.left) - 100 + 'px';
}
function rightArrowPressed() {
    let element = document.getElementById("nobi");
    element.style.left = parseInt(element.style.left) + 100 + 'px';
}

//hàm nhận phím
function moveSelection(evt) {
    console.log("Move selection " + evt.keyCode);
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
} 

