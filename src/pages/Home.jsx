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
            background: 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)' 
          }}></div>
        </div>

        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '700px', color: '#fff' }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ height: '2px', background: '#D4AF37', width: '60px', marginBottom: '2rem', transformOrigin: 'right' }}
            />
            <h5 style={{ 
              color: '#D4AF37', fontWeight: '800', letterSpacing: '6px', 
              textTransform: 'uppercase', fontSize: '14px', marginBottom: '1.5rem' 
            }}>Haute Couture 2024</h5>
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: '900', 
              lineHeight: 1, marginBottom: '2rem', fontFamily: 'serif' 
            }}>
              فن <span style={{ color: '#D4AF37' }}>الحكاية</span> <br /> في كل غرزة
            </h1>
            <p style={{ fontSize: '19px', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', lineHeight: 1.7, maxWidth: '550px' }}>
              نحول التراث الفلسطيني إلى أيقونات عصرية تخطف الأنظار، بأيدي أمهر الحرفيات والمصممين.
            </p>
            <div style={{ display: 'flex', gap: '25px' }}>
              <Link to="/shop" className="btn-premium" style={{ padding: '20px 50px' }}>استكشفي المجموعة</Link>
              <Link to="/contact" style={{ 
                borderBottom: '2px solid #fff', color: '#fff', 
                fontWeight: '700', textDecoration: 'none',
                fontSize: '14px', letterSpacing: '2px', paddingBottom: '4px'
              }}>تحدثي معنا</Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Numbers / Decorative */}
        <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: '#fff', opacity: 0.5, fontSize: '12px', letterSpacing: '4px' }}>
          01 / 04 COLLECTION
        </div>
      </section>

      {/* ─── Scrolling Marquee ─── */}
      <div style={{ 
        background: '#000', color: '#fff', padding: '15px 0', overflow: 'hidden', whiteSpace: 'nowrap',
        borderTop: '1px solid #D4AF37', borderBottom: '1px solid #D4AF37'
      }}>
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{ display: 'inline-block', fontSize: '14px', fontWeight: '800', letterSpacing: '4px' }}
        >
          NEW ARRIVALS • PALESTINIAN COUTURE • HANDMADE LUXURY • ROYAL VEIL SELECTION • 
          NEW ARRIVALS • PALESTINIAN COUTURE • HANDMADE LUXURY • ROYAL VEIL SELECTION • 
        </motion.div>
      </div>

      {/* ─── Shop by Category ─── */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <SectionHeader 
            badge="Selection" 
            title="عوالمنا الإبداعية" 
            subtitle="كل قسم يروي قصة مختلفة من التميز والجمال"
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { title: 'فساتين السهرة', desc: 'لأنكِ تستحقين أن تكوني نجمة الليلة', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800', link: '/dresses' },
              { title: 'التطريز التراثي', desc: 'هوية تسكن في تفاصيل الملابس', img: 'https://images.unsplash.com/photo-1582533089852-0243ed27bbd8?auto=format&fit=crop&q=80&w=800', link: '/heritage' },
              { title: 'منتجات الأطفال', desc: 'رقة تليق ببداياتهم الجميلة', img: 'https://images.unsplash.com/photo-1519706347221-f090d81c8412?auto=format&fit=crop&q=80&w=800', link: '/baby' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                style={{ position: 'relative', height: '600px', overflow: 'hidden' }}
              >
                <Link to={cat.link} style={{ display: 'block', height: '100%', textDecoration: 'none' }} className="group">
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' }} className="group-hover:scale-110" />
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', 
                    display: 'flex', alignItems: 'flex-end', padding: '3rem' 
                  }}>
                    <div style={{ width: '100%' }}>
                      <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '900', marginBottom: '10px' }}>{cat.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '20px' }}>{cat.desc}</p>
                      <div style={{ height: '1px', background: '#D4AF37', width: '40px', transition: 'width 0.3s' }} className="group-hover:w-full" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section style={{ padding: '8rem 0', background: '#fafafa', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
             <SectionHeader badge="Trending" title="الأكثر رواجاً هذا الموسم" right />
             <Link to="/shop" style={{ color: '#000', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', paddingBottom: '10px' }}>اكتشفي المزيد <ArrowLeft size={16} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Luxury Experience (Overlapping Layout) ─── */}
      <section style={{ padding: '12rem 0' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                 <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', border: '1px solid #D4AF37', zIndex: 0 }} />
                 <img 
                   src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000" 
                   alt="Workshop" 
                   style={{ width: '100%', borderRadius: '2px', position: 'relative', zIndex: 1, boxShadow: '30px 30px 0 rgba(212,175,55,0.05)' }}
                 />
                 <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', background: '#fff', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', zIndex: 5, maxWidth: '250px' }}>
                    <Quote size={30} style={{ color: '#D4AF37', marginBottom: '15px' }} />
                    <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#666' }}>"كل قطعة هي وعد بالتميز والجودة التي تدوم طويلاً."</p>
                 </div>
              </div>
              <div>
                 <SectionHeader badge="Our Philosophy" title="فلسفة التصميم الراقي" right />
                 <p style={{ color: '#666', lineHeight: '2.2', fontSize: '17px', marginBottom: '2.5rem' }}>
                    في رويال فيل، لا نتبع الموضة فقط، بل نصنعها بلمسة شخصية. نؤمن أن الفخامة تكمن في التفاصيل الصغيرة؛ في جودة الحرير، في دقة الغرزة اليدوية، وفي التوازن بين التراث والحداثة.
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
                    <div style={{ borderRight: '3px solid #D4AF37', paddingRight: '20px' }}>
                       <h4 style={{ fontWeight: '900', fontSize: '20px', marginBottom: '5px' }}>100% صناعة يدوية</h4>
                       <p style={{ fontSize: '14px', color: '#888' }}>نعتمد كلياً على المهارات الحرفية الفلسطينية الأصيلة.</p>
                    </div>
                    <div style={{ borderRight: '3px solid #eee', paddingRight: '20px' }}>
                       <h4 style={{ fontWeight: '900', fontSize: '20px', marginBottom: '5px' }}>أقمشة عالمية</h4>
                       <p style={{ fontSize: '14px', color: '#888' }}>نستورد أفضل الخامات من تركيا وإيطاليا وفرنسا.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ─── Social Feed ─── */}
      <section style={{ padding: '6rem 0', background: '#000', color: '#fff' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '900', fontFamily: 'serif' }}>شاركِينا لحظاتكِ</h3>
                <p style={{ color: '#D4AF37', fontWeight: '700', letterSpacing: '2px' }}>#ROYAL_VEIL_STYLE</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', border: '1px solid #fff', padding: '12px 30px', fontSize: '12px', fontWeight: '700' }}>انضمي إلينا</Link>
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
