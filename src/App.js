import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div>
      <img src="/images/swamp.jpg" alt="..."/>
      </div>

    </div>
  );
}

export default App;
