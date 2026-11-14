import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Home, Settings, Filter, Wrench, GalleryVerticalEnd } from 'lucide-react';
import Train from './pages/Train';
import FilterManager from './pages/FilterManager';
import SettingsPage from './pages/Settings';
import Gallery from './pages/Gallery';

function HomePage() {
  const [label, setLabel] = useState("Click me")
  return (
    <div>
      <h1 className="title">Home</h1>
    <button onClick={async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/');
        const data = await response.json();
        setLabel(data.status);
      } catch (err) {
        setLabel('Error: ' + err.message);
      }
    }}>
      {label}
    </button>
    <span style={{color: "#9393939b", fontStyle: "italic"}}><br /># api testing button (temporary) </span>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="Home">
        <div className="side-panel">
          <NavLink to="/" end className="nav-item">
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/train" className="nav-item">
            <Wrench size={20} />
            <span>Train</span>
          </NavLink>

          <NavLink to="/filtermanager" className="nav-item">
            <Filter size={20} />
            <span>Filters</span>
          </NavLink>

          <NavLink to="/gallery" className="nav-item">
            <GalleryVerticalEnd size={20} />
            <span>Gallery</span>
          </NavLink>

          <NavLink to="/settings" className="nav-item bottom-item">
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>

        <main className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/train" element={<Train />} />
            <Route path="/filtermanager" element={<FilterManager />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
