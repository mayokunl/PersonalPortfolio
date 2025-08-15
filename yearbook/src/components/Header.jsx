import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="container">
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img src="/assets/menu-icon.png" alt="Menu" />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu open">
          <NavLink to="/experience" end className={({ isActive }) => isActive ? 'active' : undefined} onClick={() => setIsMobileMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined} onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined} onClick={() => setIsMobileMenuOpen(false)}>About Me</NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;

