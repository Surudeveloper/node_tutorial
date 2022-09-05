var express = require('express');
var restaurantRouter = express.Router()

var restaurants = [
    {
        "id":1,
        "category": "Fish",
        "thumb":"https://www.thespruceeats.com/thmb/reSvIQYudBG9gSo7j2YVeESgeXQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thai-grilled-whole-fish-with-coriander-chili-sauce-3217485-Hero_01-0bae03c92a794a97959408ab726fc797.jpg"
    },
    {
        "id":2,
        "category":"Chicken",
        "thumb":"https://www.hungryforever.com/wp-content/uploads/2017/07/chicken-leg-fry-recipe.jpg"
    },
    {
        "id":3,
        "category":"Mutton",
        "thumb":"https://www.jamalfoodexports.com/images/mutton.jpg"
    },
    {
        "id":4,
        "category": "Vegetables",
        "thumb":"https://5.imimg.com/data5/OW/TD/LV/GLADMIN-6708125/selection-158-500x500.png"
    },
    {
        "id":5,
        "category": "Dairy Products",
        "thumb":"https://media.istockphoto.com/photos/assorted-of-dairy-product-with-milk-butter-cheese-picture-id1241482623?b=1&k=20&m=1241482623&s=170667a&w=0&h=ECJQ5eFWK6LXlMCev7mIywG-A-FJDjWSGcFLDQsX7Uk="
    }
]

function router(menu){
   restaurantRouter.route('/')
      .get(function(req,res){
    // res.send(restaurants)
       res.render('restaurants',{title:'Restaurant Page',data:restaurants, menu})
   })

   restaurantRouter.route('/details')
       .get(function(req,res){
       res.send('restaurants Details')
   })  
  return restaurantRouter
}   
module.exports= router 