import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, badge, bgImage }) => {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        direction: 'rtl',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: bgImage ? '50vh' : '30vh',
        padding: '80px 2rem',
        background: bgImage
          ? 'transparent'
          : '#fff',
        borderBottom: bgImage ? 'none' : '1px solid #f0f0f0',
      }}
    >
      {/* Background image with high-end overlay */}
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
            }}
          />
        </>
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative', zIndex: 5,
          maxWidth: '800px', width: '100%', textAlign: 'center',
        }}
      >
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginBottom: '1.2rem', 
              fontSize: '10px', 
              fontWeight: '900', 
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
            }}
          >
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: bgImage ? '#fff' : 'var(--text-dark)', 
            fontWeight: '900',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1, 
            marginBottom: '1.8rem',
            fontFamily: 'var(--font-serif), serif',
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: bgImage ? 'rgba(255,255,255,0.9)' : 'var(--text-muted)', 
              fontSize: '15px',
              maxWidth: '550px', 
              margin: '0 auto', 
              lineHeight: 1.8,
              fontWeight: '400',
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
