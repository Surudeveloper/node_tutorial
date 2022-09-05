var express = require('express')
var restaurantProductRouter = express.Router()

var restaurantProduct = [
    {
        "id": 1,
        "product_name": "Fish do pyaza",
        "category": "Fish",
        "category_id": 1,
        "Price": 2000,
        "Size": "Small",
        "Image": "https://i.ibb.co/fHj5Tgc/download.jpg",
        
    },
    {
        "id": 2,
        "product_name": "Fish soup",
        "category": "Fish",
        "category_id": 1,
        "Price": 1500,
        "Size": "Medium",
        "Image": "https://i.ibb.co/tsXyK5Y/images.jpg",
        
    },
    {
        "id": 3,
        "product_name": "Fish Masala",
        "category": "Fish",
        "category_id": 1,
        "Price": 2000,
        "Size": "Large",
        "Image": "https://i.ibb.co/NsVKKdd/images-1.jpg",
       
    },
    {
        "id": 4,
        "product_name": "Fish curry",
        "category": "Fish",
        "category_id": 1,
        "Price": 500,
        "Size": "Medium",
        "Image": "https://i.ibb.co/5Fwh8ys/Blue.jpg",
    }, 
    {
        "id": 5,
        "product_name": "Fish fry",
        "category": "Fish",
        "category_id": 1,
        "Price": 2500,
        "Size": "Large",
        "Image": "https://i.ibb.co/sbtyWMs/WHite.jpg",
    },
    {
        "id": 6,
        "product_name": "Chicken curry",
        "category": "Chicken",
        "category_id": 2,
        "Price": 30000,
        "Image": "https://i.ibb.co/8NQ7RpM/w2.jpg",
    },
    {
        "id":7 ,
        "product_name": "Chicken do pyaza",
        "category": "Chicken",
        "category_id": 2,
        "Price": 15000,
        "Image": "https://i.ibb.co/HdMwcHJ/w1.jpg",
    },
    {
        "id":8 ,
        "product_name": "Chicken biryani",
        "category": "Chicken",
        "category_id": 2,
        "Price": 15000,
        "Image":"https://i.ibb.co/NrHbwwD/w3.jpg" ,
    },
    {
        "id": 9,
        "product_name": "Chicken korma",
        "category": "Chicken",
        "category_id": 2,
        "Price": 50000,
        "Image": "https://i.ibb.co/Tm1GmYc/w4.jpg",
        
    },
    {
        "id": 10,
        "product_name": "Desi Mutton",
        "category": "Mutton",
        "category_id": 3,
        "Price": 25000,
        "Image":"https://i.ibb.co/zrLv8Bj/w5.jpg" ,
    },
    {
        "id": 11,
        "product_name": "Mutton Biryani",
        "category": "Mutton",
        "category_id": 3,
        "Price": 3000,
        "Image": "https://i.ibb.co/Tw9cXss/w6.jpg", 
    },
    {
        "id": 12,
        "product_name": "Mutton curry",
        "category": "Mutton",
        "category_id": 3,
        "Price": 400,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    },
    {
        "id": 13,
        "product_name": "Aalu dum",
        "category": "Vegetables",
        "category_id": 4,
        "Price": 300,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    },
    {
        "id": 14,
        "product_name": "Mix Veg",
        "category": "Vegetables",
        "category_id": 4,
        "Price": 450,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    },
    {
        "id": 15,
        "product_name": "Chana Masala",
        "category": "Vegetables",
        "category_id": 4,
        "Price": 300,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    },
    {
        "id": 16,
        "product_name": "Paneer Masala",
        "category": "Dairy Products",
        "category_id": 5,
        "Price": 300,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    },
    {
        "id": 17,
        "product_name": "Dahi Masala",
        "category": "Dairy Products",
        "category_id": 5,
        "Price": 300,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    },
    {
        "id": 18,
        "product_name": "Butter Masala",
        "category": "Dairy Products",
        "category_id": 5,
        "Price": 300,
        "Image":"https://i.ibb.co/GHQjYvv/w7.jpg",
    }
]

function router(menu){
    restaurantProductRouter.route("/")
    .get(function(req,res){
    res.send(restaurantProduct)
})
   restaurantProductRouter.route('/:id')
    .get(function(req,res){
        var{id} = req.params
        var name = req.query.name;
    res.render('restaurantProduct',{title:'Restaurant Product',data:restaurantProduct,menu})
})

restaurantProductRouter.route('/details')
    .get(function(req,res){
        res.send('restaurantProduct')
    })

return restaurantProductRouter

}

module.exports= router
