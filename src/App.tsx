import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Blog - Coming Soon</h1></div>} />
        <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Contact - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;