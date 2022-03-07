import logo from './logo.svg';
import './App.css';
import aclogo from './acnh logo.png';
import Button from '@mui/material/Button';
import addData from './AddData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={aclogo} className="ac-logo" alt="ac-logo" />
    
        <Button 
          variant="contained"
          onClick={addData}
        >
          Add Data
        </Button>
        <Button 
          variant="contained"
        >
          View Data
        </Button>
        <Button variant="contained" >
          View Stats
        </Button>
      </header>
    </div>
  );
}
export default App;