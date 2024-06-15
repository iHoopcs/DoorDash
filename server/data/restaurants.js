const restaurants = [
    //Fast Food
    {
        "id" : "1",
        "name": "McDonalds",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1014px-McDonald%27s_logo.svg.png",
        "type": "Fast-Food",
        "rating": 3.0,
        "href": "restaurant/Fast-Food/McDonalds/1",
        "hours":"24 hours",
        "menu" : [
            {
                "itemName": "Big Mac",
                "itemDescription": "100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. Topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese.",
                "price": 5.69,
                "itemImg": "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off",
                "calories": 590
            },
            {
                "itemName": "McChicken",
                "itemDescription": "It’s a classic for a reason. Savor the satisfying crunch of our juicy chicken patty, topped with shredded lettuce and just the right amount of creamy mayonnaise, all served on a perfectly toasted bun.",
                "price": 2.49,
                "itemImg": "https://s7d1.scene7.com/is/image/mcdonalds/Header_McChicken_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off",
                "calories": 400
            },
            {
                "itemName": "Filet-O-Fish",
                "itemDescription": "Dive into our wild-caught Filet-O-Fish, a classic McDonald's fish sandwich! Our fish sandwich recipe features a crispy fish filet patty made with wild-caught Alaskan Pollock on melty American cheese and is topped with creamy McDonald’s tartar sauce, all served on a soft, steamed bun.",
                "price": 4.99,
                "itemImg": "https://s7d1.scene7.com/is/image/mcdonalds/Header_FiletoFish_832x472:nutrition-calculator-tile?wid=472&hei=472&dpr=off",
                "calories": 390
            },
            {
                "itemName": "French Fries",
                "itemDescription": "McDonald's World Famous Fries® made with premium potatoes. Crispy and golden on the outside and fluffy on the inside.",
                "price": 3.89,
                "itemImg": "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6053_LargeFries_832x472:nutrition-calculator-tile?resmode=sharp2",
                "calories": 230
            }, 
        ]
    },
    {
        "id" : "2",
        "name": "Burger King",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--1MJsy7_DWpEDHBVdc8L7Vn-neqF-M_MyA&s",
        "type": "Fast-Food",
        "rating": 3.5,
        "href": "restaurant/Fast-Food/Burger-King/2",
        "hours":"6am - 12am",
        "menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    {
        "id" : "3",
        "name": "Wendys",
        "image": "https://cdn.worldvectorlogo.com/logos/wendy-s-1.svg",
        "type": "Fast-Food",
        "rating": 3.9,
        "href": "restaurant/Fast-Food/Wendys/3",
        "hours":"6:30am - 1am",
        "menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    {
        "id" : "4",
        "name": "Chick-fil-a",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/02/Chick-fil-A_Logo.svg",
        "type": "Fast-Food",
        "rating": 4.3,
        "href": "restaurant/Fast-Food/Chick-fil-a/4",
        "hours":"6am - 10pm",
        "menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    {
        "id" : "5",
        "name": "Zaxbys",
        "image": "https://seeklogo.com/images/Z/zaxbys-logo-87B61920F0-seeklogo.com.png",
        "type": "Fast-Food",
        "rating": 4.0,
        "href": "restaurant/Fast-Food/Zaxbys/5",
        "hours":"10:30am - 11pm",
        "menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    {
        "id" : "6",
        "name": "Taco Bell",
        "image": "https://i.ebayimg.com/images/g/rAYAAOSwKRBbEWd0/s-l1200.webp",
        "type": "Fast-Food",
        "rating": 3.6,
        "href": "restaurant/Fast-Food/Taco-Bell/6",
        "hours":"8am - 3am","menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    {
        "id" : "7",
        "name": "Sonic Drive-In",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/SONIC_New_Logo_2020.svg",
        "type": "Fast-Food",
        "rating": 3.9,
        "href": "restaurant/Fast-Food/Taco-Bell/7",
        "hours":"10am - 10pm",
        "menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    {
        "id" : "8",
        "name": "Popeyes Louisiana Kitchen",
        "image": "https://pentagram-production.imgix.net/702b9844-190a-4d98-b95c-6b818fb6c3c6/djs_popeyes_01.jpg?rect=215%2C99%2C1671%2C1043&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548",
        "type": "Fast-Food",
        "rating": 3.5,
        "href": "restaurant/Fast-Food/Taco-Bell/8",
        "hours":"",
        "menu" : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 5.69,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 590
            },

            
        ]
    },
    
    //Cafe
    {
        "id" : "9",
        "name": "Panera Bread",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Panera_Bread_wordmark.svg/2560px-Panera_Bread_wordmark.svg.png",
        "type": "Cafe",
        "rating": 3.6,
        "href": "restaurant/Cafe/Panera-Bread/9",
        "hours":"6am - 9pm",
    },
    {
        "id" : "10",
        "name": "Starbucks",
        "image": "https://lh4.googleusercontent.com/proxy/mjIXRAh7E1sNC42fIh9lyM3P5PWhUECllWKUTruQ63ZR8RkqPBR_o1CUUqnCylLrz9WsCDyNxMI2bzzHOc3rDpdMrYnO-OB_56tVd7N86uT7fvEsVeogP5lWZ7huzezWduuZqih859I-WdI3JPKHtFVdjDk",
        "type": "Cafe",
        "rating": 4.3,
        "href": "restaurant/Cafe/Starbucks/10",
        "hours":"6am - 8pm",
    },
    {
        "id" : "11",
        "name": "Dunkin Donuts",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dunkin%27_Donuts.svg",
        "type": "Cafe",
        "rating": 2.9,
        "href": "restaurant/Cafe/Dunkin-Donuts/11",
        "hours":"5am - 9pm",
    },

    //Casual
    {
        "id" : "12",
        "name": "Kickback Jacks",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0CpFJL1QBSc0ioWh0snpeVvI7_KI_RCVeg&s",
        "type": "Casual",
        "rating": 3.5,
        "href": "restaurant/Casual/Kickback-Jacks/12",
        "hours":"11am - 12am",
    },
    {
        "id" : "13",
        "name": "Chillis",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chili%27s_Logo.svg/1200px-Chili%27s_Logo.svg.png",
        "type": "Casual",
        "rating": 3.8,
        "href": "restaurant/Casual/Chillis/13",
        "hours":"11am - 11pm",
    },
    {
        "id" : "14",
        "name": "Applebees",
        "image": "https://download.logo.wine/logo/Applebee's/Applebee's-Logo.wine.png",
        "type": "Casual",
        "rating": 2.7,
        "href": "restaurant/Casual/Applebees/14",
        "hours":"11am - 12am",
    },
    {
        "id" : "15",
        "name": "Fridays",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tgi_fridays_logo13.svg/1200px-Tgi_fridays_logo13.svg.png",
        "type": "Casual",
        "rating": 2.5,
        "href": "restaurant/Casual/Fridays/15",
        "hours":"11am - 11pm",
    },
    {
        "id" : "16",
        "name": "Longhorns",
        "image": "https://images.squarespace-cdn.com/content/v1/636db4f3e37a167a94db14d7/59f23586-8069-45e2-a725-f3f73ddbfb7a/Longhorn-Steakhouse-1108x894.png",
        "type": "Casual",
        "rating": 4.0,
        "href": "restaurant/Casual/Longhorns/16",
        "hours":"11am - 11pm",
    },
    {
        "id" : "17",
        "name": "Texas Roadhouse",
        "image": "https://seekvectors.com/files/download/texas-roadhouse.png",
        "type": "Casual",
        "rating": 3.7,
        "href": "restaurant/Casual/Texas-Roadhouse/17",
        "hours":"12pm - 11pm",
    },
    {
        "id" : "18",
        "name": "Olive Garden",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMdTCEFl1Fy4xoYtNEpZQoygmEDFUHs6dkA&s",
        "type": "Casual",
        "rating": 4.1,
        "href": "restaurant/Casual/Olive-Garden/18",
        "hours":"11am - 11pm",
    },
    {
        "id" : "19",
        "name": "Red Lobster",
        "image": "https://upload.wikimedia.org/wikipedia/en/b/b1/Redlobster_logocopia.png",
        "type": "Casual",
        "rating": 3.8,
        "href": "restaurant/Casual/Red-Lobsters/19",
        "hours":"11am - 11pm",
    },

    
    //Fancy
    {
        "id" : "20",
        "name": "Ruth's Chris",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ruths_Chris_Logo.svg/1200px-Ruths_Chris_Logo.svg.png",
        "type": "Fancy",
        "rating": 4.8,
        "href": "restaurant/Fancy/Ruths-Chris/20",
        "hours":"4pm - 11pm",
    },
    {
        "id" : "21",
        "name": "Fleming's",
        "image": "https://vectorlogoseek.com/wp-content/uploads/2018/09/flemings-prime-steakhouse-wine-bar-vector-logo.png",
        "type": "Fancy",
        "rating": 5.0,
        "href": "restaurant/Fancy/Flemings/21",
        "hours":"2pm - 10pm",
    },
    {
        "id" : "22",
        "name": "Texas de Brazil",
        "image": "https://logovtor.com/wp-content/uploads/2021/04/texas-de-brazil-logo-vector.png",
        "type": "Fancy",
        "rating": 4.9,
        "href": "restaurant/Fancy/Texas-de-Brazil/22",
        "hours":"5pm - 10pm",
    },
    {
        "id" : "23",
        "name": "Benihana",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NlGzaKQu8bjzNhOe6GtpppCBM5r3_tVC-A&s",
        "type": "Fancy",
        "rating": 5.0,
        "href": "restaurant/Fancy/Benihana/23",
        "hours":"10am - 11pm",
    },

]; 

module.exports = restaurants; 