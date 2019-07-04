const express = require('express')
const request = require('request')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))




app.get('/sanity', function (req, res) {
    res.send("OK")
})



app.get("/recipes/:ingredient", function (req, res) { 

    let ingredient = req.params.ingredient
    

    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        let foods=JSON.parse(response.body)
        let food= foods.results
        console.log(food)
        res.send(food)
        
    }) 
    
})


const port = 8081
app.listen(port, function () {
    console.log("server is running on port " + port)
})