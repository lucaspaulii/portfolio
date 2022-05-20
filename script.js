const title = document.getElementById("title");

let randNum = () => {
    let num = Math.floor(Math.random() * 255);
    return num
}

let randColor = () => {
    return 'rgb('+ randNum() + ',' + randNum() + ',' + randNum() + ')'
}

let newColor = randColor();

title.addEventListener('click', function onClick() {
    title.style.color = newColor; 
})
