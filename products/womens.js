

// dress data

let derssData = async () => {

    let data = await getData();

    console.log(data);
    append(data)


}

document.getElementById("dress").addEventListener("click", derssData);
let getData = async () => {
    url = `https://dummyjson.com/products/category/womens-dresses`;
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
    url = `https://dummyjson.com/products/category/womens-shoes`;
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
    url = `https://dummyjson.com/products/category/womens-bags`;
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
