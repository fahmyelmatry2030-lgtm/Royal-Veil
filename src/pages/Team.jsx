import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Award, Sparkles, ArrowLeft, Quote, Palette, ShieldCheck, Megaphone, Truck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const designers = [
  'امل ابو جمعة',
  'عبير ابو نجيب',
  'سهاد خوجة',
  'شهد ابو جمعة',
  'ملك شحادة'
];

const logisticsTeam = [
  'ضياء الحسيني',
  'معروف مطور'
];

const teamCategories = [
  {
    name: 'نخبة تصميم الأزياء',
    role: 'الإبداع والابتكار',
    desc: 'مجموعة مختارة من أبرز المصممات الفلسطينيات اللواتي يقدن الرؤية الفنية للجمعية.',
    members: designers,
    icon: <Palette size={30} />,
    tag: 'FASHION DESIGN'
  },
  {
    name: 'طاقم اللوجوستي والترويجي',
    role: 'العمليات والتسويق',
    desc: 'الفريق المسؤول عن إيصال إبداعاتنا إلى العالم وضمان سلاسة العمليات.',
    members: logisticsTeam,
    icon: <Megaphone size={30} />,
    tag: 'LOGISTICS & PROMO'
  }
];

const stats = [
  { number: '15+', label: 'مجموع خبرات الطاقم', icon: <Award size={32} /> },
  { number: '7', label: 'مصممين أزياء بهوية فلسطينية', icon: <Palette size={32} /> },
  { number: '5000+', label: 'قطعة مصنوعة يدوياً', icon: <Star size={32} /> },
  { number: '1000+', label: 'عميلة سعيدة حول العالم', icon: <Heart size={32} /> },
];

const Team = () => {
  const content = storage.getContent();
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية | طاقم العمل — الأنامل التي تصنع الفن</title>
        <meta name="description" content="تعرفي على فريق حرفيات ومصممات جمعية الطرحة الملكية، الأنامل الذهبية التي تنسج هويتنا وتصنع إطلالتكِ." />
      </Helmet>

      <PageHeader
        badge="Our Team"
        title={content.team.hero.title}
        subtitle={content.team.hero.subtitle}
        bgImage="/Images/WhatsApp Image 2026-04-29 at 6.25.39 PM.jpeg"
      />

      {/* Stats Bar */}
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
                  <div style={{ padding: '20px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 0 30px rgba(212,175,55,0.1)' }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)', fontWeight: '900', color: '#fff', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '10px' }}>{stat.number}</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '18px', fontWeight: '700' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader 
            badge="OUR TALENTS" 
            title="نخبة المبدعين" 
            subtitle="الأسماء التي تضع بصمتها في كل زاوية من زوايا الجمعية."
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
            {teamCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                style={{ 
                  background: 'var(--bg-lavender)', 
                  padding: '4rem', 
                  borderRadius: '32px', 
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: '30px', left: '30px', color: 'var(--primary-purple)', opacity: 0.1 }}>{cat.icon}</div>
                <div style={{ position: 'absolute', top: '30px', left: '30px', background: 'var(--accent-gold)', color: '#000', padding: '5px 15px', borderRadius: '50px', fontSize: '10px', fontWeight: '900' }}>{cat.tag}</div>
                
                <h3 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '1rem' }}>{cat.name}</h3>
                <p style={{ color: 'var(--primary-purple)', fontWeight: '700', fontSize: '15px', marginBottom: '2rem' }}>{cat.role}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '16px', marginBottom: '2.5rem' }}>{cat.desc}</p>
                
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem' }}>
                   <h4 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>أبرز الأعضاء:</h4>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {cat.members.map((name, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                           <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                           <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>{name}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="PRINCIPLES" 
            title="ما يجمعنا" 
            subtitle="القيم التي توحد طاقاتنا وتدفعنا نحو التميز."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem' }}>
            {[
              { title: 'الهوية الفلسطينية', desc: 'كل قطعة نصنعها هي رسالة فخر بجذورنا وتعبير عن صمود إرثنا الجميل.', icon: <ShieldCheck size={30} /> },
              { title: 'الجودة الفائقة', desc: 'نلتزم بأعلى معايير الخياطة والتطريز لضمان قطعة تدوم لأجيال.', icon: <Award size={30} /> },
              { title: 'التمكين الاقتصادي', desc: 'مشروعنا قائم على تمكين المرأة الفلسطينية وتوفير فرص عمل تليق بإبداعها.', icon: <Users size={30} /> },
              { title: 'الابتكار الفني', desc: 'لا نكتفي بتقليد القديم، بل نبتكر تصاميم عصرية تحمل روح التراث.', icon: <Sparkles size={30} /> },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ background: '#fff', padding: '4rem 3rem', borderRadius: '32px', textAlign: 'center', transition: 'all 0.4s' }}
                whileHover={{ y: -10, boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ color: 'var(--primary-purple)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '20px', background: 'var(--bg-lavender)', borderRadius: '24px' }}>{v.icon}</div>
                </div>
                <h4 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '16px' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section style={{ padding: '10rem 0', background: 'var(--purple-dark)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
         <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("/Images/IMG-20260429-WA0015.jpg")', backgroundSize: 'cover' }} />
         <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <Quote color="var(--accent-gold)" size={60} style={{ margin: '0 auto 30px', opacity: 0.5 }} />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'var(--font-calligraphy)', lineHeight: 1.5, maxWidth: '900px', margin: '0 auto 30px' }}>
              "أناملنا ليست مجرد أدوات، بل هي جسور تعبر عليها الهوية من الماضي لتتألق في الحاضر."
            </h2>
            <p style={{ color: 'var(--accent-gold)', fontWeight: '900', fontSize: '18px' }}>— طاقم جمعية الطرحة الملكية</p>
         </div>
      </section>
    </div>
  );
};

export default Team;
