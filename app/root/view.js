import h from 'virtual-dom/h';
import navigation from './components/navigation';

export default function appView(state$) {
  return state$.map(state => h('div.app', [
    navigation(state),
    h('div.viewport', [])
  ]));
}
