import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import { Home, Settings, Filter, Wrench } from 'lucide-react';
import Train from './pages/Train';
import FilterManager from './pages/FilterManager';

function HomePage() {
  return <h1 className="title">Home</h1>;
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

          <div className="nav-item bottom-item">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </div>

        <main className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/train" element={<Train />} />
            <Route path="/filtermanager" element={<FilterManager />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
