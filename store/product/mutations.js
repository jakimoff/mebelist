const mutations = {
  SET_REVIEWS_OPTIONS: (state, payload) => {
    state.review_options = payload
  },
  SET_MERCHANT_INFO: (state, payload) => {
    state.merchant_info = payload
  },
  SET_MERCHANT_ID: (state, payload) => {
    state.merchant_id = payload
  }
}
export default mutations
