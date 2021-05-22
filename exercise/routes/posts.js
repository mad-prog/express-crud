var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/all", async (req, res) => {
  const posts = await Post.findAll();
  res.send(posts);
});

router.post("/insert", async (req, res) => {
  await Post.create(req.body);
  res.status(200).send("inserted");
});

// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const foundPost = await Post.findByPk(id);
//   foundPost
//     ? res.status(200).json(foundPost)
//     : res.status(404).send("Post not found");
// });

// router.patch("/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, content, createdBy } = req.body;
//   const affectedRows = await Post.update(
//     { title, content, createdBy },
//     { where: { id } }
//   );
//   affectedRows
//     ? res.sendStatus(200).send(`The number of affect rows is ${affectedRows}`)
//     : res.send("no rows affected");
// });

// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const affectedRows = await Post.update(req.body, { where: { id } });
//   res.send(affectedRows);
// });

// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const destroyedRow = await Post.destroy({ where: { id: id } });
//   destroyedRow ? res.send("implemented") : res.send("not implemented");
// });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const foundPost = await Post.findByPk(id);
    foundPost
      ? res.status(200).json(foundPost)
      : res.status(404).send("Post not found");
  })

  .patch(async (req, res) => {
    const { id } = req.params;
    const { title, content, createdBy } = req.body;
    const affectedRows = await Post.update(
      { title, content, createdBy },
      { where: { id } }
    );
    affectedRows
      ? res.sendStatus(200).send(`The number of affect rows is ${affectedRows}`)
      : res.send("no rows affected");
  })

  .put(async (req, res) => {
    const { id } = req.params;
    const affectedRows = await Post.update(req.body, { where: { id } });
    res.send(affectedRows);
  })

  .delete(async (req, res) => {
    const { id } = req.params;
    const destroyedRow = await Post.destroy({ where: { id: id } });
    destroyedRow ? res.send("implemented") : res.send("not implemented");
  });

module.exports = router;
