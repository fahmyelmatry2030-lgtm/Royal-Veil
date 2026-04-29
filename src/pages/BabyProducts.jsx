import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Heart, Star, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const babyItems = [
  { id: 201, title: 'بدلة غمرة للأطفال بتطريز تراثي', price: '150$', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600' },
  { id: 202, title: 'فستان بيبي مطرز يدوي ناعم', price: '85$', img: 'https://images.unsplash.com/photo-1519706347221-f090d81c8412?auto=format&fit=crop&q=80&w=600' },
  { id: 203, title: 'طقم ولادة ملكي مع قبعة', price: '220$', img: 'https://images.unsplash.com/photo-1537678122130-b023ff055042?auto=format&fit=crop&q=80&w=600' },
  { id: 204, title: 'قبعة وقفازات مطرزة يدوياً', price: '45$', img: 'https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=600' },
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
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
               <img 
                src="https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=800" 
                style={{ width: '100%', borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} 
                alt="Baby Products" 
               />
            </div>
            <div style={{ flex: '1', minWidth: '300px' }}>
               <SectionHeader badge="Care & Love" title="نعومة فائقة لطفلكِ" right />
               <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '2', marginBottom: '2rem' }}>
                 في رويال فيل، نهتم بأطفالكِ بقدر اهتمامنا بكِ. نقدم مجموعة رقيقة من ملابس ومستلزمات الأطفال المصنوعة من خامات طبيعية صديقة للبشرة، مع لمسات فنية تجعل طفلكِ متميزاً منذ يومه الأول.
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
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
