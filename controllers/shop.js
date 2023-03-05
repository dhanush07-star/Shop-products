const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All products',
      path: '/product-list',
    });
  });
};


exports.getProductByID = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId, (p)=>{
    res.render('shop/product-detail', {
      product : p, 
      pageTitle: p.title,
      path: '/product-list',
    })
  })
};

exports.getIndex = (req,res,next)=>{
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
}

exports.getCart = (req,res,next)=>{
  res.render('shop/cart',{
    path:'/cart',
    pageTitle:'Your Cart'
  })
}


exports.postCart = (req,res,next)=>{
  const id = req.body.productId;
  console.log(id);
  res.redirect('/cart')
}

exports.getCheckout = (req,res,next)=>{
  res.render('shop/checkout',{
    path:'/checkout',
    pageTitle:'Your Checkout'
  })
}


exports.getOrders = (req,res,next)=>{
  res.render('shop/orders',{
    path:'/orders',
    pageTitle:'Your Orders'
  })
}