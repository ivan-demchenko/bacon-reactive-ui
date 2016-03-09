import Bacon from 'baconjs';

export default function() {

  let makeSelect = document.querySelector('#make');
  let modelSelect = document.querySelector('#model');
  let smthSelect = document.querySelector('#smth');

  const getStream = domEl => Bacon.fromEvent(domEl,  'change').map(e => e.target.value).startWith(null)

  return {
    make: getStream(makeSelect),
    model: getStream(modelSelect),
    smth: getStream(smthSelect)
  };

}
