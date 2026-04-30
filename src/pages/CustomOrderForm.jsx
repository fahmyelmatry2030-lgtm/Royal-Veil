import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const CustomOrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ direction: 'rtl', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'var(--bg-white)' }}>
        <div style={{ maxWidth: '500px', padding: '2rem' }}>
          <CheckCircle2 size={80} style={{ color: 'var(--accent-gold)', marginBottom: '2rem' }} />
          <h2 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '1.5rem' }}>شكراً لثقتكِ بنا!</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '16px' }}>
            تم استلام طلب التفصيل الخاص بكِ بنجاح. سيقوم فريق المصممين لدينا بمراجعة الطلب والتواصل معكِ خلال 24 ساعة لمناقشة التفاصيل والقياسات.
          </p>
          <button onClick={() => setSubmitted(false)} style={{ marginTop: '3rem', background: '#000', color: '#fff', padding: '16px 40px', fontWeight: '700', borderRadius: '2px', border: 'none' }}>إرسال طلب آخر</button>
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

             <div style={{ background: 'var(--bg-lavender)', padding: '4rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '2.5rem' }}>تفاصيل الطلب</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <input type="text" placeholder="الاسم الكامل" required style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }} />
                      <input type="tel" placeholder="رقم الهاتف" required style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }} />
                   </div>
                   <input type="email" placeholder="البريد الإلكتروني" required style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }} />
                   <select style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px', background: 'var(--bg-white)' }}>
                      <option value="dress">فستان سهرة / زفاف</option>
                      <option value="heritage">قطعة تراثية / ثوب</option>
                      <option value="embroidery">تطريز قطعة خاصة</option>
                      <option value="baby">ملابس أطفال</option>
                   </select>
                   <textarea rows="4" placeholder="وصفي لنا التصميم الذي تحلمين به (الألوان، نوع القماش، الإضافات)..." style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }}></textarea>
                   <textarea rows="2" placeholder="القياسات التقريبية (أو اطلبي مساعدة فريقنا)" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px' }}></textarea>
                   
                   <button type="submit" style={{ 
                     background: '#222', color: '#fff', padding: '16px', fontWeight: '800', 
                     borderRadius: '2px', border: 'none', cursor: 'pointer', 
                     display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' 
                   }}>
                     إرسال طلب التفصيل <Send size={18} />
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
