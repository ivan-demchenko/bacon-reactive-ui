export default {

  getMakes: () => [
    {key: 0, value: 'Select'},
    {key: 1, value: 'Make #1'},
    {key: 2, value: 'Make #2'},
    {key: 3, value: 'Make #3'}
  ],

  getModels: _make => _make.map(function(make) {
    return [{
      key: 0,
      value: `Select`
    }, {
      key: 1,
      value: `model 1 for ${make}`
    }, {
      key: 2,
      value: `model 2 for ${make}`
    }];
  }).startWith([]),

  getSmths: (_make, _model) => _make.combine(_model, function(make, model) {
    return [{
      key: 1,
      value: `smth 1 for ${make} (${model})`
    }, {
      key: 2,
      value: `smth 2 for ${make} (${model})`
    }, {
      key: 3,
      value: `smth 3 for ${make} (${model})`
    }];
  }).startWith([])
}
