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
  { year: '1948', title: 'الجذور والمقاومة', desc: 'بدأت الحرفيات الفلسطينيات بتوثيق النقوش التراثية كشكل من أشكال الحفاظ على الهوية.' },
  { year: '1980', title: 'الانتشار العالمي', desc: 'وصل التطريز الفلسطيني إلى منظمات دولية وبدأ يُعرض في معارض فنية حول العالم.' },
  { year: '2010', title: 'تسجيل اليونسكو', desc: 'اعترفت اليونسكو بالتطريز الفلسطيني كإرث ثقافي غير مادي يستحق الحماية.' },
  { year: '2020', title: 'الطرحة الملكية', desc: 'تأسست جمعيتنا لتكون حارسة لهذا الإرث ودامجته بأزياء العصر الحديث.' },
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
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '2.1', marginBottom: '3rem' }}>
                كل قطعة تراثية ننتجها تمر بمراحل بحث دقيق عن النقش الأصيل لكل منطقة فلسطينية، ثم تنفيذه بدقة يدوية عالية تضمن استدامة الجمال عبر الأجيال.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {featureCards.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                    style={{ padding: '20px', background: 'var(--bg-lavender)', border: '1px solid var(--border-light)', borderRadius: '20px', transition: 'all 0.3s' }}
                  >
                    <div style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>{item.icon}</div>
                    <h4 style={{ fontWeight: '800', fontSize: '14px', marginBottom: '5px', color: 'var(--text-dark)' }}>{item.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}
            >
              <img src="/Images/IMG-20260429-WA0047.jpg" style={{ borderRadius: '20px', height: '420px', objectFit: 'cover', width: '100%', objectPosition: 'top', boxShadow: 'var(--shadow-lg)' }} alt="تطريز فلسطيني" />
              <img src="/Images/IMG-20260429-WA0048.jpg" style={{ borderRadius: '20px', height: '420px', objectFit: 'cover', width: '100%', marginTop: '40px', boxShadow: 'var(--shadow-lg)' }} alt="ثوب تراثي" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(135deg, var(--purple-dark) 0%, #1a0a2e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(177,156,217,0.1) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Quote color="var(--accent-gold)" size={60} style={{ margin: '0 auto 30px', opacity: 0.5 }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontFamily: 'var(--font-calligraphy)', lineHeight: 1.4, maxWidth: '800px', margin: '0 auto 30px', textShadow: '0 0 40px rgba(212,175,55,0.3)' }}>
              الثوب الفلسطيني ليس قماشاً يُلبس،<br />بل هو وطن يُحمل
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>— من وحي حرفيات جمعية الطرحة الملكية</p>
          </motion.div>
        </div>
      </section>

      {/* Regional Patterns */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Regional Patterns" title="نقوش المدن الفلسطينية" subtitle="لكل مدينة فلسطينية نقشها الخاص الذي يحكي قصتها وجمالها الفريد." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
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
                  borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
                  transition: 'all 0.4s',
                  boxShadow: activeRegion === i ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  transform: activeRegion === i ? 'translateY(-8px)' : 'none'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={region.img} alt={region.city} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: activeRegion === i ? 'scale(1.08)' : 'scale(1)' }} />
                </div>
                <div style={{ padding: '1.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <MapPin size={16} color={region.color} />
                    <span style={{ color: region.color, fontSize: '13px', fontWeight: '800', letterSpacing: '1px' }}>{region.city}</span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '10px' }}>{region.pattern}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.9' }}>{region.desc}</p>
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
            <div style={{ position: 'absolute', right: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--primary-purple), var(--accent-gold))', transform: 'translateX(50%)', opacity: 0.3 }} />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '4rem', position: 'relative' }}
              >
                <div style={{ position: 'absolute', right: 'calc(50% - 22px)', top: '20px', width: '44px', height: '44px', background: 'var(--primary-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', zIndex: 2, boxShadow: '0 0 0 6px var(--bg-lavender), 0 0 0 8px var(--primary-purple)' }}>
                  <Star size={16} fill="#fff" />
                </div>
                <div style={{ width: '42%', background: '#fff', padding: '2rem', borderRadius: '20px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
                  <span style={{ display: 'inline-block', background: 'var(--bg-lavender)', color: 'var(--primary-purple)', fontSize: '13px', fontWeight: '900', padding: '4px 14px', borderRadius: '50px', marginBottom: '12px' }}>{item.year}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.8' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Products */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Heritage Collection" title="تشكيلة التراث" subtitle="قطع مستوحاة من المدن والقرى الفلسطينية العريقة، صُنعت بأيدٍ تعشق التفاصيل." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
            {heritageItems.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <ProductCard product={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Wall */}
      <section style={{ padding: '0 0 8rem', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Gallery" title="معرض الصور التراثية" subtitle="لحظات من الجمال الأصيل توثق إبداع حرفياتنا." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            {[
              { img: '/Images/IMG-20260429-WA0035.jpg', wide: true },
              { img: '/Images/IMG-20260429-WA0021.jpg', wide: false },
              { img: '/Images/IMG-20260429-WA0023.jpg', wide: false },
              { img: '/Images/IMG-20260429-WA0022.jpg', wide: false },
              { img: '/Images/IMG-20260429-WA0024.jpg', wide: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                style={{ gridColumn: item.wide ? 'span 2' : 'auto', height: '300px', overflow: 'hidden', borderRadius: '20px' }}
                className="group"
              >
                <img src={item.img} alt="صور تراثية" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(135deg, var(--purple-dark), #1a0a2e)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(177,156,217,0.12) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Sparkles color="var(--accent-gold)" size={40} style={{ margin: '0 auto 20px' }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'var(--font-serif)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              احصلي على قطعة تعبّر عن جذوركِ
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: 1.9 }}>
              نحن هنا لنحول قصتكِ وهويتكِ إلى قطعة ملابس فريدة. اختاري النقش الذي يعبّر عنكِ ودعينا نتولى الباقي.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/custom-order" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent-gold)', color: '#1a0a2e', padding: '16px 40px', fontWeight: '800', borderRadius: '50px', textDecoration: 'none', fontSize: '15px', boxShadow: '0 8px 30px rgba(212,175,55,0.35)', transition: 'all 0.3s' }}>
                اطلبي تصميمكِ الخاص <ArrowLeft size={18} />
              </Link>
              <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', padding: '16px 40px', fontWeight: '700', borderRadius: '50px', textDecoration: 'none', fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.3s' }}>
                تصفحي المجموعة
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
