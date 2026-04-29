import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Filter, Search, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, title: 'فستان مخمل مطرز بخيوط الحرير', price: '450$', category: 'فساتين', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'بلوزة تطريز يدوي فلسطيني أصيل', price: '120$', category: 'تطريز', img: 'https://images.unsplash.com/photo-1605646351745-9788e0b6d91f?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'طقم بيبي كلاسيك بتطريز ناعم', price: '85$', category: 'بيبي', img: 'https://images.unsplash.com/photo-1519706347221-f090d81c8412?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'شال تراثي مقصب مع شراشيب يدوية', price: '60$', category: 'تراث', img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'فستان زفاف دانتيل مع ذيل طويل', price: '2200$', category: 'فساتين', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'قميص رجالي مطرز بنقشة ملكية', price: '95$', category: 'تطريز', img: 'https://images.unsplash.com/photo-1598033129183-c4f50c717658?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'عباءة مطرزة بتصميم عصري', price: '180$', category: 'تطريز', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'ثوب فلسطيني تراثي مطرز يدوياً', price: '350$', category: 'تراث', img: 'https://images.unsplash.com/photo-1582533089852-0243ed27bbd8?auto=format&fit=crop&q=80&w=600' },
];

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('الكل');

  return (
    <div style={{ direction: 'rtl', backgroundColor: '#fff' }}>
      <Helmet>
        <title>Royal Veil | المتجر - تسوقي أجمل القطع الجاهزة</title>
      </Helmet>

      <PageHeader
        badge="Ready to Wear"
        title="المتجر الإلكتروني"
        subtitle="اختاري من تشكيلتنا الواسعة من القطع الجاهزة والمميزة التي تناسب كل ذوق."
      />

      {/* Control Bar */}
      <section style={{ 
        borderBottom: '1px solid #eee', 
        position: 'sticky', 
        top: '68px', 
        background: '#fff', 
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
                color: '#222'
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
                    color: activeCategory === cat ? '#D4AF37' : '#888',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
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
                  border: '1px solid #eee',
                  borderRadius: '2px',
                  fontSize: '13px',
                  width: '200px'
                }}
              />
              <Search size={16} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc' }} />
            </div>
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: '600',
              color: '#222'
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Style Enrichment Section */}
      <section style={{ padding: '8rem 0', borderTop: '1px solid #f0f0f0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeader 
            badge="The Experience"
            title="لماذا تتسوقين من رويال فيل؟"
            subtitle="نحن لا نبيع الملابس فقط، بل نقدم تجربة فريدة مصممة خصيصاً لكِ."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            <div>
              <h4 style={{ fontWeight: '900', marginBottom: '15px', fontFamily: 'var(--font-serif)' }}>شحن سريع وآمن</h4>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7' }}>نصل إليكِ أينما كنتِ في فلسطين وباقي أنحاء العالم بأعلى معايير الأمان.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900', marginBottom: '15px', fontFamily: 'var(--font-serif)' }}>تعديل مجاني</h4>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7' }}>نقدم خدمة تعديل القياسات مجاناً لضمان المظهر المثالي لكل قطعة تقتنينها.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '900', marginBottom: '15px', fontFamily: 'var(--font-serif)' }}>تغليف فاخر</h4>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.7' }}>تصلكِ منتجاتنا في صناديق فاخرة تليق بذوقكِ، لتكون هدية مثالية لنفسكِ أو لمن تحبين.</p>
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
                background: '#fff', zIndex: 101, padding: '2rem', direction: 'rtl'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '800' }}>تصفية المنتجات</h2>
                <button onClick={() => setFilterOpen(false)} style={{ fontSize: '24px' }}>&times;</button>
              </div>

              {/* Add filter options here similar to Dresses.jsx if needed */}
              <p style={{ color: '#888', fontSize: '14px' }}>تتوفر خيارات التصفية حسب اللون، السعر، والمقاس قريباً...</p>

              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <button style={{ 
                  width: '100%', padding: '14px', background: '#222', color: '#fff', 
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
