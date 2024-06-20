// Declare variables below to save the different divs of your story.
let buttons=document.querySelector(".buttons");
let storystarter=document.querySelector(".story-opening");
let moonpic=document.querySelector(".moon-pic");
let option1=document.querySelector(".option-one");
let option2=document.querySelector(".option-two");
let title=document.querySelector(".title");
let optiononescreen=document.querySelector(".option-one-screen");
let woodsperson=document.querySelector(".woods-person");
let optiontwoscreen=document.querySelector(".option-two-screen");
let streetfigure=document.querySelector(".street-figure");
let optiononeend=document.querySelector(".option-one-end");
let petergif=document.querySelector(".peter-gif");
let optiontwoend=document.querySelector(".option-two-end");
let jumpimage=document.querySelector(".jumped-image");
let roadstrangeroptionone=document.querySelector(".road-stranger-option-one");
let goodjob=document.querySelector(".good-job");
let roadstrangeroptiontwo=document.querySelector(".road-stranger-option-two");
let game=document.querySelector(".gaming");
let option11=document.querySelector(".option-one1");
let option12=document.querySelector(".option-one2");
let option21=document.querySelector(".option-two1");
let option22=document.querySelector(".option-two2");
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


option1.addEventListener('click', function(){
    optiononescreen.style.display="block";
    storystarter.style.display="none";
    option1.style.display="none";
    option2.style.display="none";
    option11.style.display="block";
    option12.style.display="block";
});
option2.addEventListener("click",function(){
    optiontwoscreen.style.display="block";
    storystarter.style.display="none";
    option1.style.display="none";
    option2.style.display="none";
    option21.style.display="block";
    option22.style.display="block";
    option11.style.display="none";
});
option11.addEventListener('click',function(){
    option1.style.display="none";
    option2.style.display="none";
    optiononescreen.style.display="none";
    optiontwoend.style.display="block";
    option11.style.display="none";
    option12.style.display="none";
    option21.style.display="none";
    option22.style.display="none";
});
option12.addEventListener('click',function(){
    option12.style.display="none";
    option11.style.display="none";
    optiononeend.style.display="block";
    optiononescreen.style.display="none";
});

option21.addEventListener('click',function(){
    option21.style.display="none";
    option22.style.display="none";
    optiontwoscreen.style.display="none";
    roadstrangeroptionone.style.display="block";
});
option22.addEventListener('click',function(){
    option21.style.display="none";
    option22.style.display="none";
    optiontwoscreen.style.display="none";
    roadstrangeroptiontwo.style.display="block";
});

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });