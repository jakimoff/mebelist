const actions = {
  async setProducts({ commit }, payload) {
    try {
      return await this.$axios.$post('/api/modules/products-category', {
        id: payload.id
      })
    } catch (e) {
      return e
    }
  },
  async setLoadMore({ commit }, payload) {
    try {
      return await this.$axios.$post('/api/modules/products-category-more', {
        id: payload.id,
        start: payload.start,
        limit: payload.limit
      })
    } catch (e) {
      return e
    }
  }
}

export default actions
