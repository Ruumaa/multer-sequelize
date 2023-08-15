const { Router } = require("express"); //impor modul Router untuk mengelola endpoint dan req
const controllers = require("../controllers/indexControllers.js");

const multer = require("../middleware/multer.js");

const router = Router();

router.use("/upload", multer.static);
router.get("/", controllers.Movies.findAll);
router.get("/:id", controllers.Movies.findByPk);
router.delete("/:id", controllers.Movies.destroy);
router.post("/", multer.upload.single("photo"), controllers.Movies.create);
router.put("/:id", multer.upload.single("photo"), controllers.Movies.updateMovie);

module.exports = router;
