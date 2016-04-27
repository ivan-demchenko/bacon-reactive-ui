import R from 'ramda';
import Bacon from 'baconjs';

export default function appIntentions(root) {
  return {
    text: Bacon.once('text')
  };
}
