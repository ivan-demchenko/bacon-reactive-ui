import R from 'ramda';
import Bacon from 'baconjs';

export default function appIntentions(root) {
  return {
    navClick: Bacon.fromEvent(root.querySelector('.nav'), 'click')
      .filter(R.compose(R.propEq('tagName', 'LI'), R.prop('target')))
      .map(R.path(['target', 'dataset', 'link']))
      .skipDuplicates()
      .doAction(hash => window.location.hash = hash)
  };
}
