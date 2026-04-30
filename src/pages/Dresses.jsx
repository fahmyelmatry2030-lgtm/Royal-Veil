import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, LayoutGrid, List, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, title: 'فستان سهرة مطرز بخيوط الحرير والخرز', price: '1200$', oldPrice: '1500$', discount: 20, img: '/Images/IMG-20260429-WA0021.jpg' },
  { id: 2, title: 'فستان زفاف ملكي بدانتيل مرصع', price: '3500$', img: '/Images/IMG-20260429-WA0025.jpg' },
  { id: 3, title: 'فستان سهرة بالكريستال والأحجار الخضراء', price: '800$', oldPrice: '950$', discount: 15, img: '/Images/IMG-20260429-WA0022.jpg' },
  { id: 4, title: 'فستان زفاف أبيض دانتيل عصري', price: '950$', img: '/Images/IMG-20260429-WA0053.jpg' },
  { id: 5, title: 'فستان سهرة مطرز بخيوط ذهبية ولؤلؤ', price: '1500$', img: '/Images/IMG-20260429-WA0035.jpg' },
  { id: 6, title: 'فستان سهرة كريستال بذيل ملكي', price: '700$', oldPrice: '850$', img: '/Images/IMG-20260429-WA0036.jpg' },
  { id: 7, title: 'فستان زفاف دانتيل أبيض واسع', price: '2800$', img: '/Images/IMG-20260429-WA0039.jpg' },
  { id: 8, title: 'فستان زفاف بطرحة دانتيل طويلة', price: '1100$', img: '/Images/IMG-20260429-WA0037.jpg' },
  { id: 9, title: 'فستان زفاف مطرز بقلب مزين', price: '550$', oldPrice: '650$', img: '/Images/IMG-20260429-WA0038.jpg' },
  { id: 10, title: 'فستان زفاف ستان بطرحة كلاسيكية', price: '3200$', img: '/Images/IMG-20260429-WA0040.jpg' },
];

const Dresses = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('أحدث المنتجات');

  return (
    <div style={{ direction: 'rtl', backgroundColor: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | فساتين السهرة والزفاف - المجموعة الكاملة</title>
      </Helmet>

      <PageHeader
        badge="Luxury Collection"
        title="فساتين السهرة والزفاف"
        subtitle="استكشفي أرقى التصاميم التي تجمع بين الفخامة التركية واللمسة الفلسطينية الأصيلة."
        bgImage="/Images/IMG-20260429-WA0036.jpg"
      />

      {/* Control Bar */}
      <section style={{ 
        borderBottom: '1px solid var(--border-light)', 
        position: 'sticky', 
        top: '68px', 
        background: 'var(--bg-white)', 
        zIndex: 40 
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '12px 2rem' 
        }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setFilterOpen(true)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontWeight: 'bold', 
                fontSize: '14px',
                color: 'var(--text-dark)'
              }}
            >
              <Filter size={18} /> تصفية
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
              عرض: 
              <LayoutGrid size={18} style={{ cursor: 'pointer', color: 'var(--text-dark)' }} />
              <List size={18} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: '600',
              color: 'var(--text-dark)'
            }}>
              ترتيب حسب: <span style={{ color: 'var(--accent-gold)' }}>{sortBy}</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <button style={{
              padding: '16px 60px',
              border: '1px solid #000',
              borderRadius: '2px',
              fontSize: '13px',
              fontWeight: '800',
              letterSpacing: '2px',
              background: 'transparent',
              transition: 'all 0.3s'
            }} className="hover:bg-black hover:text-white">
              LOAD MORE DESIGNS
            </button>
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section style={{ padding: '8rem 0', background: '#000', color: '#fff', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h5 style={{ color: 'var(--accent-gold)', letterSpacing: '4px', fontWeight: '800', fontSize: '12px', marginBottom: '1.5rem' }}>STYLE GUIDE</h5>
            <h2 style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'var(--font-serif)', lineHeight: 1.2, marginBottom: '2rem' }}>كيف تختارين <br /> فستان أحلامكِ؟</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '2', fontSize: '16px', marginBottom: '2.5rem' }}>
              اختيار الفستان المثالي يعتمد على طبيعة المناسبة، شكل القوام، واللون الذي يبرز جمال بشرتكِ. خبراؤنا في رويال فيل مستعدون لمساعدتكِ في كل خطوة.
            </p>
            <Link to="/custom-order" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '10px', 
              color: 'var(--accent-gold)', fontWeight: '900', fontSize: '14px', textDecoration: 'none',
              letterSpacing: '1px'
            }}>احجزي جلسة استشارية <ArrowLeft size={16} /></Link>
          </div>
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', gap: '20px' }}>
             <img src="/Images/IMG-20260429-WA0024.jpg" style={{ width: '45%', height: '500px', objectFit: 'cover', borderRadius: '2px' }} alt="" />
             <img src="/Images/IMG-20260429-WA0025.jpg" style={{ width: '45%', height: '500px', objectFit: 'cover', borderRadius: '2px', marginTop: '60px' }} alt="" />
          </div>
        </div>
      </section>

      {/* Filter Modal Overlay */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, backdropFilter: 'blur(4px)'
              }}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '380px',
                background: 'var(--bg-white)', zIndex: 101, padding: '2rem', direction: 'rtl'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '800' }}>تصفية المنتجات</h2>
                <button onClick={() => setFilterOpen(false)} style={{ fontSize: '24px' }}>&times;</button>
              </div>

              {/* Filter Categories */}
              <div style={{ spaceY: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontWeight: '700', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>الفئة</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {['الكل', 'فساتين سهرة', 'فساتين زفاف', 'فساتين خطوبة', 'فساتين قصيرة'].map(cat => (
                      <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}>
                        <input type="checkbox" style={{ accentcolor: 'var(--accent-gold)' }} /> {cat}
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontWeight: '700', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>السعر</h3>
                  <input type="range" style={{ width: '100%', accentcolor: 'var(--accent-gold)' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '8px' }}>
                    <span>0$</span>
                    <span>5000$</span>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontWeight: '700', marginBottom: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>اللون</h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['#fff', '#000', '#f00', '#00f', '#ffd700', '#c0c0c0'].map(color => (
                      <div key={color} style={{ 
                        width: '24px', height: '24px', borderRadius: '50%', background: color, 
                        border: '1px solid #ddd', cursor: 'pointer' 
                      }} />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <button style={{ 
                  width: '100%', padding: '14px', background: '#222', color: '#fff', 
                  fontWeight: '700', borderRadius: '2px' 
                }}>
                  تطبيق التصفية
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dresses;
