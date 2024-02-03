const dynamicText = document.querySelector("h1 span");
const words = ["WEB DEVELOPER ", "WEB DESIGNER ", "PROGRAMMER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 150);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();


const myImg = document.getElementById("my-profile-pic");
const myImg2 = document.getElementById("about-img");
const myButton = document.getElementById("radio1");
const myButton2 = document.getElementById("radio2");
const myButton3 = document.getElementById("radio3");
const myButton4 = document.getElementById("radio4");
const spanText = document.querySelector("span");
const mySvg1 = document.getElementById("des_web");
const mySvg2 = document.getElementById("dev_web");
const mySvg3 = document.getElementById("prog");
const logos1 = document.getElementById("logo");
const logos2 = document.getElementById("logo2");



myButton.addEventListener("click", function() {
    myImg.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900735/pic102_un0ygg.png";
    if(myImg && myImg.style) {
        myImg.style.height = '70%';
        myImg.style.width = '34%';
    }
    myImg2.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706901607/amandeep2_ofw0s7.png";
    mySvg1.src= "svg/purple_design.svg";
    mySvg2.src = "svg/purple_programming.svg";
    mySvg3.src = "svg/purple_web_dev.svg";
});
myButton2.addEventListener("click", function() {
    myImg.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900732/pic103_knuhmh.png";
    if(myImg && myImg.style) {
        myImg.style.height = '70%';
        myImg.style.width = '34%';
    }
    myImg2.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706901612/amandeep3_nl5u70.png";
    mySvg1.src= "svg/green_design.svg";
    mySvg2.src = "svg/green_prog.svg";
    mySvg3.src = "svg/green_dev.svg";
});
myButton3.addEventListener("click", function() {
    myImg.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900729/pic104_uflosy.png";
    if(myImg && myImg.style) {
        myImg.style.height = '70%';
        myImg.style.width = '34%';
    }
    myImg2.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706901614/amandeep4_w4qguy.png";
    mySvg1.src= "svg/pink_design.svg";
    mySvg2.src = "svg/pink_prog.svg";
    mySvg3.src = "svg/pink_dev.svg";
});
myButton4.addEventListener("click", function() {
    myImg.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900724/pic101_buktcj.png";
    if(myImg && myImg.style) {
        myImg.style.height = '70%';
        myImg.style.width = '34%';
    }
    myImg2.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706901604/amandeep_qcx23h.png";
    mySvg1.src= "svg/undraw_innovative_re_rr5i.svg";
    mySvg2.src = "svg/undraw_programming_re_kg9v.svg";
    mySvg3.src = "svg/undraw_web_developer_re_h7ie.svg";
});
function changeSheet(sheet) {
    var style = document.getElementById('style01');
    style.setAttribute('href', sheet);
}
// 
function scrolldiv() {
    var elem = document.getElementById("head3");
    elem.scrollIntoView();
}

function scrolldiv2() {
    var elem = document.getElementById("page");
    elem.scrollIntoView();
}

function showDiv() {
    var y = document.getElementById('map-loc');
    y.style.display = "block";
 }

/////
var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light"; 
        logos2.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900737/logo2_f1skw7.png" ;
        logos1.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900778/logo1_vpk7tn.png" ;

    if (currentTheme === "light") {
        targetTheme = "dark";
        logos1.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900737/logo2_f1skw7.png" ;
        logos2.src = "https://res.cloudinary.com/dcpgz3pum/image/upload/v1706900778/logo1_vpk7tn.png" ;
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    
};

