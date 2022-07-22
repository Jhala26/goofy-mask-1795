

// dress data

let derssData = async () => {

    let data = await getData();

    console.log(data);
    append(data)


}

document.getElementById("dress").addEventListener("click", derssData);
let getData = async () => {
    url = `https://dummyjson.com/products/category/mens-shirts`;
    res = await fetch(url);
    data = await res.json();

    return data.products;
}

// shoes data


let shoesData = async () => {

    let data = await getData2();

    console.log(data);
    append(data)


}

document.getElementById("shoes").addEventListener("click", shoesData);
let getData2 = async () => {
    url = `https://dummyjson.com/products/category/mens-shoes`;
    res = await fetch(url);
    data = await res.json();

    return data.products;
}


// bags data

let bagsData = async () => {

    let data = await getData3();

    console.log(data);
    append(data)


}

document.getElementById("bag").addEventListener("click", bagsData);
let getData3 = async () => {
    url = `https://dummyjson.com/products/category/sunglasses`;
    res = await fetch(url);
    data = await res.json();

    return data.products;
}




let append = (data) => {
    let container = document.getElementById("products");
    container.innerHTML = null;
    data.forEach((elem) => {
        let image = document.createElement("img");
        image.src = elem.thumbnail;


        let brand = document.createElement("p");
        brand.innerText = elem.brand;

        let title = document.createElement("h3");
        title.innerText = elem.title;

        let price = document.createElement("p");
        price.innerText = "$" + elem.price

       

        let div = document.createElement("div");
      
        div.append(image, brand, title, price);
        container.append(div);
    })
}


document.querySelector("#sort").addEventListener("change",handleSortName);

function handleSortName(){
  let selected=document.querySelector("#sort").value;
  console.log(selected)
      if(selected=="Ascending"){
        mensData.sort(function(a,b){
          if(a.name>b.name) return 1
          if(a.name<b.name) return -1
          return 0
        });

        displayPage(mensData);
      }

      if(selected=="Descending"){
        mensData.sort(function(a,b){
          if(a.name>b.name) return -1
          if(a.name<b.name) return 1
          return 0
        });

        displayPage(mensData);
        
      }

      if(selected=="Low"){
        mensData.sort(function(a,b){
         return a.cost-b.cost;
        });

        displayPage(mensData);
      }

      if(selected=="High"){
        mensData.sort(function(a,b){
         return b.cost-a.cost
        });

        displayPage(mensData);
        
      };

}


var mensLs=JSON.parse(localStorage.getItem("mensDataLs")) ||[] ;

