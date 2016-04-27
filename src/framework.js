import R from 'ramda';
import Bacon from 'baconjs';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

export default function run(view, model, intention, initial, root) {

  return view(Bacon.once(initial))
    .map(createElement)
    .doAction(root.appendChild.bind(root))
    .flatMap(rootNode =>
      view(model(intention(rootNode)))
      .slidingWindow(2, 2)
      .map(R.apply(diff))
      .map(patches => ({
          patches: patches,
          rootNode: rootNode
      }))
    )
    .onValue(frame => window.requestAnimationFrame(_ => patch(frame.rootNode, frame.patches)))
}
