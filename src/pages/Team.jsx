import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const Team = () => {
  const teamMembers = [
    {
      name: 'فريق المصممات',
      role: 'تصميم الأزياء والتطريز',
      desc: 'نخبة من المصممات المحترفات في رسم وصياغة أجمل الفساتين وقطع التراث.',
      img: '/Images/WhatsApp%20Image%202026-04-29%20at%206.25.39%20PM.jpeg'
    },
    {
      name: 'فريق الحياكة',
      role: 'الخياطة والتفصيل',
      desc: 'أنامل ذهبية تحول الأقمشة إلى تحف فنية متقنة الصنع.',
      img: '/Images/IMG-20260429-WA0018.jpg'
    },
    {
      name: 'فريق العمل اليدوي',
      role: 'التطريز اليدوي والتزيين',
      desc: 'سيدات يمتلكن خبرة واسعة في نقل التراث الفلسطيني عبر الخيوط.',
      img: '/Images/IMG-20260429-WA0045.jpg'
    }
  ];

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية التعاونية | طاقم العمل</title>
      </Helmet>

      <PageHeader
        badge="Our Team"
        title="طاقم العمل"
        subtitle="تعرفي على الأنامل الذهبية التي تصنع إطلالتكِ وتنسج حكايتكِ."
        bgImage="/Images/WhatsApp%20Image%202026-04-29%20at%206.25.39%20PM.jpeg"
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <SectionHeader 
            badge="The Makers" 
            title="فريق الإبداع والتميز" 
            center 
          />

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '4rem' 
          }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{ 
                background: 'var(--bg-lavender)', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-purple)', marginBottom: '0.5rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '700', marginBottom: '1rem' }}>
                    {member.role}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.8' }}>
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
