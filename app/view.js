import m from 'mithril';

const arrToOptions = (val, arr) => {
  return arr ? arr.map(item => {
    let opts = { value: item.key };
    if (item.key === val) { opts.selected = 'selected'; }
    return m('option', opts, [item.value]);
  }) : [];
}

const getSelect = (id, state) => {
  let opts = {id: id};
  return m('select', {id: id}, arrToOptions(state[id].value, state[id].items))
}

export default function view(state) {
  return m('div', [
    getSelect('make', state),
    getSelect('model', state),
    getSelect('smth', state)
  ]);
}
