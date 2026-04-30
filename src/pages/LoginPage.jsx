import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(135deg, #fcfcfe 0%, #f5f0ff 100%)',
      padding: '20px',
      fontFamily: 'var(--font-sans)'
    }}>
      <Helmet>
        <title>تسجيل الدخول | لوحة التحكم الملكية</title>
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          width: '100%', 
          maxWidth: '450px', 
          background: '#fff', 
          padding: '50px 40px', 
          borderRadius: '24px', 
          boxShadow: '0 20px 60px rgba(93, 62, 139, 0.08)',
          border: '1px solid rgba(177, 156, 217, 0.2)',
          textAlign: 'center'
        }}
      >
        {/* Logo/Icon */}
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'var(--primary-purple)', 
          borderRadius: '24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 30px',
          boxShadow: '0 10px 20px rgba(177, 156, 217, 0.3)'
        }}>
          <ShieldCheck size={40} color="#fff" />
        </div>

        <h1 style={{ fontSize: '24px', fontWeight: '900', color: 'var(--purple-dark)', marginBottom: '10px' }}>
          مرحباً بك مجدداً
        </h1>
        <p style={{ color: '#888', marginBottom: '40px', fontSize: '15px' }}>
          الرجاء إدخال بيانات الاعتماد للوصول إلى لوحة الإدارة.
        </p>

        <form onSubmit={handleLogin} style={{ textAlign: 'right', direction: 'rtl' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px', color: '#555' }}>البريد الإلكتروني</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@royalveil.com" 
                style={{ 
                  width: '100%', 
                  padding: '14px 45px 14px 20px', 
                  borderRadius: '12px', 
                  border: '1px solid #eee', 
                  outline: 'none',
                  fontSize: '15px',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                onBlur={(e) => e.target.style.borderColor = '#eee'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '700', color: '#555' }}>كلمة المرور</label>
              <a href="#" style={{ fontSize: '12px', color: 'var(--primary-purple)', textDecoration: 'none', fontWeight: '600' }}>نسيت كلمة المرور؟</a>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                style={{ 
                  width: '100%', 
                  padding: '14px 45px 14px 50px', 
                  borderRadius: '12px', 
                  border: '1px solid #eee', 
                  outline: 'none',
                  fontSize: '15px',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-purple)'}
                onBlur={(e) => e.target.style.borderColor = '#eee'}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            type="submit"
            style={{ 
              width: '100%', 
              padding: '16px', 
              background: 'var(--primary-purple)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '12px', 
              fontSize: '16px', 
              fontWeight: '800', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 10px 25px rgba(177, 156, 217, 0.4)'
            }}
          >
            {loading ? (
              <div style={{ width: '20px', height: '20px', border: '2px solid #fff', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            ) : (
              <>
                <span>دخول للوحة التحكم</span>
                <ArrowRight size={20} />
              </>
            )}
          </motion.button>
        </form>

        <p style={{ marginTop: '30px', fontSize: '13px', color: '#aaa' }}>
          جميع الحقوق محفوظة © ٢٠٢٤ جمعية الطرحة الملكية
        </p>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </motion.div>
    </div>
  );
};

export default LoginPage;
