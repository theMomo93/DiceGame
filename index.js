var guestPlayer = Math.floor((Math.random() * 6)+1); //1-6
var randomDiceImage = "dice" + guestPlayer + ".png"; //dice1.png - dice6.png
var randomImageSource = "dice/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

document.getElementById("button").addEventListener("click", function() {
    var guestPlayer = Math.floor((Math.random() * 6) + 1); // 1-6
    var randomDiceImage = "dice" + guestPlayer + ".png"; // dice1.png - dice6.png
    var randomImageSource = "dice/" + randomDiceImage; // images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var computer = Math.floor((Math.random() * 6) + 1);
    var randomImageSource2 = "dice/dice" + computer + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    // If player 1 wins
    if (guestPlayer > computer) {
        document.querySelector("h1").innerHTML = "🚩 Guest Player Wins!";
    } else if (computer > guestPlayer) {
        document.querySelector("h1").innerHTML = "Computer Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
});