var mensData = [
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: "$1170",
      strikedoffprice: "$2599",
      cat:"shoes",
      per:"(58% off)",
      cost:1170
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: "$699",
      strikedoffprice: "$999",
      cat:"slipper",
      per:"(38% off)",
      cost:699
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: "$945",
      strikedoffprice: "$2099",
      cat:"shoes",
      per:"(48% off)",
      cost:945
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: "$399",
      strikedoffprice: "$799",
      cat:"slipper",
      per:"(58% off)",
      cost:399
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: "$1620",
      strikedoffprice: "$3599",
      cat:"shoes",
      per:"(58% off)",
      cost:1620
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: "$1440",
      strikedoffprice: "$3199",
      cat:"shoes",
      per:"(58% off)",
      cost:1440
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: "$1999",
      strikedoffprice: "$3199",
      cat:"pants",
      per:"(48% off)",
      cost:1999
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: "$769",
      strikedoffprice: "$1099",
      cat:"t-shirts",
      per:"(38% off)",
      cost:769
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: "$1299",
      strikedoffprice: "$1440",
      cat:"t-shirts",
      per:"(37% off)",
      cost:1299
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ",
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: "$699",
      strikedoffprice: "$999",
      cat:"slipper",
      per:"(38% off)",
      cost:699
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: "$1620",
      strikedoffprice: "$3599",
      cat:"shoes",
      per:"68%",
      cost:1620
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: "$1620",
      strikedoffprice: "$3599",
      cat:"shoes",
      per:"(68% off)",
      cost:1620
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9519/MEN_SWIM_SLIPPERS_FV9519_1.jpg.plp ",
      name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
      price: "$599",
      strikedoffprice: "$999",
      cat:"slipper",
      per:"(38% off)",
      cost:599
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: "$1575",
      strikedoffprice: "$3499",
      cat:"shoes",
      per:"(58% off)",
      cost:1575
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H00024/reebok_H00024_1.jpg.plp ",
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ",
      price: "$9999",
      strikedoffprice: "$12000",
      cat:"shoes",
      per:"(38% off)",
      cost:9999
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9170/reebok_GK9170_1.jpg.plp ",
      name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
      price: "$779",
      strikedoffprice: "$1299",
      cat:"t-shirts",
      per:"(48% off)",
      cost:779
    
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
      price: "$1019",
      strikedoffprice: "$1699",
      cat:"pants",
      per:"(38% off)",
      cost:1019
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
      price: "$1019",
      strikedoffprice: "$1699",
      cat:"pants",
      per:"(48% off)",
      cost:1019
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND SHOES",
      price: "$1575",
      strikedoffprice: "$3499",
      cat:"shoes",
      per:"(58% off)",
      cost:1575
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ",
      name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
      price: "$3499",
      strikedoffprice: "$4999",
      cat:"shoes",
      per:"(38% off)",
      cost:3499
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-FV9555/MEN_SWIM_SLIPPERS_FV9555_1.jpg.plp  ",
      name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ",
      price: "$749",
      strikedoffprice: "$1499",
      cat:"slipper",
      per:"(48% off)",
      cost:749
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3994/reebok_EX3994_1.jpg.plp   ",
      name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ",
      price: "$1149",
      strikedoffprice: "$2299",
      cat:"slipper",
      per:"(58% off)",
      cost:1149
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ",
      name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
      price: "$1620",
      strikedoffprice: "$3599",
      cat:"shoes",
      per:"(58% off)",
      cost:1620
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-GK9180/reebok_GK9180_1.jpg.plp  ",
      name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ",
      price: "$779",
      strikedoffprice: "$1299",
      cat:"pants",
      per:"(48% off)",
      cost:799
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5732/reebok_HB5732_1.jpg.plp  ",
      name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ",
      price: "$3499",
      strikedoffprice: "$4999",
      cat:"hoodie",
      per:"(38% off)",
      cost:3499
    
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp  ",
      name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
      price: "$3499",
      strikedoffprice: "$4999",
      cat:"hoodie",
      per:"(38% off)",
      cost:3499
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5364/reebok_FQ5364_1.jpg.plp   ",
      name: " UNISEX REEBOK TRAINING ACTIVE  BAG ",
      price: "$1399",
      strikedoffprice: "$2799",
      cat:"bag",
      per:"(58% off)",
      cost:1399
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: "$1575",
      strikedoffprice: "$3499",
      cat:"shoes",
      per:"(58% off)",
      cost:1575
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
      name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
      price: "$3919",
      strikedoffprice: "$5599",
      cat:"shoes",
      per:"(48% off)",
      cost:3919
    
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
      price: "$1620",
      strikedoffprice: "$3599",
      cat:"shoes",
      per:"(63% off)",
      cost:1620
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4272/reebok_EX4272_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING QUICK DRIFTER SHOES",
      price: "$1620",
      strikedoffprice: "$3599",
      cat:"shoes",
      per:"(63% off)",
      cost:1620
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H02293/reebok_H02293_1.jpg.plp",
      name: "MEN'S REEBOK DYNAMIC ZIGZAG SHOES",
      price: "$7599",
      strikedoffprice: "$9999",
      cat:"shoes",
      per:"(35% off)",
      cost:7599
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9551/MEN_SWIM_SLIPPERS_FV9551_1.jpg.plp",
      name: "MEN'S REEBOK SWIM SUPERSOFT FLIP SLIPPERS",
      price: "$909",
      strikedoffprice: "$1299",
      cat:"slipper",
      per:"(31% off)",
      cost:909
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING ACTIVE BASIC POLO TEE",
      price: "$779",
      strikedoffprice: "$1299",
      cat:"t-shirts",
      per:"(48% off)",
      cost:779
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HF3794/reebok_HF3794_01.JPG.plp ",
      name: "MEN'S REEBOK TRAINING ACTIVE MOVE TEE ",
      price: "$1749",
      strikedoffprice: "$2499",
      cat:"t-shirts",
      per:"(58% off)",
      cost:1749
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
      name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
      price: "$1079",
      strikedoffprice: "$1799",
      cat:"t-shirts",
      per:"(48% off)",
      cost:1079
    },
    ];

    localStorage.setItem("mensDataLs",JSON.stringify(mensData));

    document.getElementById("all").addEventListener("click",function(){
        displayPage(mensData)
    })


    let container = document.getElementById("products");  

let displayPage=(mensData)=>{
    
        container.innerHTML = null;
  mensData.forEach(function(elem){
    let box=document.createElement("div");
    box.addEventListener("click",function(){
      proPage(elem);
    })
    
    let proImg=document.createElement("img");
    proImg.setAttribute("src",elem.image_url);

    let name=document.createElement("P");
    name.innerText=elem.name;

    let price=document.createElement("p");
    price.innerText=elem.price;

    let strprice=document.createElement("p");
    strprice.innerText=elem.strikedoffprice;

    let percentage=document.createElement("p");
    percentage.innerText=elem.per

    let shiping=document.createElement("p");
    shiping.innerText="Free Shipping on Orders $89+"

    let btn=document.createElement("button");
    btn.innerText="Add To Cart";
    btn.addEventListener("click",function(){
        addToCart(elem);
    });

    let price_div=document.createElement("div");
    price_div.append(price,percentage)

    

    let proPage=(elem)=>{
      localStorage.setItem("proData",JSON.stringify(elem))

      window.location.href="propage.html"
    }

    

    box.append(proImg,name,price_div,strprice,shiping);

    container.append(box);

  
});
};

displayPage(mensData)








