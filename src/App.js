import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Dashboard from './components/Dashboard/Dashboard.tsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
