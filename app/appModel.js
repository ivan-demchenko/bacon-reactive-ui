import R from 'ramda';
import Bacon from 'baconjs';

export default function appModel(actions) {
  return actions.incClick.scan(0, R.add).map(R.objOf('counter'));
}
