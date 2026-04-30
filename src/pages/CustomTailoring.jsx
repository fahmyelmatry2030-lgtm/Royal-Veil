import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Paintbrush, Ruler, Scissors, CheckCircle, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const CustomTailoring = () => {
  const steps = [
    { title: 'الاستشارة والتصميم', icon: <Paintbrush />, desc: 'نجلس معكِ لمناقشة فكرتكِ، اختيار الموديل، واقتراح الأقمشة المناسبة.' },
    { title: 'أخذ القياسات', icon: <Ruler />, desc: 'نقوم بأخذ القياسات بدقة احترافية لضمان راحة القطعة ومثالية مظهرها.' },
    { title: 'التنفيذ والحياكة', icon: <Scissors />, desc: 'يبدأ حرفيونا المهرة في قص وحياكة القطعة مع الاهتمام بأدق التفاصيل اليدوية.' },
    { title: 'البروفات واللمسات الأخيرة', icon: <CheckCircle />, desc: 'نقوم بعمل بروفة للتأكد من كل شيء، ثم نضع اللمسات النهائية والتطريز.' },
  ];

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | خدمات التفصيل - دقة واحترافية</title>
      </Helmet>

      <PageHeader
        badge="Tailoring Excellence"
        title="خدمات التفصيل والحياكة"
        subtitle="نحول القماش إلى تحفة فنية تناسب تفاصيل جسدكِ وذوقكِ الرفيع."
        bgImage="/Images/IMG-20260429-WA0017.jpg"
      />

      {/* Process Steps */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <SectionHeader 
            badge="The Process"
            title="كيف نصنع قطعتكِ؟"
            subtitle="رحلة دقيقة تبدأ بفكرة وتنتهي بقطعة فريدة تميزكِ."
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ 
                padding: '3rem 2rem', 
                background: 'var(--bg-lavender)', 
                border: '1px solid var(--border-light)', 
                borderRadius: '4px',
                textAlign: 'center',
                transition: 'transform 0.3s'
              }} className="hover:transform hover:-translate-y-2">
                <div style={{ 
                  width: '70px', height: '70px', background: 'var(--bg-white)', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--accent-gold)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid #f0f0f0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
             <img src="/Images/IMG-20260429-WA0017.jpg" style={{ width: '100%', borderRadius: '2px', objectFit: 'cover', maxHeight: '550px' }} alt="Tailoring" />
          </div>
          <div>
            <SectionHeader badge="Why Us" title="لماذا تختارين تفصيل جمعية الطرحة الملكية التعاونية؟" right />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: '900' }}>✓</div>
                  <p style={{ color: 'var(--text-muted)' }}>نستخدم أحدث الماكينات والمعدات لضمان دقة الخياطة.</p>
               </div>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: '900' }}>✓</div>
                  <p style={{ color: 'var(--text-muted)' }}>خبراء متخصصون في قص الموديلات المعقدة والفساتين الملكية.</p>
               </div>
               <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ color: 'var(--accent-gold)', fontWeight: '900' }}>✓</div>
                  <p style={{ color: 'var(--text-muted)' }}>إشراف فني على كل مرحلة لضمان مطابقة التصميم الأصلي.</p>
               </div>
            </div>
            <Link to="/custom-order" style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '10px', 
              background: '#000', color: '#fff', padding: '16px 40px', 
              fontWeight: '700', borderRadius: '2px', textDecoration: 'none',
              marginTop: '3rem'
            }}>احجزي موعدكِ الآن <ArrowLeft size={20} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomTailoring;
