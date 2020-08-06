const express = require("express");
const router = express.Router();
const { body, validationResult, check, query, param } = require("express-validator");
const {
  delete_product,
  count_product,
  list_of_product,
  update_product,
  insert_product
} = require("../controllers/product.controller");

//is router for delete product in database
router.post(
  "/delete_product",
  [
    body("key", `name cant't be undefined`).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(201).json({ errors: errors.array() });
    } else {
      delete_product(req.body, res);
    }
  }
);

//is router for count product in database
router.post("/count_product", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(201).json({ errors: errors.array() });
  } else {
    count_product(res);
  }
});

//is router for update product in database
router.post(
  "/update_product",
  [
    body("Name", `addrees cant't be undefined`).exists(),
    body("Type", `name cant't be undefined`).exists(),
    body("Release_Date", `decription cant't be undefined`).exists(),
    body("Number_of_Views", `decription cant't be undefined`).exists(),
    body("Abbreviation", `decription cant't be undefined`).exists(),
    body("key", `decription cant't be undefined`).exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(201).json({ errors: errors.array() });
    } else {
      update_product(req.body, res);
    }
  }
);

//is router for list product in database
router.post(
  "/list_of_product",
  [
    body("pag", `addrees cant't be undefined`).exists().isInt(),
    body("size", `name cant't be undefined`).exists().isInt(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(201).json({ errors: errors.array() });
    } else {
      list_of_product(req.body, res);
    }
  }
);

//is router for insert product in database
router.post(
  "/insert_product",
  [body("Name", `addrees cant't be undefined`).exists(),
  body("Type", `name cant't be undefined`).exists(),
  body("Release_Date", `decription cant't be undefined`).exists(),
  body("Number_of_Views", `decription cant't be undefined`).exists(),
  body("Abbreviation", `decription cant't be undefined`).exists(),
  body("key", `decription cant't be undefined`).exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(201).json({ errors: errors.array() });
    } else {
      insert_product(req.body, res);
    }
  }
);

module.exports = router;
