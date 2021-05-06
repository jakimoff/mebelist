const mutations = {
  SET_RSS_ID(state, payload) {
    state.rss_id = payload
  },
  SET_RSS(state, payload) {
    state.rss = payload
  },
  SET_RSS_COMPLETE(state, payload) {
    state.rss_complete = payload
  }
}
export default mutations
