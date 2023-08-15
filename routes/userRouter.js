const controllers = require("../controllers/userControllers");
const { Router } = require("express");
const router = Router();

router.get("/", controllers.findAll);
router.get("/:id", controllers.findByPk);
router.post("/", controllers.create);
router.delete("/:id", controllers.destroy);
router.put("/:id", controllers.update);
module.exports = router;
