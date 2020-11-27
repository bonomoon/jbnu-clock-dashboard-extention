// css import
import './App.css';

// components import
import Quote from './components/Quote';

export default function App() {
  return (
    <div className="app">
      <div className="background">
        <div className="background-item"></div>
      </div>
      <div className="main">
        <header></header>
        <main></main>
        <footer>
          <Quote />
        </footer>
      </div>
    </div>
  );
}

