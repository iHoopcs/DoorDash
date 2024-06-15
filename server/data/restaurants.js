const restaurants = [
    //Fast Food
    {
        "id" : 1,
        "name": "McDonalds",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png",
        "type": "Fast-Food",
        "rating": 3.0,
        "href": "restaurant/Fast-Food/McDonalds/1"
    },
    {
        "id" : 2,
        "name": "Burger King",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--1MJsy7_DWpEDHBVdc8L7Vn-neqF-M_MyA&s",
        "type": "Fast-Food",
        "rating": 3.5,
        "href": "restaurant/Fast-Food/Burger-King/2"
    },
    {
        "id" : 3,
        "name": "Wendys",
        "image": "https://cdn.worldvectorlogo.com/logos/wendy-s-1.svg",
        "type": "Fast-Food",
        "rating": 3.9,
        "href": "restaurant/Fast-Food/Wendys/3"
    },
    {
        "id" : 4,
        "name": "Chick-fil-a",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
        "type": "Fast-Food",
        "rating": 4.3,
        "href": "restaurant/Fast-Food/Chick-fil-a/4"
    },
    {
        "id" : 5,
        "name": "Zaxbys",
        "image": "https://seeklogo.com/images/Z/zaxbys-logo-87B61920F0-seeklogo.com.png",
        "type": "Fast-Food",
        "rating": 4.0,
        "href": "restaurant/Fast-Food/Zaxbys/5"
    },
    {
        "id" : 6,
        "name": "Taco Bell",
        "image": "https://i.ebayimg.com/images/g/rAYAAOSwKRBbEWd0/s-l1200.webp",
        "type": "Fast-Food",
        "rating": 3.6,
        "href": "restaurant/Fast-Food/Taco-Bell/6"
    },
    {
        "id" : 7,
        "name": "Sonic Drive-In",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/SONIC_New_Logo_2020.svg",
        "type": "Fast-Food",
        "rating": 3.9,
        "href": "restaurant/Fast-Food/Taco-Bell/7"
    },
    {
        "id" : 8,
        "name": "Popeyes Louisiana Kitchen",
        "image": "https://pentagram-production.imgix.net/702b9844-190a-4d98-b95c-6b818fb6c3c6/djs_popeyes_01.jpg?rect=215%2C99%2C1671%2C1043&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548",
        "type": "Fast-Food",
        "rating": 3.5,
        "href": "restaurant/Fast-Food/Taco-Bell/8"
    },
    
    //Cafe
    {
        "id" : 9,
        "name": "Panera Bread",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Panera_Bread_wordmark.svg/2560px-Panera_Bread_wordmark.svg.png",
        "type": "Cafe",
        "rating": 3.6,
        "href": "restaurant/Cafe/Panera-Bread/9"
    },
    {
        "id" : 10,
        "name": "Starbucks",
        "image": "https://lh4.googleusercontent.com/proxy/mjIXRAh7E1sNC42fIh9lyM3P5PWhUECllWKUTruQ63ZR8RkqPBR_o1CUUqnCylLrz9WsCDyNxMI2bzzHOc3rDpdMrYnO-OB_56tVd7N86uT7fvEsVeogP5lWZ7huzezWduuZqih859I-WdI3JPKHtFVdjDk",
        "type": "Cafe",
        "rating": 4.3,
        "href": "restaurant/Cafe/Starbucks/10"
    },
    {
        "id" : 11,
        "name": "Dunkin Donuts",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dunkin%27_Donuts.svg",
        "type": "Cafe",
        "rating": 2.9,
        "href": "restaurant/Cafe/Dunkin-Donuts/11"
    },

    //Casual
    {
        "id" : 12,
        "name": "Kickback Jacks",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0CpFJL1QBSc0ioWh0snpeVvI7_KI_RCVeg&s",
        "type": "Casual",
        "rating": 3.5,
        "href": "restaurant/Casual/Kickback-Jacks/12"
    },
    {
        "id" : 13,
        "name": "Chillis",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chili%27s_Logo.svg/1200px-Chili%27s_Logo.svg.png",
        "type": "Casual",
        "rating": 3.8,
        "href": "restaurant/Casual/Chillis/13"
    },
    {
        "id" : 14,
        "name": "Applebees",
        "image": "https://download.logo.wine/logo/Applebee's/Applebee's-Logo.wine.png",
        "type": "Casual",
        "rating": 2.7,
        "href": "restaurant/Casual/Applebees/14"
    },
    {
        "id" : 15,
        "name": "Fridays",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tgi_fridays_logo13.svg/1200px-Tgi_fridays_logo13.svg.png",
        "type": "Casual",
        "rating": 2.5,
        "href": "restaurant/Casual/Fridays/15"
    },
    {
        "id" : 16,
        "name": "Longhorns",
        "image": "https://images.squarespace-cdn.com/content/v1/636db4f3e37a167a94db14d7/59f23586-8069-45e2-a725-f3f73ddbfb7a/Longhorn-Steakhouse-1108x894.png",
        "type": "Casual",
        "rating": 4.0,
        "href": "restaurant/Casual/Longhorns/16"
    },
    {
        "id" : 17,
        "name": "Texas Roadhouse",
        "image": "https://seekvectors.com/files/download/texas-roadhouse.png",
        "type": "Casual",
        "rating": 3.7,
        "href": "restaurant/Casual/Texas-Roadhouse/17"
    },
    {
        "id" : 18,
        "name": "Olive Garden",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMdTCEFl1Fy4xoYtNEpZQoygmEDFUHs6dkA&s",
        "type": "Casual",
        "rating": 4.1,
        "href": "restaurant/Casual/Olive-Garden/18"
    },
    {
        "id" : 19,
        "name": "Red Lobster",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b1/Redlobster_logocopia.png",
        "type": "Casual",
        "rating": 3.8,
        "href": "restaurant/Casual/Red-Lobsters/19"
    },

    
    //Fancy
    {
        "id" : 20,
        "name": "Ruth's Chris",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ruths_Chris_Logo.svg/1200px-Ruths_Chris_Logo.svg.png",
        "type": "Fancy",
        "rating": 4.8,
        "href": "restaurant/Fancy/Ruths-Chris/20"
    },
    {
        "id" : 21,
        "name": "Fleming's",
        "image": "https://vectorlogoseek.com/wp-content/uploads/2018/09/flemings-prime-steakhouse-wine-bar-vector-logo.png",
        "type": "Fancy",
        "rating": 5.0,
        "href": "restaurant/Fancy/Flemings/21"
    },
    {
        "id" : 22,
        "name": "Texas de Brazil",
        "image": "https://logovtor.com/wp-content/uploads/2021/04/texas-de-brazil-logo-vector.png",
        "type": "Fancy",
        "rating": 4.9,
        "href": "restaurant/Fancy/Texas-de-Brazil/22"
    },
    {
        "id" : 23,
        "name": "Benihana",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NlGzaKQu8bjzNhOe6GtpppCBM5r3_tVC-A&s",
        "type": "Fancy",
        "rating": 5.0,
        "href": "restaurant/Fancy/Benihana/23"
    },

]; 

module.exports = restaurants; 