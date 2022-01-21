import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import data from './data'

function App() {
  let cards = data.map(x => <Card {...x} />)
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
