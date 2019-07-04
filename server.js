const express = require('express') 
const request = require('request')
const path= require('path') 
const app = express()

app.use( express.static( path.join( __dirname, 'public' ) ) )
app.use(express.static(path.join(__dirname, 'node_modules')))