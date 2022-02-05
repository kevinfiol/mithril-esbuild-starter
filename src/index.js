import m from "mithril";
import { Counter } from './Counter';
import { Input } from './Input';

m.mount(document.getElementById('app'), {
  view: () =>
    m('div',
      m('h1', 'mithril esbuild starter'),
      m(Counter),
      m(Input)
    )
});
