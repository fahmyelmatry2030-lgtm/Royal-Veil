import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Palette, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const BlouseEmbroidery = () => {
  const examples = [
    { title: 'تطريز يدوي كلاسيك', img: 'https://images.unsplash.com/photo-1605646351745-9788e0b6d91f?auto=format&fit=crop&q=80&w=800' },
    { title: 'تطريز فلسطيني عصري', img: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=800' },
    { title: 'تطريز ورود ملون', img: 'https://images.unsplash.com/photo-1574271143515-5cddf8da19be?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div style={{ direction: 'rtl', background: '#fff' }}>
      <Helmet>
        <title>Royal Veil | تطريز البلايز - فن وإبداع</title>
      </Helmet>

      <PageHeader
        badge="Art & Embroidery"
        title="تطريز البلايز والقطع الخاصة"
        subtitle="نضيف لمسة فنية فريدة على ملابسكِ من خلال خدمات التطريز اليدوي والآلي المبتكرة."
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <SectionHeader 
            badge="Portfolio"
            title="نماذج من أعمالنا"
            subtitle="نعتني بكل غرزة لنصنع لوحة فنية تعبر عن ذوقكِ الخاص."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '6rem' }}>
            {examples.map((ex, i) => (
              <div key={i} style={{ position: 'relative', height: '500px', overflow: 'hidden', borderRadius: '4px' }} className="group">
                <img src={ex.img} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="group-hover:scale-110" alt={ex.title} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
                  <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '800' }}>{ex.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fafafa', padding: '5rem 2rem', borderRadius: '4px', textAlign: 'center', border: '1px solid #f0f0f0' }}>
            <div style={{ color: '#D4AF37', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><Palette size={48} /></div>
            <SectionHeader 
              badge="Custom Art"
              title="هل لديكِ قطعة ترغبين بتطريزها؟"
            />
            <p style={{ color: '#666', mb: '2rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
              يمكننا إضافة نقوش مخصصة، أسماء، أو تصاميم فنية على البلايز، القمصان، والعبايات الخاصة بكِ. نحول ملابسكِ العادية إلى قطع فنية فريدة.
            </p>
            <Link to="/custom-order" className="btn-premium">طلب خدمة تطريز <ArrowLeft size={20} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlouseEmbroidery;
