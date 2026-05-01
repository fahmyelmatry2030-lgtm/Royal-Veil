import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Star, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const babyItems = [
  { id: 201, title: 'طقم بيبي أبيض مطرز بالاسم (غزل)', price: '85 شيكل', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM.jpeg' },
  { id: 202, title: 'طقم ولادة ملكي أبيض مطرز (فؤاد)', price: '220 شيكل', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(1).jpeg' },
  { id: 203, title: 'طقم بيبي أبيض مطرز بالاسم (قاسم)', price: '180 شيكل', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(2).jpeg' },
  { id: 204, title: 'طقم بناتي ناعم مع تطريز ورد (ليلى)', price: '190 شيكل', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(3).jpeg' },
  { id: 205, title: 'طقم بيبي ولادي أزرق (تيم)', price: '200 شيكل', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(4).jpeg' },
];

const BabyProducts = () => {
  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | منتجات البيبي - رقة وأمان</title>
      </Helmet>

      <PageHeader
        badge="Baby Collection"
        title="منتجات البيبي"
        subtitle="نقدم لطفلكِ أرقى التصاميم التي تجمع بين الجمال الفائق والراحة المثالية لجلد طفلكِ الرقيق."
        bgImage="/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(2).jpeg"
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
               <img 
                src="/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(3).jpeg" 
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', objectFit: 'cover', maxHeight: '500px' }} 
                alt="Baby Products" 
               />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
               <SectionHeader badge="Care & Love" title="نعومة فائقة لطفلكِ" right />
               <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '2', marginBottom: '2rem' }}>
                 في جمعية الطرحة الملكية التعاونية، نهتم بأطفالكِ بقدر اهتمامنا بكِ. نقدم مجموعة رقيقة من ملابس ومستلزمات الأطفال المصنوعة من خامات طبيعية صديقة للبشرة، مع لمسات فنية تجعل طفلكِ متميزاً منذ يومه الأول.
               </p>
               <div style={{ spaceY: '1rem', marginBottom: '2.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '15px' }}>
                   <Heart className="text-[var(--secondary-gold)]" size={18} /> خامات قطنية 100%
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '15px' }}>
                   <Star className="text-[var(--secondary-gold)]" size={18} /> تصاميم حصرية ومخصصة
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '700', color: 'var(--text-dark)' }}>
                   <Heart className="text-[var(--secondary-gold)]" size={18} /> تطريز يدوي لطيف
                 </div>
               </div>
               <Link to="/custom-order" className="btn-premium">طلب تفصيل خاص <ArrowLeft size={18} /></Link>
            </div>
          </div>

          <SectionHeader 
            badge="The Little Ones"
            title="مجموعتنا للأطفال"
          />

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '1.5rem',
            justifyItems: 'center'
          }}>
            {babyItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BabyProducts;
