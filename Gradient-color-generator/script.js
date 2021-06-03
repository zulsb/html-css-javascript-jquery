let colorOne = document.getElementById('colorOne');
let colorTwo = document.getElementById('colorTwo');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');

function setDirection(value,_this){
    let directions = document.querySelectorAll(".buttons button");
    for(let i of directions){
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
    console.log(currentDirection);
}

function generateCode(){
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText(){
    outputCode.select();
    document.execCommand('copy');
    alert('Gradient Color Copied!');
}

generateCode();
