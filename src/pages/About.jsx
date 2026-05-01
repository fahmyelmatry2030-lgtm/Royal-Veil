import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, ShieldCheck, Leaf, Palette, Sparkles, ArrowLeft, Quote, Award, Heart, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const stats = [
  { number: '+15', label: 'سنة في الصناعة', icon: <Award size={26} /> },
  { number: '+200', label: 'حرفية فلسطينية', icon: <Users size={26} /> },
  { number: '+5000', label: 'قطعة مُصنَّعة', icon: <Star size={26} /> },
  { number: '+1000', label: 'عميلة سعيدة', icon: <Heart size={26} /> },
];

const milestones = [
  { year: '2009', title: 'البداية الأولى', desc: 'تأسست نواة الجمعية من مجموعة صغيرة من الحرفيات المتحمسات لإحياء الزي الفلسطيني.' },
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

      <PageHeader
        badge="The Story"
        title="قصة جمعية الطرحة الملكية"
        subtitle="حيث تلتقي الحرفية الفلسطينية التقليدية مع التصاميم العالمية المعاصرة."
        bgImage="/Images/IMG-20260429-WA0018.jpg"
      />

      {/* Stats Bar */}
      <section style={{ padding: '5rem 0', background: 'var(--purple-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(177,156,217,0.08) 0%, transparent 70%)' }} />
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

      {/* Story Section */}
      <section style={{ padding: '9rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Sparkles size={18} color="var(--accent-gold)" />
                <span style={{ color: 'var(--accent-gold)', fontSize: '13px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>About Us</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', lineHeight: 1.25, marginBottom: '2rem' }}>
                إرث من الإبداع<br />والتمكين
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '2.1', marginBottom: '1.5rem' }}>
                نؤمن في جمعية الطرحة الملكية التعاونية بأن كل قطعة ننتجها تمثل هوية فريدة وقصة خاصة. نحن جمعية تعاونية فلسطينية تجمع بين أمهر الحرفيات والمصممين لنقدم قطعاً فنية تتجاوز حدود الملابس.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '2.1', marginBottom: '3rem' }}>
                ندمج بين الحرفية اليدوية التقليدية كالتطريز الفلسطيني الأصيل، وبين أحدث التقنيات الحديثة في عالم الموضة، لنواكب التطور العالمي ونقدم منتجات تناسب أرقى الأذواق.
              </p>
              <Link
                to="/team"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  color: 'var(--primary-purple)', fontWeight: '800',
                  textDecoration: 'none', borderBottom: '2px solid var(--primary-purple)',
                  paddingBottom: '5px', fontSize: '16px', transition: 'all 0.3s'
                }}
              >
                تعرفي على فريقنا <ArrowLeft size={18} />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'absolute', inset: '-15px',
                background: 'var(--bg-lavender)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                zIndex: 0
              }} />
              <img
                src="/Images/IMG-20260429-WA0014.jpg"
                alt="مشاغل جمعية الطرحة الملكية"
                style={{
                  width: '100%', borderRadius: '8px',
                  boxShadow: 'var(--shadow-xl)',
                  objectFit: 'cover', maxHeight: '560px',
                  position: 'relative', zIndex: 1
                }}
              />
              {/* Year Badge */}
              <div style={{
                position: 'absolute', bottom: '-15px', left: '-15px',
                background: 'var(--accent-gold)', color: '#1a0a2e',
                padding: '20px 28px', borderRadius: '8px',
                zIndex: 2, boxShadow: '0 8px 30px rgba(212,175,55,0.35)'
              }}>
                <span style={{ fontSize: '2rem', fontWeight: '900', display: 'block', lineHeight: 1 }}>2009</span>
                <p style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', marginTop: '4px', letterSpacing: '1px' }}>ESTABLISHED</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(135deg, var(--purple-dark), #1a0a2e)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(177,156,217,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Quote color="var(--accent-gold)" size={60} style={{ margin: '0 auto 30px', opacity: 0.5 }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontFamily: 'var(--font-calligraphy)', lineHeight: 1.5, maxWidth: '800px', margin: '0 auto 25px', textShadow: '0 0 40px rgba(212,175,55,0.2)' }}>
              لسنا مجرد جمعية خياطة،<br />نحن حارسات الهوية وصانعات الجمال
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>— رسالة جمعية الطرحة الملكية التعاونية</p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader badge="Vision & Mission" title="رؤيتنا وأهدافنا" subtitle="نسعى نحو غد أفضل لصناعة الأزياء الفلسطينية على الصعيدين المحلي والعالمي." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ background: '#fff', padding: '4rem', border: '1px solid var(--border-light)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', transition: 'all 0.35s' }}
            >
              <div style={{ width: '64px', height: '64px', background: 'var(--purple-light)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Eye size={32} color="var(--primary-purple)" />
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>رؤيتنا</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '16px' }}>
                نسعى لأن نكون الوجهة الأولى للأناقة الراقية في فلسطين، من خلال إنشاء مقر متكامل يضم أحدث تقنيات التصميم والإنتاج، لتمكين المبدعين وتحقيق استدامة اقتصادية لأعضائنا.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ background: '#fff', padding: '4rem', border: '1px solid var(--border-light)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', transition: 'all 0.35s' }}
            >
              <div style={{ width: '64px', height: '64px', background: 'var(--purple-light)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Target size={32} color="var(--primary-purple)" />
              </div>
              <h3 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>أهدافنا</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'إنتاج تصاميم عالمية بجودة تنافسية',
                  'دعم وتمكين الحرفيات في المجتمع المحلي',
                  'الحفاظ على الهوية الفلسطينية في قالب عصري',
                  'فتح أسواق تصدير دولية للمنتج الفلسطيني',
                ].map((goal, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>◆</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <SectionHeader badge="Milestones" title="محطاتنا عبر الزمن" subtitle="مسيرة حافلة بالإنجازات والشراكات التي شكّلت ما نحن عليه اليوم." />
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', right: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--primary-purple), var(--accent-gold))', transform: 'translateX(50%)', opacity: 0.25 }} />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '4rem', position: 'relative' }}
              >
                <div style={{ position: 'absolute', right: 'calc(50% - 22px)', top: '20px', width: '44px', height: '44px', background: 'var(--primary-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', zIndex: 2, boxShadow: '0 0 0 6px var(--bg-white), 0 0 0 8px var(--primary-purple)' }}>
                  <Star size={16} fill="#fff" />
                </div>
                <div style={{ width: '42%', background: 'var(--bg-lavender)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ display: 'inline-block', background: 'var(--primary-purple)', color: '#fff', fontSize: '13px', fontWeight: '900', padding: '4px 14px', borderRadius: '50px', marginBottom: '12px' }}>{m.year}</span>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '10px' }}>{m.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.8' }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader badge="Values" title="قيمنا الراسخة" subtitle="المبادئ التي تحكم كل خطوة في مسيرتنا نحو التميز والإبداع." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
                style={{ background: '#fff', padding: '3rem 2.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', textAlign: 'center', transition: 'all 0.35s', cursor: 'default' }}
              >
                <div style={{ width: '70px', height: '70px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary-purple)' }}>
                  {value.icon}
                </div>
                <h4 style={{ fontWeight: '900', marginBottom: '12px', fontSize: '20px', color: 'var(--text-dark)' }}>{value.title}</h4>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.8' }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 0', background: 'linear-gradient(135deg, var(--purple-dark), #1a0a2e)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(177,156,217,0.1) 0%, transparent 50%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Sparkles color="var(--accent-gold)" size={40} style={{ margin: '0 auto 20px' }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'var(--font-serif)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              كوني جزءاً من قصتنا
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '550px', margin: '0 auto 3rem', lineHeight: 1.9 }}>
              سواء كنتِ عميلة تبحثين عن قطعتها المثالية، أو حرفية تريدين الانضمام إلينا — أبوابنا مفتوحة.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent-gold)', color: '#1a0a2e', padding: '16px 40px', fontWeight: '800', borderRadius: '50px', textDecoration: 'none', fontSize: '15px', boxShadow: '0 8px 30px rgba(212,175,55,0.35)', transition: 'all 0.3s' }}>
                تسوقي الآن <ArrowLeft size={18} />
              </Link>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', color: '#fff', padding: '16px 40px', fontWeight: '700', borderRadius: '50px', textDecoration: 'none', fontSize: '15px', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.3s' }}>
                تواصلي معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
