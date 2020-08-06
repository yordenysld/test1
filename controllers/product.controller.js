
const Product = require('../models/product.model')
var mongoose = require('mongoose');


//this is  funtion list  all product in database using pagin
exports.list_of_product = async ({ pag, size }, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  try {
    pag = parseInt(pag);
    size = parseInt(size);
    const pos = pag * size - size;
    var listProduct = (await Product.find().limit(size).skip(pos).sort({ Number_of_Views: 1, Release_Date: 1 }))
    res.status(200).json({
      result: listProduct,
    });
  } catch (err) {
    res.status(201).json({
      result: err,
    });
  }
};

//this is function count all the product in database
exports.count_product = async (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  try {
    var Count = (await Product.find().count());
    res.status(200).json({
      result: Count,
    });
  } catch (err) {
    res.status(201).json({
      result: err,
    });
  }
}

//this  is  fuction  delete one product in database
exports.delete_product = async (product, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  try {
    var query = { _id: mongoose.Types.ObjectId(product.key) };
    var result = null;
    if ((await Product.deleteMany(query)).ok) {
      result = {
        status: "success",
        message: "Is delete category successfull",
      };
    } else {
      result = {
        status: "fail",
        message: "Is delete category fail",
      };
    }
    res.status(200).json({
      result: result,
    });
  } catch (err) {
    res.status(201).json({
      result: err,
    });
  }
};

//this  is  function update one product in the database
exports.update_product = async (product, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  try {
    var query = { _id: mongoose.Types.ObjectId(product.key) };
    var result = null;
    var valueUpdate = { $set: { Name: product.Name, Type: product.Type, Release_Date: product.Release_Date, Insert_Date: product.Insert_Date, Number_of_Views: product.Number_of_Views, Abbreviation: product.Abbreviation } };
    if ((await Product.updateMany(query, valueUpdate)).ok) {
      result = {
        status: "success",
        message: "Is update product successfull"
      };
    } else {
      result = {
        status: "fail",
        message: "Is update product fail"
      };
    }
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(201).json({
      result: err
    });
  }
}

//this  is  a function for insert a product in database
exports.insert_product = async (product, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  try {
    var produc = new Product({ Name: product.Name, Type: product.Type, Release_Date: product.Release_Date, Insert_Date: product.Insert_Date, Number_of_Views: product.Number_of_Views, Abbreviation: product.Abbreviation })
    await produc.save();
    res.status(200).json({
      result: "this is product  insert successfull",
    });
  } catch (err) {
    res.status(201).json({
      result: err
    });
  }
}