
import React from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './componets/Navigation';
import { Footer } from './componets/Footer';
import { Dashboard } from './pages/Dashboard';
import { Signup } from './pages/SignUp';
// import { AdminDashboard } from './pages/AdminDashBoard';
// import { ProtectedRoute } from './componets/ProtectedRoute';
const App: React.FC = () => {
  return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route  path="/dashboard" element={<Dashboard/>}/>
              <Route  path="/signup" element={<Signup/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
};

export default App
