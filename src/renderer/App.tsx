import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Settings, Filter, Wrench } from 'lucide-react';

function HomePage() {
  return (
    <div className="Home">
      <div className="side-panel">
        <div className="nav-item">
          <Home size={20} />
          <span>Home</span>
        </div>

        <div className="nav-item">
          <Wrench size={20} />
          <span>Train</span>
        </div>

        <div className="nav-item">
          <Filter size={20} />
          <span>Filters</span>
        </div>

        <div className="nav-item bottom-item">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
