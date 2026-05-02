import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

import { storage } from '../utils/storage';

const CustomOrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [siteContent] = useState(storage.getContent());
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: 'dress',
    details: '',
    sizes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const categoryMap = {
      'dress': 'فستان سهرة / زفاف',
      'heritage': 'قطعة تراثية / ثوب',
      'embroidery': 'تطريز قطعة خاصة',
      'baby': 'ملابس أطفال'
    };

    // 1. Save to Local Storage for Admin Dashboard
    storage.saveOrder({
      product: `تفصيل: ${categoryMap[formData.category]}`,
      price: 'قيد التسعير',
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      details: formData.details,
      sizes: formData.sizes,
      total: 0
    });

    // 2. Prepare WhatsApp Message
    const message = `*طلب تفصيل جديد*
--------------------------
*الاسم:* ${formData.fullName}
*الهاتف:* ${formData.phone}
*البريد:* ${formData.email}
*نوع القطعة:* ${categoryMap[formData.category]}
--------------------------
*التفاصيل:*
${formData.details}

*القياسات:*
${formData.sizes || 'طلب مساعدة'}`;

    const whatsappNumber = siteContent?.common?.footer?.whatsapp?.replace(/\D/g, '') || '972585040233';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ direction: 'rtl', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'var(--bg-white)' }}>
        <div style={{ maxWidth: '500px', padding: '2rem' }}>
          <CheckCircle2 size={80} style={{ color: 'var(--accent-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '1.5rem' }}>شكراً لثقتكِ بنا!</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '16px' }}>
            تم إرسال طلب التفصيل الخاص بكِ بنجاح عبر الواتساب. سيقوم فريق المصممين لدينا بالرد عليكِ قريباً.
          </p>
          <button onClick={() => setSubmitted(false)} style={{ marginTop: '3rem', background: '#000', color: '#fff', padding: '16px 40px', fontWeight: '700', borderRadius: '20px', border: 'none' }}>إرسال طلب آخر</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | طلب تفصيل خاص - صممي فستانكِ بنفسكِ</title>
      </Helmet>

      <PageHeader
        badge="Bespoke Service"
        title="طلب تفصيل خاص"
        subtitle="حولي فكرة أحلامكِ إلى حقيقة. صممي فستانكِ أو قطعتكِ التراثية بمساعدة خيرة مصممينا."
        bgImage="/Images/IMG-20260429-WA0016.jpg"
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
             <div>
                <SectionHeader badge="How it Works" title="خطوات تصميم قطعتكِ الفريدة" right />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                   {[
                     { step: '01', title: 'تعبئة النموذج', desc: 'أخبرينا بنوع القطعة والتفاصيل الأولية التي ترغبين بها.' },
                     { step: '02', title: 'الاستشارة الفنية', desc: 'سنتواصل معكِ لمناقشة الأقمشة، الألوان، والتصميم المقترح.' },
                     { step: '03', title: 'أخذ القياسات', desc: 'تزويدنا بالقياسات الدقيقة لضمان الملاءمة المثالية.' },
                     { step: '04', title: 'التنفيذ والشحن', desc: 'بدء العمل اليدوي بدقة وشحن القطعة إليكِ بأمان.' },
                   ].map((s, i) => (
                     <div key={i} style={{ display: 'flex', gap: '20px' }}>
                        <span style={{ fontSize: '24px', fontWeight: '900', color: 'var(--accent-gold)', opacity: 0.5 }}>{s.step}</span>
                        <div>
                           <h4 style={{ fontWeight: '800', fontSize: '18px', marginBottom: '8px' }}>{s.title}</h4>
                           <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div style={{ background: 'var(--bg-lavender)', padding: '4rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '2.5rem' }}>تفاصيل الطلب</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <input type="text" placeholder="الاسم الكامل" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }} />
                      <input type="tel" placeholder="رقم الهاتف" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }} />
                   </div>
                   <input type="email" placeholder="البريد الإلكتروني" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }} />
                   <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px', background: 'var(--bg-white)' }}>
                      <option value="dress">فستان سهرة / زفاف</option>
                      <option value="heritage">قطعة تراثية / ثوب</option>
                      <option value="embroidery">تطريز قطعة خاصة</option>
                      <option value="baby">ملابس أطفال</option>
                   </select>
                   <textarea rows="4" placeholder="وصفي لنا التصميم الذي تحلمين به (الألوان، نوع القماش، الإضافات)..." required value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }}></textarea>
                   <textarea rows="2" placeholder="القياسات التقريبية (أو اطلبي مساعدة فريقنا)" value={formData.sizes} onChange={e => setFormData({...formData, sizes: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }}></textarea>
                   
                   <button type="submit" style={{ 
                     background: '#222', color: '#fff', padding: '16px', fontWeight: '800', 
                     borderRadius: '2px', border: 'none', cursor: 'pointer', 
                     display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' 
                   }}>
                     إرسال عبر الواتساب <Send size={18} />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomOrderForm;
