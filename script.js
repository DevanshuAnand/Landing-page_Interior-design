var btn = document.getElementsByClassName("btn");
var banner = document.getElementById("banner");

var quotes = ['"The best rooms have something to say about the people who live in them."', '"A room should never allow the eye to settle in one place. It should smile at you and create fantasy."', '"Innovation is often the ability to reach into the past and bring back what is good, what is beautiful, what is useful, what is lasting."'];


btn[0].onclick = function() {

    banner.src = "images/pic1.png";
    animation();
    this.classList.add("active");
    document.getElementById("para").innerHTML = quotes[0];

}

btn[1].onclick = function() {

    banner.src = "images/pic2.png";
    animation();
    this.classList.add("active");
    document.getElementById("para").innerHTML = quotes[1];
}

btn[2].onclick = function() {

    banner.src = "images/pic3.png";
    animation();
    document.getElementById("para").innerHTML = quotes[2];
    this.classList.add("active");
}

function animation() {

    banner.classList.add("zoom");
    setTimeout(function() {
        banner.classList.remove("zoom");
    }, 500);
    //removing color from othre dots
    for (b of btn) {
        b.classList.remove("active");
    }
}


// console.log(quotes[0]);

// for (var i = 0; i < quotes.length(); i++) {
//     // const element = document.getElementsByClassName(btn[i]);
//     if (btn[i] == active) {
//         document.getElementsById("para").innerHTML = quotes[i];
//     }
// }