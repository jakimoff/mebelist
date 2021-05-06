const actions = {
  async setInformation({ commit }) {
    try {
      const data = await this.$axios.$get('/api/information')
      commit('SET_INFORMATION', data.data)
      commit('SET_CRUMBS', data.crumbs, { root: true })
    } catch (e) {
      return e
    }
  },
  async setInformationById({ commit }, payload) {
    try {
      const data = await this.$axios.$get('/api/information/' + payload.id)
      commit('SET_INFORMATION_BY_ID', data.data)
      commit('SET_CRUMBS', data.crumbs, { root: true })
    } catch (e) {
      return e
    }
  }
}

export default actions
