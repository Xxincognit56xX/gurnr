import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import { Home, Settings, GalleryVerticalEnd, EditIcon } from 'lucide-react';
import Studio from './pages/Studio';
import Gallery from './pages/Gallery';
import SettingsPage from './pages/Settings';

function HomePage() {
  return (
    <div className="home">
      <div className="news-bg"></div>
      <div className="patch-notes"></div>
    </div>
  );
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

          <NavLink to="/studio" end className="nav-item">
            <EditIcon size={20} />
            <span>Studio</span>
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
            <Route path="/studio" element={<Studio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
