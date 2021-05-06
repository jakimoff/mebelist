const { Router } = require('express')
const ctr = require('../controllers/global.controller')

const router = Router()

// Base
// /api/global/
router.get('/header-high-menu', ctr.getHeaderHighMenu)
router.get('/header-search-history', ctr.getHeaderSearchHistory)
router.get('/header-menu', ctr.getHeaderMenu)
router.get('/header-mobile-menu', ctr.getHeaderMobileMenu)
router.get('/:id', ctr.getById)

module.exports = router
