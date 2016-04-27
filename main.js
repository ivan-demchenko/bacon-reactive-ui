import run from './src/framework'
import appView from './app/appView'
import appModel from './app/appModel'
import appIntentions from './app/appIntentions'
import appInitial from './app/appInitial'

run( appView, appModel, appIntentions, appInitial, document.getElementById('app'));
