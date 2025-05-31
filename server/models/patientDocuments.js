const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const documentSchema=new Schema({
  patient:{
    type:Schema.Types.ObjectId,
    ref:'patient'
  },
  filePath:{
    type:String
  },
  fileName:{
    type:String
  },
  category:{
    type:String
  },
  updatedAt:{
    type:Date,
    default:Date.now()
  }
})

const patientDocuments=mongoose.model('document',documentSchema);
module.exports=patientDocuments;
