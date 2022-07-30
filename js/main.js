
//Vars BTNs
let subMenu1Btn = document.querySelector("#sub-menu-1-btn");
let newBooking1Btn = document.querySelector("#newBooking-1-btn");

let subMenu2Btn = document.querySelector("#sub-menu-2-btn");
let newBooking2Btn = document.querySelector("#newBooking-2-btn");

let subMenu3Btn = document.querySelector("#sub-menu-3-btn");
let newBooking3Btn = document.querySelector("#newBooking-3-btn");

let upgradeBtn = document.querySelector("#upgrade-btn");
let upgradeBtn2 = document.querySelector("#upgrade-btn2");

let exchange1Btn = document.querySelector("#exchange-1-btn");
let exchangeBtn1 = document.querySelector("#exchange-btn-1");

let exchange2Btn = document.querySelector("#exchange-2-btn");
let exchangeBtn2 = document.querySelector("#exchange-btn-2");

let exchange3Btn = document.querySelector("#exchange-3-btn");
let exchangeBtn3 = document.querySelector("#exchange-btn-3");

let refund1Btn = document.querySelector("#refund-1-btn");
let refundBtn1 = document.querySelector("#refund-btn-1");

let refund2Btn = document.querySelector("#refund-2-btn");
let refundBtn2 = document.querySelector("#refund-btn-2");
//******************************* */

let newBooking1 = document.querySelector(".newBooking-1");
let newBooking2 = document.querySelector(".newBooking-2");
let newBooking3 = document.querySelector(".newBooking-3");
let upgrade = document.querySelector(".upgrade");
let exchange1 = document.querySelector(".exchange-1");
let exchange2 = document.querySelector(".exchange-2");
let exchange3 = document.querySelector(".exchange-3");
let refund1 = document.querySelector(".refund-1");
let refund2 = document.querySelector(".refund-2");
//********************************************** */


/******************************************* */
subMenu1Btn.addEventListener("click", function(){
    newBooking1.style.cssText= "display: block ";
})
newBooking1Btn.addEventListener("click", function(){
    newBooking1.style.cssText= "display: none ";
})

subMenu2Btn.addEventListener("click", function(){
    newBooking2.style.cssText= "display: block ";
})
newBooking2Btn.addEventListener("click", function(){
    newBooking2.style.cssText= "display: none ";
})

subMenu3Btn.addEventListener("click", function(){
    newBooking3.style.cssText= "display: block ";
})
newBooking3Btn.addEventListener("click", function(){
    newBooking3.style.cssText= "display: none ";
})

upgradeBtn.addEventListener("click", function(){
    upgrade.style.cssText= "display: block ";
})
upgradeBtn2.addEventListener("click", function(){
    upgrade.style.cssText= "display: none ";
})

exchange1Btn.addEventListener("click", function(){
    exchange1.style.cssText= "display: block ";
})
exchangeBtn1.addEventListener("click", function(){
    exchange1.style.cssText= "display: none ";
})

exchange2Btn.addEventListener("click", function(){
    exchange2.style.cssText= "display: block ";
})
exchangeBtn2.addEventListener("click", function(){
    exchange2.style.cssText= "display: none ";
})

exchange3Btn.addEventListener("click", function(){
    exchange3.style.cssText= "display: block ";
})
exchangeBtn3.addEventListener("click", function(){
    exchange3.style.cssText= "display: none ";
})

refund1Btn.addEventListener("click", function(){
    refund1.style.cssText = "display: block ";
})
refundBtn1.addEventListener("click", function(){
    refund1.style.cssText = "display: none ";
})

refund2Btn.addEventListener("click", function(){
    refund2.style.cssText = "display: block ";
})
refundBtn2.addEventListener("click", function(){
    refund2.style.cssText = "display: none ";
})
/******************************************** */
//PAL//

let mainInputValue1 = document.querySelector("#datalist-1");
let dataListValue1 = document.querySelectorAll(".datalist-1-1");
let closeBtn1 = document.querySelectorAll("#PAL-btn-1-1");

mainInputValue1.addEventListener("input", function(){
    for (i=0; i < dataListValue1.length; i++){
        if (mainInputValue1.value === dataListValue1[i].value){
            document.querySelector(`.PAL-1-${i +1}`).style.cssText = "display: block;";
        } else {
            document.querySelector(`.PAL-1-${i +1}`).style.cssText = "display: none;";
        }
    }
})



closeBtn1.forEach(function(element, index){
    element.addEventListener("click", function (){
        document.querySelector(`.PAL-1-${index + 1}`).style.cssText = "display: none;"
    })
})



let mainInputValue2 = document.querySelector("#datalist-2");
let dataListValue2 = document.querySelectorAll(".datalist-2-1");
let closeBtn2 = document.querySelectorAll("#PAL-btn-2-1");

mainInputValue2.addEventListener("input", function(){
    for (i=0; i < dataListValue2.length; i++){
        if (mainInputValue2.value === dataListValue2[i].value){
            document.querySelector(`.PAL-2-${i +1}`).style.cssText = "display: block;";
        } else {
            document.querySelector(`.PAL-2-${i +1}`).style.cssText = "display: none;";
        }
    }
})



closeBtn2.forEach(function(element, index){
    element.addEventListener("click", function (){
        document.querySelector(`.PAL-2-${index + 1}`).style.cssText = "display: none;"
    })
})