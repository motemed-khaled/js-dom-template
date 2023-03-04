// reset body style
document.body.style.cssText = "margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif;";
// start nav bar
//create element
let myHeaderdev = document.createElement("div");
let myHeader1 = document.createElement("div");
let myHeader2 = document.createElement("div");
let myHeaderUl = document.createElement("ul");
let myHeaderLi1 = document.createElement("li");
let myHeaderLi2 = document.createElement("li");
let myHeaderLi3 = document.createElement("li");
let myHeaderLi4 = document.createElement("li");
// add text to my element
let myHeader1Text = document.createTextNode("Metoo");
let myLi1Text1 = document.createTextNode("Home");
let myLi1Text2 = document.createTextNode("About");
let myLi1Text3 = document.createTextNode("Service");
let myLi1Text4 = document.createTextNode("Contact");
//add text to my element
myHeader1.appendChild(myHeader1Text);
myHeaderLi1.appendChild(myLi1Text1);
myHeaderLi2.appendChild(myLi1Text2);
myHeaderLi3.appendChild(myLi1Text3);
myHeaderLi4.appendChild(myLi1Text4);
myHeaderUl.appendChild(myHeaderLi1);
myHeaderUl.appendChild(myHeaderLi2);
myHeaderUl.appendChild(myHeaderLi3);
myHeaderUl.appendChild(myHeaderLi4);
myHeader2.appendChild(myHeaderUl);
myHeaderdev.appendChild(myHeader1);
myHeaderdev.appendChild(myHeader2);
//add classes to my element
myHeaderdev.className = "header";
myHeader1.className = "logo";
myHeader2.className = "nav-links";
myHeaderLi1.className = "active";
// add element to the body
document.body.appendChild(myHeaderdev);
// add style to my element 
document.querySelector(".header").style.cssText = "display: flex; flex-wrap:wrap; justify-content: space-around; align-items: center; padding: 15px;";
document.getElementsByClassName("logo")[0].style.cssText = "font-size: 30px; color: rgba(35 169 110 / 1);";
let myUl = document.querySelector(".nav-links ul").style.cssText = "list-style: none; display: flex; flex-wrap:wrap; justify-content: center; align-items: center;";
let myli = document.querySelectorAll(".nav-links ul li");
for (let i = 0; i < myli.length; i++) {
    if (myli[i].classList.contains("active")) {
        myli[i].style.cssText = "margin-left: 40px; font-size: 20px; color: rgba(35 169 110 / 1); cursor: pointer;";
    } else {
        myli[i].style.cssText = "margin-left: 40px; font-size: 20px; color: #d1cece; cursor: pointer;";
    }
}
//add action to li 
for (let i = 0; i < myli.length; i++) {
    myli[i].onclick = function () {
        for (let j = 0; j <myli.length ; j++) {
            myli[j].style.color = "#d1cece";
        }
        this.style.color = "rgba(35 169 110 / 1)";
    }
}
//end nav bar

//=============================================================================================
// start section 1
//create section element
let mySection1 = document.createElement("div");
for (let i = 0; i < 1000; i++){
let mydiv1 = document.createElement("div");
//create section text
mydiv1.innerHTML = `<h1>${i+1}</h1> <p>Product</p>`;
//add classes to my elemnt
    mySection1.className = "section1";
    mySection1.id = "m"; 
mydiv1.className = "box";
// add content to the body
    mySection1.appendChild(mydiv1);
}
document.body.appendChild(mySection1);
 

//add style to myelemnt
document.querySelector(".section1").style.cssText = "background-color:rgba(236 236 236 /1); padding: 20px; display: flex; flex-wrap:wrap;  gap: 30px;justify-content: center; align-items: center;";

let boxStyle = document.querySelectorAll(".box");
for (let i = 0; i < boxStyle.length; i++){
    boxStyle[i].style.cssText = "background-color:rgba(255 255 255); text-align: center; padding: 20px; width: 300px; border-radius: 10px;";
    document.querySelectorAll(".section1 .box p")[i].style.cssText = "color: #ddd; font-weight: bold;";
}

// end section 1

// ==================================================================================================================

//  start footer

let myFooter = document.createElement("div");
myFooter.textContent = "Copyright 2023";
myFooter.className = "footer";
document.body.appendChild(myFooter);
document.querySelector(".footer").style.cssText = "text-align: center; padding: 30px; background-color: rgba(35 169 110 / 1); font-weight: bold; color: #fff; font-size: 20px;";



