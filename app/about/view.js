import h from 'virtual-dom/h';

export default function aboutPage(state$) {
  return state$.map(x => h('.page.page--about', [x]));
}
