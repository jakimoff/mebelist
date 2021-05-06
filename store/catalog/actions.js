const actions = {
  async setCategory({ commit }, payload) {
    try {
      const body = {
        id: payload.id ? payload.id : '',
        start: payload.start ? payload.start : '',
        limit: payload.limit ? payload.limit : '',
        sort: payload.sort ? payload.sort : '',
        filter: payload.filter ? payload.filter : [],
        subCategoryId: payload.subCategoryId ? payload.subCategoryId : ''
      }
      const data = await this.$axios.$post('/api/modules/category', body)
      commit('SET_CRUMBS', data.crumbs, { root: true })
      return data
    } catch (e) {
      return e
    }
  }
}

export default actions
