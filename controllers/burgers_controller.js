var express = require('express');

var router = express.Router();

var burger = require("../models/burgers.js");


router.get("/", function(request, response) {
    burger.selectAll(function(burgerData) {
    
      console.log(burgerData);
      response.render("index", {burgerData});
    });
});

router.put('/api/burgers/:id', function(request, response) {
    
    burger.updateOne(request.params.id, function() {
        console.log(result);
        response.redirect('/');
    });
});

router.post('/api/burgers', function(request, response){
    burger.insertOne(request.body.burger_name, function(){
        response.redirect('/'); 
    });
});


module.exports = router;