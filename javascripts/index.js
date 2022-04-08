const slotmachine = new Slotmachine;

const btnRightElement = document.getElementById('btnRight');
const popUP = document.getElementById('myPopup');

const firstColum = document.getElementById('columOne');
const secondColum = document.getElementById('columTwo');
const thirdColum = document.getElementById('columThree');

const yourMoney = document.getElementById('cupom');
const plus10 = document.getElementById('btn10');
const plus25 = document.getElementById('btn25');
const plus50 = document.getElementById('btn50');
const plusDollar = document.getElementById('btnDollar');
const takeBack = document.getElementById('takeMoney');
const betMoney = document.getElementById('bet');

let din = 0;

let cash = (cents) => {
    if (cents === 'x'){
        din = 0;
        return betMoney.innerHTML = din;
    }
    if (din < slotmachine.wallet()){
        din += cents;
    }
    betMoney.innerHTML = din.toFixed(2);
    return din
}
let winMoney = (cash, icons) => {
    let total = 0;
    const a = slotmachine.match(icons);
    let b = slotmachine.betCash(cash);
    let c = cash;
    total = b + (a * c);
    yourMoney.innerHTML = total.toFixed(2);
    betMoney.innerHTML = 0;
    slotmachine.myMoney(total);
    winLose(a);
    return total
}


function convertChar(icons){
    let iconsRound = [];
     
    for(let i = 0; i < icons.length; i++)
    {
        switch(icons[i]){
            case 'cherry':
                iconsRound.push('&#127826');
                break;
            case'barBlue':
                iconsRound.push('BAR');
                break;
            case'barGreen':
                iconsRound.push('BAR<br>BAR');
                break;
            case'barRed':
                iconsRound.push('BAR<br>BAR<br>BAR');
                break;
            case'sevenBlue':
                iconsRound.push('7');
                break;
            case'sevenGreen':
                iconsRound.push('7');
                break;
            case'sevenRed':
                iconsRound.push('7');
                break;
            case'bonus':
                iconsRound.push('&#127826;');
                break;
        }
    }
    printluckyGame(iconsRound); 
    
}

function color(icons){
    if(icons[0] === 'barBlue' || icons[0] === 'sevenBlue'){
            firstColum.classList.toggle('blue');
            firstColum.classList.toggle('color');
    }
    if(icons[0] === 'barGreen' || icons[0] === 'sevenGreen'){
            firstColum.classList.toggle('green');
            firstColum.classList.toggle('color');
    }
    if(icons[0] === 'barRed' || icons[0] === 'sevenRed'){
            firstColum.classList.toggle('red');
            firstColum.classList.toggle('color');
    }
    if(icons[1] === 'barBlue' || icons[1] === 'sevenBlue'){
            secondColum.classList.toggle('blue');
            secondColum.classList.toggle('color');
    }
    if(icons[1] === 'barGreen' || icons[1] === 'sevenGreen'){
            secondColum.classList.toggle('green');
            secondColum.classList.toggle('color');
    }
    if(icons[1] === 'barRed' || icons[1] === 'sevenRed'){
        secondColum.classList.toggle('red');
        secondColum.classList.toggle('color');
    }
    if(icons[2] === 'barBlue' || icons[2] === 'sevenBlue'){
        thirdColum.classList.toggle('blue');
        thirdColum.classList.toggle('color');
    }
    if(icons[2] === 'barGreen' || icons[2] === 'sevenGreen'){
        thirdColum.classList.toggle('green');
        thirdColum.classList.toggle('color');
    }
    if(icons[2] === 'barRed' || icons[2] === 'sevenRed'){
        thirdColum.classList.toggle('red');
        thirdColum.classList.toggle('color');
    }
    convertChar(icons);
    
}

function printluckyGame(iconsRound){
    firstColum.innerHTML = iconsRound[0];
    secondColum.innerHTML = iconsRound[1];
    thirdColum .innerHTML = iconsRound[2];
}
function anotherGame(){
    btnRightElement.innerText = 'SPIN';
}

function play(){
    let icons = [];
    icons = slotmachine.game();
    winMoney(din, icons);
    color(icons);
    btnRightElement.innerText = 'NEW GAME';
}
function cleanIcons(){
    firstColum.classList.remove("blue", "green", "red");
    firstColum.classList.add("color");

    secondColum.classList.remove("blue", "green", "red");
    secondColum.classList.add("color");

    thirdColum.classList.remove("blue", "green", "red");
    thirdColum.classList.add("color");
}
function newGame(){
    cleanIcons();
    anotherGame();
    const iconsRound = slotmachine.resetGame(); 
    firstColum.innerText = iconsRound[0];
    secondColum.innerText = iconsRound[1];
    thirdColum .innerText = iconsRound[2];
}
function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  
  function changeColor() {
    let discoBoxes = document.getElementsByClassName("one");
    let discoBoxess = document.getElementsByClassName("two");
    let discoBoxesss = document.getElementsByClassName("three");
    for (i=0; i<discoBoxes.length && firstColum.innerText === '?'; i++) {
      discoBoxes[i].style.backgroundColor = generateRandomColor();
      discoBoxess[i].style.backgroundColor = generateRandomColor();
      discoBoxesss[i].style.backgroundColor = generateRandomColor();
      
    }
    
    if(firstColum.innerText !='?'){
      discoBoxes[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
      discoBoxess[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
      discoBoxesss[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
    
  }
  setInterval(changeColor, 1000);
  
btnRightElement.addEventListener('click', () => {
    if (btnRightElement.innerText === 'SPIN' && din > 0){
        setTimeout(play, 2000);
        setInterval(changeColor, 200);

    }
    else{
        din = 0;
        newGame();
    }
   
});

function winLose(a){
    if (a === 0){
        setTimeout(function () {
            $('pop').hide(popUP.innerHTML = "LOSER"); // "foo" é o id do elemento que seja manipular.
        }, 1000);
        setTimeout(function () {
            $('pop').hide(popUP.innerHTML = ""); // "foo" é o id do elemento que seja manipular.
        }, 3000);
    }
    if (a > 0){
        setTimeout(function () {
            $('pop').hide(popUP.innerHTML = `You WIN! X ${a}`); // "foo" é o id do elemento que seja manipular.
        }, 1000);
        setTimeout(function () {
            $('pop').hide(popUP.innerHTML = ""); // "foo" é o id do elemento que seja manipular.
        }, 3000);
    }
    
};

$().ready( function() {
	setTimeout(function () {
		$('pop').hide(popUP.innerHTML = "You won a $10 coupon!"); 
	}, 1000);
    setTimeout(function () {
		$('pop').hide(popUP.innerHTML = ""); 
	}, 3000);
});


plus10.addEventListener('click', () =>{
    if (btnRightElement.innerText === 'SPIN'){
        cash(0.1);
    }
});
plus25.addEventListener('click', () =>{
    if (btnRightElement.innerText === 'SPIN'){
        cash(0.25);
    }  
});

plus50.addEventListener('click', () =>{
    if (btnRightElement.innerText === 'SPIN'){
        cash(0.50);
    }  
});

plusDollar.addEventListener('click', () =>{
    if (btnRightElement.innerText === 'SPIN'){
        cash(1);
    }  
});

takeBack.addEventListener('click', () =>{
    if (btnRightElement.innerText === 'SPIN'){
        cash('x');
    }
});  
