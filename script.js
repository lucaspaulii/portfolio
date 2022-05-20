const title = document.getElementById("title");
const logo = document.getElementById("logo");

let randNumColor = () => {
    let num = Math.floor(Math.random() * 256);
    return num
}

let randColor = () => {
    return 'rgb('+ randNumColor() + ',' + randNumColor() + ',' + randNumColor() + ')'
}

title.addEventListener('click', function onClick() {
    title.style.color = 'whitesmoke';
})

logo.addEventListener('click', function onClickLogo() {
    title.style.color = randColor();
    logo.style.transform = "rotate(-360deg)";
})

logo.addEventListener('mouseout', function onMouseOut() {
    logo.style.transform = "";
})