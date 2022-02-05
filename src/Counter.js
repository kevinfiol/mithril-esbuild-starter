import m from 'mithril';

export const Counter = () => {
  let num = 0;

  return {
    view: () =>
      m('div',
        m('h1', 'mithril esbuild starter'),
        m('h2', num),
        m('button', { onclick: () => num += 1 }, 'Increment'),
        m('button', { onclick: () => num -= 1 }, 'Decrement')
      )
  };
};
