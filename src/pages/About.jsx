import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, ShieldCheck, Leaf, Palette, Sparkles, ArrowLeft, Award, Heart, Star, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const stats = [
  { number: '15+', label: 'سنة في الصناعة', icon: <Award size={32} /> },
  { number: '200+', label: 'حرفية فلسطينية', icon: <Users size={32} /> },
  { number: '5000+', label: 'قطعة مُصنَّعة', icon: <Star size={32} /> },
  { number: '1000+', label: 'عميلة سعيدة', icon: <Heart size={32} /> },
];

const milestones = [
  { year: '2025', title: 'البداية الأولى', desc: 'تأسست نواة الجمعية من مجموعة صغيرة من الحرفيات المتحمسات لإحياء الزي الفلسطيني.' },
  { year: '2014', title: 'أول معرض دولي', desc: 'شاركنا في معرض الحرف اليدوية الدولي وحصدنا إشادة واسعة على مستوى المنطقة.' },
  { year: '2018', title: 'توسعة المشاغل', desc: 'افتتحنا مشاغل تدريب مجهزة لاستقبال حرفيات جدد وتطوير مهاراتهن.' },
  { year: '2024', title: 'الطرحة الملكية', desc: 'إطلاق العلامة التجارية Royal Veil ودمج الهوية التراثية بمنصة رقمية عصرية.' },
];

const values = [
  { title: 'الابتكار', icon: <Palette size={28} />, desc: 'تطوير تصاميم جديدة تدمج التقنيات الحديثة بالحرفة اليدوية الأصيلة.' },
  { title: 'الاستدامة', icon: <Leaf size={28} />, desc: 'استخدام خامات طبيعية صديقة للبيئة وتقنيات إنتاج نظيفة ومسؤولة.' },
  { title: 'التعاون', icon: <Users size={28} />, desc: 'روح الفريق والعمل الجماعي هي سر نجاحنا المستمر وتميزنا الدائم.' },
  { title: 'الشفافية', icon: <ShieldCheck size={28} />, desc: 'الالتزام بأعلى معايير الإدارة والنزاهة في جميع تعاملاتنا.' },
];

