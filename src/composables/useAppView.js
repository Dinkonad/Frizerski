import { reactive } from 'vue'

const state = reactive({ view: 'site' })

function showAdmin() {
  state.view = 'admin'
  window.scrollTo(0, 0)
}

function showSite() {
  state.view = 'site'
  window.scrollTo(0, 0)
}

export function useAppView() {
  return { state, showAdmin, showSite }
}
