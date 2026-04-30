import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Share2, Globe, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-lavender)', borderTop: '1px solid var(--border-light)', padding: '80px 0 40px', direction: 'rtl' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
              <span style={{ fontWeight: '800', fontSize: '20px', color: 'var(--primary-purple)', fontFamily: 'var(--font-sans)' }}>ROYAL VEIL</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.8', marginBottom: '25px' }}>
              نجمع بين الإبداع اليدوي التقليدي واللمسات العصرية العالمية لنخلق قطعاً فريدة تحكي قصة أناقة فلسطينية لا تنتهي.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'var(--primary-purple)' }}><Camera size={18} strokeWidth={1.5} /></a>
              <a href="#" style={{ color: 'var(--primary-purple)' }}><Share2 size={18} strokeWidth={1.5} /></a>
              <a href="#" style={{ color: 'var(--primary-purple)' }}><Globe size={18} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '25px', letterSpacing: '1px', color: 'var(--primary-purple)' }}>المجموعات</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/dresses" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>فساتين السهرة</Link></li>
              <li><Link to="/heritage" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>التراث الفلسطيني</Link></li>
              <li><Link to="/embroidery" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>تطريز البلايز</Link></li>
              <li><Link to="/baby" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>منتجات الأطفال</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '25px', letterSpacing: '1px', color: 'var(--primary-purple)' }}>الشركة</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>من نحن</Link></li>
              <li><Link to="/team" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>طاقم العمل</Link></li>
              <li style={{ color: 'var(--text-muted)', fontSize: '13px' }}>توصيل القدس والضفة: 30 شيكل</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '13px' }}>توصيل مناطق 48: 70 شيكل</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '13px' }}>متوفر الدفع عند الاستلام</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '13px' }}>متوفر الدفع عبر PayPal</li>
              <li><Link to="/custom-order" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>طلب تفصيل خاص</Link></li>
              <li><Link to="/shop" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>المتجر الإلكتروني</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13px' }}>تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '800', marginBottom: '25px', letterSpacing: '1px', color: 'var(--primary-purple)' }}>تواصل معنا</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <Phone size={16} strokeWidth={1.5} color="var(--accent-gold)" /> +972 50-554-2323
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <Mail size={16} strokeWidth={1.5} color="var(--accent-gold)" /> royalveil529@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <MapPin size={16} strokeWidth={1.5} color="var(--accent-gold)" /> فلسطين - القدس - شارع صلاح الدين
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '60px', paddingBottom: '60px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h4 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '15px', color: 'var(--primary-purple)' }}>انضمي إلى عالمنا</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '30px' }}>اشتركي ليصلكِ أحدث مجموعاتنا الحصرية وعروضنا الخاصة.</p>
            <form style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                style={{ flex: 1, padding: '14px 20px', border: '1px solid var(--border-light)', borderRadius: '2px', outline: 'none' }}
              />
              <button style={{ 
                background: 'var(--primary-purple)', color: 'var(--text-light)', padding: '0 30px', 
                fontWeight: '700', borderRadius: '2px', border: 'none', 
                display: 'flex', alignItems: 'center', gap: '8px' 
              }}>
                اشتراك <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '11px', letterSpacing: '1px', opacity: 0.8 }}>
            © {new Date().getFullYear()} جمعية الطرحة الملكية التعاونية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
