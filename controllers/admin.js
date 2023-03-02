const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imgURl = req.body.imgURl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imgURl,price,description);
    product.save();
    res.redirect('/');
  };


  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/product-list', {
        prods: products,
        pageTitle: 'admin product List',
        path: '/admin/product-list',
      });
    });
  };