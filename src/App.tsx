import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thesis" element={<Stats />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Blog - Coming Soon</h1></div>} />
        <Route path="/contact" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl mb-4">Redirecting to Calendly...</h1>
              <p className="text-gray-600">
                <a href="https://calendly.com/emmettchilds_/shadow-office" className="text-blue-600 hover:underline">
                  Click here if you're not redirected automatically
                </a>
              </p>
              <script dangerouslySetInnerHTML={{
                __html: `setTimeout(() => window.location.href = 'https://calendly.com/emmettchilds_/shadow-office', 1000)`
              }} />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;