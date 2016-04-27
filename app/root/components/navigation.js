import h from 'virtual-dom/h';

export default function incLabel(state) {
  return h('ul.nav', [
    h('li.nav-item', { attributes: { 'data-link': 'home' } }, [ String('Home') ]),
    h('li.nav-item', { attributes: { 'data-link': 'about' } },[ String('About') ])
  ]);
}
