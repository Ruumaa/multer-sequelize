const multer = require("multer");
const express = require("express");
const path = require("path");


const static = (express.static(path.join(__dirname, "../upload")));

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"..", "upload")); //menentukan direktori penyimpanan
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); //menentukan nama file
  },
});

const upload = multer({ storage: diskStorage });

module.exports = {upload, static}
