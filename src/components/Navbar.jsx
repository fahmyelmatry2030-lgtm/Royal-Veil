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
        background: 'var(--primary-purple)',
        color: 'var(--text-light)',
        fontSize: '11px',
        textAlign: 'center',
        padding: '10px 0',
        fontWeight: '600',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 110,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        شحن مجاني للطلبات أكثر من 200$ • كود الخصم: <span style={{ color: 'var(--accent-gold)' }}>ROYAL20</span>
      </div>

      {/* ─── Main Bar ─── */}
      <header
        style={{
          position: 'fixed',
          top: 35, // Height of promo bar
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: solid ? 'rgba(35, 23, 56, 0.95)' : 'transparent',
          backdropFilter: solid ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
          borderBottom: solid ? '1px solid var(--border-light)' : '1px solid rgba(255,255,255,0.1)',
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
            height: scrolled ? '70px' : '90px',
            direction: 'rtl',
            transition: 'height 0.4s',
          }}
        >
          {/* Right: Search & Language */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }} className="hidden lg:flex">
             <button style={{ color: solid ? 'var(--text-dark)' : '#fff', transition: 'color 0.3s' }}><Search size={20} strokeWidth={1.5} /></button>
             <span style={{ fontSize: '12px', fontWeight: 'bold', color: solid ? 'var(--text-dark)' : '#fff' }}>AR | EN</span>
          </div>

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
              fontSize: '32px',
              letterSpacing: '0.2em',
              color: solid ? 'var(--accent-gold)' : '#fff',
              transition: 'all 0.3s',
              fontFamily: 'var(--font-serif), serif',
              marginBottom: '-6px',
              textShadow: !solid ? '0 2px 10px rgba(0,0,0,0.2)' : 'none'
            }}>
              ROYAL VEIL
            </div>
            <div style={{ 
              fontSize: '10px', 
              letterSpacing: '0.5em', 
              color: 'var(--accent-gold)', 
              textTransform: 'uppercase',
              fontWeight: '900'
            }}>
              EST. 2024
            </div>
          </Link>

          {/* Left: Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'flex-end' }}>
            <div className="hidden lg:flex items-center gap-6 mr-6">
               <button style={{ color: solid ? 'var(--text-dark)' : '#fff' }}><User size={20} strokeWidth={1.5} /></button>
               <button style={{ color: solid ? 'var(--text-dark)' : '#fff' }}><Heart size={20} strokeWidth={1.5} /></button>
            </div>
            <Link
              to="/shop"
              style={{
                position: 'relative',
                color: solid ? 'var(--text-dark)' : '#fff',
              }}
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-8px',
                background: 'var(--accent-gold)',
                color: '#fff',
                fontSize: '9px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}>0</span>
            </Link>
            
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: solid ? 'var(--text-dark)' : '#fff',
                display: 'flex', alignItems: 'center',
              }}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* ─── Bottom Nav Bar (Desktop Only) ─── */}
        <div style={{
          borderTop: scrolled ? 'none' : 'none',
          display: 'none',
          justifyContent: 'center',
          paddingBottom: '12px',
          background: solid ? 'var(--bg-white)' : 'transparent',
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
                    color: active(l.path) ? 'var(--accent-gold)' : solid ? 'var(--text-dark)' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    paddingBottom: '4px',
                    borderBottom: active(l.path) ? '2px solid var(--accent-gold)' : '2px solid transparent'
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
                    color: moreActive ? 'var(--accent-gold)' : solid ? 'var(--text-dark)' : 'rgba(255,255,255,0.9)',
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
                        background: 'var(--bg-white)', boxShadow: 'var(--shadow-md)',
                        padding: '10px 0', zIndex: 120, border: '1px solid var(--border-light)',
                        borderRadius: '8px'
                      }}
                    >
                      {moreLinks.map(l => (
                        <Link 
                          key={l.path} 
                          to={l.path}
                          style={{
                            display: 'block', padding: '10px 20px', fontSize: '12px',
                            color: active(l.path) ? 'var(--accent-gold)' : 'var(--text-dark)', textDecoration: 'none',
                            fontWeight: '600', transition: 'background 0.2s'
                          }}
                          className="hover:bg-purple-900"
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

      {/* ─── Mobile Menu Overlay Backdrop ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 150,
              backdropFilter: 'blur(2px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* ─── Mobile Menu Drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: '300px',
              maxWidth: '80vw',
              background: 'var(--bg-white)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              direction: 'rtl',
              overflowY: 'auto',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Drawer Header */}
            <div style={{
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-light)',
            }}>
              <span style={{ fontWeight: '900', letterSpacing: '2px', color: 'var(--accent-gold)', fontSize: '18px', fontFamily: 'var(--font-serif)' }}>ROYAL VEIL</span>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark)', padding: '5px' }}>
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Drawer Links */}
            <nav style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
               {[...navLinks, ...moreLinks].map(l => (
                 <Link 
                   key={l.path} 
                   to={l.path}
                   onClick={() => setMobileOpen(false)}
                   style={{
                     fontSize: '16px', fontWeight: active(l.path) ? '900' : '700',
                     color: active(l.path) ? 'var(--accent-gold)' : 'var(--text-dark)',
                     textDecoration: 'none',
                     padding: '14px 0',
                     borderBottom: '1px solid var(--border-light)',
                     display: 'flex',
                     alignItems: 'center',
                     gap: '10px',
                     transition: 'color 0.2s',
                   }}
                 >
                   {active(l.path) && <div style={{ width: '3px', height: '18px', background: 'var(--accent-gold)', borderRadius: '2px' }}></div>}
                   {l.name}
                 </Link>
               ))}
            </nav>

            {/* Drawer Footer */}
            <div style={{ marginTop: 'auto', padding: '1.5rem', background: 'var(--bg-lavender)', borderTop: '1px solid var(--border-light)' }}>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '1rem' }}>
                  <User size={20} style={{ color: 'var(--accent-gold)', cursor: 'pointer' }} />
                  <Heart size={20} style={{ color: 'var(--accent-gold)', cursor: 'pointer' }} />
                  <Search size={20} style={{ color: 'var(--accent-gold)', cursor: 'pointer' }} />
               </div>
               <p style={{ textAlign: 'center', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '1px' }}>© 2024 ROYAL VEIL COUTURE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacing for fixed header */}
      <div style={{ height: scrolled ? '105px' : '125px' }}></div>
    </>
  );
}
