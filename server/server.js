const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose');
const Restaurant = require('./Models/restaurant'); 

const app = express(); 
const port = 3000; 

//allow http requets from angular frontend
app.use(cors ({origin: 'http://localhost:4200'})); 
app.use(express.json()); 
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
    console.log(req.body)
    let bodyData = req.body; 

    const newRestaurant = new Restaurant ({
        name: bodyData.name, 
        type: bodyData.type, 
        image: bodyData.image, 
        href: `restaurant/${bodyData.type}/${bodyData.name}`,
        hours: bodyData.hours, 
        rating: bodyData.rating, 
        menu: [],
        reviews: []
    }); 


    newRestaurant.save()
        .then((result) => {
            res.send(result)
            console.log('*restaurant added')
        })
        .catch((err) => {
            console.log(err)
        })

    res.send('Restaurant Created'); 
})


