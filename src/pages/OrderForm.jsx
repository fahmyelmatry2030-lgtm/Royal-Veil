import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, MapPin, Phone, User, ShoppingBag, Truck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

import { storage } from '../utils/storage';

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [productName, setProductName] = useState(queryParams.get('product') || '');
  const [productPrice, setProductPrice] = useState(queryParams.get('price') || '');
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    area: 'القدس',
    address: '',
    notes: ''
  });

  const shippingPrices = {
    'القدس': 30,
    'الضفة الغربية': 30,
    'مناطق 48': 70
  };

  const [shippingCost, setShippingCost] = useState(30);

  useEffect(() => {
    setShippingCost(shippingPrices[formData.area] || 0);
  }, [formData.area]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Save to Local Storage for Admin Dashboard
    storage.saveOrder({
      product: productName,
      price: productPrice,
      fullName: formData.fullName,
      phone: formData.phone,
      area: formData.area,
      address: formData.address,
      notes: formData.notes,
      total: (parseInt(productPrice) || 0) + shippingCost
    });

    // 2. Prepare WhatsApp Message
    const message = `*طلب جديد من الموقع*
--------------------------
*المنتج:* ${productName}
*السعر:* ${productPrice}
--------------------------
*بيانات العميل:*
*الاسم:* ${formData.fullName}
*الهاتف:* ${formData.phone}
*المنطقة:* ${formData.area}
*العنوان:* ${formData.address}
*رسوم التوصيل:* ${shippingCost} شيكل
--------------------------
*ملاحظات:* ${formData.notes || 'لا يوجد'}`;

    const whatsappUrl = `https://wa.me/972505542323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>جمعية الطرحة الملكية | إتمام الطلب</title>
      </Helmet>

      <PageHeader
        badge="Checkout"
        title="إتمام الطلب"
        subtitle="يرجى إدخال بياناتك لتأكيد الطلب وسنقوم بالتواصل معكِ لتأكيد الموعد والتسليم."
        bgImage="/Images/IMG-20260429-WA0018.jpg"
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            
            {/* Order Summary */}
            <div style={{ background: 'var(--bg-lavender)', padding: '3rem', borderRadius: '20px', border: '1px solid var(--border-light)', height: 'fit-content' }}>
              <SectionHeader badge="Summary" title="ملخص الطلب" right />
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '2rem', padding: '20px', background: 'var(--purple-light)', borderRadius: '4px' }}>
                <ShoppingBag color="var(--accent-gold)" size={32} />
                <div>
                  <h4 style={{ fontWeight: '800', fontSize: '18px', color: 'var(--text-dark)' }}>{productName || 'منتج مخصص'}</h4>
                  <p style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{productPrice}</p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>سعر المنتج</span>
                  <span style={{ fontWeight: '700' }}>{productPrice}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>تكلفة التوصيل ({formData.area})</span>
                  <span style={{ fontWeight: '700' }}>{shippingCost} شيكل</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid var(--accent-gold)' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800' }}>الإجمالي التقريبي</span>
                  <span style={{ fontSize: '18px', fontWeight: '900', color: 'var(--accent-gold)' }}>
                    {parseInt(productPrice) + shippingCost} شيكل
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', padding: '15px', background: 'rgba(212,175,55,0.1)', borderRadius: '4px', border: '1px dashed var(--accent-gold)' }}>
                <p style={{ fontSize: '13px', color: 'var(--accent-gold)', textAlign: 'center', margin: 0 }}>
                  <Truck size={16} style={{ marginBottom: '-3px', marginLeft: '5px' }} />
                  خدمة الدفع عند الاستلام متوفرة
                </p>
              </div>
            </div>

            {/* Customer Form */}
            <div style={{ background: 'var(--bg-lavender)', padding: '3rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '2.5rem' }}>بيانات التسليم</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', right: '15px', top: '16px', color: 'var(--text-muted)' }} />
                  <input 
                    type="text" 
                    placeholder="الاسم الكامل" 
                    required 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    style={{ width: '100%', padding: '14px 45px 14px 14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} 
                  />
                </div>

                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', right: '15px', top: '16px', color: 'var(--text-muted)' }} />
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    style={{ width: '100%', padding: '14px 45px 14px 14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} 
                  />
                </div>

                <div style={{ position: 'relative' }}>
                  <MapPin size={18} style={{ position: 'absolute', right: '15px', top: '16px', color: 'var(--text-muted)', zIndex: 1 }} />
                  <select 
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    style={{ width: '100%', padding: '14px 45px 14px 14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)', cursor: 'pointer' }}
                  >
                    <option value="القدس">القدس</option>
                    <option value="الضفة الغربية">الضفة الغربية</option>
                    <option value="مناطق 48">مناطق 48 (شمال وجنوب)</option>
                  </select>
                </div>

                <textarea 
                  rows="3" 
                  placeholder="العنوان بالتفصيل (المدينة، الحي، الشارع، علامة مميزة)..." 
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)' }}
                ></textarea>

                <textarea 
                  rows="2" 
                  placeholder="ملاحظات إضافية (اختياري)..." 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)' }}
                ></textarea>
                
                <button type="submit" style={{ 
                  background: 'var(--primary-purple)', color: '#fff', padding: '18px', fontWeight: '800', 
                  borderRadius: '4px', border: 'none', cursor: 'pointer', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  marginTop: '1rem', transition: 'transform 0.2s'
                }}
                className="hover:scale-[1.02]"
                >
                  تأكيد الطلب وإرسال عبر واتساب <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderForm;
