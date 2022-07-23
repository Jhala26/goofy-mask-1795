let j=0;

    var arr1=["https://lh3.googleusercontent.com/DmQJXRFsRjmAqmsuc-9rlkrv3b5D4FR2UfnWeHxjYI52ugIPEhlRFhYVVMMCGYbTV_vnUmv6Wq2lm4vf9DYdEiJtimCO6hc4U9VDkggm9sAO6eWcanlbDvL66qW4JzOwEHdI-CzwXaHQ9-C2npd5rt_NmLdffFeLAKDZxSWT79-gH8S_9ZDXZdMjSSRpaYNmJ4NLibCkLo5oxuQ56-nPqkkGn4oNXp2g8TfVQz4xYdPiNO-0t66M01xL1EMGotxEB8VA4JQnM_FI3-xlEPNYYSjGP_Gdx_qoPh1BzrAHPSq6SW2pu9u0-5NgwPW7ATmblKb4xHlpsX5cIzdSx3J-6riIAkn6RoRmoM_FCu2I4_IXmkMCXTd7cjo0ZxtcHOCCpM0jFVoXcEeARoKaBzTpUOMiubCIE3bbjC0HQXe1dZNQv491ZTepe9dgQMynV5MnGKxYz46ULKBDB5mIhrpUi7H8YQ6iMHI3ykYguMLZ6fGyPdBdvK7qMgyHcKrHDnHoSbd9tXWJrkJVetiezdhFlrmKTN78zuj4BDpMjHUZK7hsi1sHKiJfFP9unPkyTxM3HkRt9PbocvDKbpRquwb41nUMgVIjzrEE2O6P7Lchf5862JsvPP5DpYefiaw4caV_ZpzvS_o8t1z3dp5AR_XU4QicH12QGxrG25JhgANQMHP7RvkalNLEQLiTnLAPyy8N9u-rVlZpaDwKi85pS5uXfg1VEsPn8HHFdWl4XArdNsP64uNvsYlpLw=w1471-h186-no?authuser=0",
    "https://lh3.googleusercontent.com/79NlWko_9Xe6ofrV5labHKxdCTwiD8W2ZcPGs4DO1gBgmiCdIFYOv6oOTf-Dw8DvJYooyGN2V02-EOZvSFIS3pc-TP6BCS8oBCg5XlXy1Bzl9t1HDAng50mnyfyb9gpx1X3QWt3YinYiYcVKQu_-ZqiVX7hM-eUpXzjxCAfIn4QE7gZr6L93pRmzVWnY-gsgeuxy49zfIHR_O-P_vuSp3dkTR1cDZPiHvooXz98txZLYOeV5poBvV8MeUmTIeWCgdaQEat33hlUmsLaizUrRJa0w9ynNB-8jwq3Nw4IEBWurfwOFVWK7_y_QRDn8nQkbC2MKgpCFWhUeILT6qEY8jKlV-Cq6ZYKr6b0UJDNV2d8rL_Xrph_n9uerad8ePQFaVLSUzYdjRYT_iLA8EuidYS-vxDJa2rGTl_WpwqmelZYHmurEOaUaCUGkZGkUF1DzdQIlwT7qaOJgnc4OdUicUjjAhRae1PkDO9Xf9FOxJxMCWYyxjmkpe0IZFxH_tx-QASNd16BmDIR5K6uMaOLw1tTdaK65aHoI-O3447_MtOwqGNjFLmwqC2Rto99mY7IRKGj63-GmmhwWpFMvVHhciaafrxo30SpYskMN4Z1tVVChtrMIKHgQEt_6sMC5es2WrikznXMRmsWIT5WICfrrXPNmjQgJLE9nlaRKMnjmGW94s7aS-itQoka11tRfVVIR1jRg5nNDJrOVTKKhg5zCKiODpY03NgRceCM37MqP-S_9WwAXsU4BTA=w1471-h190-no?authuser=0"
];

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