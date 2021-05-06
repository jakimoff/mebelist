const actions = {
  setCategories: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/categories', { id: payload.id })
      commit('SET_CATEGORIES_ID', payload.id)
      commit('SET_CATEGORIES', data)
    } catch (e) {
      return e
    }
  }
}

export default actions
