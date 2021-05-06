const actions = {
  setRss: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/rss', { id: payload.id })
      commit('SET_RSS_ID', payload.id)
      commit('SET_RSS', data)
      return data
    } catch (e) {
      return e
    }
  },
  setSubscribe: async function ({ commit }, payload) {
    try {
      await this.$axios.$post('/api/modules/rss-subscribe', { id: payload.id })
      commit('SET_RSS_COMPLETE', true)
    } catch (e) {
      return e
    }
  }
}

export default actions
