const actions = {
  setBanner: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/banner', { id: payload.id })
      commit('SET_BANNER_ID', payload.id)
      commit('SET_BANNER', data)
    } catch (e) {
      return e
    }
  }
}

export default actions
