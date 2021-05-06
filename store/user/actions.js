const actions = {
  async setWishlist({ commit }) {
    try {
      const data = await this.$axios.$get('/api/user/add-wishlist')
      commit('SET_WISHLIST', data)
      return data
    } catch (e) {
      return e
    }
  },
  Login({ commit }) {
    commit('LOGIN')
  },
  logout({ commit }) {
    try {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('searchHistory')
      commit('CLEAR_TOKEN')
      commit('CLEAR_WISHLIST')
    } catch (e) {
      return e
    }
  }
}

export default actions
