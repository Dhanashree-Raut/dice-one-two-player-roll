

function rollDice(){
    var dice2 = Math.ceil((Math.random()*6));
    var dice1 = Math.ceil((Math.random()*6));
    // console.log(dice2);
    // console.log(dice2);

    document.querySelector(".img1").setAttribute('src',"images/dice"+dice1+".png");
    document.querySelector(".img2").setAttribute('src',"images/dice"+dice2+".png");

}

function playerOne(){
     document.querySelector("#player-2").classList.add('dice-remove');

}

function playerTwo(){
     document.querySelector("#player-2").classList.remove('dice-remove');
}