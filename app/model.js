import Bacon from 'baconjs';
import service from './service'

export function initial() {
  return Bacon.once({
    make: {
      value: 1,
      items: service.getMakes()
    },
    model: {
      value: null,
      items: null
    },
    smth: {
      value: null,
      items: null
    }
  });
}

export function model(prev, actions) {
  return Bacon.combineTemplate({
    make: {
      value: actions.make,
      items: prev.make.items
    },
    model: {
      value: actions.model,
      items: service.getModels(actions.make)
    },
    smth: {
      value: actions.smth,
      items: service.getSmths(actions.make, actions.model)
    }
  });
}
