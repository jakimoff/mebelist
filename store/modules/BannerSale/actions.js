const actions = {
  setBannerSale: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/banner-sale', { id: payload.id })
      commit('SET_BANNER_SALE_ID', payload.id)
      commit('SET_BANNER_SALE', data)
      return data
    } catch (e) {
      return e
    }
  }
}

export default actions
