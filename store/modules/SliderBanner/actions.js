const actions = {
  setSliderBanner: async function ({ commit }, payload) {
    try {
      const data = await this.$axios.$post('/api/modules/slider-banner', { id: payload.id })
      commit('SET_SLIDER_BANNER_ID', payload.id)
      commit('SET_SLIDER_BANNER', data)
    } catch (e) {
      return e
    }
  }
}

export default actions
