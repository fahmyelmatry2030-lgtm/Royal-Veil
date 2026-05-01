import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Award, Sparkles, ArrowLeft, Quote, Palette, Scissors, ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const teamMembers = [
  {
    name: 'طاقم التصميم المبدع',
    role: 'تصميم الأزياء والتطريز',
    desc: 'نخبة من 7 مصممات فلسطينيات محترفات يمزجن بين عبق التراث الفلسطيني والخطوط العالمية المعاصرة، ليخلقن قطعاً فنية تتحدث بلغة الأناقة.',
    img: '/Images/WhatsApp Image 2026-04-29 at 6.25.39 PM.jpeg',
    tag: 'DESIGN TEAM'
  },
  {
    name: 'قسم الخياطة اليدوية',
    role: 'الخياطة والتفصيل الراقي',
    desc: 'أنامل ذهبية تعمل بدقة متناهية لتحويل التصاميم الورقية إلى واقع ملموس، مع التركيز على جودة التفاصيل والتشطيبات الملكية.',
    img: '/Images/IMG-20260429-WA0018.jpg',
    tag: 'TAILORING'
  },
  {
    name: 'حارسات التراث',
    role: 'التطريز اليدوي الفلسطيني',
    desc: 'فريق متخصص في فنون التطريز التقليدي، يضمن بقاء كل غرزة وفية لتاريخنا العريق مع لمسة من الحداثة التي تناسب ذوقك الرفيع.',
    img: '/Images/IMG-20260429-WA0045.jpg',
    tag: 'EMBROIDERY'
  },
];

const stats = [
  { number: '15+', label: 'مجموع خبرات الطاقم', icon: <Award size={32} /> },
  { number: '7', label: 'مصممين أزياء بهوية فلسطينية', icon: <Palette size={32} /> },
  { number: '5000+', label: 'قطعة مصنوعة يدوياً', icon: <Star size={32} /> },
  { number: '1000+', label: 'عميلة سعيدة حول العالم', icon: <Heart size={32} /> },
];

const values = [
  { title: 'الهوية الفلسطينية', desc: 'كل قطعة نصنعها هي رسالة فخر بجذورنا وتعبير عن صمود إرثنا الجميل.', icon: <ShieldCheck size={30} /> },
  { title: 'الجودة الفائقة', desc: 'نلتزم بأعلى معايير الخياطة والتطريز لضمان قطعة تدوم لأجيال.', icon: <Award size={30} /> },
  { title: 'التمكين الاقتصادي', desc: 'مشروعنا قائم على تمكين المرأة الفلسطينية وتوفير فرص عمل تليق بإبداعها.', icon: <Users size={30} /> },
  { title: 'الابتكار الفني', desc: 'لا نكتفي بتقليد القديم، بل نبتكر تصاميم عصرية تحمل روح التراث.', icon: <Sparkles size={30} /> },
];

const Team = () => {
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية | طاقم العمل — الأنامل التي تصنع الفن</title>
        <meta name="description" content="تعرفي على فريق حرفيات ومصممات جمعية الطرحة الملكية، الأنامل الذهبية التي تنسج هويتنا وتصنع إطلالتكِ." />
      </Helmet>

      <PageHeader
        badge="Our Experts"
        title="طاقم العمل"
        subtitle="تعرفي على الأنامل الذهبية والخبرات التي تقف خلف كل قطعة ننتجها بكل حب."
        bgImage="/Images/WhatsApp Image 2026-04-29 at 6.25.39 PM.jpeg"
      />

      {/* Stats Bar - High Impact */}
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
                  fontSize: '18px', 
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

      {/* Intro Narrative */}
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
                badge="THE CREATORS" 
                title="خبرات عريقة وشغف لا ينتهي" 
                subtitle="فريقنا ليس مجرد طاقم عمل، بل هو عائلة تجمعت على حب الفن والارتباط بالأرض والهوية."
                right
              />
              <div style={{ color: 'var(--text-muted)', fontSize: '19px', lineHeight: '2.3' }}>
                <p style={{ marginBottom: '2.5rem' }}>
                  نفتخر بوجود 7 مصممات فلسطينيات مبدعات يعملن على رسم ملامح مجموعاتنا، مستلهمات من روح القدس وعراقة يافا، ليقدمن تصاميم تليق بامرأة عصرية تعتز بجذورها.
                </p>
                <p style={{ marginBottom: '3.5rem' }}>
                  بخبراتنا المتراكمة، نضمن لكِ أن كل فستان يخرج من مشغلنا هو نتاج ساعات طوال من التخطيط، الخياطة، والتطريز اليدوي المتقن.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-premium" style={{ padding: '16px 45px' }}>انضمي إلينا</Link>
                <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--primary-purple)', fontWeight: '900', textDecoration: 'none', fontSize: '17px' }}>تصفحي إبداعاتنا <ArrowLeft size={20} /></Link>
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
                <img src="/Images/WhatsApp Image 2026-04-29 at 6.25.39 PM.jpeg" alt="Our Team at Work" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,10,46,0.5), transparent)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="OUR TEAMS" 
            title="أقسام الإبداع" 
            subtitle="نتوزع على فرق متكاملة تعمل بانسجام لتخرج كل قطعة بأبهى حلة."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ 
                  background: '#fff', 
                  borderRadius: '32px', 
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.4s'
                }}
                whileHover={{ y: -15, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              >
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                   <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--accent-gold)', color: '#000', padding: '6px 15px', borderRadius: '50px', fontSize: '11px', fontWeight: '900' }}>{member.tag}</div>
                </div>
                <div style={{ padding: '3rem' }}>
                   <h3 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '1rem' }}>{member.name}</h3>
                   <p style={{ color: 'var(--primary-purple)', fontWeight: '700', fontSize: '14px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>{member.role}</p>
                   <p style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '16px' }}>{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader 
            badge="PRINCIPLES" 
            title="ما يجمعنا" 
            subtitle="القيم التي توحد طاقاتنا وتدفعنا نحو التميز."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ 
                  background: 'var(--bg-lavender)', 
                  padding: '4rem 3rem', 
                  borderRadius: '32px', 
                  textAlign: 'center',
                  transition: 'all 0.4s'
                }}
              >
                <div style={{ color: 'var(--primary-purple)', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '20px', background: '#fff', borderRadius: '24px' }}>{v.icon}</div>
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
