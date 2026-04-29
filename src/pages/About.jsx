import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Users, ShieldCheck, Leaf, Palette } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <div style={{ direction: 'rtl', background: '#fff' }}>
      <Helmet>
        <title>Royal Veil | من نحن - قصة الأناقة الفلسطينية</title>
      </Helmet>

      <PageHeader
        badge="The Story"
        title="قصة رويال فيل"
        subtitle="حيث تلتقي الحرفية الفلسطينية التقليدية مع التصاميم العالمية المعاصرة."
      />

      {/* Intro Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <SectionHeader badge="About Us" title="إرث من الإبداع والتمكين" right />
            <p style={{ color: '#666', lineHeight: '2', fontSize: '16px', marginBottom: '1.5rem' }}>
              نؤمن في رويال فيل بأن كل قطعة ننتجها تمثل هوية فريدة وقصة خاصة. نحن جمعية تعاونية فلسطينية تجمع بين أمهر الحرفيات والمصممين لنقدم قطعاً فنية تتجاوز حدود الملابس.
            </p>
            <p style={{ color: '#666', lineHeight: '2', fontSize: '16px' }}>
              ندمج بين الحرفية اليدوية التقليدية، كالتطريز الفلسطيني الأصيل، وبين أحدث التقنيات الحديثة في عالم الموضة، لنواكب التطور العالمي ونقدم منتجات تناسب أرقى الأذواق.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
              alt="Workshop" 
              style={{ width: '100%', borderRadius: '2px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}
            />
            <div style={{ 
              position: 'absolute', bottom: '-20px', right: '-20px', 
              background: '#000', color: '#fff', padding: '30px', 
              borderRadius: '2px', display: 'none' 
            }} className="md:block">
              <span style={{ fontSize: '32px', fontWeight: '900', color: '#D4AF37' }}>2024</span>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>ESTABLISHED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section style={{ padding: '6rem 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#fff', padding: '4rem', border: '1px solid #f0f0f0' }}>
              <Eye size={40} style={{ color: '#D4AF37', marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '1.5rem' }}>رؤيتنا</h3>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                نسعى لأن نكون الوجهة الأولى للأناقة الراقية في فلسطين، من خلال إنشاء مقر متكامل يضم أحدث تقنيات التصميم والإنتاج، لتمكين المبدعين وتحقيق استدامة اقتصادية لأعضائنا.
              </p>
            </div>
            <div style={{ background: '#fff', padding: '4rem', border: '1px solid #f0f0f0' }}>
              <Target size={40} style={{ color: '#D4AF37', marginBottom: '2rem' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '1.5rem' }}>أهدافنا</h3>
              <ul style={{ color: '#666', spaceY: '1rem', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#D4AF37' }}>•</span> إنتاج تصاميم عالمية بجودة تنافسية.
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#D4AF37' }}>•</span> دعم وتمكين الحرفيات في المجتمع المحلي.
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#D4AF37' }}>•</span> الحفاظ على الهوية الفلسطينية في قالب عصري.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <SectionHeader badge="Values" title="قيمنا الراسخة" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {[
              { title: 'الابتكار', icon: <Palette />, desc: 'تطوير تصاميم جديدة تدمج اليدوي بالتقني.' },
              { title: 'الاستدامة', icon: <Leaf />, desc: 'استخدام خامات صديقة للبيئة وتقنيات نظيفة.' },
              { title: 'التعاون', icon: <Users />, desc: 'روح الفريق الواحد هي سر نجاحنا وتميزنا.' },
              { title: 'الشفافية', icon: <ShieldCheck />, desc: 'الالتزام بأعلى معايير الإدارة والنزاهة.' },
            ].map((value, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '80px', height: '80px', background: '#fafafa', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', margin: '0 auto 1.5rem', color: '#D4AF37'
                }}>
                  {value.icon}
                </div>
                <h4 style={{ fontWeight: '800', marginBottom: '12px', fontSize: '18px' }}>{value.title}</h4>
                <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
