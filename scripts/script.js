/*  Kamil Kucharczyk - 2020  */ 

/* $('<style>p.special:before{content:"'+str+'"}</style>').appendTo('head'); <- dodawanie elementu do sekcji head */ 

let basket_content = [0,0,0,0,0], 
    products = ["chleb","mieso","mleko","woda","czekolada"],
    product_index,
    i,
    title = "Zamawiaj z przyjemnością",
    title_tag = document.getElementsByTagName("title")[0],
    sum,
    priceSum;

function removeProduct(product_name) { 
    console.log("remover");
    product_index=products.indexOf(product_name); 
    if(basket_content[product_index]-1>=0) { 
        basket_content[product_index]--;
    }
    basket_content_update ()
}

function addProduct (product_name) { 
    console.log("adder");
    product_index=products.indexOf(product_name); 
    basket_content[product_index]++;
    basket_content_update ()
}

function basket_content_update () { 
    console.log("updater");
    sum=0;
    for (i=0;i<products.length;i++) { 
        sum+=basket_content[i]; 
    }

    for (i=0; i<products.length;i++) { 
        if (basket_content[i]>0) { 
            document.getElementById(products[i]).style.display="block";
            $('<style>#'+products[i]+'::before {content: "'+basket_content[i]+'";</style>').appendTo('head');
            console.log(products[i]); 
            console.log(basket_content[i]);
        }
        else if (basket_content[i]==0) { 
            document.getElementById(products[i]).style.display="none";
            document.getElementsByTagName("title")[0].innerHTML = title; 
        }
    }
    if (sum!=0) {
        title_tag.innerHTML = "(" + sum + ")" + title; 
        document.getElementsByClassName("sum")[0].style.opacity = "1";
        document.getElementsByClassName("empty")[0].style.display = "none";
       
    }
    else if (sum==0){
        title_tag.innerHTML = title; 
        document.getElementsByClassName("sum")[0].style.opacity = "0";
        document.getElementsByClassName("empty")[0].style.display = "block";
    }
    document.getElementsByClassName("sum")[0].innerHTML = sum;
    document.getElementsByClassName("priceSum")[0].innerHTML = Round(totalCost(),2) + "zł";
}

function remove_all_products () { 
    for (i=0; i<products.length;i++) { 
        basket_content[i]=0;
    }
    basket();
    basket_content_update(); 
}


/* ZMIANA CONTENTU NA MAINIE */ 

let description = [ 
    "Chleb pieczony w naszej rodzinnej piekarni, staramy się co sił, " +
    "aby Pańtwo otrzymali codziennie do domu najwyższej klasy pieczywo",
    "Mięso pochodzi również z naszego rodzinnego zakładu, posiadamy " + 
    "własną ubojnię, oraz masarnię, dzięki czemu zapewniamy zawsze " + 
    "świeże mięso",
    "Najświeższe mleko prosto od podkarpackich krów, dzięki hodowli na " + 
    "wolnym terenie nasze krowy nie są zestresowane i dają nam to co najlepsze",
    "Woda z okolicznych źródeł, mineralizowana dodatkowo w naszych zakładach, " + 
    "jest najczęściej wybieraną wodą wśród sportowców w Polsce i Słowacji",
    "Czekolada, nasz flagowy produkt, którym chwalimy się gdzie tylko możemy " + 
    "- połączyliśmy esencję z najlepszych światowych wyrobów czekoladowych"
    ],
    price = [
        2.40,
        24.60,
        5.20,
        1.60,
        3.40
    ], 
    image_url = [
        "../images/bread.png",
        "../images/meat.png",
        "../images/milk.png",
        "../images/water.png",
        "../images/chocolate.png"
    ];

function viewProduct (product_name) { 
        console.log("viewer");  
        product_index = products.indexOf(product_name); 
        document.getElementsByClassName("main_content")[0].style.width="0";
        document.getElementsByClassName("price_container")[0].style.width="0";
        
        setTimeout(function() { 
            document.getElementsByClassName("product_image")[0].style.backgroundImage = "url(" + image_url[product_index] + ")";
            document.getElementsByClassName("product_description")[0].innerHTML = description[product_index];
            document.getElementsByClassName("price")[0].innerHTML = price[product_index] + "zł"
            document.getElementsByClassName("main_content")[0].style.width = "100%"; 
            document.getElementsByClassName("price_container")[0].style.width = "200px";
            document.getElementsByClassName("product_description")[0].style.display = "flex";
        }, 1000);
    }

function totalCost() { 
    priceSum = 0;
    for (i=0; i<products.length;i++) { 
        priceSum += basket_content[i]*price[i];
    }
    return priceSum; 
}

function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}