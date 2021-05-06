const actions = {
  async setCategories({ commit, dispatch, state }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/recomended-category', { ids: payload.ids })
      commit('SET_CATEGORIES', data)
      if (payload.ids[0] !== 'undefined' && payload.ids.indexOf(state.current_category) === -1) {
        commit('SET_CURRENT_CATEGORY', payload.ids[0])
        dispatch('setProductForCategory', payload.ids[0])
      }
    } catch (e) {
      return e
    }
  },
  async setProductForCategory({ commit, state }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/recomended-category-product', { id: payload.id })
      commit('SET_PRODUCTS', data)
    } catch (e) {
      return e
    }
  }
}

export default actions
