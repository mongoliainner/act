import "./App.css";
import dd from "./images/dd.jpg";

function Image() {
  return (
    <div>
      <h1>Duck</h1>
      <p>efewi</p>
      <img src={dd} alt="Logo" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Image></Image>
    </div>
  );
}

export default App;
