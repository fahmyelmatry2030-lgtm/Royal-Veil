import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Sparkles, Quote, Play, Crown, Scissors, Gem, ChevronLeft } from 'lucide-react';
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
            src="/Images/IMG-20260429-WA0053.jpg" 
            alt="Royal Veil Collection" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(to top, rgba(35, 23, 56, 1) 0%, rgba(35, 23, 56, 0.4) 50%, rgba(0,0,0,0.3) 100%)' 
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
              fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: '900', 
              lineHeight: 1.1, marginBottom: '2.5rem', fontFamily: 'var(--font-sans)', color: 'var(--text-light)',
              textShadow: '0 5px 20px rgba(0,0,0,0.4)'
            }}>
              تُصاغ الأناقة<br/>بخيوطٍ من ذهب
            </h1>
            
            <p style={{ 
              fontSize: '19px', color: 'rgba(255,255,255,0.8)', marginBottom: '4rem', 
              lineHeight: 2, maxWidth: '600px', fontWeight: '400', letterSpacing: '0.5px'
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

      {/* ─── Pillars of Excellence ─── */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-lavender)', position: 'relative', zIndex: 10, marginTop: '-50px', borderRadius: '40px 40px 0 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Crown size={32} />, title: 'تصاميم حصرية', desc: 'كل قطعة نصممها هي لوحة فنية فريدة تعكس شخصيتك، بإصدارات محدودة تضمن لكِ التميز المطلق.' },
              { icon: <Scissors size={32} />, title: 'دقة التفصيل', desc: 'نعتني بأدق التفاصيل من أخذ القياسات وحتى الغرزة الأخيرة، لضمان مظهر يتناغم تماماً مع قوامك.' },
              { icon: <Gem size={32} />, title: 'أقمشة فاخرة', desc: 'ننتقي أجود أنواع الأقمشة الحريرية والمخملية من أعرق دور النسيج العالمية لتليق بإطلالتك.' }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2 }}
                style={{ background: 'var(--bg-white)', padding: '3.5rem 2.5rem', borderRadius: '16px', border: '1px solid var(--border-light)', textAlign: 'center', transition: 'transform 0.3s' }}
                className="hover:-translate-y-2"
              >
                <div style={{ width: '70px', height: '70px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', margin: '0 auto 1.5rem' }}>
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '15px' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Royal Story ─── */}
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
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '14px', letterSpacing: '4px', fontWeight: '800', textTransform: 'uppercase', margin: 0 }}>الإرث والهوية</h4>
              </div>
              <h2 style={{ fontSize: '46px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '35px', fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>
                تجسيد الأنوثة <br/>بروح التراث العريق
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2.1', fontSize: '17px', marginBottom: '40px' }}>
                بدأت رحلة "جمعية الطرحة الملكية التعاونية" من حلم إحياء التراث الفلسطيني وتتويجه بلمسات من الأناقة العالمية. نحن لا نصنع فساتين فقط، بل ننسج حكايات من المجد والجمال بأيدي أمهر الحرفيات اللواتي ورثن الفن جيلاً بعد جيل، لنقدم لكِ تُحفاً فنية خالدة.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Link to="/about" style={{ color: 'var(--accent-gold)', fontWeight: '800', textDecoration: 'none', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '5px', fontSize: '15px', letterSpacing: '1px' }}>
                  اقرئي قصتنا كاملة
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '-30px', left: '-30px', bottom: '30px', right: '30px', border: '2px solid var(--accent-gold)', zIndex: 0, borderRadius: '4px', opacity: 0.3 }}></div>
              <img 
                src="/Images/new_sewing.jpg" 
                alt="Craftsmanship" 
                style={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }}
              />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{ 
                  position: 'absolute', bottom: '10%', right: '-40px', background: 'var(--bg-lavender)', 
                  padding: '30px', zIndex: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderRadius: '4px',
                  borderRight: '4px solid var(--accent-gold)', maxWidth: '250px'
                }}
              >
                <div style={{ fontSize: '40px', fontWeight: '900', color: 'var(--accent-gold)', marginBottom: '5px', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '13px', color: 'var(--text-dark)', fontWeight: 'bold', letterSpacing: '1px' }}>صناعة يدوية بشغف من قلب فلسطين</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Shop by Category (The Collections) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="The Collections" 
            title="عوالم جمعية الطرحة الملكية التعاونية الإبداعية" 
            subtitle="اكتشفي التشكيلات المصممة بعناية لترافقكِ في كل مناسباتكِ السعيدة."
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { title: 'فساتين السهرة', desc: 'إطلالة تخطف الأنفاس', img: '/Images/IMG-20260429-WA0036.jpg', link: '/dresses' },
              { title: 'فساتين الزفاف الملكية', desc: 'أبهة لا تُنسى', img: '/Images/IMG-20260429-WA0039.jpg', link: '/dresses' },
              { title: 'العباءات الملكية', desc: 'فخامة محتشمة', img: '/Images/IMG-20260429-WA0023.jpg', link: '/shop' },
              { title: 'التطريز والأزياء الراقية', desc: 'تفاصيل استثنائية', img: '/Images/IMG-20260429-WA0021.jpg', link: '/heritage' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '8px' }}
                className="group"
              >
                <Link to={cat.link} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)' }} className="group-hover:scale-110" />
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    background: 'linear-gradient(to top, rgba(35, 23, 56, 0.9) 0%, rgba(35, 23, 56, 0) 60%)', 
                    display: 'flex', alignItems: 'flex-end', padding: '2.5rem',
                    transition: 'background 0.5s'
                  }} className="group-hover:from-purple-900">
                    <div style={{ width: '100%' }}>
                      <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '900', marginBottom: '8px', fontFamily: 'var(--font-serif)', transform: 'translateY(15px)', transition: 'transform 0.4s ease-out' }} className="group-hover:translate-y-0">{cat.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0, transform: 'translateY(15px)', transition: 'all 0.4s ease-out' }} className="group-hover:opacity-100 group-hover:translate-y-0">
                        <span style={{ color: 'var(--accent-gold)', fontSize: '13px', letterSpacing: '2px', fontWeight: '700' }}>{cat.desc}</span>
                        <ArrowLeft size={14} color="var(--accent-gold)" />
                      </div>
                    </div>
                  </div>
                </Link>
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
