const actions = {
  setCoupleBanner: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/couple-banner', { id: payload.id })
      commit('SET_COUPLE_BANNER_ID', payload.id)
      commit('SET_COUPLE_BANNER', data)
    } catch (e) {
      return e
    }
  }
}

export default actions
