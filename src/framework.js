import Bacon from 'baconjs';
import m from 'mithril';

export default function run(_initialStateFn, _modelFn, actionsFn, viewFn, root) {
  _initialStateFn().onValue(state => {
    m.render(root, viewFn(state));
    _modelFn(state, actionsFn()).onValue(newState => {
      m.render(root, viewFn(newState));
    })
  });
}
