let lsProData = JSON.parse(localStorage.getItem("proData"));

let cartproduct = JSON.parse(localStorage.getItem("cartList")) || [];


let main = document.querySelector("#main");
let backbtn = document.querySelector("#back");


let backfun = () => {
    window.location.href = "mens.html";
}
backbtn.addEventListener("click", backfun);
let products = document.createElement("div");
products.setAttribute("id", "prd")



let display = (lsProData) => {
    products.innerHTML = null;

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "imgdiv");

    let img = document.createElement("img");
    img.src = lsProData.image_url;
    img.setAttribute("class", "zoom");

    let info = document.createElement("div");
    info.setAttribute("id", "prd2")


    let desc = document.createElement("p");
    desc.innerText = lsProData.name;
    desc.setAttribute("class", "pro-desc");

    let price = document.createElement("p");
    price.innerText = lsProData.price;
    price.setAttribute("class", "price")

    let selectList2 = document.createElement("select");
    selectList2.setAttribute("class", "sk");
    selectList2.setAttribute("id", "size");
    let size = [
        { "name": "Choose Size", "value": "none" },
        { "name": "Small", "value": "small" },
        { "name": "Medium", "value": "medium" },
        { "name": "Large", "value": "large" },
        { "name": "X-Large", "value": "xlarge" },
    ];
    for (let i = 0; i <= size.length - 1; i++) {
        let option = document.createElement("option");
        option.value = size[i].value;
        option.text = size[i].name;
        selectList2.appendChild(option);
    }

    let selectList = document.createElement("select");
    selectList.setAttribute("class", "sk");
    selectList.setAttribute("id", "clr");
    let color = [
        { "name": "Choose Color", "value": "none" },
        { "name": "Red", "value": "red" },
        { "name": "Pink", "value": "pink" },
        { "name": "Blue", "value": "blue" },
        { "name": "White", "value": "white" },
    ];
    for (let i = 0; i <= color.length - 1; i++) {
        let option = document.createElement("option");
        option.value = color[i].value;
        option.text = color[i].name;
        selectList.appendChild(option);
    }

    let star = document.createElement("div");
    star.setAttribute("class", "rating");

    let stardivs1 = document.createElement("span");
    stardivs1.setAttribute("class", "fa fa-star checked");
    let stardivs2 = document.createElement("span");
    stardivs2.setAttribute("class", "fa fa-star checked");
    let stardivs3 = document.createElement("span");
    stardivs3.setAttribute("class", "fa fa-star checked");
    let stardivs4 = document.createElement("span");
    stardivs4.setAttribute("class", "fa fa-star checked");
    let stardivs5 = document.createElement("span");
    stardivs5.setAttribute("class", "fa fa-star");

    let button = document.createElement("button");
    button.innerText = "Add to bag";
    button.setAttribute("id", "btn")

    button.addEventListener("click", function () {
        addtocart(lsProData);
    })

    let wish = document.createElement("div");
    wish.setAttribute("id", "wishdiv");

    let i = document.createElement("i");
    i.setAttribute("class", "fa fa-plus");

    let p = document.createElement("p");
    p.innerText = "Add to Wish List";
    p.style.cursor = "pointer";



    let msg1 = document.createElement("p");
    msg1.innerText = "Add to Bag or Wish List to see price";
    msg1.setAttribute("class", "msg1");

    let msg2 = document.createElement("p");
    msg2.innerText = "FREE SHIPPING ON ORDERS $89+";

    let msg3 = document.createElement("p");
    msg3.innerText = "Supersoft Revive foam puts relaxing, recharging comfort underfoot in cushy sliders sporting flex grooves in the soles that move naturally with each step.";




    star.append(stardivs1, stardivs2, stardivs3, stardivs3, stardivs4, stardivs5)
    wish.append(i, p)
    imgdiv.append(img);
    info.append(star, desc, msg1, msg2, msg3, selectList2, selectList, button, wish);

    products.append(imgdiv, info);

}
main.append(products);

display(lsProData);


let addtocart = (ele) => {

    let exists = cartproduct.filter(function (element) {
        return ele.name == element.name;
    })

    if (exists.length > 0) {
        alert("Already in Cart")
    }
    else {
        let item_image = ele.image_url;
        let item_name = ele.name;
        let item_price = +ele.cost;
        let item_size = document.querySelector('#size').value;
        let item_color = document.querySelector('#clr').value;
        let item_qty = ele.quantity;
        let obj = {
            image: item_image,
            name: item_name,
            price: item_price,
            size: item_size,
            color: item_color,
            qty: item_qty,
        }
        cartproduct.push(obj);
        // console.log(cartproduct);
        localStorage.setItem("cartList", JSON.stringify(cartproduct));
        alert("Product added successfully");
        window.location.href = "cart.html"
    }
}

import navbar from "../component/navbar.js"

document.getElementById("mainnavbar").innerHTML=navbar();


import footer from "../component/footer.js";

document.getElementById("footer_body").innerHTML=footer();
