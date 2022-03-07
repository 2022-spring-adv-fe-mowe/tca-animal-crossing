import logo from './logo.svg';
import './App.css';
import aclogo from './acnh logo.png';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={aclogo} className="ac-logo" alt="ac-logo" />
    
        <Button 
          variant="contained"
          onClick={() => {
            alert('clicked');
          }}
        >
          Add or View Data
        </Button>
        <Button variant="contained" >
          View Stats
        </Button>
      </header>
    </div>
  );
}
export default App;