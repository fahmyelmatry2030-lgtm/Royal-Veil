import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ShoppingBag, Star, Sparkles, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 101, title: 'فستان زفاف ملكي مطرز', price: '3200$', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800' },
  { id: 102, title: 'فستان سهرة زمردي فاخر', price: '1450$', discount: 10, img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800' },
  { id: 103, title: 'ثوب تراثي عصري مطرز', price: '450$', img: 'https://images.unsplash.com/photo-1582533089852-0243ed27bbd8?auto=format&fit=crop&q=80&w=800' },
  { id: 104, title: 'فستان مخمل أسود كلاسيكي', price: '1100$', img: 'https://images.unsplash.com/photo-1572804013307-a9a11efbb185?auto=format&fit=crop&q=80&w=800' },
];

const Home = () => {
  return (
    <div style={{ direction: 'rtl', background: 'transparent' }}>
      <Helmet>
        <title>Royal Veil | الرئيسية - عالم الأزياء الراقية</title>
      </Helmet>

      {/* ─── Hero Section ─── */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1920" 
            alt="Main Hero" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(to bottom, rgba(93, 62, 139, 0.2), rgba(93, 62, 139, 0.6))' 
          }}></div>
        </div>

        {/* Geometric Frame Decoration (Inspired by User Image) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          height: '85%',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          pointerEvents: 'none',
          zIndex: 2
        }}>
          <div style={{ position: 'absolute', top: '-10px', left: '-10px', width: '40px', height: '40px', borderTop: '2px solid var(--accent-gold)', borderLeft: '2px solid var(--accent-gold)' }} />
          <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '40px', height: '40px', borderBottom: '2px solid var(--accent-gold)', borderRight: '2px solid var(--accent-gold)' }} />
        </div>

        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{ maxWidth: '800px', textAlign: 'center' }}
          >
            <h5 style={{ 
              color: 'var(--accent-gold)', fontWeight: '900', letterSpacing: '8px', 
              textTransform: 'uppercase', fontSize: '12px', marginBottom: '1.5rem' 
            }}>Haute Couture 2024</h5>
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '900', 
              lineHeight: 1, marginBottom: '2rem', fontFamily: 'var(--font-serif), serif', color: 'var(--bg-white)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              ROYAL VEIL
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--bg-lavender)', marginBottom: '3rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 3.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              نحول التراث الفلسطيني إلى أيقونات عصرية تخطف الأنظار، بأيدي أمهر الحرفيات والمصممين.
            </p>
            <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
              <Link to="/shop" className="btn-premium" style={{ padding: '20px 60px' }}>استكشفي المجموعة</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Scrolling Marquee ─── */}
      <div style={{ 
        background: 'var(--primary-purple)', color: 'var(--accent-gold)', padding: '15px 0', overflow: 'hidden', whiteSpace: 'nowrap',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          style={{ display: 'inline-block', fontSize: '12px', fontWeight: '900', letterSpacing: '4px' }}
        >
          NEW ARRIVALS • PALESTINIAN COUTURE • HANDMADE LUXURY • ROYAL VEIL SELECTION • 
          NEW ARRIVALS • PALESTINIAN COUTURE • HANDMADE LUXURY • ROYAL VEIL SELECTION • 
        </motion.div>
      </div>

      {/* ─── Shop by Category ─── */}
      <section style={{ padding: '12rem 0' }}>
        <div className="container">
          <SectionHeader 
            badge="Selection" 
            title="عوالمنا الإبداعية" 
            subtitle="كل قسم يروي قصة مختلفة من التميز والجمال"
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem' 
          }}>
            {[
              { title: 'فساتين السهرة', desc: 'Elegant & Sophisticated', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800', link: '/dresses' },
              { title: 'التطريز التراثي', desc: 'Handcrafted Heritage', img: 'https://images.unsplash.com/photo-1582533089852-0243ed27bbd8?auto=format&fit=crop&q=80&w=800', link: '/heritage' },
              { title: 'منتجات الأطفال', desc: 'Soft & Gentle Care', img: 'https://images.unsplash.com/photo-1519706347221-f090d81c8412?auto=format&fit=crop&q=80&w=800', link: '/baby' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                style={{ position: 'relative', height: '650px', overflow: 'hidden', borderRadius: '2px' }}
              >
                <Link to={cat.link} style={{ display: 'block', height: '100%', textDecoration: 'none' }} className="group">
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)' }} className="group-hover:scale-110" />
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)', 
                    display: 'flex', alignItems: 'flex-end', padding: '3.5rem' 
                  }}>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <h3 style={{ color: '#fff', fontSize: '32px', fontWeight: '900', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>{cat.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '700' }}>{cat.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
             <SectionHeader badge="Trending" title="الأكثر رواجاً هذا الموسم" right />
             <Link to="/shop" style={{ color: 'var(--primary-purple)', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', paddingBottom: '10px', textDecoration: 'none' }}>اكتشفي المزيد <ArrowLeft size={16} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Luxury Experience (Geometric Overlay) ─── */}
      <section style={{ padding: '12rem 0', background: 'var(--bg-cream)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8rem', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                 {/* Geometric Frames like User Image */}
                 <div style={{ 
                   position: 'absolute', top: '-30px', right: '-30px', bottom: '-30px', left: '-30px',
                   border: '1px solid rgba(212, 175, 55, 0.3)', zIndex: 0
                 }} />
                 <div style={{ 
                   position: 'absolute', top: '-15px', right: '-15px', bottom: '-15px', left: '-15px',
                   border: '1px solid rgba(212, 175, 55, 0.4)', zIndex: 0, transform: 'rotate(2deg)'
                 }} />
                 
                 <img 
                   src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
                   alt="Workshop" 
                   style={{ width: '100%', borderRadius: '2px', position: 'relative', zIndex: 1 }}
                 />
              </div>
              <div>
                 <SectionHeader badge="Artistry" title="إتقان يتجاوز الزمن" right />
                 <p style={{ color: '#666', lineHeight: '2.2', fontSize: '17px', marginBottom: '2.5rem' }}>
                    نحن في رويال فيل نؤمن أن الجمال الحقيقي يكمن في البساطة المتقنة. كل غرزة، كل قطعة قماش، وكل نقش يتم اختياره بعناية فائقة لنضمن لكِ تجربة استثنائية تشبه تماماً ما تحلمين به.
                 </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '35px' }}>
                    <div style={{ paddingRight: '25px', borderRight: '2px solid var(--accent-gold)' }}>
                       <h4 style={{ fontWeight: '900', fontSize: '18px', marginBottom: '5px', fontFamily: 'var(--font-serif)', color: 'var(--primary-purple)' }}>100% صناعة يدوية</h4>
                       <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>نعتمد كلياً على المهارات الحرفية الفلسطينية الأصيلة.</p>
                    </div>
                    <div style={{ paddingRight: '25px', borderRight: '2px solid var(--border-light)' }}>
                       <h4 style={{ fontWeight: '900', fontSize: '18px', marginBottom: '5px', fontFamily: 'var(--font-serif)', color: 'var(--primary-purple)' }}>خامات عالمية</h4>
                       <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>نستورد أفضل الخامات من تركيا وإيطاليا وفرنسا.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ─── Social Feed ─── */}
      <section style={{ padding: '6rem 0', background: 'var(--purple-dark)', color: 'var(--text-light)' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '900', fontFamily: 'var(--font-serif)', color: 'var(--bg-white)' }}>شاركِينا لحظاتكِ</h3>
                <p style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', fontSize: '12px' }}>#ROYAL_VEIL_STYLE</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <Link to="/contact" style={{ color: 'var(--bg-white)', textDecoration: 'none', border: '1px solid var(--bg-white)', padding: '12px 30px', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>انضمي إلينا</Link>
              </div>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden' }} className="group">
                   <img 
                    src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&sig=${i+10}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s' }} 
                    className="group-hover:scale-110 group-hover:brightness-50"
                   />
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
