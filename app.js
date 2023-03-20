var typed = new Typed('.text-second', {
    // Waits 1000ms after typing "First"
    strings: [' Front End Developer',' Coder'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
  });

////////////sidebar/////////////////
function sidebar(){
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
     
  };

////////////////  Scroll Revel Effect //////////////////

  ScrollReveal({
    reset:true,
    distance:"100px",
    duration:2500,
    delay:300
  }).reveal('#front_skills',{delay:500,origin:"bottom"});

  ScrollReveal({
    reset:true,
    distance:"100px",
    duration:2500,
    delay:300
  }).reveal('#projects',{delay:2000,origin:"bottom"});

  //////////////opore skills ///

  ScrollReveal({
    reset:true,
    distance:"100px",
    duration:2500,
    delay:300
  }).reveal('.about_tittle',{delay:500,origin:"bottom"});
  
  ScrollReveal({
    reset:true,
    distance:"100px",
    duration:2500,
    delay:300
  }).reveal('.about_me',{delay:500,origin:"bottom"});
  
  ScrollReveal({
    reset:true,
    distance:"-100px",
    duration:2500,
    delay:300
  }).reveal('form',{delay:500,origin:"right"});
  
  ScrollReveal({
    reset:true,
    distance:"100px",
    duration:2500,
    delay:300
  }).reveal('.profile',{delay:500,origin:"top"});
  

