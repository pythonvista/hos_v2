const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiseaseCategorySchema = new Schema({
    category: String,
    subCategories:[],
    patient:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },
})

const DiseaseCategory = mongoose.model('diseaseCategory', DiseaseCategorySchema);
module.exports = DiseaseCategory;