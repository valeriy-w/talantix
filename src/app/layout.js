'use client'

import './globals.css'; 
import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); 
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const firstVisibleSection = visibleSections[0].target.id;
          setActiveSection(firstVisibleSection);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="ru">
      <head />
      <body>
        <header>
          <nav>
            <div className="logo">
              <a href="/">Logo</a>
            </div>
            <div className="nav-links">
              <a href="#advantages" className={activeSection === 'advantages' ? 'active' : ''}>Преимущества</a>
              <a href="#partners" className={activeSection === 'partners' ? 'active' : ''}>Как мы работаем</a>
            </div>

            <div className="menu" id="open-menu-btn" onClick={openMenu}>
              <div className="menu-pad">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
              </div>
            </div>

            <div className={`menu-right ${isMenuOpen ? 'open' : ''}`} id="side-menu">
              <div className="logo1">
                <a href="/">Logo</a>
              </div>
              <div className="menu close" id="close-menu-btn" onClick={closeMenu}>
                <div className="menu-pad">
                  <div className="menu-line-x"></div>
                  <div className="menu-line-x"></div>
                </div>
              </div>
              <ul>
                <li>
                  <a href="#advantages" className={activeSection === 'advantages' ? 'active' : ''}>Преимущества</a>
                </li>
                <li>
                  <a href="#partners" className={activeSection === 'partners' ? 'active' : ''}>Как мы работаем</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          {children} 
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
