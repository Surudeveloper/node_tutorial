var express = require('express');
var productsRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = process.env.mongoUrl

function router(menu){
    productsRouter.route('/')
       .get(function(req,res){
    })

    productsRouter.route('/category/:id')
       .get(function(req,res){
    //    var id = req.params.id; or
       var {id} = req.params
       var name = req.query.name;
       console.log(">>>>id",id);
       mongodb.connect(url, function(err,dc){
        if (err){
              res.status(501).send('Error while connecting')
           }else{
                 var dbObj = dc.db('decnode')
                     dbObj.collection('products').find({'category_id':Number(id)}).toArray(function(err,response){
                if(err){
                    res.status(501).send('Error while fetching product')
                }else{
                    // res.send(response)
                      res.render('products',{title:'Products Page',data:response,menu}) 
                    }
            })
           }
        })
      
    })   

    productsRouter.route('/details/:id')
       .get(function(req,res){
        var {id} = req.params
        console.log(">>>>id",id);
        mongodb.connect(url, function(err,dc){
         if (err){
               res.status(501).send('Error while connecting')
            }else{
                  var dbObj = dc.db('decnode')
                      dbObj.collection('products').find({'id':Number(id)}).toArray(function(err,response){
                 if(err){
                     res.status(501).send('Error while fetching product')
                 }else{
                     // res.send(response)
                       res.render('productDetails',{title:'Products Detail Page',data:response,menu}) 
                     }
             })
            }
         })
    })
   return productsRouter
}
module.exports = router   