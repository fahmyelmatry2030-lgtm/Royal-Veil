import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Camera, Share2, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ direction: 'rtl', background: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | تواصل معنا - نحن هنا لخدمتكِ</title>
      </Helmet>

      <PageHeader
        badge="Get in Touch"
        title="تواصل معنا"
        subtitle="يسعدنا دائماً سماع ملاحظاتكِ والإجابة على استفساراتكِ."
        bgImage="/Images/IMG-20260429-WA0014.jpg"
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Info */}
            <div>
              <SectionHeader badge="Contact Info" title="قنوات الاتصال" right />
              <p style={{ color: 'var(--text-muted)', mb: '3rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                نحن متاحون للرد على جميع استفساراتكِ بخصوص الطلبات الخاصة أو المتجر الإلكتروني. لا تترددي في التواصل معنا.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>اتصلي بنا</p>
                    <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-purple)' }}>+972 50-554-2323</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>البريد الإلكتروني</p>
                    <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-purple)' }}>royalveil529@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>موقعنا</p>
                    <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-purple)' }}>فلسطين - القدس - شارع صلاح الدين</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <p style={{ fontWeight: '800', marginBottom: '1.5rem', fontSize: '14px', color: 'var(--primary-purple)' }}>تابعينا على</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ width: '40px', height: '40px', border: '1px solid var(--border-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}><Camera size={18} /></a>
                  <a href="#" style={{ width: '40px', height: '40px', border: '1px solid var(--border-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}><Share2 size={18} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: 'var(--bg-lavender)', padding: '4rem', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '2.5rem', color: 'var(--primary-purple)' }}>أرسلي لنا رسالة</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <input type="text" placeholder="الاسم الكامل" style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} />
                </div>
                <div>
                  <input type="email" placeholder="البريد الإلكتروني" style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} />
                </div>
                <div>
                  <input type="text" placeholder="الموضوع" style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} />
                </div>
                <div>
                  <textarea rows="5" placeholder="اكتبي رسالتك هنا..." style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }}></textarea>
                </div>
                <button type="submit" style={{ 
                  background: 'var(--primary-purple)', color: 'var(--text-light)', padding: '16px', fontWeight: '800', 
                  borderRadius: '2px', cursor: 'pointer', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', gap: '10px', border: 'none'
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
