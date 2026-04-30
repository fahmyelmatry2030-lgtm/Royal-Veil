import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Sparkles, Quote, Play, Crown, Scissors, Gem, ChevronLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  { id: 101, title: 'فستان زفاف ملكي بدانتيل مطرز', price: '3200 شيكل', img: '/Images/IMG-20260429-WA0025.jpg' },
  { id: 102, title: 'فستان سهرة "زمرد" بالكريستال الفاخر', price: '1450 شيكل', discount: 10, img: '/Images/IMG-20260429-WA0022.jpg' },
  { id: 103, title: 'عباءة "الأندلس" بتطريز ذهبي', price: '450 شيكل', img: '/Images/IMG-20260429-WA0023.jpg' },
  { id: 104, title: 'فستان سهرة مطرز بخيوط الحرير والخرز', price: '1100 شيكل', img: '/Images/IMG-20260429-WA0021.jpg' },
];

const Home = () => {
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية التعاونية | الرئيسية - عالم الأزياء الراقية</title>
      </Helmet>

      {/* ─── Cinematic Hero Section ─── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '850px', overflow: 'hidden' }}>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img 
            src="/royal_veil_hero_banner_1777543465352.png" 
            alt="Royal Veil Collection" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)' 
          }}></div>
        </motion.div>

        {/* Decorative Framing */}
        <div style={{ position: 'absolute', top: '15%', right: '8%', width: '1px', height: '20vh', background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' }}></div>
        <div style={{ position: 'absolute', bottom: '15%', left: '8%', width: '20vw', height: '1px', background: 'linear-gradient(to right, var(--accent-gold), transparent)' }}></div>

        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', paddingTop: '10vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
              <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }}></div>
              <h5 style={{ 
                color: 'var(--accent-gold)', fontWeight: '800',
                textTransform: 'uppercase', fontSize: '15px', margin: 0, fontFamily: 'var(--font-sans)'
              }}>المجموعة الحصرية ٢٠٢٤</h5>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: '900', 
              lineHeight: 1.1, marginBottom: '2.5rem', fontFamily: 'var(--font-sans)', color: 'var(--text-dark)',
              textShadow: '2px 2px 30px rgba(255,255,255,0.8)'
            }}>
              تُصاغ الأناقة<br/>بخيوطٍ من ذهب
            </h1>
            
            <p style={{ 
              fontSize: '20px', color: 'var(--text-dark)', marginBottom: '4rem', 
              lineHeight: 1.8, maxWidth: '600px', fontWeight: '600', letterSpacing: '0.5px',
              textShadow: '1px 1px 20px rgba(255,255,255,0.5)'
            }}>
              في "جمعية الطرحة الملكية التعاونية"، نروي قصة جمالكِ من خلال تصاميم هوت كوتور استثنائية، تمزج بين عراقة التطريز الفلسطيني الأصيل وفخامة القصّات العالمية المعاصرة.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/shop" style={{ 
                background: 'var(--accent-gold)', color: '#000', padding: '20px 50px', fontSize: '15px', 
                fontWeight: '800', borderRadius: '2px', textDecoration: 'none', transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', gap: '10px'
              }} className="hover:bg-white hover:scale-105">
                استكشفي الروائع <ChevronLeft size={18} />
              </Link>
              <Link to="/custom-order" style={{ 
                padding: '20px 50px', fontSize: '15px', color: 'var(--text-light)', 
                border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '2px',
                display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(10px)',
                textDecoration: 'none', transition: 'all 0.3s'
              }} className="hover:bg-white hover:text-purple-900 hover:border-white">
                <Play size={18} fill="currentColor" /> تجربة التفصيل الخاص
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 1. The Collections (مجموعات) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader 
            badge="The Collections" 
            title="مجموعاتنا المتميزة" 
            subtitle="اكتشفي التشكيلات المصممة بعناية لترافقكِ في كل مناسباتكِ السعيدة."
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {[
              { title: 'فساتين', img: '/Images/IMG-20260429-WA0036.jpg', link: '/dresses' },
              { title: 'بلوزات', img: '/Images/IMG-20260429-WA0023.jpg', link: '/shop' },
              { title: 'بيبي', img: '/Images/IMG-20260429-WA0035.jpg', link: '/baby' },
              { title: 'تفصيل خاص', img: '/Images/IMG-20260429-WA0021.jpg', link: '/custom-order' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <Link to={cat.link} style={{ display: 'block', textDecoration: 'none', marginBottom: '20px' }}>
                  <div style={{ 
                    height: '350px', borderRadius: '2px', overflow: 'hidden', 
                    boxShadow: 'var(--shadow-md)', marginBottom: '20px',
                    border: '1px solid var(--border-light)'
                  }}>
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="hover:scale-105" />
                  </div>
                  <h3 style={{ color: 'var(--text-dark)', fontSize: '20px', fontWeight: '900', fontFamily: 'var(--font-serif)' }}>{cat.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. Featured Products (منتجات متميزة) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '20px' }}>
             <SectionHeader badge="Exclusive" title="منتجات متميزة" subtitle="القطع الأكثر طلباً التي خطفت قلوب عميلاتنا هذا الموسم." right style={{ marginBottom: 0 }} />
             <Link to="/shop" style={{ color: 'var(--primary-purple)', fontWeight: '800', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', paddingBottom: '15px' }}>
               كل المنتجات <ArrowLeft size={18} />
             </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
            {featuredProducts.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
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
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '14px', letterSpacing: '4px', fontWeight: '800', textTransform: 'uppercase', margin: 0 }}>جمعية الطرحة الملكية التعاونية</h4>
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
              <img src="/Images/IMG-20260429-WA0031.jpg" alt="About Us" style={{ width: '100%', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }} />
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
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', letterSpacing: '2px' }}>
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
             <Link to="/shop" style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', paddingBottom: '15px' }} className="hover:text-white transition-colors">
               عرض المجموعة كاملة <ArrowLeft size={18} />
             </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
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
                <p style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', fontSize: '13px' }}>@ROYALVEIL.COUTURE</p>
              </div>
              <div>
                <a href="#" style={{ color: 'var(--text-dark)', textDecoration: 'none', border: '1px solid var(--border-light)', padding: '14px 35px', fontSize: '13px', fontWeight: '800', letterSpacing: '1px', borderRadius: '50px', transition: 'all 0.3s' }} className="hover:bg-purple-900 hover:text-white hover:border-purple-900">
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
