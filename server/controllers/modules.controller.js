module.exports.getRecomendedCategory = async (req, res) => {
  try {
    await res.json([
      {
        id: 1,
        text: 'Кухни'
      },
      {
        id: 4,
        text: 'Шкафы-купе'
      },
      {
        id: 7,
        text: 'Двери'
      },
      {
        id: 12,
        text: 'Кровати'
      },
      {
        id: 15,
        text: 'Офисная мебель'
      }
    ])
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getRecomendedCategoryProduct = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json([
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        }
      ])
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getRecentProductView = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json([
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        }
      ])
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getRss = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json({
        title: 'Подпишитесь на наши обновления',
        img: {
          src: 'general/banner-full-bg.png',
          alt: 'альт для изображения'
        }
      })
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getRssSubscribe = async (req, res) => {
  try {
    await res.json({
      title: 'Спасибо за подписку'
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getBanner = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json({
        title: 'Стиль в каждой детали',
        description: 'Лимитированные предложнеия в еженедельной подборке',
        img: {
          src: 'general/banner-full-bg.png',
          alt: 'альт для изображения'
        },
        button_text: 'Посмотреть товары',
        to: 'catalog'
      })
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getBannerSale = async (req, res) => {
  try {
    await res.json({
      img: {
        src: 'content/banner-sale.png',
        alt: 'альт для изображения'
      }
    })
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getSliderBanner = async (req, res) => {
  try {
    await res.json({
      slides: [
        {
          title: 'Более 2000 товаров для обустройства вашей квартиры',
          text: 'Пример текста на рекламном баннере Пример текста на рекламном баннере Пример текста на рекламном баннере',
          img: {
            src: 'content/welcome-slide.png',
            alt: 'alt slide'
          },
          to: 'catalog'
        },
        {
          title: 'Более 2000 товаров для обустройства вашей квартиры',
          text: 'Пример текста на рекламном баннере Пример текста на рекламном баннере Пример текста на рекламном баннере',
          img: {
            src: 'content/welcome-slide.png',
            alt: 'alt slide'
          },
          to: 'catalog'
        },
        {
          title: 'Более 2000 товаров для обустройства вашей квартиры',
          text: 'Пример текста на рекламном баннере Пример текста на рекламном баннере Пример текста на рекламном баннере',
          img: {
            src: 'content/welcome-slide.png',
            alt: 'alt slide'
          },
          to: 'catalog'
        },
        {
          title: 'Более 2000 товаров для обустройства вашей квартиры',
          text: 'Пример текста на рекламном баннере Пример текста на рекламном баннере Пример текста на рекламном баннере',
          img: {
            src: 'content/welcome-slide.png',
            alt: 'alt slide'
          },
          to: 'catalog'
        },
        {
          title: 'Более 2000 товаров для обустройства вашей квартиры',
          text: 'Пример текста на рекламном баннере Пример текста на рекламном баннере Пример текста на рекламном баннере',
          img: {
            src: 'content/welcome-slide.png',
            alt: 'alt slide'
          },
          to: 'catalog'
        }
      ],
      banners: {
        top: {
          title: 'Выгодные скидки',
          text: 'Пример текста на рекламном баннере',
          img: {
            src: 'general/welcome-links-bg1.png',
            alt: 'alt banner'
          },
          to: 'catalog'
        },
        bottom: {
          title: 'Специальные условия при покупке диванов',
          text: 'Пример текста на рекламном баннере',
          img: {
            src: 'general/welcome-links-bg2.png',
            alt: 'alt 2'
          },
          to: 'catalog'
        }
      }
    })
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getCoupleBanner = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json([
        {
          title: 'Стиль в каждой детали',
          description: 'Лимитированные предложнеия в еженедельной подборке',
          img: {
            src: 'general/proposition-bg2.png',
            alt: 'альт для изображения'
          },
          button_text: 'Посмотреть товары',
          to: 'catalog'
        },
        {
          title: 'Дополните интерьер трендовыми деталями',
          description: '',
          img: {
            src: 'general/proposition-bg2.png',
            alt: 'альт для изображения'
          },
          button_text: 'Посмотреть товары',
          to: 'catalog'
        }
      ])
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getProductsCategory = async (req, res) => {
  try {
    if (req.body.id !== 3) {
      await res.json({
        title: 'Кухни еще никогда не были такими привлекательными!',
        products: [
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          }
        ],
        recommend: {
          title: 'Как выбрать кухню и не ошибиться?',
          img: {
            src: 'general/recommend-bg.png',
            alt: 'alt'
          }
        },
        limited: {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: false,
          name: 'Кресло механическое Papasan темно-коричневого цвета',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            },
            {
              name: 'Столешница',
              value: 'Пластик Rezopal Германия – входит в стоимость.'
            },
            {
              name: 'Стеновая панель',
              value: 'Пластик Sibu Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          },
          slider: [
            {
              img: {
                src: 'content/product1.png',
                alt: 'alt'
              }
            },
            {
              img: {
                src: 'content/limited-img.png',
                alt: 'alt'
              }
            },
            {
              img: {
                src: 'content/limited-img.png',
                alt: 'alt'
              }
            }
          ],
          bottom_logo: {
            src: 'content/user.png',
            alt: 'alt_text'
          }
        }
      })
    } else {
      await res.json({
        title: 'Рекомендуемые товары в разделе “Двери”',
        products: [
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          }
        ],
        recommend: {
          title: 'Как выбрать кухню и не ошибиться?',
          img: {
            src: 'general/recommend-bg.png',
            alt: 'alt'
          }
        },
        limited: {}
      })
    }
  } catch (e) {
    return e
  }
}
module.exports.getProductsCategoryMore = async (req, res) => {
  try {
    await res.json([
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '- 30%',
        new: false,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '- 30%',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: false,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      }
    ])
  } catch (e) {
    return e
  }
}

module.exports.getProductsPopular = async (req, res) => {
  try {
    await res.json({
      title: 'Популярные товары',
      products: [
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '- 30%',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: false,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        },
        {
          product_id: '1',
          to: 'slug',
          img: {
            src: 'content/product1.png',
            alt: ''
          },
          sale: '',
          new: true,
          name: 'Кухня Провенсия МДФ ПВХ Германия',
          attr: [
            {
              name: 'Материал',
              value: 'МДФ ПВХ Суперматовый'
            },
            {
              name: 'Производитель',
              value: 'Германия'
            }
          ],
          price: '199 000 ₽',
          discount: '360 000 ₽',
          review: {
            name: 'Svobodniy Stil',
            rating: '4.3'
          }
        }
      ],
      recommend: {},
      limited: {}
    })
  } catch (e) {
    return e
  }
}
module.exports.getProductsPopularMore = async (req, res) => {
  try {
    await res.json([
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '- 30%',
        new: false,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '- 30%',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: false,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      },
      {
        product_id: '1',
        to: 'slug',
        img: {
          src: 'content/product1.png',
          alt: ''
        },
        sale: '',
        new: true,
        name: 'Кухня Провенсия МДФ ПВХ Германия',
        attr: [
          {
            name: 'Материал',
            value: 'МДФ ПВХ Суперматовый'
          },
          {
            name: 'Производитель',
            value: 'Германия'
          }
        ],
        price: '199 000 ₽',
        discount: '360 000 ₽',
        review: {
          name: 'Svobodniy Stil',
          rating: '4.3'
        }
      }
    ])
  } catch (e) {
    return e
  }
}

module.exports.getCategories = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json([
        {
          title: 'Кухни',
          count: '1200',
          to: '/catalog/kitchen'
        },
        {
          title: 'Шкафы',
          count: '1500',
          to: '/catalog/sofa'
        },
        {
          title: 'Прихожие',
          count: '800',
          to: '/catalog/kids'
        },
        {
          title: 'Детские',
          count: '200',
          to: '/catalog/doors'
        },
        {
          title: 'Кровати',
          count: '1200',
          to: '/catalog/kitchen'
        },
        {
          title: 'Диваны и кресла',
          count: '1500',
          to: '/catalog/sofa'
        },
        {
          title: 'Столы и стулья',
          count: '800',
          to: '/catalog/kids'
        },
        {
          title: 'Двери',
          count: '200',
          to: '/catalog/doors'
        }
      ])
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getCategory = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json({
        title: 'Диваны и кресла',
        crumbs: [
          {
            path: '/',
            name: 'Главная'
          },
          {
            path: '/catalog',
            name: 'Каталог'
          },
          {
            path: '/catalog/' + req.body.id + '"',
            name: 'Диваны и кресла'
          }
        ],
        products: [
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: false,
            name: req.body.sort + 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '- 30%',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: false,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          },
          {
            product_id: '1',
            to: 'slug',
            img: {
              src: 'content/product1.png',
              alt: ''
            },
            sale: '',
            new: true,
            name: 'Кухня Провенсия МДФ ПВХ Германия',
            attr: [
              {
                name: 'Материал',
                value: 'МДФ ПВХ Суперматовый'
              },
              {
                name: 'Производитель',
                value: 'Германия'
              }
            ],
            price: '199 000 ₽',
            discount: '360 000 ₽',
            review: {
              name: 'Svobodniy Stil',
              rating: '4.3'
            }
          }
        ],
        categories: {
          title: 'Гостинная',
          items: [
            {
              title: 'Кухни',
              to: '/category/4',
              count: 100
            },
            {
              title: 'Столы и стулья',
              to: '/category/5',
              count: 25
            },
            {
              title: 'Двери',
              to: '/category/6',
              count: 5
            },
            {
              title: 'Кухни',
              to: '/category/4',
              count: 100
            },
            {
              title: 'Столы и стулья',
              to: '/category/5',
              count: 25
            },
            {
              title: 'Двери',
              to: '/category/6',
              count: 5
            }
          ]
        },
        filters: [
          {
            id: 1,
            type: 'checkbox',
            title: 'Производитель',
            options: [
              {
                id: 11,
                title: 'PAREMO'
              },
              {
                id: 12,
                title: 'Luckas Ringer'
              }
            ]
          },
          {
            id: 2,
            type: 'checkbox',
            title: 'Тип',
            options: [
              {
                id: 21,
                title: 'Диван'
              },
              {
                id: 22,
                title: 'Не Диван'
              }
            ]
          },
          {
            id: 3,
            type: 'from_to',
            title: 'Цена, ₽',
            placeholders: {
              min: '12 000',
              max: '89 000'
            },
            options: []
          },
          {
            id: 4,
            type: 'from_to',
            title: 'Ширина, см',
            placeholders: {
              min: '4 000',
              max: '10 000'
            },
            options: [
              {
                id: 41,
                title: 'Раскладная конструкция'
              }
            ]
          },
          {
            id: 5,
            type: 'checkbox',
            title: 'Обивка',
            options: [
              {
                id: 51,
                title: 'Ткань'
              },
              {
                id: 52,
                title: 'Искуственная кожа'
              },
              {
                id: 53,
                title: 'Прочее'
              }
            ]
          },
          {
            id: 6,
            type: 'color',
            title: 'Цвет',
            options: [
              {
                id: 61,
                title: '#808080'
              },
              {
                id: 62,
                title: '#954b10'
              },
              {
                id: 63,
                title: '#48acfc'
              },
              {
                id: 64,
                title: '#f924be'
              }
            ]
          }
        ],
        total: 1370
      })
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getSubCategories = async (req, res) => {
  try {
    await setTimeout(() => {
      res.json([
        {
          title: 'Кухни',
          count: req.body.id,
          to: '/catalog/kitchen'
        },
        {
          title: 'Шкафы',
          count: '1500',
          to: '/catalog/sofa'
        },
        {
          title: 'Прихожие',
          count: '800',
          to: '/catalog/kids'
        },
        {
          title: 'Детские',
          count: '200',
          to: '/catalog/doors'
        },
        {
          title: 'Кровати',
          count: '1200',
          to: '/catalog/kitchen'
        },
        {
          title: 'Диваны и кресла',
          count: '1500',
          to: '/catalog/sofa'
        }
      ])
    }, 1500)
  } catch (e) {
    res.status(500).json(e)
  }
}
module.exports.getCategoriesList = async (req, res) => {
  try {
    await res.json([
      {
        title: 'Гостинная',
        to: 'slug_category_1',
        items: [
          {
            text: 'Банкеты и скамьи',
            to: '1'
          },
          {
            text: 'Диваны и кушетки',
            to: '2'
          },
          {
            text: 'Комоды',
            to: '3'
          },
          {
            text: 'Кресла',
            to: '4'
          },
          {
            text: 'Кресла-мешки',
            to: '5'
          },
          {
            text: 'Шкафы',
            to: '1'
          },
          {
            text: 'Обувницы',
            to: '2'
          },
          {
            text: 'Банкеты и скамьи',
            to: '11'
          },
          {
            text: 'Диваны и кушетки',
            to: '22'
          },

          {
            text: 'Комоды',
            to: '33'
          },
          {
            text: 'Кресла',
            to: '44'
          },
          {
            text: 'Кресла-мешки',
            to: '55'
          }
        ]
      },
      {
        title: 'Детская',
        to: 'slug_category_2',
        items: [
          {
            text: 'Парты и столы',
            to: '21'
          },
          {
            text: 'Стулья и табуреты',
            to: '22'
          }
        ]
      },
      {
        title: 'Кабинет',
        to: 'slug_category_3',
        items: [
          {
            text: 'Компьютерные кресла',
            to: '31'
          },
          {
            text: 'Шкафы для документов',
            to: '32'
          }
        ]
      },
      {
        title: 'Кухня',
        to: 'slug_category_4',
        items: [
          {
            text: 'Кухни',
            to: '41'
          },
          {
            text: 'Стулья и табуреты',
            to: '42'
          },
          {
            text: 'Стулья и табуреты',
            to: '43'
          }
        ]
      },
      {
        title: 'Мягкая мебель',
        to: 'slug_category_5',
        items: [
          {
            text: 'Пуфики',
            to: '1'
          },
          {
            text: 'Диваны',
            to: '2'
          },
          {
            text: 'Кресла',
            to: '3'
          }
        ]
      },
      {
        title: 'Надувная мебель и аксессуары',
        to: 'slug_category_6',
        items: [
          {
            text: 'Надувная мебель',
            to: '1'
          },
          {
            text: 'Насосы и аксессуары',
            to: '2'
          }
        ]
      },
      {
        title: 'Прихожая',
        to: 'slug_category_7',
        items: [
          {
            text: 'Шкафы',
            to: '1'
          },
          {
            text: 'Обувницы',
            to: '2'
          }
        ]
      },
      {
        title: 'Спальня',
        to: 'slug_category_8',
        items: [
          {
            text: 'Тумбы',
            to: '1'
          },
          {
            text: 'Шкафы',
            to: '2'
          },
          {
            text: 'Матрасы',
            to: '3'
          },
          {
            text: 'Раскладушки',
            to: '4'
          }
        ]
      },
      {
        title: 'Кушетки',
        to: 'slug_category_9',
        items: []
      },
      {
        title: 'Стулья, табуретки',
        to: 'slug_category_10',
        items: []
      },
      {
        title: 'Шкафы, комоды, полки',
        to: 'slug_category_11',
        items: []
      }
    ])
  } catch (e) {
    res.status(500).json(e)
  }
}
