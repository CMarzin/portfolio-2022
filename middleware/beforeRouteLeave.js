export default function ({ store }) {
  if (store.state.ui.menuState === 'open') store.commit('ui/toggle', 'closed')
}
