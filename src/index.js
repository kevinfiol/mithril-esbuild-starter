import m from 'mithril';
import { Counter } from './Counter';
import { Input } from './Input';

m.mount(document.getElementById('app'), {
  view: () => (
    m('div',
      m('h1', 'mithril esbuild starter'),
      m(Counter),
      m(Input)
    )
  )
});

if (window.DEV_MODE) {
  // enable live reload in dev mode
  new EventSource('/esbuild').addEventListener('change', () => location.reload())
}