const router = require("express").Router();
const articlesController = require("../controllers/articlesController");
const savedController = require("../controllers/savedController");

//api articles route
router.route("/api/articles/:query?")
  .get(articlesController.getArticles)
  .post(articlesController.saveArticles)
  .put(articlesController.putArticles);

router.route("/api/saved")
  .get(savedController.findAll)
  .post(savedController.create)
  .delete()

router.use("/", (req, res) => {
  res.send("home route");
});

module.exports = router;