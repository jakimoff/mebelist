const actions = {
  setSubCategories: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/sub-categories', { id: payload.id })
      commit('SET_SUB_CATEGORIES_ID', payload.id)
      commit('SET_SUB_CATEGORIES', data)
      return data
    } catch (e) {
      return e
    }
  }
}

export default actions
