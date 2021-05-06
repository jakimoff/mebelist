const { Router } = require('express')
const ctr = require('../controllers/main.controller')

const router = Router()

// Base
// /api/global/
router.post('/app-sort', ctr.getAppSort)
router.post('/search/:query', ctr.getSearch)
router.post('/search-result/:query', ctr.getSearchResult)
router.post('/search-result/:query/:sort', ctr.getSearchResultSort)
router.get('/information', ctr.getInformation)
router.get('/information/:id', ctr.getInformationId)
router.get('/product/:id', ctr.getProduct)
router.post('/product/review-options', ctr.getProductReviewsOptions)
router.post('/product/merchant-info', ctr.getMerchantInfo)

module.exports = router
