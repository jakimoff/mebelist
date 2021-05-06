const mutations = {
  SET_RECENT_VIEWS_PRODUCTS_ID(state, payload) {
    state.lastRecentId.push.apply(state.lastRecentId, payload)
  },
  SET_RECENT_VIEWS_PRODUCTS(state, payload) {
    state.products = payload
  }
}
export default mutations
