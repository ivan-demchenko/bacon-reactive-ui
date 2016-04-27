import h from 'virtual-dom/h';
import incBtn from './components/button';
import incLabel from './components/label';

export default function appView(state$) {
  return state$.map(state => h('div.app', [
    incBtn(state), incLabel(state)
  ]));
}
