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
        ],
        "reviews": [
            {
                "customer": "John B.",
                "review": "My meal was hot and fresh.    Best experience I've had from a fast food place."
            },
            {
                "customer": "Kirsten W.",
                "review": "Everything I ordered was provided and delivered hot, fresh and packaged very nicely and cleanly!"
            },
            {
                "customer": "Jayson S.",
                "review": "Big Mac was amazing. Order was right to the t!"
            },
            {
                "customer": "Johnny M.",
                "review": "Everything tasted very well. Customer service was solid"
            },
            {
                "customer": "Madelyn M.",
                "review": "Customer service was solid"
            }
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

            
        ],
        "reviews": [
            {
                "customer": "Maria S",
                "review": "Food fresh, hot and very fast "
            },
            {
                "customer": "Gerald D.",
                "review": "Food always come hot. Food very good and orders from this Wendy's  restaurant is on time."
            },
            {
                "customer": "Valerie W.",
                "review": "I never have a problem here. I place orders at work to pick up 3 hours in advance they are always hot and ready for me when I get them"
            },
            {
                "customer": "Johnny M.",
                "review": "Everything tasted very well. Customer service was solid"
            },
            {
                "customer": "Madelyn M.",
                "review": "Customer service was solid"
            }
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
        ],
        "reviews": [
            {
                "customer": "Maria S",
                "review": "Food fresh, hot and very fast "
            },
            {
                "customer": "Gerald D.",
                "review": "Food always come hot. Food very good and orders from this Wendy's  restaurant is on time."
            },
            {
                "customer": "Valerie W.",
                "review": "I never have a problem here. I place orders at work to pick up 3 hours in advance they are always hot and ready for me when I get them"
            },
            {
                "customer": "Johnny M.",
                "review": "Everything tasted very well. Customer service was solid"
            },
            {
                "customer": "Madelyn M.",
                "review": "Customer service was solid"
            }
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
                "itemName": "Chicken Finger Plate - 6 Fingerz w/ fries & drink",
                "itemDescription": "6 hand-breaded Chicken Fingerz™ with Zax Sauce®. Served with Cole Slaw, Texas Toast, Crinkle Fries, and Small Drink.",
                "price": 15.83,
                "itemImg": "https://olo-images-live.imgix.net/d5/d5e6c331298a485c8ef51542401e561f.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=a62e376c0bddbd07d1e394ecec4cc036",
                "calories": 1700
            },
            {
                "itemName": "Boneless Wings & Things",
                "itemDescription": "5 Boneless Wings made from all-white breast meat tossed in your choice of sauce with Ranch and 3 Chicken Fingerz™ with Zax Sauce®. Served with Texas Toast, Crinkle Fries, and Small Drink.",
                "price": 15.56,
                "itemImg": "https://olo-images-live.imgix.net/35/35fbf9d8fb7541358519ecf1dbf2d5fd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=f7f29c9f46a60c6b838f62ed872f844e",
                "calories": 1900
            },
            {
                "itemName": "Kickin Chicken Sandwich",
                "itemDescription": "Hand-breaded Chicken Fingerz™, Tongue Torch®, and Ranch on Texas Toast. Served with Crinkle Fries and Small Drink.",
                "price": 10.41,
                "itemImg": "https://olo-images-live.imgix.net/2a/2a2be38977314e47aa369ae2a39bd77b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=9362fc49d137b0e20b2e079b46ac7e3a",
                "calories": 1200
            },
            {
                "itemName": "Chicken Bacon Ranch Loaded Fries",
                "itemDescription": "A generous portion of Crinkle Fries topped with hand-breaded Fried Chicken, Cheddar Jack cheese, natural hardwood smoked bacon, and Ranch.",
                "price": 10.55,
                "itemImg": "https://olo-images-live.imgix.net/b9/b9496791fc634ad98825476d20f32fa3.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=cdd1ab0a5b29a97f5d90562ef9f3a8f1",
                "calories": 1310
            },            
        ],
        "reviews": [
            {
                "customer": "Fatima S",
                "review": "Food fresh, hot and very fast "
            },
            {
                "customer": "Sarah D.",
                "review": "Food always come hot. Food very good and orders from this Wendy's  restaurant is on time."
            },
            {
                "customer": "Stuart W.",
                "review": "I never have a problem here. I place orders at work to pick up 3 hours in advance they are always hot and ready for me when I get them"
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
        "menu" : [
            {
                "itemName": "Caramel Ribbon Crunch Frappuccino® Blended Beverage",
                "itemDescription": "Buttery caramel syrup blended with coffee, milk and ice, then topped with a layer of dark caramel sauce, whipped cream, caramel drizzle and a crunchy caramel-sugar topping—oh-so-beautifully delicious.",
                "price": 6.75,
                "itemImg": "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211210_CaramelRibbonCrunchFrapp.jpg?impolicy=1by1_wide_topcrop_630",
                "calories": null
            },
            {
                "itemName": "Double-Smoked Bacon, Cheddar & Egg Sandwich",
                "itemDescription": "Bacon smoked for six hours over hickory wood chips, stacked with a cage-free fried egg, topped with a melted slice of sharp Cheddar cheese—all on our signature croissant bun.",
                "price": 6.95,
                "itemImg": "https://globalassets.starbucks.com/digitalassets/products/food/SBX20210915_BaconCheddarEggSandwich.jpg?impolicy=1by1_medium_630",
                "calories": null
            },
            {
                "itemName": "Iced White Chocalate Mocha",
                "itemDescription": "Our signature espresso meets white chocolate sauce, milk and ice, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.",
                "price": 6.55,
                "itemImg": "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190607_IcedWhiteChocolateMocha.jpg?impolicy=1by1_wide_topcrop_630",
                "calories": null
            },
            {
                "itemName": "Birthday Cake Pop",
                "itemDescription": "Bite-sized vanilla cake mixed with vanilla buttercream, dipped in pink chocolaty icing and topped with white sprinkles.",
                "price": 4.15,
                "itemImg": "https://globalassets.starbucks.com/digitalassets/products/food/SBX20181129_BirthdayCakePop.jpg?impolicy=1by1_medium_630",
                "calories": null
            },
        ],
        "reviews": [
            {
                "customer": "Maria S",
                "review": "Food fresh, hot and very fast "
            },
            {
                "customer": "Gerald D.",
                "review": "Food always come hot. Food very good and orders from this Wendy's  restaurant is on time."
            },
            {
                "customer": "Valerie W.",
                "review": "I never have a problem here. I place orders at work to pick up 3 hours in advance they are always hot and ready for me when I get them"
            },
        ]
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
        "menu" : [
            {
                "itemName": "Triple Dipper®",
                "itemDescription": "Select three appetizers and enjoy! Served with dipping sauces.",
                "price": 18.09,
                "itemImg": "https://olo-images-live.imgix.net/3b/3bd44fb528794fc19adb4279b6bb822a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=c7dbaad44341341dda31ac7df9985440",
                "calories": null
            },
            {
                "itemName": "Bone-In Wings",
                "itemDescription": "Our classic, crispy wings are hand-tossed with your choice of 2 flavors and 2 sides of house-made ranch.",
                "price": 19.79,
                "itemImg": "https://olo-images-live.imgix.net/a2/a2f3e7e159424aafb81d77e244ca2f8f.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=c206b1670daaa81bd425bcecffd525be",
                "calories": null
            },
            {
                "itemName": "Fried Mozzarella - Shareable",
                "itemDescription": "6 count. Served with Marinara sauce.",
                "price": 15.69,
                "itemImg": "https://olo-images-live.imgix.net/a0/a0feb3bc5bed4032bd246a9657221e92.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=663a012be9d12701fb9a6116cb7ee70d",
                "calories": 590
            },
            {
                "itemName": "Southwestern Eggrolls",
                "itemDescription": "Crispy flour tortillas, chicken, black beans, corn, jalapeño Jack cheese, red peppers, spinach. Served with avocado-ranch.",
                "price": 14.19,
                "itemImg": "https://olo-images-live.imgix.net/b1/b14a756573254ac2ba168d4346796065.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=5928a036a9e1bd8583f1b040c63f2aff",
                "calories": null
            },   
        ],
        "reviews": [
            {
                "customer": "Maria S",
                "review": "Food fresh, hot and very fast "
            },
            {
                "customer": "Gerald D.",
                "review": "Food always come hot. Food very good and orders from this Wendy's  restaurant is on time."
            },
            {
                "customer": "Valerie W.",
                "review": "I never have a problem here. I place orders at work to pick up 3 hours in advance they are always hot and ready for me when I get them"
            },
        ]
    },
    {
        "id" : "14",
        "name": "Applebees",
        "image": "https://download.logo.wine/logo/Applebee's/Applebee's-Logo.wine.png",
        "type": "Casual",
        "rating": 2.7,
        "href": "restaurant/Casual/Applebees/14",
        "hours":"11am - 12am",
        "menu" : [
            {
                "itemName": "Bourbon Street Chicken & Shrimp",
                "itemDescription": "Cajun-seasoned chicken and blackened shrimp jazzed up with Cajun spices in buttery garlic and parsley, served sizzling with sautéed mushrooms & onions and garlic mashed potatoes.",
                "price": 19.55,
                "itemImg": "https://olo-images-live.imgix.net/da/da53e0694b8a4aea8c2737187ba9a3ab.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=0217bf8ff404ed3997be4b56f88161e6",
                "calories": 790
            },
            {
                "itemName": "Classic Broccoli Chicken Alfredo",
                "itemDescription": "A neighborhood favorite. Juicy grilled chicken is served warm on a bed of fettuccine pasta tossed with broccoli and rich Alfredo sauce topped with Parmesan cheese. Served with a golden brown signature breadstick brushed with buttery garlic and parsley.",
                "price": 18.09,
                "itemImg": "https://olo-images-live.imgix.net/96/96050f4ce2d040d19526703837bebf8b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=7c391a3217deaf4dd29594e989ae55fe",
                "calories": 1390
            },
            {
                "itemName": "Four-Cheese Mac & Cheese with Honey Pepper Chicken Tenders",
                "itemDescription": "A sweet and savory take on comfort food, four-cheese penne mac & cheese is topped with Applewood-smoked bacon and crispy chicken tenders tossed in honey pepper sauce. Served with a golden brown signature breadstick brushed with buttery garlic and parsley.",
                "price": 18.30,
                "itemImg": "https://olo-images-live.imgix.net/6a/6ac16be4295c431b824ab5ec4d7c4961.jpeg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=dd8f2d0883a05635bd1053ad5b289259",
                "calories": null
            },
            {
                "itemName": "Triple Chocalate Metldown",
                "itemDescription": "Warm, rich, fudge-filled chocolate cake is drizzled with hot fudge. Served with vanilla ice cream.",
                "price": 9.75,
                "itemImg": "https://olo-images-live.imgix.net/9e/9e32e2941b5249e484499a9e08516878.jpeg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=7a75bb3ee5fb64091d655a5d8ec73d17",
                "calories": 850
            }, 
        ],
        "reviews": [
            {
                "customer": "Maria S",
                "review": "Food fresh, hot and very fast "
            },
            {
                "customer": "Gerald D.",
                "review": "Food always come hot. Food very good and orders from this Wendy's  restaurant is on time."
            },
            {
                "customer": "Valerie W.",
                "review": "I never have a problem here. I place orders at work to pick up 3 hours in advance they are always hot and ready for me when I get them"
            },
            {
                "customer": "Johnny M.",
                "review": "Everything tasted very well. Customer service was solid"
            },
            {
                "customer": "Madelyn M.",
                "review": "Customer service was solid"
            }
        ]
    },
]; 

module.exports = restaurants; 