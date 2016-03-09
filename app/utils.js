import S from 'sanctuary';
import R from 'ramda';

export default {
  $: selector => S.Maybe.of(document.querySelector(selector)),
  toInputStream: R.curry((evtName, el) => Bacon.fromEvent(domEl, evtName).map(e => e.target.value))
};
