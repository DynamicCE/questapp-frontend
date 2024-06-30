import React from 'react';
import { UserPage } from './pages/UserPage';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <AppRoutes /> 
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;