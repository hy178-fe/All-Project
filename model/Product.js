var mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Product= new Schema({
    id:{
        type: ObjectId,
    },
    name:{
        type: String,
        require: true,
        unique: true,
    },
    quantity: { type: Number },
    image: { type: String },
    category: { type: ObjectId, ref: 'category' } //khóa ngoại
});
module.exports = mongoose.model('Product', Product|| mongoose.model.Product );