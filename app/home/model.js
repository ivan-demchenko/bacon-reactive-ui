import R from 'ramda';
import Bacon from 'baconjs';

export default function appModel(intentions) {
  return intentions.incClick.scan(0, R.add).map(R.objOf('counter'));
}
