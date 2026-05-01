import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Camera, Share2, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';

import { storage } from '../utils/storage';

const Contact = () => {
  const content = storage.getContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Save to Local Storage for Admin Dashboard
    storage.saveMessage({
      sender: formData.name,
      email: formData.email,
      subject: formData.subject,
      msg: formData.message
    });

    // 2. Prepare WhatsApp Message
    const waMessage = `*رسالة جديدة من الموقع*
--------------------------
*الاسم:* ${formData.name}
*البريد:* ${formData.email}
*الموضوع:* ${formData.subject}
--------------------------
*الرسالة:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/972505542323?text=${encodeURIComponent(waMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', minHeight: '100vh' }}>
      <Helmet>
        <title>Royal Veil | تواصل معنا - نحن هنا لخدمتكِ</title>
      </Helmet>

      <PageHeader
        badge="Get in Touch"
        title={content.contact.hero.title}
        subtitle={content.contact.hero.subtitle}
        bgImage="/Images/IMG-20260429-WA0014.jpg"
      />

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Info */}
            <div>
              <SectionHeader badge="Contact Info" title={content.contact.info.title} right />
              <p style={{ color: 'var(--text-muted)', mb: '3rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                {content.contact.info.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>اتصلي بنا</p>
                    <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-purple)' }}>{content.common.footer.phone}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>البريد الإلكتروني</p>
                    <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-purple)' }}>{content.common.footer.email}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--purple-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>موقعنا</p>
                    <p style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-purple)' }}>{content.common.footer.address}</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <p style={{ fontWeight: '800', marginBottom: '1.5rem', fontSize: '14px', color: 'var(--primary-purple)' }}>تابعينا على</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.instagram.com/veilroyal?igsh=MTEyMHBtZm15dmtqYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', border: '1px solid var(--border-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}><Camera size={18} /></a>
                  <a href="#" style={{ width: '40px', height: '40px', border: '1px solid var(--border-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}><Share2 size={18} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: 'var(--bg-lavender)', padding: '4rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '2.5rem', color: 'var(--primary-purple)' }}>أرسلي لنا رسالة</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <input type="text" placeholder="الاسم الكامل" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '20px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} />
                </div>
                <div>
                  <input type="email" placeholder="البريد الإلكتروني" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} />
                </div>
                <div>
                  <input type="text" placeholder="الموضوع" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }} />
                </div>
                <div>
                  <textarea rows="5" placeholder="اكتبي رسالتك هنا..." required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '14px', border: '1px solid var(--border-light)', borderRadius: '2px', background: 'var(--bg-white)', color: 'var(--text-dark)' }}></textarea>
                </div>
                <button type="submit" style={{ 
                  background: 'var(--primary-purple)', color: 'var(--text-light)', padding: '16px', fontWeight: '800', 
                  borderRadius: '2px', cursor: 'pointer', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', gap: '10px', border: 'none'
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

export default Contact;
