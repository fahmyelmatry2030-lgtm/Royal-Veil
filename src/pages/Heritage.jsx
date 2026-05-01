import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowLeft, MapPin, Scissors, Star, Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const heritageItems = [
  { id: 301, title: 'ثوب فلسطيني تراثي بتطريز أحمر يدوي', price: '1200 شيكل', img: '/Images/IMG-20260429-WA0047.jpg' },
  { id: 302, title: 'ثوب فلسطيني بتطريز تقليدي ملون', price: '1450 شيكل', img: '/Images/IMG-20260429-WA0050.jpg' },
  { id: 303, title: 'فستان بتطريز ذهبي حصري', price: '1800 شيكل', img: '/Images/IMG-20260429-WA0048.jpg' },
  { id: 304, title: 'عباءة تراثية بنقوش يدوية', price: '1600 شيكل', img: '/Images/IMG-20260429-WA0053.jpg' },
  { id: 305, title: 'طقم تطريز نابلسي', price: '2100 شيكل', img: '/Images/IMG-20260429-WA0035.jpg' },
  { id: 306, title: 'ثوب حبروني أصيل', price: '1900 شيكل', img: '/Images/IMG-20260429-WA0022.jpg' },
];

const regions = [
  { city: 'نابلس', pattern: 'نقش البسطا', desc: 'يتميز بالتداخل الهندسي الدقيق وألوان الأحمر والأسود والأخضر التي تعكس الجبال الخضراء.', color: '#8B0000', img: '/Images/IMG-20260429-WA0047.jpg' },
  { city: 'الخليل', pattern: 'التطريز الحبروني', desc: 'يُعرف بثرائه اللوني وكثافة الغرزات، ويحتوي على رموز تمثل الخصوبة والبركة.', color: '#4A0E4E', img: '/Images/IMG-20260429-WA0050.jpg' },
  { city: 'القدس', pattern: 'الحرير المقدسي', desc: 'نقوش ملكية بخيوط الذهب والفضة، كانت حكراً على نساء العائلات الكريمة والأثرياء.', color: '#B8860B', img: '/Images/IMG-20260429-WA0048.jpg' },
  { city: 'يافا', pattern: 'زهرة الليمون', desc: 'تطريز بألوان البحر المتوسط — الأزرق والأبيض — يعكس روح مدينة البرتقال.', color: '#1E5F74', img: '/Images/IMG-20260429-WA0021.jpg' },
];

const timeline = [
  { year: '1948', title: 'الجذور والأصالة', desc: 'الحفاظ على النقوش التراثية كرمز للهوية الوطنية في مختلف المدن والقرى الفلسطينية.' },
  { year: '1980', title: 'النهضة التراثية', desc: 'تأسيس الجمعيات والمراكز التي ساهمت في تطوير فن التطريز ونشره كفن عالمي معاصر.' },
  { year: '2021', title: 'الاعتراف العالمي', desc: 'إدراج فن التطريز الفلسطيني ضمن القائمة التمثيلية للتراث الثقافي غير المادي لمنظمة اليونسكو.' },
  { year: '2020', title: 'انطلاقة الطرحة', desc: 'تأسيس جمعيتنا لتكون جسراً يربط بين التاريخ العريق وأحدث صيحات الموضة العالمية.' },
];

const featureCards = [
  { icon: <Heart size={20} />, title: 'حرفة يدوية', desc: 'تطريز بدقة متناهية' },
  { icon: <Sparkles size={20} />, title: 'تصميم عصري', desc: 'دمج التراث بالحداثة' },
  { icon: <MapPin size={20} />, title: 'من كل فلسطين', desc: 'نقوش من كل مدينة' },
  { icon: <Scissors size={20} />, title: 'خيوط طبيعية', desc: 'مواد أصيلة وفاخرة' },
];

