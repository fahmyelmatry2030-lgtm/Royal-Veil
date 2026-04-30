import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const heritageItems = [
  { id: 301, title: 'ثوب فلسطيني تراثي بتطريز أحمر يدوي', price: '120$', img: '/Images/IMG-20260429-WA0047.jpg' },
  { id: 302, title: 'ثوب فلسطيني بتطريز تقليدي ملون', price: '450$', img: '/Images/IMG-20260429-WA0050.jpg' },
  { id: 303, title: 'فستان سهرة أسود بتطريز ذهبي حصري', price: '180$', img: '/Images/IMG-20260429-WA0048.jpg' },
];

const Heritage = () => {
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | التراث الفلسطيني - هوية وأصالة</title>
      </Helmet>

      <PageHeader
        badge="Palestinian Heritage"
        title="التراث الفلسطيني"
        subtitle="نحتفي بتراثنا الأصيل ونوظفه في قطع عصرية فريدة تحكي هوية فلسطين الجميلة."
        bgImage="/Images/IMG-20260429-WA0050.jpg"
      />

      {/* Philosophy Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <SectionHeader badge="Our Roots" title="عبق الماضي بروح الحاضر" right />
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '2', marginBottom: '1.5rem' }}>
              في جمعية الطرحة الملكية التعاونية، نعتبر التطريز الفلسطيني ليس مجرد فن، بل هو لغة تحكي تاريخنا وهويتنا. نحرص على دمج النقوش التراثية الأصيلة في تصاميمنا العصرية، لنقدم قطعاً تعكس الفخر الفلسطيني بلمسة عالمية.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '2', marginBottom: '2.5rem' }}>
              كل قطعة تراثية ننتجها تمر بمراحل عديدة من البحث عن النقش التاريخي لكل منطقة فلسطينية، ثم تنفيذه بدقة يدوية عالية تضمن استدامة الجمال عبر الأجيال.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ padding: '20px', background: 'var(--bg-lavender)', border: '1px solid var(--border-light)' }}>
                <Heart style={{ color: 'var(--accent-gold)', marginBottom: '8px' }} size={20} />
                <h4 style={{ fontWeight: '800', fontSize: '15px' }}>حرفة يدوية</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>تطريز يدوي بدقة متناهية</p>
              </div>
              <div style={{ padding: '20px', background: 'var(--bg-lavender)', border: '1px solid var(--border-light)' }}>
                <Sparkles style={{ color: 'var(--accent-gold)', marginBottom: '8px' }} size={20} />
                <h4 style={{ fontWeight: '800', fontSize: '15px' }}>تصميم عصري</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>دمج التراث بالأزياء الحديثة</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
             <img src="/Images/IMG-20260429-WA0047.jpg" style={{ borderRadius: '2px', height: '400px', objectFit: 'cover', width: '100%', objectPosition: 'top' }} alt="" />
             <img src="/Images/IMG-20260429-WA0048.jpg" style={{ borderRadius: '2px', height: '400px', objectFit: 'cover', width: '100%', marginTop: '30px' }} alt="" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <SectionHeader 
            badge="Heritage Collection"
            title="تشكيلة التراث"
            subtitle="تصاميم مستوحاة من المدن والقرى الفلسطينية العريقة."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
            {heritageItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-white)', color: 'var(--text-dark)', textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
        <div className="container">
          <SectionHeader 
            badge="Your Identity"
            title="احصلي على قطعة تعبر عن جذوركِ"
          />
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '18px', lineHeight: '1.8' }}>
            نحن هنا لنحول قصتكِ وهويتكِ إلى قطعة ملابس فريدة. اختاري النقش الذي تحبينه ودعينا نتولى الباقي.
          </p>
          <Link to="/custom-order" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '10px', 
            background: '#D4AF37', color: '#fff', padding: '16px 40px', 
            fontWeight: '700', borderRadius: '2px', textDecoration: 'none'
          }}>تواصل مع فريق التراث <ArrowLeft size={20} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
