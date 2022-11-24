let j=0;

    var arr1=["https://t4.ftcdn.net/jpg/03/01/04/65/360_F_301046542_kFqDN0ECspByQHJQjpbzPjDx5btUnayO.jpg",
"https://www.mynewcaledonia.com.au/wp-content/uploads/sites/12/2016/12/Beach-Banner.jpg"]

// var arr1=["https://assets.materialup.com/uploads/560e47b5-9641-4c14-b382-d2c999609350/preview.gif",
//     "https://assets.materialup.com/uploads/560e47b5-9641-4c14-b382-d2c999609350/preview.gif",
//     "https://assets.materialup.com/uploads/560e47b5-9641-4c14-b382-d2c999609350/preview.gif",
//     "https://media.istockphoto.com/photos/beautiful-asian-woman-shopping-online-with-mobile-phone-on-banner-picture-id1203642900?k=20&m=1203642900&s=170667a&w=0&h=y4pPW13m8MSfS_oq-EdHxk5dnBdIF86KWnBeRpiNZKg=",
//     "https://morecustomersapp.com/wp-content/uploads/2020/08/banner-and-eCommerce.jpg",
//     "https://cdn.dribbble.com/users/2224400/screenshots/4808075/ezgif.com-optimize.gif"
// ];
    console.log(arr1.length)

    var container=document.getElementById("slider_down");

    setInterval(() => {
        if(j===arr1.length)
        {
            j=0
        }
        container.innerHTML=null;

        var img=document.createElement("img");
        img.src=arr1[j];

        container.append(img)
        j++
    }, 2000);
