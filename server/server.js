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
//GET
app.get('/getRestaurants', (req, res) => {
    Restaurant.find()
        .then((data) => {
            console.log('All', data);  
            res.send(data)
        })
}); 

app.get('/getFastFoods', (req, res) => {
    Restaurant.find({type: 'Fast-Food'})
        .then((data) => {
            console.log('Fast-Foods',data)
            res.send(data)
        })
}); 

app.get('/getCafes', (req, res) => {
    Restaurant.find({type: 'Cafe'})
        .then((data) => {
            console.log('Cafes', data)
            res.send(data)
        })
}); 

app.get('/getCasuals', (req, res) => {
    Restaurant.find({type: 'Casual'})
        .then((data) => {
            console.log('Casuals', data)
            res.send(data)
        })
}); 
//PUT
app.put('/edit-restaurant', (req, res) => {
                        //db query parameter    //value to change
    Restaurant.updateOne({}, {$set: {}})
        .then(() => {
            console.log('Edited!')
        })
        .catch((err) => {
            console.log(err)
        })
})

//POST
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


