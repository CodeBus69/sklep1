/*  Kamil Kucharczyk - 2020  */ 

document.getElementsByClassName("basket_content")[0].style.opacity = "0";
setTimeout(function () { 
    document.getElementsByClassName("basket_content")[0].style.opacity = "1";
},500);

let current_width = 1;

function basket () { 
    console.log("Hi!");
    let header = document.getElementsByTagName("header")[0],
        basket_content = document.getElementsByClassName("basket_content")[0],
        price = document.getElementsByClassName("priceSum")[0];
        console.log(header.style.width);
    if (current_width==1) { 
        header.style.width="90px";
        header.style.borderRadius = " 0 45px 45px 0";
        basket_content.style.opacity="0";
        current_width = 0;
        price.style.opacity = "0";

    }
    else if (current_width==0) { 
        header.style.width="100%";
        basket_content.style.opacity="1";
        current_width=1;
        price.style.opacity = "1";
    }
}