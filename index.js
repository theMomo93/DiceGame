var guestPlayer = Math.floor((Math.random() * 6) + 1); //1-6
var randomDiceImage = "dice" + guestPlayer + ".png"; //dice1.png - dice6.png
var randomImageSource = "dice/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

document.getElementById("button").addEventListener("click", function() {
    // Add roll class to dice images
    document.querySelectorAll(".dice img").forEach(function(die) {
        die.classList.add("roll");
    });

    setTimeout(function() {
        var guestPlayer = Math.floor((Math.random() * 6) + 1);
        var randomDiceImage = "dice" + guestPlayer + ".png";
        var randomImageSource = "dice/" + randomDiceImage;
        var image1 = document.querySelectorAll("img")[0];

        image1.setAttribute("src", randomImageSource);

        var computer = Math.floor((Math.random() * 6) + 1);
        var randomImageSource2 = "dice/dice" + computer + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        // Remove roll class after a delay to stop the animation
        setTimeout(function() {
            document.querySelectorAll(".dice img").forEach(function(die) {
                die.classList.remove("roll");
            });

            // If player 1 wins
            if (guestPlayer > computer) {
                document.querySelector("h1").innerHTML = "<span style='color: green;'>🚩 Guest Player Wins!</span>";
            } else if (computer > guestPlayer) {
                document.querySelector("h1").innerHTML = "<span style='color: red;'>Computer Wins! 🚩</span>";

            } else {
                document.querySelector("h1").innerHTML = "Draw!";
            }
        }, 200); // 200 millisecond delay after animation completes
    }, 100); // 900 millisecond delay for the animation to start
});