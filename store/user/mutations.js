const mutations = {
  SET_WISHLIST: (state, payload) => {
    state.wishlist = payload
  },
  CLEAR_TOKEN: (state) => {
    state.token = null
  },
  CLEAR_WISHLIST: (state) => {
    state.wishlist = null
  },
  LOGIN: (state) => {
    state.token = 'Token'
    state.name = 'John Doe'
    state.wishlist = '17'
  }
}
export default mutations
