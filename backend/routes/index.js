const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is our project!'))



router.get('/companies', controllers.getAllCompanies)
router.get('/companies/:id', controllers.getCompaniesById)
router.get('./services', controllers.getAllServices)
router.get('./services/:id', controllers.getServicesById)
module.exports = router;
