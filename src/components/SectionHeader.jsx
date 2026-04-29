import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeader — مكون عنوان الأقسام الموحد
 * @param {string} title - العنوان الرئيسي
 * @param {string} subtitle - النص التوضيحي (اختياري)
 * @param {string} badge - شارة صغيرة فوق العنوان (اختياري)
 * @param {boolean} dark - هل الخلفية داكنة؟ (اختياري)
 * @param {boolean} right - هل المحاذاة لليمين؟ (اختياري)
 */
const SectionHeader = ({ title, subtitle, badge, dark = false, right = false }) => {
  return (
    <div
      style={{
        textAlign: right ? 'right' : 'center',
        marginBottom: '4rem',
        direction: 'rtl',
      }}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 12,
            padding: '4px 12px',
            borderRadius: 99,
            background: dark ? 'rgba(212,175,55,0.15)' : 'rgba(45,11,90,0.05)',
            border: `1px solid ${dark ? 'rgba(212,175,55,0.3)' : 'rgba(45,11,90,0.1)'}`,
          }}
        >
          <span style={{ color: dark ? '#F1D592' : '#2D0B5A', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {badge}
          </span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          color: dark ? '#fff' : '#2D0B5A',
          marginBottom: 16,
          fontFamily: 'Cairo, serif',
          lineHeight: 1.2,
        }}
      >
        {title}
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          height: 4,
          background: 'linear-gradient(90deg, #D4AF37, #A67C00)',
          margin: right ? '0 0 16px auto' : '0 auto 16px auto',
          borderRadius: 2,
        }}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: '1.1rem',
            color: dark ? 'rgba(255,255,255,0.6)' : '#666',
            maxWidth: 600,
            margin: right ? '0' : '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Cairo, sans-serif',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
