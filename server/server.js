//constants
const express = require('express'); 
const restaurants = require('./data/restaurants'); 
const cors = require('cors'); 

const app = express(); 
const port = 3000; 

//allow http requets from angular frontend
app.use(cors ({origin: 'http://localhost:4200'})); 

app.listen(port, () => {
    console.log('Server Started'); 
})

//routes
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
