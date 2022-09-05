var express = require('express');
var app = express();
var dotenv= require('dotenv');
dotenv.config(); //this must be above//
var port= process.env.PORT||9700; //to this//
var morgan= require('morgan');

var menu = [
    {link:'/', name:'Home'},
    {link:'/category', name:'Shopping'},
    {link:'/restaurants', name:'Restaurants'},
    {link:'/aboutus', name:'About us'}
]

var categoryRouter = require('./src/router/categoryRouter')(menu)
var productsRouter = require('./src/router/productsRouter')(menu)
var restaurantRouter = require('./src/router/restaurantRouter')(menu)
var restaurantProductRouter = require('./src/router/restaurantProductRouter')(menu)

//static file path
app.use(express.static(__dirname+'/public'));

//for html files
app.set('views','./src/views');
//for view engine path
app.set('view engine','ejs') 

var data = [
    {
        "id":1,
        "name":"Shopping",
        "image":"https://i.ibb.co/56VP0Fn/cloths.jpg",
        "link":"/category"
    },
    {
        "id":2,
        "name":"Restaurants",
        "image":"https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "link":"/restaurants"
    }
]

//default route
app.get('/',function(req,res){
    //res.send('Welcome to the app');
    res.render('index',{title:'Home Page',data,menu});
}) ;   

app.use('/category', categoryRouter);
app.use('/products', productsRouter)   
app.use('/restaurants', restaurantRouter) 
app.use('/restaurants/restaurantProduct', restaurantProductRouter)

app.listen(port, function(err){
    if(err) throw err;
    console.log("Server is running on " + port);
})