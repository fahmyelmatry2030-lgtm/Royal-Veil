import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Filter, Search, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, title: 'فستان سهرة مطرز بخيوط الحرير', price: '450 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0021.jpg' },
  { id: 2, title: 'فستان سهرة بالكريستال والأحجار', price: '1200 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0022.jpg' },
  { id: 3, title: 'عباءة سوداء بتطريز ذهبي فاخر', price: '350 شيكل', category: 'عباءات', img: '/Images/IMG-20260429-WA0023.jpg' },
  { id: 4, title: 'فستان زفاف دانتيل كلاسيك', price: '2500 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0024.jpg' },
  { id: 5, title: 'فستان زفاف دانتيل بذيل طويل', price: '2800 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0025.jpg' },
  { id: 6, title: 'فستان سهرة مطرز بخيوط الزهور', price: '900 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0035.jpg' },
  { id: 7, title: 'فستان سهرة كريستال بذيل ملكي', price: '1500 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0036.jpg' },
  { id: 8, title: 'فستان زفاف بطرحة دانتيل طويلة', price: '3200 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0039.jpg' },
];

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('الكل');

  return (
    <div style={{ direction: 'rtl', backgroundColor: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | المتجر - تسوقي أجمل القطع الجاهزة</title>
      </Helmet>

      <PageHeader
        badge="Ready to Wear"
        title="المتجر الإلكتروني"
        subtitle="اختاري من تشكيلتنا الواسعة من القطع الجاهزة والمميزة التي تناسب كل ذوق."
        bgImage="/Images/IMG-20260429-WA0035.jpg"
      />

      {/* Control Bar */}
      <section style={{ 
        borderBottom: '1px solid var(--border-light)', 
        position: 'sticky', 
        top: '68px', 
        background: 'var(--bg-white)', 
        zIndex: 40 
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '12px 2rem' 
        }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setFilterOpen(true)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontWeight: 'bold', 
                fontSize: '14px',
                color: 'var(--primary-purple)'
              }}
            >
              <Filter size={18} /> تصفية المنتجات
            </button>
            <div style={{ display: 'none' }} className="md:flex items-center gap-6">
              {['الكل', 'فساتين', 'تطريز', 'تراث', 'بيبي'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontSize: '13px',
                    fontWeight: activeCategory === cat ? '800' : '500',
                    color: activeCategory === cat ? 'var(--accent-gold)' : 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', display: 'none' }} className="lg:block">
              <input 
                type="text" 
                placeholder="ابحثي هنا..." 
                style={{
                  padding: '8px 35px 8px 12px',
                  border: '1px solid var(--border-light)',
                  borderRadius: '2px',
                  fontSize: '13px',
                  width: '200px'
                }}
              />
              <Search size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: '600',
              color: 'var(--primary-purple)'
            }}>
              ترتيب حسب <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '1.5rem',
            justifyItems: 'center'
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Style Enrichment Section */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeader 
            badge="The Experience"
            title="لماذا تتسوقين من جمعية الطرحة الملكية التعاونية؟"
            subtitle="نحن لا نبيع الملابس فقط، بل نقدم تجربة فريدة مصممة خصيصاً لكِ."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            <div>
              <h4 style={{ fontWeight: '900', marginBottom: '15px', fontFamily: 'var(--font-serif)', color: 'var(--primary-purple)' }}>شحن سريع وآمن</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>نصل إليكِ أينما كنتِ في فلسطين وباقي أنحاء العالم بأعلى معايير الأمان.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900', marginBottom: '15px', fontFamily: 'var(--font-serif)', color: 'var(--primary-purple)' }}>تعديل مجاني</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>نقدم خدمة تعديل القياسات مجاناً لضمان المظهر المثالي لكل قطعة تقتنينها.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900', marginBottom: '15px', fontFamily: 'var(--font-serif)', color: 'var(--primary-purple)' }}>تغليف فاخر</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>تصلكِ منتجاتنا في صناديق فاخرة تليق بذوقكِ، لتكون هدية مثالية لنفسكِ أو لمن تحبين.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Modal */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '380px',
                background: 'var(--bg-white)', zIndex: 101, padding: '2rem', direction: 'rtl'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-purple)' }}>تصفية المنتجات</h2>
                <button onClick={() => setFilterOpen(false)} style={{ fontSize: '24px', color: 'var(--primary-purple)' }}>&times;</button>
              </div>

              {/* Add filter options here similar to Dresses.jsx if needed */}
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>تتوفر خيارات التصفية حسب اللون، السعر، والمقاس قريباً...</p>

              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <button style={{ 
                  width: '100%', padding: '14px', background: 'var(--primary-purple)', color: 'var(--text-light)', 
                  fontWeight: '700', borderRadius: '2px' 
                }}>
                  تحديث النتائج
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
