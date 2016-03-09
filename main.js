import run from './src/framework'
import actions from './app/actions'
import {model, initial} from './app/model'
import view from './app/view'

run(initial, model, actions, view, document.getElementById('app'));
