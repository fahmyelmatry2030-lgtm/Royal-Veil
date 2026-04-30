import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  PlusCircle, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Menu,
  X,
  LogOut,
  Bell,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const stats = [
    { title: 'إجمالي الطلبات', value: '١٢٤', icon: <ShoppingBag size={24} />, trend: '+١٢٪', color: 'var(--primary-purple)' },
    { title: 'إجمالي المبيعات', value: '٤٥,٠٠٠ شيكل', icon: <TrendingUp size={24} />, trend: '+٨٪', color: 'var(--accent-gold)' },
    { title: 'العملاء الجدد', value: '٣٢', icon: <Users size={24} />, trend: '+١٥٪', color: '#4CAF50' },
    { title: 'طلبات قيد التنفيذ', value: '١٨', icon: <Clock size={24} />, trend: '-٢٪', color: '#FF9800' },
  ];

  const recentOrders = [
    { id: '#12345', customer: 'أمل العتيبي', product: 'فستان سهرة ملكي', date: '٢٠٢٤/٠٤/٣٠', status: 'تم التوصيل', price: '٣٥٠٠ شيكل' },
    { id: '#12344', customer: 'سارة خالد', product: 'طقم تطريز يدوي', date: '٢٠٢٤/٠٤/٢٩', status: 'قيد التنفيذ', price: '٢٨٠٠ شيكل' },
    { id: '#12343', customer: 'ليلى أحمد', product: 'عباءة مخملية', date: '٢٠٢٤/٠٤/٢٩', status: 'تم الإلغاء', price: '١٩٠٠ شيكل' },
    { id: '#12342', customer: 'نورة محمد', product: 'فستان أطفال مطرز', date: '٢٠٢٤/٠٤/٢٨', status: 'تم التوصيل', price: '١٢٠٠ شيكل' },
  ];

  const SidebarItem = ({ id, icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        background: activeTab === id ? 'rgba(177, 156, 217, 0.1)' : 'transparent',
        border: 'none',
        borderRight: activeTab === id ? '4px solid var(--primary-purple)' : '4px solid transparent',
        color: activeTab === id ? 'var(--primary-purple)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'all 0.3s',
        textAlign: 'right',
        fontSize: '16px',
        fontWeight: activeTab === id ? '700' : '500'
      }}
    >
      {icon}
      {isSidebarOpen && <span>{label}</span>}
    </button>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa', direction: 'rtl' }}>
      
      {/* ─── Sidebar ─── */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? '280px' : '80px' }}
        style={{ 
          background: '#fff', 
          boxShadow: '2px 0 10px rgba(0,0,0,0.05)', 
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ padding: '30px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {isSidebarOpen && (
            <h2 style={{ fontSize: '20px', fontWeight: '900', color: 'var(--primary-purple)', letterSpacing: '1px' }}>
              ROYAL DASH
            </h2>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav style={{ flex: 1, marginTop: '20px' }}>
          <SidebarItem id="overview" icon={<LayoutDashboard size={20} />} label="نظرة عامة" />
          <SidebarItem id="orders" icon={<ShoppingBag size={20} />} label="الطلبات" />
          <SidebarItem id="products" icon={<PlusCircle size={20} />} label="المنتجات" />
          <SidebarItem id="customers" icon={<Users size={20} />} label="العملاء" />
          <SidebarItem id="settings" icon={<Settings size={20} />} label="الإعدادات" />
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
          <button style={{ 
            width: '100%', display: 'flex', alignItems: 'center', gap: '12px', 
            padding: '12px', background: 'transparent', border: 'none', 
            color: '#ff4d4d', cursor: 'pointer', fontWeight: '600'
          }}>
            <LogOut size={20} />
            {isSidebarOpen && <span>تسجيل الخروج</span>}
          </button>
        </div>
      </motion.aside>

      {/* ─── Main Content ─── */}
      <main style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--purple-dark)' }}>أهلاً بك، أدمن</h1>
            <p style={{ color: 'var(--text-muted)' }}>إليك ملخص سريع لأداء متجرك اليوم.</p>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="بحث عن طلب أو عميل..." 
                style={{ 
                  padding: '12px 45px 12px 20px', borderRadius: '50px', border: '1px solid #ddd',
                  width: '300px', fontSize: '14px', outline: 'none'
                }}
              />
              <Search size={18} style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            </div>
            <button style={{ position: 'relative', background: '#fff', border: '1px solid #eee', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Bell size={20} color="var(--text-muted)" />
              <span style={{ position: 'absolute', top: '0', right: '0', width: '12px', height: '12px', background: '#ff4d4d', borderRadius: '50%', border: '2px solid #fff' }}></span>
            </button>
            <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--bg-lavender)', overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <img src="https://ui-avatars.com/api/?name=Admin&background=B19CD9&color=fff" alt="Admin" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginBottom: '40px' }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              style={{ 
                background: '#fff', padding: '25px', borderRadius: '16px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ background: `${stat.color}15`, color: stat.color, padding: '12px', borderRadius: '12px' }}>
                  {stat.icon}
                </div>
                <span style={{ color: stat.trend.startsWith('+') ? '#4CAF50' : '#ff4d4d', fontSize: '14px', fontWeight: '700' }}>
                  {stat.trend}
                </span>
              </div>
              <h3 style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>{stat.title}</h3>
              <p style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)' }}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <section style={{ background: '#fff', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--purple-dark)' }}>آخر الطلبات</h2>
            <Link to="/admin/orders" style={{ color: 'var(--primary-purple)', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>عرض الكل</Link>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f8f9fa' }}>
                  <th style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>رقم الطلب</th>
                  <th style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>العميل</th>
                  <th style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>المنتج</th>
                  <th style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>التاريخ</th>
                  <th style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>الحالة</th>
                  <th style={{ padding: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>السعر</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f8f9fa' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: 'var(--text-dark)' }}>{order.id}</td>
                    <td style={{ padding: '15px', color: 'var(--text-dark)' }}>{order.customer}</td>
                    <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{order.product}</td>
                    <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{order.date}</td>
                    <td style={{ padding: '15px' }}>
                      <span style={{ 
                        padding: '6px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700',
                        background: order.status === 'تم التوصيل' ? '#E8F5E9' : order.status === 'تم الإلغاء' ? '#FFEBEE' : '#FFF3E0',
                        color: order.status === 'تم التوصيل' ? '#4CAF50' : order.status === 'تم الإلغاء' ? '#F44336' : '#FB8C00'
                      }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{ padding: '15px', fontWeight: '700', color: 'var(--primary-purple)' }}>{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AdminDashboard;
