const mutations = {
  SET_INFORMATION: (state, payload) => {
    state.information = payload
  },
  SET_INFORMATION_BY_ID: (state, payload) => {
    state.informationById = payload
  }
}
export default mutations
