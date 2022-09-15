var express = require('express')
var restaurantProductRouter = express.Router()
var mongodb = require('mongodb').MongoClient
var url = process.env.mongoUrl

function router(menu){
    restaurantProductRouter.route("/")
    .get(function(req,res){
    // res.send(restaurantProduct)
})
   restaurantProductRouter.route('/:id')
    .get(function(req,res){
        var{id} = req.params
        var name = req.query.name;
        console.log('>>>id',id);
        mongodb.connect(url, function(err,dc){
            if(err){
                res.status(502).send('Error while connecting')
                }else{
                      var dbObj = dc.db('decnode')
                          dbObj.collection('restaurantProduct').find({'category_id':Number(id)}).toArray(function(err,response){
                       if (err){
                                 res.status(503).send('Error while fetching')
                        }else{
                              res.render('restaurantProduct',{title:'Restaurant Product',data:response,menu})
                            }
                })
            }
        })
})

restaurantProductRouter.route('/details/:id')
    .get(function(req,res){
        var{id} = req.params
        var name = req.query.name;
        console.log('>>>id',id);
        mongodb.connect(url, function(err,dc){
            if(err){
                res.status(502).send('Error while connecting')
                }else{
                      var dbObj = dc.db('decnode')
                          dbObj.collection('restaurantProduct').find({'id':Number(id)}).toArray(function(err,response){
                       if (err){
                                 res.status(503).send('Error while fetching')
                        }else{
                              res.render('restProdDetails',{title:'Restaurant Product Details',data:response,menu})
                            }
                })
            }
        })
    })
return restaurantProductRouter
}
module.exports= router