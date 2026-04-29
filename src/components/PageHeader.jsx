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
              marginBottom: '1rem', 
              fontSize: '11px', 
              fontWeight: '800', 
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: bgImage ? '#fff' : '#D4AF37',
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
            color: bgImage ? '#fff' : '#000', 
            fontWeight: '900',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1, 
            marginBottom: '1.5rem',
            fontFamily: 'serif',
            letterSpacing: '1px'
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
              color: bgImage ? 'rgba(255,255,255,0.8)' : '#666', 
              fontSize: '16px',
              maxWidth: '500px', 
              margin: '0 auto', 
              lineHeight: 1.6,
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
