import './App.css';
import Navbar from './components/Navbar';
import Analysts from './components/Analysts';
import Ratios from './components/Ratios';

function App() {
  return (
    <div id='home'>
      <Navbar/>
      <Ratios/>
      <Analysts/>
    </div>
  )
}

export default App;
