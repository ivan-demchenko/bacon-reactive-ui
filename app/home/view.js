import h from 'virtual-dom/h';
import incBtn from './components/button';
import incLabel from './components/label';

export default function homePage(state$) {
  return state$.map(state => h('.page.page--home', [
    incBtn(state),
    incLabel(state)
  ]));
}
