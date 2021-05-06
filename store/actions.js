const actions = {
  setMenu({ commit }) {
    commit('SET_MENU')
  },
  setMobMenu({ commit }) {
    commit('SET_MOB_MENU')
  },
  setOverflow({ commit }) {
    commit('SET_OVERFLOW')
  },
  clearAll({ commit }) {
    commit('clearAll')
  },
  setCrumbs({ commit }) {
    commit('SET_CRUMBS')
  }
}

export default actions
