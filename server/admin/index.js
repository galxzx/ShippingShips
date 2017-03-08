const router = require('express').Router();
const db = require('APP/db');

//Admin routes for product
router.use('/products', require('./products'))


router .put('orders/:orderId', (req, res, next)=> {
    Order.findById(req.params.orderId)
    .then(order => {
      return order.update({status: req.body.status})
      .then(order => res.send(order))
    })
    .catch(next)
  })
module.exports = router;
