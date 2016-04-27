import h from 'virtual-dom/h';

export default function incLabel(state) {
  return h('div.counter', [
    'Counter: ' + String(state.counter)
  ]);
}
