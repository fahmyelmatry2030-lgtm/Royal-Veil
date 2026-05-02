import React, { useState } from 'react';
import { storage } from '../utils/storage';

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, Sparkles, Quote, Crown, Scissors, Gem, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
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

const homeFaqsFallback = [
  { q: 'كيف أطلب تفصيلاً خاصاً؟', a: 'يمكنكِ التواصل معنا مباشرةً عبر واتساب أو من خلال نموذج "طلب تفصيل خاص" في الموقع.' },
  { q: 'كم يستغرق تنفيذ الطلب؟', a: 'يتراوح وقت التنفيذ بين أسبوعين وأربعة أسابيع حسب تعقيد التصميم.' },
  { q: 'هل تقدمون التوصيل؟', a: 'نعم، نوفر خدمة توصيل داخل القدس والمناطق المجاورة. الشحن مجاني للطلبات فوق 200 شيكل.' },
  { q: 'هل يمكن تعديل المقاسات؟', a: 'بالتأكيد! جميع قطعنا قابلة للتعديل والتخصيص بما يناسب مقاساتكِ ورغباتكِ.' },
];

const HomeFAQItem = ({ q, a, i }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      style={{ border: '1px solid var(--border-light)', borderRadius: '24px', overflow: 'hidden', background: open ? 'var(--purple-light)' : 'var(--bg-white)', transition: 'all 0.3s' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.3rem 1.8rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', direction: 'rtl', gap: '1rem' }}
      >
        <span style={{ fontSize: '16px', fontWeight: '700', color: open ? 'var(--primary-purple)' : 'var(--text-dark)', lineHeight: 1.5 }}>{q}</span>
        <ChevronRight size={20} color="var(--primary-purple)" style={{ flexShrink: 0, transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
      </button>
      {open && (
        <div style={{ padding: '0 1.8rem 1.3rem', color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.9', direction: 'rtl', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
          {a}
        </div>
      )}
    </motion.div>
  );
};

const Home = () => {
  const collectionsRef = React.useRef(null);
  const productsRef = React.useRef(null);
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState(storage.getContent());

  React.useEffect(() => {
    // Listen for changes in localStorage if needed, or just load once
    setContent(storage.getContent());
  }, []);

  const scroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (phone) {
      storage.addSubscriber(phone);
      alert('شكراً لاشتراككِ في نادي الأناقة!');
      setPhone('');
    }
  };

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية التعاونية | الرئيسية</title>
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '800px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="/royal_veil_boutique_hero.png" alt="Royal Veil" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 50%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '700px', paddingRight: '2rem', textAlign: 'right', marginLeft: 'auto' }}>
            <motion.h1
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}
              style={{ fontSize: 'clamp(3.5rem, 9vw, 6rem)', fontFamily: 'var(--font-calligraphy)', color: '#fff', lineHeight: 1.2, marginBottom: '1rem', textShadow: '0 0 40px rgba(177,156,217,0.6)', whiteSpace: 'pre-line' }}
            >
              {content.home.hero.title}
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/shop" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#fff', padding: '10px 35px', fontSize: '14px', fontWeight: '700', borderRadius: '50px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', marginTop: '1.5rem' }}>
                {content.home.hero.buttonText}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Slider */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader 
            badge={content.home.collections?.badge || "The Collections"} 
            title={content.home.collections?.title || "مجموعاتنا المتميزة"} 
            subtitle={content.home.collections?.subtitle || "اكتشفي التشكيلات المصممة بعناية لترافقكِ في كل مناسباتكِ السعيدة."} 
          />
          <div ref={collectionsRef} style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: '2rem', paddingBottom: '2rem', paddingRight: '1.5rem', paddingLeft: '1.5rem', msOverflowStyle: 'none', scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }} className="hide-scrollbar">
            {[
              { title: 'فساتين', img: '/Images/collection_dresses.png', link: '/dresses' },
              { title: 'بلوزات', img: '/Images/collection_blouses.png', link: '/shop' },
              { title: 'بيبي', img: '/Images/collection_baby.png', link: '/baby' },
              { title: 'تفصيل خاص', img: '/Images/collection_custom.png', link: '/custom-order' },
            ].map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ flex: '0 0 180px', scrollSnapAlign: 'start' }}>
                <Link to={cat.link} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ height: '260px', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '1rem', background: '#f8f8f8' }}>
                    <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ color: 'var(--text-dark)', fontSize: '15px', fontWeight: '800', textAlign: 'center' }}>{cat.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginTop: '2rem' }}>
            <button onClick={() => scroll(collectionsRef, 'right')} style={{ background: 'var(--bg-lavender)', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={22} /></button>
            <span style={{ fontSize: '15px', color: 'var(--purple-dark)', fontWeight: '700', fontFamily: 'var(--font-serif-ar)' }}>مجموعاتنا المتميزة</span>
            <button onClick={() => scroll(collectionsRef, 'left')} style={{ background: 'var(--bg-lavender)', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={22} /></button>
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)', overflow: 'hidden' }}>
        <div className="container">
          <SectionHeader 
            badge={content.home.featured?.badge || "Exclusive"} 
            title={content.home.featured?.title || "منتجات متميزة"} 
            subtitle={content.home.featured?.subtitle || "القطع الأكثر طلباً التي خطفت قلوب عميلاتنا هذا الموسم."} 
          />
          <div ref={productsRef} style={{ display: 'flex', overflowX: 'auto', gap: '2rem', paddingBottom: '4rem', msOverflowStyle: 'none', scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }} className="hide-scrollbar">
            {featuredProducts.map((p) => (
              <div key={p.id} style={{ flex: '0 0 250px', scrollSnapAlign: 'start' }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginBottom: '4rem' }}>
            <button onClick={() => scroll(productsRef, 'right')} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}><ChevronRight size={22} /></button>
            <span style={{ fontSize: '15px', color: 'var(--purple-dark)', fontWeight: '700', fontFamily: 'var(--font-serif-ar)' }}>استكشفي المزيد</span>
            <button onClick={() => scroll(productsRef, 'left')} style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}><ChevronLeft size={22} /></button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/shop" style={{ background: '#fff', color: 'var(--primary-purple)', padding: '12px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: '800', fontSize: '14px', border: '1px solid var(--primary-purple)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>عرض الكل</Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <Sparkles size={20} color="var(--accent-gold)" />
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '800', textTransform: 'uppercase', margin: 0 }}>{content.home.about.badge}</h4>
              </div>
              <h2 style={{ fontSize: '46px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '35px', fontFamily: 'var(--font-serif)', lineHeight: '1.2' }}>{content.home.about.title}</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2.1', fontSize: '17px', marginBottom: '40px' }}>
                {content.home.about.description}
              </p>
              <Link to="/about" style={{ color: 'var(--primary-purple)', fontWeight: '800', textDecoration: 'none', borderBottom: '2px solid var(--primary-purple)', paddingBottom: '5px' }}>التفاصيل الكاملة</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <img src="/Images/new_sewing.jpg" alt="About Us" style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-lg)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge={content.home.activities?.badge || "Activities"} 
            title={content.home.activities?.title || "نشاطات الجمعية"} 
            subtitle={content.home.activities?.subtitle || "نساهم في بناء المجتمع وتطوير مهارات الحرفيات من خلال فعالياتنا المستمرة."} 
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {(content.home.activities || []).map((activity, i) => {
              // Convert string icons to components if necessary or handle dynamically
              let IconComp = Scissors;
              if (activity.icon === 'Globe') IconComp = Globe;
              if (activity.icon === 'Star') IconComp = Star;

              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: 'var(--bg-white)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
                  <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}><IconComp size={24} /></div>
                  <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '1rem' }}>{activity.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{activity.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section style={{ position: 'relative', padding: '12rem 0', backgroundImage: 'url(/Images/IMG-20260429-WA0015.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(24,16,38,0.85)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Quote color="var(--accent-gold)" size={50} style={{ margin: '0 auto 30px', opacity: 0.5 }} />
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', fontFamily: 'var(--font-serif)', marginBottom: '30px', lineHeight: 1.3, whiteSpace: 'pre-line' }}>
            {content.home.parallax.quote}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>{content.home.parallax.author}</p>
          <Link to="/custom-order" className="btn-premium" style={{ background: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>اطلبي تصميمك المخصص</Link>
        </div>
      </section>

      {/* Trending Now Slider */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem' }}>
            <SectionHeader badge="Trending Now" title="القطع الأكثر طلباً" subtitle="اكتشفي الإبداعات التي خطفت قلوب عميلاتنا هذا الموسم." right />
          </div>
          
          <div 
            id="trending-slider"
            style={{ 
              display: 'flex', 
              overflowX: 'auto', 
              gap: '2rem', 
              paddingBottom: '2rem', 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none', 
              scrollSnapType: 'x mandatory',
              paddingRight: '1rem'
            }} 
            className="hide-scrollbar"
          >
            {featuredProducts.map((p, i) => (
              <motion.div 
                key={p.id} 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                style={{ flex: '0 0 280px', scrollSnapAlign: 'start' }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', marginTop: '3rem' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button onClick={() => {
                const el = document.getElementById('trending-slider');
                el.scrollBy({ left: 300, behavior: 'smooth' });
              }} style={{ background: 'var(--bg-lavender)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--primary-purple)', boxShadow: 'var(--shadow-sm)' }}>
                <ChevronRight size={24} />
              </button>
              <button onClick={() => {
                const el = document.getElementById('trending-slider');
                el.scrollBy({ left: -300, behavior: 'smooth' });
              }} style={{ background: 'var(--bg-lavender)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--primary-purple)', boxShadow: 'var(--shadow-sm)' }}>
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <Link to="/shop" style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '15px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', background: 'var(--bg-lavender)', padding: '12px 40px', borderRadius: '50px' }}>
              عرض المجموعة كاملة <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge={content.home.faqSection?.badge || "FAQ"} 
            title={content.home.faqSection?.title || "أسئلة شائعة"} 
            subtitle={content.home.faqSection?.subtitle || "إجابات سريعة على أكثر ما يسألنا عنه عميلاتنا الكريمات."} 
          />
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(content.home.faqs || homeFaqsFallback).map((item, i) => (
              <HomeFAQItem key={i} q={item.q} a={item.a} i={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" style={{ display: 'inline-block', color: 'var(--primary-purple)', fontWeight: '800', fontSize: '15px', border: '2px solid var(--primary-purple)', padding: '12px 36px', borderRadius: '50px', textDecoration: 'none' }}>
              تواصلي معنا مباشرة
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '6rem 0', background: 'var(--purple-light)' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-lavender)', borderRadius: '16px', padding: '5rem 3rem', textAlign: 'center', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }} />
            <h3 style={{ fontSize: '36px', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', marginBottom: '15px' }}>{content.home.newsletter.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.8 }}>
              {content.home.newsletter.description}
            </p>
            <form style={{ display: 'flex', maxWidth: '500px', margin: '0 auto', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} onSubmit={handleSubscribe}>
              <input type="tel" placeholder="أدخلي رقم هاتفك هنا..." dir="rtl" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ flex: '1 1 250px', padding: '16px 25px', borderRadius: '20px', border: '1px solid var(--border-light)', background: 'var(--bg-white)', color: 'var(--text-dark)', outline: 'none' }} />
              <button type="submit" style={{ background: 'var(--accent-gold)', color: '#000', padding: '16px 40px', fontWeight: '800', borderRadius: '20px', border: 'none', cursor: 'pointer', flex: '0 0 auto' }}>اشتراك</button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: '900', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '10px' }}>تألقي معنا على انستغرام</h3>
              <p style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '13px' }}>@veilroyal</p>
            </div>
            <a href="https://www.instagram.com/veilroyal?igsh=MTEyMHBtZm15dmtqYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dark)', textDecoration: 'none', border: '1px solid var(--border-light)', padding: '14px 35px', fontSize: '13px', fontWeight: '800', borderRadius: '50px', transition: 'all 0.3s' }}>متابعة الصفحة</a>
          </div>
          <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginTop: '20px' }}>
            <img src="/Images/WhatsApp Image 2026-04-30 at 1.39.18 PM (2).jpeg" style={{ width: '100%', height: 'auto', maxHeight: '700px', objectFit: 'cover', objectPosition: 'center' }} alt="Royal Veil Instagram" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