const Heritage = () => {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية | التراث الفلسطيني — هوية وأصالة وفن</title>
        <meta name="description" content="استكشفي عالم التطريز الفلسطيني الأصيل وتشكيلتنا التراثية المستوحاة من مدن فلسطين العريقة." />
      </Helmet>

      <PageHeader
        badge="Palestinian Heritage"
        title="التراث الفلسطيني"
        subtitle="نحتفي بتراثنا الأصيل ونوظفه في قطع عصرية فريدة تحكي هوية فلسطين الجميلة."
        bgImage="/Images/IMG-20260429-WA0050.jpg"
      />

      {/* Philosophy */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Sparkles size={18} color="var(--accent-gold)" />
                <span style={{ color: 'var(--accent-gold)', fontSize: '13px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Roots</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', lineHeight: 1.25, marginBottom: '2rem' }}>
                عبق الماضي<br />بروح الحاضر
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '2.1', marginBottom: '1.5rem' }}>
                في جمعية الطرحة الملكية التعاونية، نعتبر التطريز الفلسطيني ليس مجرد فن، بل هو لغة حضارية تحكي تاريخنا وهويتنا عبر القرون. نحرص على دمج النقوش التراثية الأصيلة في تصاميمنا العصرية.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {featureCards.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ padding: '20px', background: 'var(--bg-lavender)', border: '1px solid var(--border-light)', borderRadius: '20px' }}
                  >
                    <div style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>{item.icon}</div>
                    <h4 style={{ fontWeight: '800', fontSize: '14px', marginBottom: '5px' }}>{item.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}
            >
              <img src="/Images/IMG-20260429-WA0047.jpg" style={{ borderRadius: '20px', height: '420px', objectFit: 'cover', width: '100%', boxShadow: 'var(--shadow-lg)' }} alt="تطريز فلسطيني" />
              <img src="/Images/IMG-20260429-WA0048.jpg" style={{ borderRadius: '20px', height: '420px', objectFit: 'cover', width: '100%', marginTop: '40px', boxShadow: 'var(--shadow-lg)' }} alt="ثوب تراثي" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Products - MOVED UP for visibility */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="Exclusive Collection" 
            title="تشكيلة التراث الملكي" 
            subtitle="قطع نادرة مشغولة يدوياً بأعلى معايير الجودة، تعكس أصالة المدن الفلسطينية." 
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '3rem', justifyItems: 'center' }}>
            {heritageItems.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <ProductCard product={item} />
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link to="/shop" className="btn-premium" style={{ padding: '16px 50px' }}>مشاهدة كافة المنتجات</Link>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section style={{ padding: '10rem 0', background: 'linear-gradient(135deg, var(--purple-dark) 0%, #1a0a2e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'url("/Images/IMG-20260429-WA0035.jpg")', backgroundSize: 'cover' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Quote color="var(--accent-gold)" size={60} style={{ margin: '0 auto 30px', opacity: 0.5 }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontFamily: 'var(--font-calligraphy)', lineHeight: 1.4, maxWidth: '800px', margin: '0 auto 30px' }}>
              الثوب الفلسطيني ليس قماشاً يُلبس،<br />بل هو وطن يُحمل
            </h2>
            <p style={{ color: 'var(--accent-gold)', fontWeight: '900' }}>— من وحي حرفيات جمعية الطرحة الملكية</p>
          </motion.div>
        </div>
      </section>

      {/* Regional Patterns */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Regional Patterns" title="نقوش المدن الفلسطينية" subtitle="لكل مدينة فلسطينية نقشها الخاص الذي يحكي قصتها وجمالها الفريد." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {regions.map((region, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                onClick={() => setActiveRegion(i)}
                style={{
                  background: activeRegion === i ? 'var(--bg-lavender)' : '#fff',
                  border: `2px solid ${activeRegion === i ? 'var(--primary-purple)' : 'var(--border-light)'}`,
                  borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={region.img} alt={region.city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <MapPin size={16} color={region.color} />
                    <span style={{ color: region.color, fontSize: '13px', fontWeight: '800' }}>{region.city}</span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '900' }}>{region.pattern}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.8' }}>{region.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader badge="Our History" title="مسيرة التراث" subtitle="رحلة عبر الزمن نستذكر فيها أبرز محطات الحفاظ على التطريز الفلسطيني." />
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', right: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--accent-gold)', transform: 'translateX(50%)', opacity: 0.3 }} />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '4rem', position: 'relative' }}
              >
                <div style={{ position: 'absolute', right: 'calc(50% - 22px)', top: '20px', width: '44px', height: '44px', background: 'var(--primary-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', zIndex: 2, boxShadow: '0 0 0 8px var(--bg-lavender)' }}>
                  <Star size={16} fill="#fff" />
                </div>
                <div style={{ width: '42%', background: '#fff', padding: '2rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ display: 'inline-block', background: 'var(--bg-lavender)', color: 'var(--primary-purple)', fontSize: '13px', fontWeight: '900', padding: '4px 14px', borderRadius: '50px', marginBottom: '12px' }}>{item.year}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.8' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Wall */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Gallery" title="معرض الصور" subtitle="لحظات توثق جمال التراث في كل قطعة." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px' }}>
            {[
              '/Images/IMG-20260429-WA0035.jpg',
              '/Images/IMG-20260429-WA0021.jpg',
              '/Images/IMG-20260429-WA0023.jpg',
              '/Images/IMG-20260429-WA0022.jpg',
              '/Images/IMG-20260429-WA0024.jpg',
              '/Images/IMG-20260429-WA0053.jpg'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ height: '300px', overflow: 'hidden', borderRadius: '20px' }}
              >
                <img src={img} alt="Heritage Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '10rem 0', background: 'var(--purple-dark)', textAlign: 'center', color: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '2.5rem' }}>ابدئي رحلتكِ مع التراث الفلسطيني</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/custom-order" className="btn-premium" style={{ padding: '18px 50px' }}>اطلبي قطعة مخصصة</Link>
            <Link to="/contact" style={{ border: '1px solid #fff', color: '#fff', padding: '16px 50px', borderRadius: '50px', textDecoration: 'none', fontWeight: '800' }}>اتصلي بنا</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
