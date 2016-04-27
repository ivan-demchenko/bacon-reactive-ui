import R from 'ramda';
import Bacon from 'baconjs';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

export default function run(view, model, intention, initial, root) {

  let initialNode = view(Bacon.once(initial))
    .take(1)
    .map(createElement)
    .toProperty();

  initialNode.onValue(root.appendChild.bind(root))

  view(model(intention(root.firstChild)))
      .slidingWindow(2, 2)
      .map(R.apply(diff))
      .combine(initialNode, (patches, rootNode) => {
          return {
              patches: patches,
              rootNode: rootNode
          }
      })
      .onValue(frame => window.requestAnimationFrame(_ => patch(frame.rootNode, frame.patches)))
}
