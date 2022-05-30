//Loading screen

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

//Nav Bar & Button//

mybutton = document.getElementById("myBtn");
myheader = document.getElementById("scroll");
myactive = document.getElementById("activeT");
loader = document.getElementById("loader");
window.onscroll = function () {
  scrollFunction()
}; //when scroll the function executes

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //scrolled more than 20px aways
    mybutton.style.display = "block" //makes the button appear
    myheader.style.backgroundColor = "rgba(0,0,0,1)" //makes the transparent nav to solid bg
    myactive.style.borderBottom = "3px solid red" //puts the border bottom line there
  }
  else {
    //everyth will not be seen
    myheader.style.backgroundColor = "rgba(0,0,0,0)"
    mybutton.style.display = "none"
    myactive.style.borderBottom = "none"
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

//Search Bar//

// from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ //
// ww3schools was also referenced

function filter() {
  var input = document.getElementById("animesearch").value; //gets what u search
  var div = document.querySelector("#select"); //the div of all the links
  var items = div.querySelectorAll("a"); //Array of all the links
  input = input.toLowerCase(); //makes search bar non case sensitive
  //var notfound = document.getElementById("NotFound")

  if (input == "") {
    div.style.display = "none";
  }
  else {
    var match = 0;
    for (var count = 0; count < items.length; count++) {
      var item = items[count].innerText; //gets all the text of links
      check = item.toLowerCase(); //non case sensitive
      if (check.indexOf(input) == -1) { //checks if the var check and the var input have similarities, if none returns -1
        items[count].style.display = "none";
      }
      else {
        items[count].style.display = "block"; //if there are similarities the para with the similarities will be shown
        match += 1; //for later
      }

      if (match > 0) { //if at least one match is seen the div will be visible
        div.style.display = "block";
      }
      else {
        div.style.display = "none";
      }
    }
  }
}
