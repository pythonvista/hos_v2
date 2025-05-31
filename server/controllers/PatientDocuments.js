const patientDocument=require('../models/patientDocuments');
const responseHandler=require('../utils/response-handler');

async function createDocument(req,res,next){
  try {
    if(req.file)
    {
    let newDoc={
      filePath:`/patientDocuments/${req.file.filename}`,
      fileName:req.file.filename,
      patient:req.body.patient,
      category:req.body.category
    }
      let doc=await patientDocument(newDoc).save()
      console.log(doc);
      responseHandler(res,200,doc);
    }
    else
      responseHandler(res,400,{msg:'Bad Request'});
  } catch (error) {
    responseHandler(res,500,error.msg)
  }
}
async function deleteDocument(req,res,next){
  try {

  } catch (error) {
    responseHandler(res,500,error.msg)
  }
}
module.exports={
  createDocument
}
