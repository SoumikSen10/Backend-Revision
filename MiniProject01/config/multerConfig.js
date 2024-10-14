const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// Create disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/uploads");
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(12, (err, name) => {
      //generating filename
      let filename = name.toString("hex") + path.extname(file.originalname);
      cb(null, filename);
    });
  },
});

const upload = multer({ storage: storage });

// export upload variable
module.exports = upload;
