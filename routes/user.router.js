const express = require("express");
const router = express.Router();
const { body, validationResult, check, query } = require("express-validator");
const {
insert_user
} = require("../controllers/user.controller");

//is router for update product in database
router.post(
    "/insert_user",
  [
      body("user", `user cant't be undefined`).exists(),
      body("name", `name cant't be undefined`).exists(),
      body("name_first", `name_first cant't be undefined`).exists(),
      body("name_second", `name_second cant't be undefined`).exists(),
      body("email", `email cant't be undefined`).exists(),
      body("passwork", `passwork cant't be undefined`).exists(),
      body("key", `key cant't be undefined`).exists()
    ],
    (req, res) => {
     //user.user ,user.name ,user.name_first,user.name_second, user.email ,user.passwork ,user.key
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(201).json({ errors: errors.array() });
      } else {
        insert_user(req.body,res);
      }
    }
  );
  module.exports = router;