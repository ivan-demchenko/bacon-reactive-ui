import Bacon from 'baconjs';

export default function appIntentions(root) {
  return {
    incClick: Bacon.fromEvent(root.querySelector('button.inc'), 'click').map(1)
  };
}
