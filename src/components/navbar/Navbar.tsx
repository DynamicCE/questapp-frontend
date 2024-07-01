import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userName");
    navigate(0);
  }

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">QuestApp</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="py-4 px-2 text-white hover:text-blue-200 transition duration-300">Ana Sayfa</Link>
            {localStorage.getItem("currentUser") == null ? (
              <Link to="/auth" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Giriş/Kayıt</Link>
            ) : (
              <>
                <Link to={`/users/${localStorage.getItem("currentUser")}`} className="py-2 px-2 font-medium text-white hover:text-blue-200 transition duration-300">Profil</Link>
                <button onClick={onClick} className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Çıkış</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;