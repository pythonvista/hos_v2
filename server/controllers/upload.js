var router = require("express").Router();
const path = require("path");
var fs = require('fs');
var multer = require("../custom-middlewares/multy");


function uploadFile(req, res, next) {
  return res.json({ url: `images/${req.file.filename}` });
};

async function deleteFile(req, res, next) {
  console.log("===>", req.body)
  if (req.body.url) {
    fs.unlink(path.join(process.cwd(), "server/public", req.body.url), function (err) {
      if (err) {
        return res.sendStatus(204);
      }
      // if no error, file has been deleted successfully
      return res.json({ event: 'File deleted Successfully' });
    });
  } else {
    if (!event) return res.sendStatus(204);
  }
  // unlink the files
};


module.exports = {
  uploadFile,
  deleteFile
};
