const actions = {
  async setHeaderHighMenu({ commit }) {
    try {
      const data = await this.$axios.$get('/api/global/header-high-menu')
      localStorage.setItem('headerHighMenu', JSON.stringify(data))
      commit('SET_HEADER_HIGH_MENU', data)
    } catch (e) {
      return e
    }
  },
  async setHeaderSearchHistory({ commit }) {
    try {
      const data = await this.$axios.$get('/api/global/header-search-history')
      localStorage.setItem('searchHistory', JSON.stringify(data))
      commit('SET_HEADER_SEARCH_HISTORY', data)
    } catch (e) {
      return e
    }
  },
  async setHeaderSearchResult({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/search/' + payload.query)
      commit('SET_HEADER_SEARCH_RESULT', data)
    } catch (e) {
      return e
    }
  },
  setResetHeaderSearchResult({ commit }) {
    commit('SET_HEADER_SEARCH_RESULT', null)
  },
  async setHeaderMenu(context, payload) {
    try {
      const data = await this.$axios.$get('/api/global/header-menu')
      localStorage.setItem('headerMenu', JSON.stringify(data))
      context.commit('SET_HEADER_MENU', data)
    } catch (e) {
      return e
    }
  },
  async setHeaderMobileMenu(context, payload) {
    try {
      const data = await this.$axios.$get('/api/global/header-mobile-menu')
      localStorage.setItem('headerMobileMenu', JSON.stringify(data))
      context.commit('SET_HEADER_MOBILE_MENU', data)
    } catch (e) {
      return e
    }
  },
  async setSortType({ commit }) {
    try {
      const appSort = JSON.parse(localStorage.getItem('appSort'))
      if (appSort) {
        commit('SET_SORT', appSort)
      } else {
        const data = await this.$axios.$post('/api/app-sort')
        localStorage.setItem('appSort', JSON.stringify(data))
        commit('SET_SORT', data)
      }
    } catch (e) {
      return e
    }
  }
}

export default actions
