module.exports = app => {
    const random = require("../controllers/random.controller.js");
  
    var router = require("express").Router();

    router.get("/:number", random.find);

    // select nb items from the list
    router.get("/:number/:list", random.find);
  
    app.use('/api/random', router);
  };
