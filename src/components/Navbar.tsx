import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  ArrowLeft,
} from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Profil Guru', path: '/profil' },
  {
    label: 'Praktik Mengajar',
    path: '/praktik-mengajar',
    children: [
      { label: 'Siklus 1', path: '/praktik-mengajar/siklus/1' },
      { label: 'Siklus 2', path: '/praktik-mengajar/siklus/2' },
      { label: 'Siklus 3', path: '/praktik-mengajar/siklus/3' },
      { label: 'Siklus 4', path: '/praktik-mengajar/siklus/4' },
    ],
  },
  { label: 'Tugas 1', path: '/tugas-1' },
  { label: 'UTS', path: '/uts' },
  { label: 'UAS', path: '/uas' },
  { label: 'Refleksi', path: '/refleksi' },
  { label: 'Dokumentasi', path: '/dokumentasi' },
  { label: 'Kontak', path: '/kontak' },
];

const MAIN_PORTFOLIO_URL =
  'https://irvan-byte.github.io/eportfolio-ppg-irvan/';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <nav className="container-academic">
        <div className="flex items-center justify-between h-16 gap-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center shrink-0">
              <GraduationCap
                className="w-5 h-5 text-white"
                strokeWidth={2.5}
              />
            </div>

            <div className="hidden sm:block leading-tight whitespace-nowrap">
              <div className="text-sm font-bold text-slate-900">
                E-Portfolio PPL
              </div>
              <div className="text-[11px] text-slate-500">
                PPG Informatika
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 min-w-0">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative group shrink-0"
              >
                {item.children ? (
                  <>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-2.5 py-2 rounded-md text-[13px] font-medium whitespace-nowrap transition-colors ${
                          isActive
                            ? 'text-cyan-700 bg-cyan-50'
                            : 'text-slate-600 hover:text-cyan-700 hover:bg-cyan-50'
                        }`
                      }
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                    </NavLink>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full pt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg border border-slate-200 py-1.5 min-w-[180px]">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                                isActive
                                  ? 'text-cyan-700 bg-cyan-50 font-medium'
                                  : 'text-slate-600 hover:text-cyan-700 hover:bg-slate-50'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-2.5 py-2 rounded-md text-[13px] font-medium whitespace-nowrap transition-colors ${
                        isActive
                          ? 'text-cyan-700 bg-cyan-50'
                          : 'text-slate-600 hover:text-cyan-700 hover:bg-cyan-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Back to Main Portfolio */}
            <a
              href={MAIN_PORTFOLIO_URL}
              title="Kembali ke E-Portfolio PPG"
              className="ml-2 shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 transition-colors whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Kembali ke PPG</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container-academic py-3 space-y-0.5">

            {navItems.map((item) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-700 bg-cyan-50'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <div className="ml-4 border-l border-slate-200 pl-2 mt-0.5 space-y-0.5">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive
                              ? 'text-cyan-700 bg-cyan-50'
                              : 'text-slate-500 hover:bg-slate-50'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Back to Main Portfolio - Mobile */}
            <div className="pt-3 mt-2 border-t border-slate-200">
              <a
                href={MAIN_PORTFOLIO_URL}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-white bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke E-Portfolio PPG
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
