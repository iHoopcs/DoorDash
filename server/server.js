const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose');

const Restaurant = require('./Models/restaurant'); 


const app = express(); 
const port = 3000; 

//allow http requets from angular frontend
app.use(cors ({origin: 'http://localhost:4200'})); 


//MongoDB connection
mongoose.connect('mongodb+srv://iHoopcs:Bigcts17@cluster1.gtarcla.mongodb.net/DoorDash?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => [
        console.log('MongoDB Connected'),
        app.listen(port, () => {
            console.log('Server started')
        })
 
    ])
    .catch((err) => {
        console.log(err, 'Connection failed')
    });

//routes
app.post('/add-restaurant', (req, res) => {
    /*
    const newRestaurant = new Restaurant({
        name: "",
        image: "",
        rating: 0,
        href: "",
        hours: "",
        menu : [
            {
                "itemName": "",
                "itemDescription": "",
                "price": 0,
                "itemImg": "",
                "calories": 0
            },
            //add more with template above
        ],
        reviews: [
            {
                "customer": "",
                "review": ""
            },
            //add more with template above
        ]
    })
    
    newRestaurant.save()
        .then((result) => {
            res.send(result)
            console.log('*restaurant added')
        })
        .catch((err) => {
            console.log(err)
        })
    */

})




app.get('/', (req, res) => {
    res.redirect('/home'); 
}); 

app.get('/getRestaurants', (req, res) => {
    res.json(restaurants);
    console.log('*Restaurants fetched*')
}); 

app.get('/getFastFoods', (req, res) => {
    let fastFoods = []; 

    restaurants.forEach((rest) => {
        if (rest.type === 'Fast-Food'){
            fastFoods.push(rest);  
        }
    })

    res.send(fastFoods); 
    console.log('*Restaurants fetched*')
}); 

app.get('/getCafes', (req, res) => {
    let cafes = []; 

    restaurants.forEach((cafe) => {
        if (cafe.type === 'Cafe') {
            cafes.push(cafe); 
        }
    })

    res.send(cafes); 
    console.log('*Cafes fetched*')
}); 

app.get('/getCasuals', (req, res) => {
    let casuals = []; 

    restaurants.forEach((c) => {
        if (c.type === 'Casual') {
            casuals.push(c); 
        }
    })

    res.send(casuals);
    console.log('*Casuals fetched*')
}); 

app.get('/getFancies', (req, res) => {
    let fancies = []; 

    restaurants.forEach((f) => {
        if (f.type === 'Fancy') {
            fancies.push(f); 
        }
    })

    res.send(fancies);
    console.log('*Fancies fetched*')
}); 
