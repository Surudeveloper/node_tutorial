var express = require('express');
var productsRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = process.env.mongoUrl

function router(menu){
    productsRouter.route('/')
       .get(function(req,res){
        mongodb.connect(url, function(err,dc){
            if (err){
                  res.status(501).send('Error while connecting')
               }else{
                var dbObj = dc.db('decnode')
                dbObj.collection('products').find().toArray(function(err,response){
                    if(err){
                        res.status(501).send('Error while fetching product')
                    }else{
                        res.send(response)
                    }
                })
               }
        })
       
   })

    productsRouter.route('/category/:id')
       .get(function(req,res){
    //    var id = req.params.id; or
       var {id} = req.params
       var name = req.query.name;
       res.render('products',{title:'Products Page',data:[],menu}) 
   })   

    productsRouter.route('/details')
       .get(function(req,res){
       res.send('Products Details')
   })
   return productsRouter
}
module.exports = router   