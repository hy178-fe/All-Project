var express = require('express');
var router = express.Router();
var ProductModel = require('../model/Product');

let sp = [
  {index:1, name: "Trung ", price: 2000000, image: 'Anh 1', category: 1},
  {index:2, name: "Hieu", price: 3000000, image: 'Anh 2', category: 2},
  {index:3, name: "Thanh", price: 4000000, image: 'Anh 3', category: 3}  
  
]
 
/* GET home page. */
// router.get('/:id', function(req, res, next) {
  
//   let {id} =req.params;
//   let p =sp.filter(e=>e.index==id)
//   // res.render('produce',{sp});
//   res.json(p); 
//   console.log(p);
// });

// router.get('/', function(req, res, next) {
  
//   let {cate} =req.query;
//   let p =sp.filter(e=>e.category==cate)
//   // res.render('produce',{sp});
//   res.json(p); 
//   console.log(p);
// });

//get all
router.get('/', async function (req, res, next) {
  try {
    let t = new ProductModel({ name: "Điện thoại", quantity: 5000, image: "", category: '67a6f913bb706e226e1bf516' });
    await t.save();
    console.log(t);

    let data = await ProductModel.find({});
    res.json(data);  // sửa lại từ req.json(data) thành res.json(data)
  } catch (e) {
    console.log(e);
    res.status(500).send("Có lỗi xảy ra!");  // thêm phần trả về lỗi nếu có
  }
});
//

router.get('/cate/id:', async function(req, res, next){
  let {id} = req.params;
  let p = await productsModel.find({category:id});
  res.json(p);
});

module.exports = router;