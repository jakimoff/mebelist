const actions = {
  async setProductInfo({ commit }, payload) {
    try {
      const data = await this.$axios.$get('/api/product/' + payload.id)
      commit('SET_CRUMBS', data.crumbs, { root: true })
      return data
    } catch (e) {
      return e
    }
  },
  async setReviewsOptions({ commit, state }) {
    try {
      if (!state.review_options) {
        const data = await this.$axios.$post('/api/product/review-options')
        commit('SET_REVIEWS_OPTIONS', data)
      }
    } catch (e) {
      return e
    }
  },
  async setMerchantInfo({ commit, state }, payload) {
    try {
      if (state.merchant_id !== payload.id) {
        const data = await this.$axios.$post('/api/product/merchant-info', { id: payload.id })
        commit('SET_MERCHANT_INFO', data)
        commit('SET_MERCHANT_ID', payload.id)
        return data
      }
      return state.merchant_info
    } catch (e) {
      return e
    }
  },
  async setGoodLike({ commit }, payload) {
    try {
      await this.$axios.$post('/api/product/good-like', { id: payload.id })
    } catch (e) {
      return e
    }
  },
  async setBadLike({ commit }, payload) {
    try {
      await this.$axios.$post('/api/product/bad-like', { id: payload.id, reason: payload.reason })
    } catch (e) {
      return e
    }
  }
}

export default actions
