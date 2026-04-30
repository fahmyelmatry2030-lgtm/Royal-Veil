import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Sparkles, Quote, Play, Crown, Scissors, Gem, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 101, title: 'فستان سهرة ملكي مرصع', price: '3500 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.19 PM (7).jpeg' },
  { id: 102, title: 'طقم تفصيل خاص مطرز', price: '2800 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.16 PM.jpeg' },
  { id: 103, title: 'فستان مخمل أسود فاخر', price: '3200 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.14 PM.jpeg' },
  { id: 104, title: 'عباءة مطرزة يدوياً', price: '1900 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.17 PM (8).jpeg' },
  { id: 105, title: 'فستان سهرة "أوركيد"', price: '2400 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.15 PM.jpeg' },
  { id: 106, title: 'طقم كاجوال راقي', price: '1200 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.17 PM (1).jpeg' },
  { id: 107, title: 'فستان زفاف دانتيل', price: '5500 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.18 PM (2).jpeg' },
  { id: 108, title: 'فستان حفلات "غزل"', price: '2100 شيكل', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.19 PM (3).jpeg' },
];

const Home = () => {
  const collectionsRef = React.useRef(null);
  const productsRef = React.useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 350;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية التعاونية | الرئيسية - عالم الأزياء الراقية</title>
      </Helmet>

      {/* ─── Luxury Full-Width Hero Section (Marya Secret Inspired) ─── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '800px', overflow: 'hidden' }}>
        
        {/* Full Banner Image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img 
            src="/royal_veil_boutique_hero.png" 
            alt="Royal Veil Campaign" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          {/* Very Subtle Gradient Overlay */}
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(to left, rgba(0, 0, 0, 0.4) 0%, transparent 50%)' 
          }}></div>
        </div>

        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '700px', paddingRight: '2rem', textAlign: 'right', marginRight: '0', marginLeft: 'auto' }}>
            
            {/* The Calligraphic Title with Soft Glow */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              style={{ 
                fontSize: 'clamp(3.5rem, 9vw, 6rem)', 
                fontFamily: 'var(--font-calligraphy)', 
                color: '#fff', 
                lineHeight: 1.2, 
                marginBottom: '1rem',
                textShadow: '0 0 40px rgba(177, 156, 217, 0.6), 0 4px 10px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
              }}
            >
              تألقي بسحر<br/>
              تراثكِ الأصيل
            </motion.h1>

            {/* The Small Subtle Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Link to="/shop" style={{ 
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                padding: '10px 35px',
                fontSize: '14px',
                fontWeight: '700',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
                marginTop: '1.5rem',
                transition: 'all 0.3s'
              }} className="hover:bg-white hover:text-purple-900">
                تسوقي الآن
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 1. The Collections (Horizontal Slider) ─── */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader 
            badge="The Collections" 
            title="مجموعاتنا المتميزة" 
            subtitle="اكتشفي التشكيلات المصممة بعناية لترافقكِ في كل مناسباتكِ السعيدة."
          />
          
          <div 
            ref={collectionsRef}
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
              overflowX: 'auto', 
              gap: '2rem', 
              paddingBottom: '2rem',
              paddingRight: '1.5rem',
              paddingLeft: '1.5rem',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory'
            }} className="hide-scrollbar">
            {[
              { title: 'فساتين', img: '/Images/collection_dresses.png', link: '/dresses' },
              { title: 'بلوزات', img: '/Images/collection_blouses.png', link: '/shop' },
              { title: 'بيبي', img: '/Images/collection_baby.png', link: '/baby' },
              { title: 'تفصيل خاص', img: '/Images/collection_custom.png', link: '/custom-order' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ flex: '0 0 180px', scrollSnapAlign: 'start' }}
              >
                <Link to={cat.link} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ 
                    height: '260px', borderRadius: '2px', overflow: 'hidden', 
                    boxShadow: 'var(--shadow-md)', marginBottom: '1rem',
                    background: '#f8f8f8'
                  }}>
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ color: 'var(--text-dark)', fontSize: '15px', fontWeight: '800', textAlign: 'center' }}>{cat.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows for Collections */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginTop: '2rem' }}>
            <button 
              onClick={() => scroll(collectionsRef, 'right')} 
              style={{ 
                background: 'var(--bg-lavender)', border: '1px solid var(--border-light)', 
                borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }} className="hover:bg-purple-100">
              <ChevronRight size={22} />
            </button>
            <span style={{ fontSize: '15px', color: 'var(--purple-dark)', fontWeight: '700', fontFamily: 'var(--font-serif-ar)' }}>مجموعاتنا المتميزة</span>
            <button 
              onClick={() => scroll(collectionsRef, 'left')} 
              style={{ 
                background: 'var(--bg-lavender)', border: '1px solid var(--border-light)', 
                borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
              }} className="hover:bg-purple-100">
              <ChevronLeft size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. Featured Products (Horizontal Slider - Marya Style) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader badge="Exclusive" title="منتجات متميزة" subtitle="القطع الأكثر طلباً التي خطفت قلوب عميلاتنا هذا الموسم." />
          
          <div 
            ref={productsRef}
            style={{ 
              display: 'flex', 
              overflowX: 'auto', 
              gap: '2rem', 
              paddingBottom: '4rem',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory'
            }} className="hide-scrollbar">
            {featuredProducts.map((p, i) => (
              <div key={p.id} style={{ flex: '0 0 250px', scrollSnapAlign: 'start' }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows for Products */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginBottom: '4rem' }}>
            <button 
              onClick={() => scroll(productsRef, 'right')} 
              style={{ 
                background: '#fff', border: '1px solid var(--border-light)', 
                borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }} className="hover:scale-110">
              <ChevronRight size={22} />
            </button>
            <span style={{ fontSize: '15px', color: 'var(--purple-dark)', fontWeight: '700', fontFamily: 'var(--font-serif-ar)' }}>استكشفي المزيد</span>
            <button 
              onClick={() => scroll(productsRef, 'left')} 
              style={{ 
                background: '#fff', border: '1px solid var(--border-light)', 
                borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }} className="hover:scale-110">
              <ChevronLeft size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/shop" style={{ 
              background: '#fff', 
              color: 'var(--primary-purple)', 
              padding: '12px 40px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: '800', 
              fontSize: '14px',
              border: '1px solid var(--primary-purple)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              transition: 'all 0.3s'
            }} className="hover:bg-primary-purple hover:text-white">
              عرض الكل
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. About Us (من نحن) ─── */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Sparkles size={20} color="var(--accent-gold)" />
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', margin: 0 }}>جمعية الطرحة الملكية التعاونية</h4>
              </div>
              <h2 style={{ fontSize: '46px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '35px', fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>
                من نحن
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2.1', fontSize: '17px', marginBottom: '40px' }}>
                نحن جمعية تعاونية رائدة تسعى لتمكين الحرفيات المحليات ودمج الفن الفلسطيني التقليدي بالذوق العالمي المعاصر. رسالتنا هي الحفاظ على هويتنا من خلال صناعة قطع فنية خالدة تحكي قصصاً من المجد والجمال لكل امرأة تطمح للتميز.
              </p>
              <Link to="/about" style={{ color: 'var(--primary-purple)', fontWeight: '800', textDecoration: 'none', borderBottom: '2px solid var(--primary-purple)', paddingBottom: '5px' }}>
                التفاصيل الكاملة
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <img src="/Images/new_sewing.jpg" alt="About Us" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. Association Activities (نشاطات الجمعية) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="Activities" 
            title="نشاطات الجمعية" 
            subtitle="نساهم في بناء المجتمع وتطوير مهارات الحرفيات من خلال فعالياتنا المستمرة."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'ورش عمل التطريز', desc: 'دورات تدريبية مكثفة لتعليم أصول التطريز اليدوي للأجيال الجديدة.', icon: <Scissors size={24} /> },
              { title: 'معارض التراث', desc: 'المشاركة في المعارض الدولية والوطنية لنشر الثقافة والزي الفلسطيني.', icon: <Globe size={24} /> },
              { title: 'تمكين المرأة', desc: 'برامج لدعم المبدعات وتوفير فرص عمل مستدامة لهن في مجال الخياطة والتفصيل.', icon: <Star size={24} /> },
            ].map((activity, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--bg-white)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}
              >
                <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>{activity.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '1rem' }}>{activity.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Parallax Banner ─── */}
      <section style={{ 
        position: 'relative', padding: '12rem 0', 
        backgroundImage: 'url(/Images/IMG-20260429-WA0015.jpg)',
        backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(24, 16, 38, 0.85)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Quote color="var(--accent-gold)" size={50} style={{ margin: '0 auto 30px', opacity: 0.5 }} />
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', fontFamily: 'var(--font-serif)', marginBottom: '30px', lineHeight: 1.3 }}>
            "أنتِ لا ترتدين فستاناً، <br/>أنتِ ترتدين قطعة من الفن والتاريخ."
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
            - المؤسس، جمعية الطرحة الملكية التعاونية
          </p>
          <Link to="/custom-order" className="btn-premium" style={{ background: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>اطلبي تصميمك المخصص</Link>
        </div>
      </section>

      {/* ─── Trending Now ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '20px' }}>
             <SectionHeader badge="Trending Now" title="القطع الأكثر طلباً" subtitle="اكتشفي الإبداعات التي خطفت قلوب عميلاتنا هذا الموسم." right style={{ marginBottom: 0 }} />
             <Link to="/shop" style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '15px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', paddingBottom: '15px' }} className="hover:text-white transition-colors">
               عرض المجموعة كاملة <ArrowLeft size={18} />
             </Link>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '1.5rem',
            justifyItems: 'center' 
          }}>
            {featuredProducts.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Royal Club / Newsletter ─── */}
      <section style={{ padding: '6rem 0', background: 'var(--purple-light)' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-lavender)', borderRadius: '16px', padding: '5rem 3rem', textAlign: 'center', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }}></div>
            <h3 style={{ fontSize: '36px', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', marginBottom: '15px' }}>نادي جمعية الطرحة الملكية للأناقة</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.8 }}>
              انضمي إلى قائمتنا البريدية لتكوني أول من يكتشف مجموعاتنا الحصرية، وتحصلي على دعوات خاصة لفعالياتنا وعروضنا السرية.
            </p>
            <form style={{ display: 'flex', maxWidth: '500px', margin: '0 auto', gap: '10px' }} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="أدخلي بريدك الإلكتروني هنا..." style={{ flex: 1, padding: '18px 25px', borderRadius: '4px', border: '1px solid var(--border-light)', background: 'var(--bg-white)', color: 'var(--text-dark)', outline: 'none' }} />
              <button type="submit" style={{ background: 'var(--accent-gold)', color: '#000', padding: '0 30px', fontWeight: '800', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>اشتراك</button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Social Feed ─── */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)', color: 'var(--text-light)' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '900', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '10px' }}>تألقي معنا على انستغرام</h3>
                <p style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '13px' }}>@ROYALVEIL.COUTURE</p>
              </div>
              <div>
                <a href="#" style={{ color: 'var(--text-dark)', textDecoration: 'none', border: '1px solid var(--border-light)', padding: '14px 35px', fontSize: '13px', fontWeight: '800', borderRadius: '50px', transition: 'all 0.3s' }} className="hover:bg-purple-900 hover:text-white hover:border-purple-900">
                  متابعة الصفحة
                </a>
              </div>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
              {[
                '/Images/IMG-20260429-WA0035.jpg',
                '/Images/IMG-20260429-WA0022.jpg',
                '/Images/IMG-20260429-WA0021.jpg',
                '/Images/IMG-20260429-WA0023.jpg',
                '/Images/IMG-20260429-WA0024.jpg',
                '/Images/IMG-20260429-WA0053.jpg',
              ].map((imgSrc, i) => (
                <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', position: 'relative', borderRadius: '8px' }} className="group">
                   <img 
                    src={imgSrc}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} 
                    className="group-hover:scale-110 group-hover:brightness-50"
                    alt="Royal Veil Collection"
                   />
                   <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }} className="group-hover:opacity-100">
                     <Star color="var(--accent-gold)" fill="var(--accent-gold)" size={28} />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
