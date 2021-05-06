module.exports.getHeaderHighMenu = async (req, res) => {
  try {
    await res.json([
      {
        slug: '1',
        text: 'Мебельный маркетплейсa'
      },
      {
        slug: '2',
        text: 'Продавцам'
      },
      {
        slug: '3',
        text: 'Покупателям'
      },
      {
        slug: '4',
        text: 'Акции'
      }
    ])
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getHeaderSearchHistory = async (req, res) => {
  try {
    await res.json([
      {
        slug: '1',
        text: 'Фасад пластиковый'
      },
      {
        slug: '2',
        text: 'Кресло-диван компактный'
      },
      {
        slug: '3',
        text: 'Письменный стол акция'
      },
      {
        slug: '4',
        text: 'Шкаф-купе на заказ, свои размеры'
      },
      {
        slug: '4',
        text: 'Кухня пластик “Свободный стиль”'
      }
    ])
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getHeaderMenu = async (req, res) => {
  try {
    await res.json([
      {
        category: 'Кухни',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          },
          {
            slug: '1',
            text: 'ДСП шкафы'
          },
          {
            slug: '1',
            text: 'ДВП шкафы'
          }
        ]
      },
      {
        category: 'Шкафы',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Прихожие',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Детские',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Кровати',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Диваны и кресла',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Столы и стулья',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Двери',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      },
      {
        category: 'Мягкая мебель',
        slug: 'cat_slug',
        img: {
          alt: 'alt',
          src: 'general/menu-img.png'
        },
        items: [
          {
            slug: '1',
            text: 'Шкафы Купе'
          },
          {
            slug: '1',
            text: 'Радиусные шкафы'
          },
          {
            slug: '1',
            text: 'Прямые шкафы'
          },
          {
            slug: '1',
            text: 'Распашные шкафы'
          },
          {
            slug: '1',
            text: 'Угловые шкафы'
          },
          {
            slug: '1',
            text: 'Встроенные шкафы'
          },
          {
            slug: '1',
            text: 'Элитные шкафы'
          },
          {
            slug: '1',
            text: 'Гармошкой и мансардные'
          },
          {
            slug: '1',
            text: 'Фурнитура для шкафов'
          },
          {
            slug: '1',
            text: 'Корпусные'
          }
        ]
      }
    ])
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getHeaderMobileMenu = async (req, res) => {
  try {
    await res.json([
      {
        slug: '1',
        text: 'Каталог'
      },
      {
        slug: '3',
        text: 'Продавцам'
      },
      {
        slug: '3',
        text: 'Покупателям'
      },
      {
        slug: 'wishlist',
        text: 'Избранные'
      },
      {
        slug: '3',
        text: 'Акции'
      },
      {
        slug: '3',
        text: 'О проекте'
      },
      {
        slug: '3',
        text: 'Частые вопросы'
      },
      {
        slug: '3',
        text: 'Настройки'
      },
      {
        slug: '3',
        text: 'Контакты'
      }
    ])
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await res.json({

    })
  } catch (e) {
    res.status(500).json(e)
  }
}
