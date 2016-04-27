import R from 'ramda';
import Q from 'q';
import Bacon from 'baconjs';

import aboutPage from '../about/index'
import homePage from '../home/index'

const routes = {
  home: {
    resolve: Q.when({counter: 0}),
    run: homePage
  },
  about: {
    resolve: Q.when('Text for the about page'),
    run: aboutPage
  }
}

export default function appModel(intentions) {
  return intentions.navClick
    .map(R.flip(R.prop)(routes))
    .flatMap(conf => Bacon.fromPromise(conf.resolve).map(conf.run));
}
