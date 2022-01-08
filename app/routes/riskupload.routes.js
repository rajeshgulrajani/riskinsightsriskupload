module.exports = app => {
    const riskupload = require("../controllers/riskupload.controller.js");
  
    var router = require("express").Router();
  // a middleware function with no mount path. This code is executed for every request to the router
    router.use(function (req, res, next) {
      //console.log('Time:', Date.now() + req)
      next()
    })
    // Create a new Tutorial
    router.post("/", riskupload.create);
  
    // Retrieve all Tutorials
    router.get("/", riskupload.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", riskupload.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", riskupload.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", riskupload.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", riskupload.delete);
  
    // Delete all Tutorials
    router.delete("/", riskupload.deleteAll);
  
    app.use('/riskupload', router) ;
  };