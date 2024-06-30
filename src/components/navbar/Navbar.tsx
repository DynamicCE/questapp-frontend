import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">QuestApp</Link>
        <div>
          <Link to="/" className="text-white mr-4 hover:text-gray-300">Ana Sayfa</Link>
          {currentUser ? (
            <>
              <Link to="/users" className="text-white mr-4 hover:text-gray-300">Kullanıcılar</Link>
              <span className="text-white mr-4">{currentUser.username}</span>
              <button onClick={logout} className="text-white hover:text-gray-300">Çıkış Yap</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4 hover:text-gray-300">Giriş Yap</Link>
              <Link to="/register" className="text-white hover:text-gray-300">Kayıt Ol</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;