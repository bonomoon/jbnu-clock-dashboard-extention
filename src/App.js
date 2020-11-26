// css import
import './App.css';

// components import
import Header from './components/Header';
import Quote from './components/Quote';

export default function App() {
  return (
    <div className="app">
      <div className="background">
        <div className="background-item"></div>
      </div>
      <div className="main">
        
        <Header />
        <main></main>
        <footer>
          <Quote />
        </footer>
      </div>
    </div>
  );
}