const About = () => {
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية | من نحن — قصة الأناقة الفلسطينية</title>
        <meta name="description" content="تعرفي على جمعية الطرحة الملكية التعاونية، قصتنا ورؤيتنا وقيمنا في الحفاظ على الحرفة الفلسطينية." />
      </Helmet>

      {/* Hero Section - Visual matching the screenshot */}
      <section style={{ position: 'relative', height: '85vh', minHeight: '650px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img 
            src="/Images/IMG-20260429-WA0018.jpg" 
            alt="Royal Veil Story" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,10,46,0.85), rgba(26,10,46,0.65))', backdropFilter: 'blur(2px)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(212,175,55,0.2)', padding: '10px 25px', borderRadius: '50px', border: '1px solid var(--accent-gold)', marginBottom: '30px' }}>
              <Sparkles size={16} color="var(--accent-gold)" />
              <span style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>THE STORY</span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 9vw, 5.5rem)', 
              fontWeight: '900', 
              color: '#fff', 
              fontFamily: 'var(--font-serif)', 
              lineHeight: 1.1, 
              marginBottom: '2.5rem',
              textShadow: '0 15px 45px rgba(0,0,0,0.6)'
            }}>
              قصة جمعية الطرحة<br />الملكية
            </h1>
            
            <p style={{ 
              color: 'rgba(255,255,255,0.95)', 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', 
              lineHeight: '1.8', 
              maxWidth: '850px', 
              margin: '0 auto',
              fontWeight: '500',
              fontFamily: 'var(--font-serif-ar)'
            }}>
              حيث تلتقي الحرفية الفلسطينية التقليدية مع التصاميم العالمية المعاصرة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Precise matching of screenshot spacing and style */}
      <section style={{ padding: '7rem 0', background: 'var(--purple-dark)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '5rem 2rem' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: 'var(--accent-gold)', display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
                  <div style={{ 
                    padding: '20px', 
                    borderRadius: '50%', 
                    background: 'rgba(212,175,55,0.1)', 
                    border: '1px solid rgba(212,175,55,0.2)',
                    boxShadow: '0 0 30px rgba(212,175,55,0.1)'
                  }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{ 
                  fontSize: 'clamp(3.5rem, 7vw, 5rem)', 
                  fontWeight: '900', 
                  color: '#fff', 
                  fontFamily: 'var(--font-serif)', 
                  lineHeight: 1,
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <div style={{ 
                  color: 'rgba(255,255,255,0.75)', 
                  fontSize: '20px', 
                  fontWeight: '700',
                  fontFamily: 'var(--font-serif-ar)'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section style={{ padding: '12rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '8rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader 
                badge="OUR LEGACY" 
                title="إرث من الإبداع والتمكين" 
                subtitle="نسعى في جمعية الطرحة الملكية التعاونية لتقديم تجربة أزياء تتخطى حدود الملبس لتصبح تعبيراً عن الهوية."
                right
              />
              <div style={{ color: 'var(--text-muted)', fontSize: '19px', lineHeight: '2.3' }}>
                <p style={{ marginBottom: '2.5rem' }}>
                  نحن نؤمن بأن التطريز الفلسطيني ليس مجرد خيوط، بل هو لغة تحكي تاريخنا العريق. من هنا انطلقت رؤيتنا لدمج هذا الفن في قوالب عصرية تليق بالمرأة في كل مكان.
                </p>
                <p style={{ marginBottom: '3.5rem' }}>
                  بأيدي أكثر من 200 حرفية مبدعة، نصنع كل قطعة بشغف وعناية فائقة، مع الالتزام بأعلى معايير الجودة العالمية في الخامات والتنفيذ.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                <Link to="/shop" className="btn-premium" style={{ padding: '16px 45px' }}>استكشفي المجموعات</Link>
                <Link to="/team" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--primary-purple)', fontWeight: '900', textDecoration: 'none', fontSize: '17px' }}>فريقنا المبدع <ArrowLeft size={20} /></Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.12)' }}>
                <img src="/Images/new_sewing.jpg" alt="Production" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,10,46,0.5), transparent)' }} />
              </div>
              
              <div style={{ 
                position: 'absolute', 
                top: '-40px', 
                right: '-40px', 
                background: 'var(--accent-gold)', 
                padding: '35px', 
                borderRadius: '50%', 
                width: '160px', 
                height: '160px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 20px 50px rgba(212,175,55,0.45)',
                transform: 'rotate(12deg)',
                border: '4px solid #fff'
              }}>
                <span style={{ fontSize: '26px', fontWeight: '900', color: '#1a102e', lineHeight: 1 }}>منذ</span>
                <span style={{ fontSize: '34px', fontWeight: '900', color: '#1a102e', lineHeight: 1.2 }}>2025</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner - High Impact */}
      <section style={{ padding: '12rem 0', background: 'var(--purple-dark)', position: 'relative', overflow: 'hidden' }}>
         <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'url("/Images/IMG-20260429-WA0015.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
         <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.1), transparent)' }} />
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '7rem' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
                  <Eye size={30} color="var(--accent-gold)" />
                  <h3 style={{ color: 'var(--accent-gold)', fontSize: '30px', fontWeight: '900', fontFamily: 'var(--font-serif)' }}>رؤيتنا</h3>
                </div>
                <p style={{ color: '#fff', fontSize: '22px', lineHeight: '2', opacity: 0.95, fontWeight: '500' }}>
                  أن نكون المنارة العالمية للأناقة التي تجمع بين سحر الشرق وأصالة التراث وعصرية التصميم، متمكنين من وضع بصمة فلسطينية في كل خزانة أزياء راقية حول العالم.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
                  <Target size={30} color="var(--accent-gold)" />
                  <h3 style={{ color: 'var(--accent-gold)', fontSize: '30px', fontWeight: '900', fontFamily: 'var(--font-serif)' }}>رسالتنا</h3>
                </div>
                <p style={{ color: '#fff', fontSize: '22px', lineHeight: '2', opacity: 0.95, fontWeight: '500' }}>
                  تمكين المرأة الفلسطينية اقتصادياً واجتماعياً من خلال الحفاظ على حرفة التطريز وتطويرها، وتقديم منتجات استثنائية تعكس فخرنا بجذورنا وتطلعنا للمستقبل.
                </p>
              </motion.div>
            </div>
         </div>
      </section>

      {/* Values with Icons */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="VALUES" 
            title="ما نؤمن به" 
            subtitle="القيم التي توجهنا في رحلة صناعة الجمال والتمكين."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
                style={{ 
                  background: '#fff', 
                  padding: '4rem 3rem', 
                  borderRadius: '32px', 
                  boxShadow: 'var(--shadow-md)',
                  textAlign: 'center',
                  transition: 'all 0.4s'
                }}
              >
                <div style={{ color: 'var(--primary-purple)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '20px', background: 'var(--bg-lavender)', borderRadius: '24px' }}>{v.icon}</div>
                </div>
                <h4 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '16px' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '10rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)' }}>هل أنتِ جاهزة لتكوني جزءاً من قصتنا؟</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '20px', marginBottom: '4rem', lineHeight: 1.8 }}>
               سواء كنتِ عميلة تبحثين عن التميز، أو شريكاً في النجاح، نحن هنا لنصنع الجمال معاً.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn-premium" style={{ padding: '20px 60px', fontSize: '18px' }}>ابدئي التسوق</Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--primary-purple)', fontWeight: '900', border: '2.5px solid var(--primary-purple)', padding: '18px 55px', borderRadius: '50px', textDecoration: 'none', fontSize: '18px' }}>اتصلي بنا</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
