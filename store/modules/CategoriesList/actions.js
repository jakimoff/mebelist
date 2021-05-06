const actions = {
  setCategoriesList: async function ({ commit }) {
    try {
      const data = await this.$axios.$post('/api/modules/categories-list')
      commit('SET_CATEGORIES_LIST', data)
    } catch (e) {
      return e
    }
  }
}

export default actions
