import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, MapPin, Phone, User, ShoppingBag, Truck, CreditCard } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

import { storage } from '../utils/storage';

const OrderForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [siteContent] = useState(storage.getContent());
  
  const [productName, setProductName] = useState(queryParams.get('product') || '');
  const [productPrice, setProductPrice] = useState(queryParams.get('price') || '');
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    area: 'القدس',
    address: '',
    notes: '',
    city: '',
    size: '',
    paymentMethod: 'cod'
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
      city: formData.city,
      size: formData.size,
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
*المحافظة/المدينة:* ${formData.city}
*المقاس:* ${formData.size || 'لم يتم التحديد'}
*العنوان:* ${formData.address}
*طريقة الدفع:* ${formData.paymentMethod === 'cod' ? 'الدفع عند الاستلام' : formData.paymentMethod === 'visa' ? 'فيزا / ماستر كارد' : 'باي بال'}
*رسوم التوصيل:* ${shippingCost} شيكل
--------------------------
*ملاحظات:* ${formData.notes || 'لا يوجد'}`;

    const whatsappNumber = siteContent?.common?.footer?.whatsapp?.replace(/\D/g, '') || '972585040233';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
        bgImage="/Images/happy_customer.png"
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
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '14px', color: 'var(--text-dark)' }}>منطقة التوصيل:</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={18} style={{ position: 'absolute', right: '15px', top: '16px', color: 'var(--text-muted)', zIndex: 1 }} />
                    <select 
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      style={{ width: '100%', padding: '14px 45px 14px 14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)', cursor: 'pointer', appearance: 'none' }}
                    >
                      <option value="القدس">القدس (30 شيكل)</option>
                      <option value="الضفة الغربية">كافة مدن الضفة الغربية (30 شيكل)</option>
                      <option value="مناطق 48">مناطق الـ 48 - شمال وجنوب (70 شيكل)</option>
                    </select>
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '14px', color: 'var(--text-dark)' }}>المحافظة / المدينة:</label>
                  <input 
                    type="text" 
                    placeholder="مثلاً: نابلس، حيفا، رام الله..." 
                    required 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} 
                  />
                </div>

                <div style={{ position: 'relative' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '800', fontSize: '14px', color: 'var(--text-dark)' }}>المقاس (Size):</label>
                  <select 
                    value={formData.size}
                    onChange={(e) => setFormData({...formData, size: e.target.value})}
                    required
                    style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '4px', background: 'var(--bg-white)', color: 'var(--text-dark)', cursor: 'pointer' }}
                  >
                    <option value="">اختاري المقاس...</option>
                    <option value="S">Small (S)</option>
                    <option value="M">Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">X-Large (XL)</option>
                    <option value="XXL">XX-Large (XXL)</option>
                    <option value="تفصيل خاص">تفصيل حسب القياس (سنتواصل معكِ)</option>
                  </select>
                </div>

                {/* Payment Methods */}
                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '800', fontSize: '15px' }}>طريقة الدفع:</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px' }}>
                    {[
                      { id: 'cod', label: 'دفع عند الاستلام', icon: <Truck size={16} /> },
                      { id: 'visa', label: 'فيزا / ماستر', icon: <CreditCard size={16} /> },
                      { id: 'paypal', label: 'باي بال', icon: <div style={{ fontSize: '14px', fontWeight: '900', color: '#003087' }}>P</div> }
                    ].map(method => (
                      <div 
                        key={method.id}
                        onClick={() => setFormData({...formData, paymentMethod: method.id})}
                        style={{
                          padding: '12px 10px',
                          border: `2px solid ${formData.paymentMethod === method.id ? 'var(--accent-gold)' : 'var(--border-light)'}`,
                          borderRadius: '8px',
                          textAlign: 'center',
                          cursor: 'pointer',
                          background: formData.paymentMethod === method.id ? 'rgba(212,175,55,0.05)' : 'transparent',
                          transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ color: formData.paymentMethod === method.id ? 'var(--accent-gold)' : 'var(--text-muted)', marginBottom: '5px', display: 'flex', justifyContent: 'center' }}>{method.icon}</div>
                        <div style={{ fontSize: '12px', fontWeight: '700', color: formData.paymentMethod === method.id ? 'var(--text-dark)' : 'var(--text-muted)' }}>{method.label}</div>
                      </div>
                    ))}
                  </div>
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
