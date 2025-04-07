var mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;



let categorySchema = new Schema({
    id:{
        type: Object,
    },
    name:{
        type: String,
        require: true,
        unique: true,
    }
});
