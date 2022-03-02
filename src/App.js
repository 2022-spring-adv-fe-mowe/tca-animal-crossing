import logo from './logo.svg';
import './App.css';
import aclogo from './acnh logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={aclogo} className="ac-logo" alt="ac-logo" />
    
        <button className="buttonMain">
          Add or View Data
        </button>
        <button className="buttonMain" >
          View Stats
        </button>
      </header>
    </div>
  );
}
export default App;
