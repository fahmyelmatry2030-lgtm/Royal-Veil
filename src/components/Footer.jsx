import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Share2, Globe, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #f0f0f0', padding: '80px 0 40px', direction: 'rtl' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
              <span style={{ fontWeight: '900', fontSize: '20px', letterSpacing: '3px', color: '#000' }}>ROYAL VEIL</span>
              <span style={{ fontSize: '8px', letterSpacing: '4px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: '700' }}>Palestinian Couture</span>
            </Link>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.8', marginBottom: '25px' }}>
              نجمع بين الإبداع اليدوي التقليدي واللمسات العصرية العالمية لنخلق قطعاً فريدة تحكي قصة أناقة فلسطينية لا تنتهي.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#000' }}><Camera size={18} strokeWidth={1.5} /></a>
              <a href="#" style={{ color: '#000' }}><Share2 size={18} strokeWidth={1.5} /></a>
              <a href="#" style={{ color: '#000' }}><Globe size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '25px', letterSpacing: '1px' }}>المجموعات</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/dresses" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>فساتين السهرة</Link></li>
              <li><Link to="/heritage" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>التراث الفلسطيني</Link></li>
              <li><Link to="/embroidery" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>تطريز البلايز</Link></li>
              <li><Link to="/baby" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>منتجات الأطفال</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '25px', letterSpacing: '1px' }}>الشركة</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/about" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>من نحن</Link></li>
              <li><Link to="/custom-order" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>طلب تفصيل خاص</Link></li>
              <li><Link to="/shop" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>المتجر الإلكتروني</Link></li>
              <li><Link to="/contact" style={{ color: '#666', textDecoration: 'none', fontSize: '13px' }}>تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '25px', letterSpacing: '1px' }}>تواصل معنا</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#666' }}>
                <Phone size={16} strokeWidth={1.5} /> +970 599 000 000
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#666' }}>
                <Mail size={16} strokeWidth={1.5} /> info@royalveil.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#666' }}>
                <MapPin size={16} strokeWidth={1.5} /> فلسطين، غزة
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '60px', paddingBottom: '60px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h4 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '15px' }}>انضمي إلى عالمنا</h4>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '30px' }}>اشتركي ليصلكِ أحدث مجموعاتنا الحصرية وعروضنا الخاصة.</p>
            <form style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                style={{ flex: 1, padding: '14px 20px', border: '1px solid #eee', borderRadius: '2px', outline: 'none' }}
              />
              <button style={{ 
                background: '#000', color: '#fff', padding: '0 30px', 
                fontWeight: '700', borderRadius: '2px', border: 'none', 
                display: 'flex', alignItems: 'center', gap: '8px' 
              }}>
                اشتراك <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ color: '#aaa', fontSize: '11px', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} ROYAL VEIL COUTURE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
