// css import
import "./App.css";

// components import
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="app">
      <div className={"background"}>
        <div className={"background-item"}></div>
      </div>
      <div className={"background-overlay"}></div>
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
}
