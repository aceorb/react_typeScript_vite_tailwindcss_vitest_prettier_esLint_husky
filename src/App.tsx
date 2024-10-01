import './App.css';
import Counter from './components/Counter.tsx';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        React + TypeScript + Vite + TailwindCss + Vitest + Prettier + EsLint + Husky
      </h1>
      <Counter initCount={0} />
    </>
  );
}

export default App;
