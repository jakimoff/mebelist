const mutations = {
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  },
  SET_MENU(state) {
    state.menu = !state.menu
  },
  SET_MOB_MENU(state) {
    state.overflow = !state.mobMenu
    state.mobMenu = !state.mobMenu
  },
  SET_OVERFLOW(state) {
    state.overflow = !state.overflow
  },
  UPDATE_WINDOW_WIDTH(state, width) {
    state.windowWidth = width
  },
  SET_CRUMBS(state, crumbs) {
    state.crumbs = crumbs
  },
  clearAll(state) {
    state.menu = false
    state.mobMenu = false
    state.overflow = false
  }
}
export default mutations
