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
            background: dark ? 'rgba(212,175,55,0.15)' : 'var(--purple-light)',
            border: `1px solid ${dark ? 'rgba(212,175,55,0.3)' : 'var(--border-light)'}`,
          }}
        >
          <span style={{ color: dark ? 'var(--gold-light)' : 'var(--primary-purple)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
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
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 900,
          color: dark ? 'var(--text-light)' : 'var(--primary-purple)',
          marginBottom: 16,
          fontFamily: 'var(--font-serif), serif',
          lineHeight: 1.2,
        }}
      >
        {title}
      </motion.h2>

      {/* Underline Removed */}

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: '15px',
            color: dark ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)',
            maxWidth: 600,
            margin: right ? '0' : '0 auto',
            lineHeight: 1.8,
            fontFamily: 'var(--font-sans), sans-serif',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
