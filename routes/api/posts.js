const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Post");
const validatePostInput = require("../../validation/post");

router.get("/", (req, res) => {
  Post.find()
    //.sort({data: -1})
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ notpostfound: "No Posts were found" })
    );
});

router.get("/user/:user_id", (req, res) => {
  Post.find({ user: req.params.user_id })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({
        notpostfound: `No Posts found from this user ${req.params.user_id}`,
      })
    );
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res
        .status(404)
        .json({ notpostfound: `No Post found fron this id: ${req.params.id}` })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      description: req.body.description,
      user: req.user.id,
    });
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
