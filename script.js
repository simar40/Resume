var toogle = document.getElementById("mobile-navi-toogle");
toogle.addEventListener("click", toogleMenu);

var crosss = document.getElementsByClassName("toggle");
toogle.addEventListener("click", makeCross);

var navMenuAnchorTags = document.querySelectorAll("nav ul li a");
var navMenuAnchorTags2 = document.querySelectorAll(".links a");

function makeCross() {
    for (var j = 0; j < crosss.length; j++) {

        var cross = document.getElementsByClassName("toggle");
        if (cross[j].classList.contains("fa-bars")) {
            cross[j].classList.add("fa-times");
            cross[j].classList.remove("fa-bars");
        }
        else if (cross[j].classList.contains("fa-times")) {

            cross[j].classList.remove("fa-times");
            cross[j].classList.add("fa-bars");
        }
    }
}
function toogleMenu() {
    var links = document.getElementsByClassName("links");
    for (var i = 0; i < links.length; i++) {
        if (links[i].style.display == "none") {
            links[i].style.display = "block";
        }
        else {
            links[i].style.display = "none";
        }
    }
}


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetElementID = this.textContent.trim().toLowerCase();
        var targetElementContent = document.getElementById(targetElementID);
        var interval = setInterval(function () {
            var targetElementCoordinates = targetElementContent.getBoundingClientRect();
            console.log(targetElementCoordinates.top);
            if (targetElementCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 5);
    });
}

for (var i = 0; i < navMenuAnchorTags2.length; i++) {
    navMenuAnchorTags2[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetElementID2 = this.textContent.trim().toLowerCase();
        var targetElementContent2 = document.getElementById(targetElementID2);
        var interval2 = setInterval(function () {
            var targetElementCoordinates2 = targetElementContent2.getBoundingClientRect();
            if (targetElementCoordinates2.top <= 0) {
                clearInterval(interval2);
                return;
            }
            window.scrollBy(0, 50);
        }, 5);
    });
}

var skillProgress = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll', scrollCheck);
var animationDone = false;
initialiseBars();

function initialiseBars()
{
    for(var bar of skillProgress)
    {
        bar.style.width = 0 + "%";
    }
}

function scrollCheck()
{
    var containerHeight = skillContainer.getBoundingClientRect().top;
    if(animationDone == false && containerHeight <= window.innerHeight)
    {
        animationDone = true;
        fillSkills();
    }
    else if(containerHeight > window.innerHeight)
    {
        animationDone = false;
        initialiseBars();
    }
}

function fillSkills()
{
    for(let bar of skillProgress)
    {
        let targetWidth = bar.getAttribute('data-skill');
        let currWidth = 0;
        let interval = setInterval(function(){
            if(currWidth > targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width = currWidth + "%";
        },7)
    }
}
