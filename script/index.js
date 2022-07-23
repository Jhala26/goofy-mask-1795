import navbar from "../component/navbar.js"
document.getElementById("mainnavbar").innerHTML=navbar()


import footer from "../component/footer.js"
document.getElementById("footer_body").innerHTML=footer()





let i=0;

    var arr=["https://assets.materialup.com/uploads/560e47b5-9641-4c14-b382-d2c999609350/preview.gif",
    "https://assets.materialup.com/uploads/560e47b5-9641-4c14-b382-d2c999609350/preview.gif",
    "https://assets.materialup.com/uploads/560e47b5-9641-4c14-b382-d2c999609350/preview.gif",
    "https://media.istockphoto.com/photos/beautiful-asian-woman-shopping-online-with-mobile-phone-on-banner-picture-id1203642900?k=20&m=1203642900&s=170667a&w=0&h=y4pPW13m8MSfS_oq-EdHxk5dnBdIF86KWnBeRpiNZKg=",
    "https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg",
    "https://cdn.dribbble.com/users/2224400/screenshots/4808075/ezgif.com-optimize.gif"
];
    console.log(arr.length)

    var container=document.getElementById("slider");

    setInterval(() => {
        if(i===arr.length)
        {
            i=0
        }
        container.innerHTML=null;

        var img=document.createElement("img");
        img.src=arr[i];

        container.append(img)
        i++
    }, 2000);




    

