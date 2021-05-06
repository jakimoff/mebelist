const actions = {
  async setSearchResult({ commit }, payload) {
    try {
      const body = {
        query: payload.query ? payload.query : '',
        start: payload.start ? payload.start : '',
        limit: payload.limit ? payload.limit : '',
        sort: payload.sort ? payload.sort : '',
        filter: payload.filter ? payload.filter : []
      }
      const data = await this.$axios.$post('/api/search-result/' + payload.query, body)
      commit('SET_SEARCH_RESULT', data.products)
      commit('SET_CRUMBS', data.crumbs, { root: true })
      return data
    } catch (e) {
      return e
    }
  }
}

export default actions
