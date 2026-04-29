import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Camera, Share2, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white" style={{ direction: 'rtl' }}>
      <Helmet>
        <title>Royal Veil | تواصل معنا - نحن هنا لخدمتكِ</title>
      </Helmet>

      <PageHeader
        badge="Get in Touch"
        title="تواصل معنا"
        subtitle="يسعدنا دائماً سماع ملاحظاتكِ والإجابة على استفساراتكِ."
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Info */}
            <div>
              <SectionHeader badge="Contact Info" title="قنوات الاتصال" right />
              <p style={{ color: '#666', mb: '3rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                نحن متاحون للرد على جميع استفساراتكِ بخصوص الطلبات الخاصة أو المتجر الإلكتروني. لا تترددي في التواصل معنا.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: '#fafafa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#888', fontWeight: '700', textTransform: 'uppercase' }}>اتصلي بنا</p>
                    <p style={{ fontSize: '18px', fontWeight: '800' }}>+970 599 000 000</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: '#fafafa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#888', fontWeight: '700', textTransform: 'uppercase' }}>البريد الإلكتروني</p>
                    <p style={{ fontSize: '18px', fontWeight: '800' }}>info@royalveil.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: '#fafafa', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#888', fontWeight: '700', textTransform: 'uppercase' }}>موقعنا</p>
                    <p style={{ fontSize: '18px', fontWeight: '800' }}>فلسطين، غزة، شارع المبدعين</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <p style={{ fontWeight: '800', marginBottom: '1.5rem', fontSize: '14px' }}>تابعينا على</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ width: '40px', height: '40px', border: '1px solid #eee', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222' }}><Camera size={18} /></a>
                  <a href="#" style={{ width: '40px', height: '40px', border: '1px solid #eee', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222' }}><Share2 size={18} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: '#fafafa', padding: '4rem', borderRadius: '4px', border: '1px solid #f0f0f0' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '2.5rem' }}>أرسلي لنا رسالة</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <input type="text" placeholder="الاسم الكامل" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px', background: '#fff' }} />
                </div>
                <div>
                  <input type="email" placeholder="البريد الإلكتروني" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px', background: '#fff' }} />
                </div>
                <div>
                  <input type="text" placeholder="الموضوع" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px', background: '#fff' }} />
                </div>
                <div>
                  <textarea rows="5" placeholder="اكتبي رسالتك هنا..." style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '2px', background: '#fff' }}></textarea>
                </div>
                <button type="submit" style={{ 
                  background: '#222', color: '#fff', padding: '16px', fontWeight: '800', 
                  borderRadius: '2px', cursor: 'pointer', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', gap: '10px' 
                }}>
                  إرسال الرسالة <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
