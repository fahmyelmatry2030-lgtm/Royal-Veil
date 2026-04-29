import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Heart, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'من نحن', path: '/about' },
  { name: 'فساتين', path: '/dresses' },
  { name: 'التراث', path: '/heritage' },
  { name: 'تواصل معنا', path: '/contact' },
];

const moreLinks = [
  { name: 'تطريز البلايز', path: '/embroidery' },
  { name: 'منتجات بيبي', path: '/baby' },
  { name: 'التفصيل', path: '/custom' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const fn = (e) => { if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const active = (p) => pathname === p;
  const moreActive = moreLinks.some((l) => pathname === l.path);

  return (
    <>
      {/* ─── Promo Bar ─── */}
      <div style={{
        background: '#fff',
        color: '#000',
        fontSize: '11px',
        textAlign: 'center',
        padding: '8px 0',
        fontWeight: '600',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 110,
        borderBottom: '1px solid #f0f0f0'
      }}>
        شحن مجاني للطلبات أكثر من 200$ • كود الخصم: <span style={{ color: '#D4AF37' }}>ROYAL20</span>
      </div>

      {/* ─── Main Bar ─── */}
      <header
        style={{
          position: 'fixed',
          top: 27, // Height of promo bar
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: solid ? '#fff' : 'transparent',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.05)' : 'none',
          borderBottom: solid ? '1px solid #f0f0f0' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '64px' : '80px',
            direction: 'rtl',
            transition: 'height 0.4s',
          }}
        >
          {/* Right: Search & Language */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }} className="hidden lg:flex">
             <button style={{ color: solid ? '#000' : '#fff', transition: 'color 0.3s' }}><Search size={20} strokeWidth={1.5} /></button>
             <span style={{ fontSize: '12px', fontWeight: 'bold', color: solid ? '#000' : '#fff' }}>AR | EN</span>
          </div>

          {/* Center: Logo */}
          <Link
            to="/"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textDecoration: 'none',
              flex: 1
            }}
          >
            <div style={{
              fontWeight: '900',
              fontSize: '24px',
              letterSpacing: '0.25em',
              color: solid ? '#000' : '#fff',
              transition: 'color 0.3s',
              fontFamily: 'serif',
              marginBottom: '-4px'
            }}>
              ROYAL VEIL
            </div>
            <div style={{ 
              fontSize: '8px', 
              letterSpacing: '0.4em', 
              color: '#D4AF37', 
              textTransform: 'uppercase',
              fontWeight: '700'
            }}>
              Palestinian Couture
            </div>
          </Link>

          {/* Left: Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'flex-end' }}>
            <div className="hidden lg:flex items-center gap-6 mr-6">
               <button style={{ color: solid ? '#000' : '#fff' }}><User size={20} strokeWidth={1.5} /></button>
               <button style={{ color: solid ? '#000' : '#fff' }}><Heart size={20} strokeWidth={1.5} /></button>
            </div>
            <Link
              to="/shop"
              style={{
                position: 'relative',
                color: solid ? '#000' : '#fff',
              }}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-8px',
                background: '#D4AF37',
                color: '#fff',
                fontSize: '9px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>0</span>
            </Link>
            
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: solid ? '#000' : '#fff',
                display: 'flex', alignItems: 'center',
              }}
              className="lg:hidden"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* ─── Bottom Nav Bar (Desktop Only) ─── */}
        <div style={{
          borderTop: scrolled ? 'none' : 'none',
          display: 'none',
          justifyContent: 'center',
          paddingBottom: '12px',
          background: solid ? '#fff' : 'transparent',
          transition: 'all 0.3s'
        }} className="lg:flex">
           <nav style={{ display: 'flex', gap: '30px' }}>
              {navLinks.map((l) => (
                <Link 
                  key={l.path} 
                  to={l.path} 
                  style={{
                    fontSize: '12px',
                    fontWeight: active(l.path) ? '800' : '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: active(l.path) ? '#D4AF37' : solid ? '#222' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    paddingBottom: '4px',
                    borderBottom: active(l.path) ? '2px solid #D4AF37' : '2px solid transparent'
                  }}
                >
                  {l.name}
                </Link>
              ))}
              {/* More Trigger */}
              <div ref={moreRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  style={{
                    fontSize: '12px',
                    fontWeight: moreActive ? '800' : '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: moreActive ? '#D4AF37' : solid ? '#222' : 'rgba(255,255,255,0.9)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  المزيد <ChevronDown size={12} />
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      style={{
                        position: 'absolute', top: '100%', right: 0, minWidth: '180px',
                        background: '#fff', boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                        padding: '10px 0', zIndex: 120, border: '1px solid #eee'
                      }}
                    >
                      {moreLinks.map(l => (
                        <Link 
                          key={l.path} 
                          to={l.path}
                          style={{
                            display: 'block', padding: '10px 20px', fontSize: '12px',
                            color: active(l.path) ? '#D4AF37' : '#222', textDecoration: 'none',
                            fontWeight: '600', transition: 'background 0.2s'
                          }}
                          className="hover:bg-gray-50"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
           </nav>
        </div>
      </header>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, background: '#fff', zIndex: 200,
              display: 'flex', flexDirection: 'column', direction: 'rtl'
            }}
          >
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <span style={{ fontWeight: '900', letterSpacing: '2px' }}>ROYAL VEIL</span>
               <button onClick={() => setMobileOpen(false)}><X size={30} /></button>
            </div>
            
            <nav style={{ padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               {[...navLinks, ...moreLinks].map(l => (
                 <Link 
                   key={l.path} 
                   to={l.path}
                   style={{
                     fontSize: '20px', fontWeight: '700', color: active(l.path) ? '#D4AF37' : '#000',
                     textDecoration: 'none', textTransform: 'uppercase'
                   }}
                 >
                   {l.name}
                 </Link>
               ))}
            </nav>

            <div style={{ marginTop: 'auto', padding: '2rem', borderTop: '1px solid #eee' }}>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '2rem' }}>
                  <User size={24} />
                  <Heart size={24} />
                  <Search size={24} />
               </div>
               <p style={{ textAlign: 'center', fontSize: '12px', color: '#888' }}>© 2024 ROYAL VEIL COUTURE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacing for fixed header */}
      <div style={{ height: scrolled ? '100px' : '110px' }}></div>
    </>
  );
}
