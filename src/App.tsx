import React from 'react';
import { UserPage } from './pages/UserPage';
import Navbar from './components/navbar/Navbar';
const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <h1>new page</h1>
      <UserPage />
    </div>
  );
}

export default App;
