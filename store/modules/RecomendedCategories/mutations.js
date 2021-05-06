const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_CURRENT_CATEGORY(state, payload) {
    state.current_category = payload
  }
}
export default mutations
