import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ZoomIn } from 'lucide-react';

/**
 * ProductCard — مكون عرض المنتج بأسلوب بوتيك فاخر
 * مستوحى من تصميم turkihsa.com
 */
const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        marginBottom: '2rem',
        direction: 'rtl',
      }}
      className="group"
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3/4',
          overflow: 'hidden',
          borderRadius: '4px',
          backgroundColor: '#f5f5f5',
          cursor: 'pointer',
        }}
      >
        <img
          src={product.img}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          className="group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.15)',
            opacity: 0,
            transition: 'opacity 0.3s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="group-hover:opacity-100"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              color: '#000',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <ShoppingBag size={20} />
          </motion.button>
          
          <div style={{
            background: '#fff',
            padding: '8px 16px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            <ZoomIn size={14} /> عرض التفاصيل
          </div>
        </div>

        {/* Wishlist Icon */}
        <button
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            color: '#222',
            zIndex: 10,
            transition: 'all 0.2s',
          }}
          className="hover:bg-white hover:text-red-500"
        >
          <Heart size={16} />
        </button>

        {/* Ratings Badge (Bottom Left) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(255,255,255,0.9)',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            fontWeight: '800',
            color: '#000',
            zIndex: 10,
          }}
        >
          <Star size={12} fill="#D4AF37" color="#D4AF37" />
          <span>4.9</span>
          <span style={{ color: '#888', fontWeight: '400' }}>(24)</span>
        </div>

        {/* Discount Tag (Optional) */}
        {product.discount && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: '#000',
              color: '#fff',
              padding: '4px 10px',
              fontSize: '10px',
              fontWeight: 'bold',
              borderRadius: '2px',
            }}
          >
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div
        style={{
          marginTop: '1rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            color: '#888',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Royal Veil Selection
        </p>
        <h3
          style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#222',
            marginBottom: '8px',
            fontFamily: 'Cairo, sans-serif',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '16px',
              fontWeight: '800',
              color: '#D4AF37',
            }}
          >
            {product.price}
          </span>
          {product.oldPrice && (
            <span
              style={{
                fontSize: '13px',
                color: '#aaa',
                textDecoration: 'line-through',
              }}
            >
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
