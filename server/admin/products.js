const router = require('express').Router();
const Product = require('APP/db/models/product')

router.param('productId', (req, res, next, id) => {
	Product.findById(id)
	.then( product => {
		if (!product) throw new Error('Product not found');
		req.product = product;
		next();
	})
	.catch(err => {console.error(err)})
})

//Product creation route
router.post('/', (req, res, next) => {

	Product.create(req.body)
	.then(product => res.json(product))
	.catch(err => console.error(err));
})

//Product update route
router.put('/:productId', (req, res, next) => {
	req.product.update(req.body)
	.then( product => {
		res.json(product);
	})
})

//Product deletion route
router.delete('/:productId', (req, res, next) => {
	req.product.destroy()
	.then( res.sendStatus(204));
})

module.exports = router;
