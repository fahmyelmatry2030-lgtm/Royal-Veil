import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * ProductCard — مكون عرض المنتج بأسلوب بوتيك فاخر
 * مستوحى من تصميم turkihsa.com
 */
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  const handleOrder = (e) => {
    if (e) e.stopPropagation();
    navigate(`/order?product=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}`);
  };
  
  return (
    <motion.div
      onClick={handleOrder}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
      style={{
        width: '100%',
        marginBottom: '2rem',
        direction: 'rtl',
        cursor: 'pointer'
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '2/3',
          overflow: 'hidden',
          borderRadius: '2px',
          backgroundColor: '#f9f9f9',
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
              background: 'var(--bg-white)',
              color: 'var(--primary-purple)',
              boxShadow: 'var(--shadow-md)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ShoppingBag size={20} />
          </motion.button>
          
          <div style={{
            background: 'var(--bg-white)',
            padding: '8px 16px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: 'bold',
            color: 'var(--primary-purple)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: 'var(--shadow-md)',
          }}>
            <ShoppingBag size={14} /> اطلب الآن
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
            color: 'var(--text-dark)',
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
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(5px)',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            fontWeight: '800',
            color: 'var(--text-dark)',
            zIndex: 10,
          }}
        >
          <Star size={12} fill="var(--accent-gold)" color="var(--accent-gold)" />
          <span>4.9</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>(24)</span>
        </div>

        {/* Discount Tag (Optional) */}
        {product.discount && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'var(--primary-purple)',
              color: 'var(--text-light)',
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
          marginTop: '1.2rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '10px',
            color: 'var(--accent-gold)',
            marginBottom: '6px',
            textTransform: 'uppercase',
            fontWeight: '900'
          }}
        >
          Royal Veil Selection
        </p>
        <h3
          style={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--text-dark)',
            marginBottom: '10px',
            fontFamily: 'var(--font-serif), serif',
          }}
        >
          {product.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
          <span
            style={{
              fontSize: '15px',
              fontWeight: '900',
              color: 'var(--primary-purple)',
            }}
          >
            {product.price}
          </span>
          {product.oldPrice && (
            <span
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                textDecoration: 'line-through',
                fontWeight: '400'
              }}
            >
              {product.oldPrice}
            </span>
          )}
        </div>
        <button
          style={{
            width: '100%',
            padding: '10px',
            background: 'var(--primary-purple)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onClick={handleOrder}
        >
          <ShoppingBag size={16} />
          اطلب الآن
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
