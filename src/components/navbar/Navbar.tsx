// src/components/Navbar.tsx
import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="" alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/home" className="nav-link">Ana Sayfa</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">Hakkımızda</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">İletişim</a>
        </li>
      </ul>
      <div className="navbar-profile">
        <span className="profile-name">Kullanıcı Adı</span>
        <img src="/path/to/avatar.png" alt="Profil Fotoğrafı" />
      </div>
    </nav>
  );
};

export default Navbar;
