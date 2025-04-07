var express = require('express');
var router = express.Router();
var categoryModel = require('../model/Category');


/* GET home page. */
//localhost:3000/category
//get all categories
router.get('/', async function(req, res, next) {
   // let t = new categoryModel({name: "Điện thoại"});
   // await t.save();
   let categories = await categoryModel.find();
   res.json(categories);
});
module.exports = router;