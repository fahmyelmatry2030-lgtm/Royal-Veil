import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Award, Sparkles, ArrowLeft, Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const teamMembers = [
  {
    name: 'فريق المصممات',
    role: 'تصميم الأزياء والتطريز',
    desc: 'نخبة من المصممات المحترفات في رسم وصياغة أجمل الفساتين وقطع التراث، يمزجن بين الحداثة والأصالة في كل قطعة.',
    img: '/Images/WhatsApp Image 2026-04-29 at 6.25.39 PM.jpeg',
    tag: 'Design'
  },
  {
    name: 'فريق الحياكة',
    role: 'الخياطة والتفصيل الراقي',
    desc: 'أنامل ذهبية تحول الأقمشة إلى تحف فنية متقنة الصنع، بخبرة تمتد لعقود في عالم الخياطة والتفصيل.',
    img: '/Images/IMG-20260429-WA0018.jpg',
    tag: 'Tailoring'
  },
  {
    name: 'فريق التطريز اليدوي',
    role: 'التطريز اليدوي والتزيين',
    desc: 'سيدات يمتلكن خبرة واسعة في نقل التراث الفلسطيني عبر الخيوط، كل غرزة تحكي جزءاً من تاريخنا الجميل.',
    img: '/Images/IMG-20260429-WA0045.jpg',
    tag: 'Embroidery'
  },
];

const stats = [
  { number: '+15', label: 'سنة خبرة', icon: <Award size={28} /> },
  { number: '+200', label: 'حرفية متميزة', icon: <Users size={28} /> },
  { number: '+5000', label: 'قطعة مصنوعة', icon: <Star size={28} /> },
  { number: '+1000', label: 'عميلة سعيدة', icon: <Heart size={28} /> },
];

const values = [
  { title: 'الأصالة', desc: 'نحافظ على النقوش والأساليب التراثية الفلسطينية الموروثة عبر الأجيال.', icon: '🧵' },
  { title: 'الجودة', desc: 'لا تغادر أي قطعة مشغلنا إلا بعد اجتياز معايير الجودة الصارمة.', icon: '✨' },
  { title: 'التمكين', desc: 'نوفر بيئة عمل داعمة تمكّن كل حرفية من إبراز موهبتها.', icon: '💪' },
  { title: 'الإبداع', desc: 'نمزج التراث بالعصر لنقدم قطعاً تخطف القلوب وتُعبّر عن الهوية.', icon: '🎨' },
];

const Team = () => {
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية | طاقم العمل — الأنامل التي تصنع الفن</title>
        <meta name="description" content="تعرفي على فريق حرفيات جمعية الطرحة الملكية التعاونية، الأنامل الذهبية التي تنسج هويتنا وتصنع إطلالتكِ." />
      </Helmet>

      <PageHeader
        badge="Our Team"
        title="طاقم العمل"
        subtitle="تعرفي على الأنامل الذهبية التي تصنع إطلالتكِ وتنسج حكايتكِ بكل حب وإتقان."
        bgImage="/Images/WhatsApp Image 2026-04-29 at 6.25.39 PM.jpeg"
      />

      {/* Stats */}
      <section style={{ padding: '5rem 0', background: 'var(--purple-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(177,156,217,0.1) 0%, transparent 70%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '2rem' }}
              >
                <div style={{ color: 'var(--accent-gold)', display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>{stat.icon}</div>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', marginTop: '10px', fontWeight: '600' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
              <Sparkles size={18} color="var(--accent-gold)" />
              <span style={{ color: 'var(--accent-gold)', fontSize: '13px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>The Makers</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', lineHeight: 1.25, marginBottom: '2rem' }}>
              فريق الإبداع والتميز
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: '2', maxWidth: '650px', margin: '0 auto' }}>
              خلف كل قطعة رائعة نصنعها تقف مجموعة من السيدات الموهوبات اللواتي يعشقن حرفتهن ويؤمنّ بأن كل خيطة تُروى بها قصة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Cards */}
      <section style={{ padding: '0 0 8rem', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center',
                  direction: i % 2 === 0 ? 'rtl' : 'ltr'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    inset: '-12px',
                    background: 'var(--bg-lavender)',
                    borderRadius: '12px',
                    zIndex: 0,
                    border: '1px solid var(--border-light)'
                  }} />
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '420px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      position: 'relative',
                      zIndex: 1,
                      boxShadow: 'var(--shadow-xl)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '-12px',
                    right: i % 2 === 0 ? 'auto' : '-12px',
                    left: i % 2 === 0 ? '-12px' : 'auto',
                    background: 'var(--accent-gold)',
                    color: '#1a0a2e',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '900',
                    letterSpacing: '1px',
                    zIndex: 2,
                    boxShadow: '0 4px 15px rgba(212,175,55,0.3)'
                  }}>
                    {member.tag}
                  </div>
                </div>

                {/* Content */}
                <div style={{ direction: 'rtl' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <div style={{ width: '40px', height: '2px', background: 'var(--accent-gold)' }} />
                    <span style={{ color: 'var(--accent-gold)', fontSize: '13px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>{member.role}</span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '2', marginBottom: '2.5rem' }}>
                    {member.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    {['إتقان', 'إبداع', 'شغف'].map((tag, j) => (
                      <span key={j} style={{
                        background: 'var(--bg-lavender)',
                        color: 'var(--primary-purple)',
                        padding: '6px 16px',
                        borderRadius: '50px',
                        fontSize: '13px',
                        fontWeight: '700',
                        border: '1px solid var(--border-light)'
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Quote color="var(--primary-purple)" size={50} style={{ margin: '0 auto 25px', opacity: 0.4 }} />
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontFamily: 'var(--font-calligraphy)', color: 'var(--text-dark)', lineHeight: 1.5, maxWidth: '700px', margin: '0 auto 20px' }}>
              "أيدينا لا تخيط قماشاً فحسب، بل تنسج حكاية كل امرأة تتلمع عيناها حين ترتدي قطعتها"
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '600' }}>— فريق الطرحة الملكية</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Our Values" title="قيمنا ومبادئنا" subtitle="المبادئ التي تحكم كل خطوة في مسيرتنا نحو الجمال والتميز." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
                style={{
                  background: 'var(--bg-lavender)',
                  padding: '3rem 2.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  transition: 'all 0.35s',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{val.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '1rem' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.9' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(135deg, var(--purple-dark), #1a0a2e)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(212,175,55,0.08) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Sparkles color="var(--accent-gold)" size={40} style={{ margin: '0 auto 20px' }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'var(--font-serif)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              انضمي إلى عائلة الطرحة الملكية
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: 1.9 }}>
              إن كنتِ تمتلكين موهبة في الخياطة أو التطريز، نرحب بك للانضمام إلى فريقنا المتميز.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent-gold)', color: '#1a0a2e', padding: '16px 40px', fontWeight: '800', borderRadius: '50px', textDecoration: 'none', fontSize: '15px', boxShadow: '0 8px 30px rgba(212,175,55,0.35)', transition: 'all 0.3s' }}>
                تواصلي معنا <ArrowLeft size={18} />
              </Link>
              <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', padding: '16px 40px', fontWeight: '700', borderRadius: '50px', textDecoration: 'none', fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.3s' }}>
                تصفحي أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
