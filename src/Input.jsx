import m from 'mithril';

export const Input = () => {
  let value = '';

  return {
    view: () => (
      <>
        <h2>JSX Input Component</h2>
        <input
          type="text"
          value={value}
          oninput={({ target }) => value = target.value}
        />

        <h3>{ value || 'this component uses JSX' }</h3>
      </>
    )
  };
};
