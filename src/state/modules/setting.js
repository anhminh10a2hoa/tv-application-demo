export const state = {
  openModal: true,
}

export const getters = {
  getOpenModal: (state) => {
    return state.openModal
  },
}

export const mutations = {
  SET_OPEN_MODAL(state, openModal) {
    state.openModal = openModal
  },
}

export const actions = {
  setOpenModal({ commit }, openModal) {
    commit('SET_OPEN_MODAL', openModal)
  },
}
