import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, FileText, Users, Scale, Info as InfoIcon, Home } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/', icon: <Home size={18} /> },
    { name: 'Perangkat Ajar', path: '/perangkat', icon: <BookOpen size={18} /> },
    { name: 'Artikel', path: '/artikel', icon: <FileText size={18} /> },
    { name: 'Regulasi', path: '/regulasi', icon: <Scale size={18} /> },
    { name: 'Info Pendidikan', path: '/info', icon: <InfoIcon size={18} /> },
    { name: 'Forum Guru', path: '/forum', icon: <Users size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = '/'}>
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 tracking-tight leading-none">MIFTAHSIDIK99</h1>
                <p className="text-xs text-slate-500 font-medium">Mitra Pendidik SD/MI</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <BookOpen size={24} />
                <span className="text-xl font-bold">MIFTAHSIDIK99</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                Platform edukasi terpadu untuk Guru SD/MI. Menyediakan perangkat ajar,
                informasi terkini, dan ruang kolaborasi untuk memajukan pendidikan dasar di Indonesia.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Navigasi</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/" className="hover:text-primary-400 transition">Beranda</NavLink></li>
                <li><NavLink to="/perangkat" className="hover:text-primary-400 transition">Perangkat Pembelajaran</NavLink></li>
                <li><NavLink to="/artikel" className="hover:text-primary-400 transition">Artikel Pendidikan</NavLink></li>
                <li><NavLink to="/regulasi" className="hover:text-primary-400 transition">Regulasi & Kebijakan</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span>email@miftahsidik99.com</span>
                </li>
                <li>Senin - Jumat: 08.00 - 16.00 WIB</li>
                <li className="mt-4">
                    <span className="inline-block bg-slate-800 px-3 py-1 rounded-full text-xs border border-slate-700">Versi 1.0.0 (Beta)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} MIFTAHSIDIK99. Hak Cipta Dilindungi. Dikembangkan untuk Pendidikan Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;