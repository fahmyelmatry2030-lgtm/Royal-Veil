import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ShoppingBag, Star, Sparkles, Quote, Play } from 'lucide-react';
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
    <div style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | الرئيسية - عالم الأزياء الراقية</title>
      </Helmet>

      {/* ─── Hero Section ─── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '800px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1920" 
            alt="Main Hero" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
          <div style={{ 
            position: 'absolute', inset: 0, 
            background: 'linear-gradient(to top, rgba(59, 38, 93, 0.9) 0%, rgba(59, 38, 93, 0.4) 50%, rgba(0,0,0,0.1) 100%)' 
          }}></div>
        </div>

        {/* Decorative Gold Elements */}
        <div style={{ position: 'absolute', top: '15%', right: '10%', width: '1px', height: '150px', background: 'var(--accent-gold)' }}></div>
        <div style={{ position: 'absolute', bottom: '15%', left: '10%', width: '150px', height: '1px', background: 'var(--accent-gold)' }}></div>

        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '10%' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ maxWidth: '850px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }}></div>
              <h5 style={{ 
                color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '6px', 
                textTransform: 'uppercase', fontSize: '14px', margin: 0
              }}>مجموعة موسم 2024</h5>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '900', 
              lineHeight: 1.1, marginBottom: '2rem', fontFamily: 'var(--font-serif), serif', color: 'var(--bg-white)',
              textShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              أناقة تراثية<br/>بلمسات ملكية
            </h1>
            
            <p style={{ 
              fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '3.5rem', 
              lineHeight: 1.9, maxWidth: '650px', fontWeight: '300'
            }}>
              في رويال فيل، نصنع الحلم ليصبح حقيقة. ندمج عبق التطريز الفلسطيني الأصيل مع أحدث صيحات الهوت كوتور العالمية لنقدم لكِ قطعاً فنية تتجاوز حدود الزمن وتليق بإطلالتكِ الملكية.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn-premium" style={{ padding: '18px 45px', fontSize: '15px' }}>
                اكتشفي التشكيلة
              </Link>
              <Link to="/custom-order" style={{ 
                padding: '18px 45px', fontSize: '15px', color: 'var(--bg-white)', 
                border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50px',
                display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(5px)',
                textDecoration: 'none', transition: 'all 0.3s'
              }} className="hover:bg-white hover:text-purple-900">
                <Play size={18} fill="currentColor" /> احجزي موعد تفصيل
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Brand Ethos (The Story) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '14px', letterSpacing: '3px', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase' }}>الفلسفة والإرث</h4>
              <h2 style={{ fontSize: '42px', fontWeight: '900', color: 'var(--primary-purple)', marginBottom: '30px', fontFamily: 'var(--font-serif)', lineHeight: '1.3' }}>
                حيث يلتقي عبق الماضي <br/>بإشراقة الحاضر
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2.2', fontSize: '17px', marginBottom: '30px' }}>
                انطلقت "رويال فيل" من شغف عميق بالحفاظ على الهوية الفلسطينية وتقديمها للعالم بقالب عصري فاخر. كل غرزة تطريز وكل طية قماش تروي قصة أجيال من الحرفيات اللواتي توارثن الفن جيلاً بعد جيل.
              </p>
              <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--accent-gold)', marginBottom: '5px' }}>100%</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 'bold' }}>صناعة يدوية محلية</div>
                </div>
                <div style={{ width: '1px', background: 'var(--border-light)' }}></div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--accent-gold)', marginBottom: '5px' }}>+50</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 'bold' }}>حرفية مبدعة</div>
                </div>
              </div>
              <Link to="/about" style={{ color: 'var(--primary-purple)', fontWeight: '800', textDecoration: 'none', borderBottom: '2px solid var(--accent-gold)', paddingBottom: '5px' }}>
                اقرئي قصتنا كاملة
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', bottom: '20px', right: '20px', background: 'var(--bg-lavender)', zIndex: 0, borderRadius: '4px' }}></div>
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b95d4ebf0e8?auto=format&fit=crop&q=80&w=800" 
                alt="Craftsmanship" 
                style={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }}
              />
              <div style={{ 
                position: 'absolute', bottom: '-30px', right: '30px', background: 'var(--bg-white)', 
                padding: '20px 30px', zIndex: 2, boxShadow: 'var(--shadow-lg)', borderLeft: '3px solid var(--accent-gold)'
              }}>
                <Quote size={24} color="var(--accent-gold)" style={{ marginBottom: '10px' }} />
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-purple)', fontStyle: 'italic' }}>
                  "الإتقان ليس خياراً، بل هو هويتنا."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Shop by Category (Interactive Worlds) ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="Collections" 
            title="عوالمنا الإبداعية" 
            subtitle="اختاري من بين تشكيلاتنا المتنوعة ما يعكس شخصيتك الفريدة."
          />
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { title: 'فساتين السهرة', desc: 'إطلالة تخطف الأنفاس', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600', link: '/dresses' },
              { title: 'التطريز التراثي', desc: 'أصالة تتجدد', img: 'https://images.unsplash.com/photo-1582533089852-0243ed27bbd8?auto=format&fit=crop&q=80&w=600', link: '/heritage' },
              { title: 'العباءات الملكية', desc: 'فخامة محتشمة', img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=600', link: '/shop' },
              { title: 'منتجات الأطفال', desc: 'نعومة وأناقة', img: 'https://images.unsplash.com/photo-1519706347221-f090d81c8412?auto=format&fit=crop&q=80&w=600', link: '/baby' },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: 'relative', height: '450px', overflow: 'hidden', borderRadius: '4px' }}
                className="group"
              >
                <Link to={cat.link} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)' }} className="group-hover:scale-110" />
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    background: 'linear-gradient(to top, rgba(59,38,93,0.8) 0%, rgba(59,38,93,0) 60%)', 
                    display: 'flex', alignItems: 'flex-end', padding: '2rem',
                    transition: 'background 0.5s'
                  }} className="group-hover:from-purple-900">
                    <div style={{ width: '100%' }}>
                      <h3 style={{ color: 'var(--bg-white)', fontSize: '26px', fontWeight: '900', marginBottom: '8px', fontFamily: 'var(--font-serif)', transform: 'translateY(10px)', transition: 'transform 0.3s' }} className="group-hover:translate-y-0">{cat.title}</h3>
                      <p style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', fontWeight: '700', opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s' }} className="group-hover:opacity-100 group-hover:translate-y-0">{cat.desc}</p>
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
        position: 'relative', padding: '10rem 0', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1596455607563-ad6193f76b13?auto=format&fit=crop&q=80&w=1920)',
        backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(59, 38, 93, 0.85)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Sparkles color="var(--accent-gold)" size={40} style={{ margin: '0 auto 20px' }} />
          <h2 style={{ color: 'var(--bg-white)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>
            تألقي بتفاصيل صُنعت لكِ خصيصاً
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.8' }}>
            نقدم خدمة التفصيل الخاص لنصمم فستان أحلامك بدقة متناهية ليناسب مقاسك وذوقك الفريد.
          </p>
          <Link to="/custom-order" className="btn-premium">اطلبي تصميمك الخاص</Link>
        </div>
      </section>

      {/* ─── Featured Products ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '20px' }}>
             <SectionHeader badge="Trending Now" title="الأكثر رواجاً هذا الموسم" right style={{ marginBottom: 0 }} />
             <Link to="/shop" style={{ color: 'var(--primary-purple)', fontWeight: '800', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }} className="hover:text-yellow-600 transition-colors">
               عرض كل المنتجات <ArrowLeft size={18} />
             </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem' }}>
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader badge="Testimonials" title="ماذا تقول عميلاتنا" subtitle="تجارب حقيقية تعكس التزامنا بتقديم الأفضل لكِ." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { text: "الفستان كان خيال! التفاصيل، التطريز، القماش.. كل شيء كان مثالي واهتمامكم بالتفاصيل الدقيقة خلاني أكون أميرة في يومي.", name: "سارة م.", location: "رام الله" },
              { text: "خدمة التفصيل الخاص عندهم تفوق الوصف. فهموا طلبي بسرعة وطلع الفستان أحلى من الصورة اللي بخيالي.", name: "ليلى ج.", location: "دبي" },
              { text: "فخورة جداً بإنتاج فلسطيني بهذي الجودة العالية. البكجنج والترتيب لوحدهم قصة ثانية.", name: "نور أ.", location: "عمان" }
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--bg-white)', padding: '3rem 2rem', borderRadius: '4px', borderTop: '3px solid var(--accent-gold)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '2', marginBottom: '30px', fontStyle: 'italic' }}>"{test.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)', fontWeight: 'bold' }}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h5 style={{ fontWeight: '800', color: 'var(--primary-purple)', fontSize: '14px' }}>{test.name}</h5>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{test.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Feed ─── */}
      <section style={{ padding: '6rem 0', background: 'var(--purple-dark)', color: 'var(--text-light)' }}>
        <div className="container">
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '32px', fontWeight: '900', fontFamily: 'var(--font-serif)', color: 'var(--bg-white)', marginBottom: '10px' }}>تابعينا على انستغرام</h3>
                <p style={{ color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '2px', fontSize: '13px' }}>@ROYALVEIL.COUTURE</p>
              </div>
              <div>
                <a href="#" style={{ color: 'var(--bg-white)', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 30px', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', borderRadius: '50px', transition: 'all 0.3s' }} className="hover:bg-white hover:text-purple-900">
                  متابعة
                </a>
              </div>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }} className="group">
                   <img 
                    src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600&sig=${i+10}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s' }} 
                    className="group-hover:scale-110 group-hover:brightness-50"
                   />
                   <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }} className="group-hover:opacity-100">
                     <Star color="var(--accent-gold)" fill="var(--accent-gold)" size={24} />
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
