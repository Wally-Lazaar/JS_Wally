
//fonctionalité 1 +1.bis:
let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
	console.log(`Click number ${footerCounter}`);
});

//fonctionalité 2 : Tel que demande dans le cour (ne marche pas :o)

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});

//fonctionalité 2-bis:

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click",function(){
  if ( document.getElementsByClassName("navbar-toggler")[0].getAttribute("data-toggle")=="collapse")
    document.getElementsByClassName("navbar-toggler")[0].setAttribute("data-toggle", "")
  else 
    document.getElementsByClassName("navbar-toggler")[0].setAttribute("data-toggle", "collapse")
});

// Fonctionnalité 3 :
let firstCard = document.getElementsByClassName("card-body")[0];
firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
});

//Fonctionnalité 4 :
let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});

//Fonctionnalité 5 :
document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});;

// Fonctionnalité 6 :
let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++){
  viewButtons[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}

