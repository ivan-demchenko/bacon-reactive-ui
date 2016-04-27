import run from '../../../src/framework'

import view from './view'
import model from './model'
import intentions from './intentions'

export default function runRootView(initial) {
  return run(view, model, intentions, initial, document.querySelector('#app'));
}
