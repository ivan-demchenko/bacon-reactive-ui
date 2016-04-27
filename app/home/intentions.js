import R from 'ramda';
import Bacon from 'baconjs';

export default function appIntentions(root) {
  return {
    incClick: Bacon.fromEvent(root.querySelector('.inc'), 'click').map(R.always(1))
  };
}
