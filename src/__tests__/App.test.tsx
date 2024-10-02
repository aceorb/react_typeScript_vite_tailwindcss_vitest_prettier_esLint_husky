import { screen, render } from '@testing-library/react';
import App from '../App';
import { store } from '../store/store.ts';
import { Provider } from 'react-redux';

describe('App tests', () => {
  it('should render the title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('React + TypeScript + Vite + TailwindCss + Vitest + Prettier + EsLint + Husky');
  });
});
