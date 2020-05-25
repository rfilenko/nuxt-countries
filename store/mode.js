export const state = () => ({
  lightMode: true
})
export const mutations = {
  toggle(state) {
    state.lightMode = !state.lightMode
  }
};
