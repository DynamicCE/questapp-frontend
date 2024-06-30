import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">QuestApp</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Ana Sayfa</Link>
          <Link to="/profile" className="text-white hover:text-gray-200">Profil</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;