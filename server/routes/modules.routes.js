const { Router } = require('express')
const ctr = require('../controllers/modules.controller')

const router = Router()

// Base
// /api/modules
router.post('/recomended-category', ctr.getRecomendedCategory)
router.post('/recomended-category-product', ctr.getRecomendedCategoryProduct)
router.post('/rss', ctr.getRss)
router.post('/rss-subscribe', ctr.getRssSubscribe)
router.post('/banner', ctr.getBanner)
router.post('/banner-sale', ctr.getBannerSale)
router.post('/slider-banner', ctr.getSliderBanner)
router.post('/couple-banner', ctr.getCoupleBanner)
router.post('/products-popular', ctr.getProductsPopular)
router.post('/products-popular-more', ctr.getProductsPopularMore)
router.post('/products-category', ctr.getProductsCategory)
router.post('/products-category-more', ctr.getProductsCategoryMore)
router.post('/categories', ctr.getCategories)
router.post('/category', ctr.getCategory)
router.post('/sub-categories', ctr.getSubCategories)
router.post('/categories-list', ctr.getCategoriesList)
router.post('/products-recent-view', ctr.getRecentProductView)

module.exports = router
