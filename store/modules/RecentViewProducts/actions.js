const actions = {
  setRecentViewProductsId({ commit }, payload) {
    try {
      commit('SET_RECENT_VIEWS_PRODUCTS_ID', payload.id)
    } catch (e) {
      return e
    }
  },
  async setRecentViewProducts({ commit, state }) {
    try {
      if (state.lastRecentId.length > 5) {
        const data = await this.$axios.$post('/api/modules/products-recent-view', {
          ids: JSON.stringify(state.lastRecentId)
        })
        commit('SET_RECENT_VIEWS_PRODUCTS', data)
      }
    } catch (e) {
      return e
    }
  }
}

export default actions
