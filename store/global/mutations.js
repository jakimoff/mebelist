const mutations = {
  SET_HEADER_HIGH_MENU: (state, payload) => {
    state.header_high_menu = payload
  },
  SET_HEADER_SEARCH_HISTORY: (state, payload) => {
    state.header_search_history = payload
  },
  SET_HEADER_SEARCH_RESULT: (state, payload) => {
    state.header_search_result = payload
  },
  SET_HEADER_MENU: (state, payload) => {
    state.header_menu = payload
  },
  SET_HEADER_MOBILE_MENU: (state, payload) => {
    state.header_mobile_menu = payload
  },
  SET_SORT: (state, payload) => {
    state.appSort = payload
  }
}
export default mutations
