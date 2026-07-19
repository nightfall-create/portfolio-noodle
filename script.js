const nav =
document.getElementById("nav");

const navinner =
document.getElementById("nav-inner");

const links =
document.querySelectorAll(".nav-link");
nav.addEventListener("click", function(){
    navinner.classList.toggle("active");
    if(navinner.classList.contains("active")){
        nav.textContent = "×";
    }else{
        nav.textContent = "☰";
    }
});

links.forEach(function(link){
    link.addEventListener("click", function(){
        navinner.classList.remove("active");
        nav.textContent = "☰";
    });
});

const message =
document.getElementById("top-btn");

window.addEventListener("scroll", function () {
 if(window.scrollY > 0){
        message.style.opacity = "1";
    }else{
        message.style.opacity = "0";
    }
   

});