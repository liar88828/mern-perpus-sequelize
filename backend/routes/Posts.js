const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  // res.send('hello world')
  // res.json('hello world');
  const listOfPost = await Posts.findAll();
  res.json(listOfPost);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

// router.get('/:id', async (req, res) => {
//   const response = await Posts.findOne({
//     where: {
//       id: req.params.id
//     }
//   });
//   res.status(200).json(response);
// });

router.get("/byId/:id", async (req, res) => {
  res.json(await Posts.findByPk(req.params.id));

  // const id = req.params.id;
  // const post = await Posts.findByPk(id);
  // res.json(post);

  // res.json(await Posts.findOne({
  //   where: { id: req.params.id }
  // }));
});

module.exports = router;
