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
        "id" : "3",
        "name": "Wendys",
        "image": "https://cdn.worldvectorlogo.com/logos/wendy-s-1.svg",
        "type": "Fast-Food",
        "rating": 3.9,
        "href": "restaurant/Fast-Food/Wendys/3",
        "hours":"6:30am - 1am",
        "menu" : [
            {
                "itemName": "Baconator",
                "itemDescription": "A half-pound* of fresh beef, American cheese, 6 pieces of crispy Applewood smoked bacon, ketchup, and mayo. Carnivores rejoice!",
                "price": 6.69,
                "itemImg": "https://www.wendys.com/sites/default/files/styles/max_650x650/public/2021-05/baconator-144_medium_US_en.png?itok=H8sl3GsY",
                "calories": 960
            },
            {
                "itemName": "10 PC. Spicy Chicken Nuggets",
                "itemDescription": "100% white-meat chicken breaded and marinated in our unique, fiery blend of peppers and spices. Served with your choice of six dipping sauces including Buttermilk Ranch, BBQ, Sweet & Sour, Honey Mustard or Ghost Pepper Ranch. The Internet icon is back for a hot minute.",
                "price": 3.75,
                "itemImg": "https://www.usatoday.com/gcdn/presto/2019/05/06/USAT/54298852-924e-4e45-8c46-ffff2c17710a-4PcSpicyNuggets.jpg?crop=2915,3886,x1984,y0",
                "calories": 470
            },
            {
                "itemName": "Grilled Chicken Wrap",
                "itemDescription": "Juicy, herb-marinated grilled chicken breast, shredded cheddar cheese and crispy romaine drizzled with a creamy ranch sauce and all wrapped up in a warm tortilla.",
                "price": 0,
                "itemImg": "https://www.wendys.tt/wp-content/uploads/2023/09/299_medium_US_en-e1694013069762.png",
                "calories": 420
            },
            {
                "itemName": "Classic Chocalate Frosty",
                "itemDescription": "The Chocolate Frosty® was born out of Dave’s desire for a signature dessert to go with his vision of the perfect meal. Thick enough to use a spoon, smooth enough to use a straw, and perfect when enjoyed on the end of a fry.",
                "price": 3.00,
                "itemImg": "https://www.wendys.com/sites/default/files/styles/max_650x650/public/2021-05/jr-chocolate-frosty-37_medium_US_en.png?itok=Ea5g2v80",
                "calories": 310
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
                "itemName": "Spicy Chicken Sandwich",
                "itemDescription": "A boneless breast of chicken seasoned with a spicy blend of peppers, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips. Also available on a multigrain bun.",
                "price": 5.69,
                "itemImg": "https://www.cfacdn.com/img/order/menu/Online/Entrees/CFASpicySandwich_1080.png",
                "calories": 450
            },
            {
                "itemName": "Chick-fil-A Nuggets",
                "itemDescription": "Bite-sized pieces of boneless chicken breast, seasoned to perfection, freshly breaded and pressure cooked in 100% refined peanut oil. Available with choice of dipping sauce.",
                "price": 5.50,
                "itemImg": "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Nuggets/CFA2305029_Holiday23_Nuggets_PLP_D_904x666.jpg?h=666&w=904&la=en",
                "calories": 250
            },
            {
                "itemName": "Grilled Nuggets",
                "itemDescription": "Bite-sized pieces of freshly marinated boneless breast of chicken, grilled for a tender and juicy backyard-smoky taste. Available with guest's choice of dipping sauce.",
                "price": 4.00,
                "itemImg": "https://www.cfacdn.com/img/order/menu/Online/Entrees/grilledNuggets_8ct_PDP.png",
                "calories": 130
            },
            {
                "itemName": "Chick-fil-A Waffle Fries",
                "itemDescription": "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with Sea Salt.",
                "price": 3.70,
                "itemImg": "https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/PLP%20updates/Waffle%20Fries/CFA14300_Winter24_MediumFries_PLP_Hero_D_710x580.jpg_master.jpg?h=580&w=710&la=en",
                "calories": 420
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
    
    //Cafe
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

    
    //Fancy
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