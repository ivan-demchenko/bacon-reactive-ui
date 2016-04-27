import run from '../../../src/framework'

import view from './view'
import model from './model'
import intentions from './intentions'

export default function runAboutPage(resolved) {
  return run(view, model, intentions, resolved, document.body.querySelector('div.viewport'));
}
