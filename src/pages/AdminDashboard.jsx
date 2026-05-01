import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  DollarSign,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  MessageSquare,
  MoreVertical,
  UserPlus,
  PhoneCall
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { storage } from '../utils/storage';

// ─── Constants ───
const COLORS = ['#B19CD9', '#D4AF37', '#5D3E8B', '#A084CA'];

// ─── Components ───
const StatCard = ({ title, value, icon, trend, color, isUp }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    style={{ 
      background: '#fff', padding: '24px', borderRadius: '16px', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
      <div style={{ background: `${color}15`, color: color, padding: '12px', borderRadius: '12px' }}>
        {icon}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: isUp ? '#4CAF50' : '#F44336', fontSize: '12px', fontWeight: '700', background: isUp ? '#E8F5E9' : '#FFEBEE', padding: '4px 8px', borderRadius: '50px' }}>
        {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>
    <h3 style={{ fontSize: '14px', color: '#888', marginBottom: '4px', fontWeight: '500' }}>{title}</h3>
    <p style={{ fontSize: '24px', fontWeight: '800', color: '#2d3436' }}>{value}</p>
  </motion.div>
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  // Data State
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load Real Data
    setOrders(storage.getOrders());
    setMessages(storage.getMessages());
    setCustomers(storage.getCustomers());
    setSubscribers(storage.getSubscribers());
    setProducts(storage.getProducts());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const deleteMessage = (id) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('rv_messages', JSON.stringify(updated));
  };

  const deleteOrder = (id) => {
    const updated = orders.filter(o => o.id !== id);
    setOrders(updated);
    localStorage.setItem('rv_orders', JSON.stringify(updated));
  };

  const deleteProduct = (id) => {
    storage.deleteProduct(id);
    setProducts(storage.getProducts());
  };

  // Sub-Pages Rendering
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <StatCard title="إجمالي المبيعات" value={`${orders.reduce((sum, o) => sum + (parseInt(o.total) || 0), 0)} شيكل`} icon={<DollarSign size={20} />} trend="١٢.٥٪" color="var(--primary-purple)" isUp={true} />
              <StatCard title="الطلبات النشطة" value={orders.length} icon={<ShoppingBag size={20} />} trend="٥.٢٪" color="var(--accent-gold)" isUp={true} />
              <StatCard title="العملاء" value={customers.length} icon={<Users size={20} />} trend="٣.١٪" color="#4CAF50" isUp={true} />
              <StatCard title="المشتركات" value={subscribers.length} icon={<Bell size={20} />} trend="٨.٤٪" color="#5D3E8B" isUp={true} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#2d3436' }}>الطلبات الأخيرة</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                   {orders.slice(0, 5).map(order => (
                     <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #f9f9f9' }}>
                        <div>
                          <p style={{ fontWeight: '700', fontSize: '14px' }}>{order.fullName}</p>
                          <p style={{ fontSize: '12px', color: '#888' }}>{order.product}</p>
                        </div>
                        <p style={{ fontWeight: '800', color: 'var(--primary-purple)' }}>{order.total} ₪</p>
                     </div>
                   ))}
                </div>
              </div>

              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#2d3436' }}>توزيع الرسائل</h3>
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                   <MessageSquare size={40} color="var(--primary-purple)" style={{ opacity: 0.3, marginBottom: '15px' }} />
                   <p style={{ color: '#888' }}>لديك {messages.filter(m => m.status === 'unread').length} رسالة غير مقروءة</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'orders':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)' }}>إدارة الطلبات</h2>
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--primary-purple)', border: 'none', borderRadius: '8px', fontSize: '14px', color: '#fff', cursor: 'pointer' }}>
                <Download size={18} /> تصدير الطلبات
              </button>
            </div>
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead style={{ background: '#fafafa' }}>
                  <tr>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>العميل</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>المنتج</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>العنوان</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>الإجمالي</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>الحالة</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0 ? orders.map(order => (
                    <tr key={order.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '16px' }}>
                         <div style={{ fontWeight: '700' }}>{order.fullName}</div>
                         <div style={{ fontSize: '12px', color: '#888' }}>{order.phone}</div>
                      </td>
                      <td style={{ padding: '16px', maxWidth: '200px' }}>{order.product}</td>
                      <td style={{ padding: '16px' }}>{order.area}</td>
                      <td style={{ padding: '16px', fontWeight: '700', color: 'var(--primary-purple)' }}>{order.total} ₪</td>
                      <td style={{ padding: '16px' }}>
                         <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', background: order.status === 'pending' ? '#FFF3E0' : '#E8F5E9', color: order.status === 'pending' ? '#E65100' : '#4CAF50' }}>
                           {order.status === 'pending' ? 'بانتظار التأكيد' : 'مكتمل'}
                         </span>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button onClick={() => deleteOrder(order.id)} style={{ color: '#ff4d4d', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={18}/></button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan="6" style={{ padding: '40px', textAlign: 'center', color: '#888' }}>لا يوجد طلبات حالياً</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'products':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)' }}>إدارة المخزون</h2>
              <button 
                onClick={() => {
                  const title = prompt('اسم المنتج:');
                  const price = prompt('السعر:');
                  if (title && price) {
                    storage.saveProduct({ title, price });
                    setProducts(storage.getProducts());
                  }
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--primary-purple)', border: 'none', borderRadius: '12px', fontSize: '16px', color: '#fff', cursor: 'pointer', fontWeight: '700' }}
              >
                <PlusCircle size={20} /> إضافة منتج جديد
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {products.map(p => (
                <div key={p.id} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{p.title}</h4>
                    <p style={{ color: 'var(--primary-purple)', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>{p.price} ₪</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => deleteProduct(p.id)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #eee', color: '#ff4d4d', cursor: 'pointer' }}><Trash2 size={16}/></button>
                    </div>
                  </div>
                </div>
              ))}
              {products.length === 0 && <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#888' }}>لا يوجد منتجات مضافة يدوياً. المنتجات الأساسية مشفرة في ملف المتجر.</p>}
            </div>
          </motion.div>
        );

      case 'customers':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)', marginBottom: '30px' }}>قاعدة بيانات العملاء</h2>
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead style={{ background: '#fafafa' }}>
                  <tr>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>الاسم</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>رقم الهاتف</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>الطلبات</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700' }}>آخر طلب</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(c => (
                    <tr key={c.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '16px', fontWeight: '700' }}>{c.name}</td>
                      <td style={{ padding: '16px' }}>{c.phone}</td>
                      <td style={{ padding: '16px' }}>{c.orders} طلبات</td>
                      <td style={{ padding: '16px', color: '#777' }}>{c.lastOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'messages':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)', marginBottom: '30px' }}>رسائل تواصل العملاء</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {messages.length > 0 ? messages.map(msg => (
                <div key={msg.id} style={{ background: '#fff', padding: '24px', borderRadius: '16px', border: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--bg-lavender)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-purple)' }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '800' }}>{msg.sender} <span style={{ fontWeight: '400', fontSize: '13px', color: '#888', marginRight: '10px' }}>{msg.email}</span></h4>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-purple)', marginTop: '4px' }}>{msg.subject}</p>
                      <p style={{ fontSize: '14px', color: '#636e72', marginTop: '8px', maxWidth: '600px' }}>{msg.msg}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '12px', color: '#aaa', marginBottom: '10px' }}>{msg.date}</p>
                    <button onClick={() => deleteMessage(msg.id)} style={{ color: '#ff4d4d', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={18}/></button>
                  </div>
                </div>
              )) : (
                <div style={{ padding: '100px', textAlign: 'center', color: '#888' }}>لا توجد رسائل جديدة</div>
              )}
            </div>
          </motion.div>
        );

      case 'subscribers':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)', marginBottom: '30px' }}>مشتركات النشرة الإخبارية</h2>
            <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #f0f0f0', padding: '20px' }}>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                  {subscribers.map((sub, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'var(--bg-lavender)', borderRadius: '12px' }}>
                       <PhoneCall size={18} color="var(--primary-purple)" />
                       <span style={{ fontWeight: '700' }}>{sub}</span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        );

      default:
        return <div style={{ textAlign: 'center', padding: '100px', color: '#888' }}><Clock size={50} style={{ marginBottom: '20px', opacity: 0.2 }} /><p>هذا القسم قيد التطوير...</p></div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fcfcfe', direction: 'rtl', fontFamily: 'var(--font-sans)' }}>
      
      {/* Sidebar */}
      <motion.aside initial={false} animate={{ width: isSidebarOpen ? '280px' : '90px' }} style={{ background: '#fff', boxShadow: '2px 0 20px rgba(0,0,0,0.03)', zIndex: 100, display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '30px 24px', display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center' }}>
          {isSidebarOpen && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--primary-purple)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><ShoppingBag size={24} /></div>
              <h2 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--purple-dark)' }}>ROYAL PANEL</h2>
            </div>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ background: 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav style={{ flex: 1, marginTop: '20px', padding: '0 15px' }}>
          {[
            { id: 'overview', icon: <LayoutDashboard size={20} />, label: 'الرئيسية' },
            { id: 'orders', icon: <ShoppingBag size={20} />, label: 'الطلبات' },
            { id: 'products', icon: <Package size={20} />, label: 'المخزون' },
            { id: 'customers', icon: <Users size={20} />, label: 'العملاء' },
            { id: 'messages', icon: <MessageSquare size={20} />, label: 'الرسائل' },
            { id: 'subscribers', icon: <Bell size={20} />, label: 'المشتركات' },
          ].map((item) => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '15px', padding: '14px 20px', marginBottom: '5px', background: activeTab === item.id ? 'var(--primary-purple)' : 'transparent', borderRadius: '12px', color: activeTab === item.id ? '#fff' : '#636e72', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'right', fontWeight: activeTab === item.id ? '700' : '500' }}>
              <div style={{ opacity: activeTab === item.id ? 1 : 0.7 }}>{item.icon}</div>
              {isSidebarOpen && <span style={{ fontSize: '15px' }}>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
          <button onClick={handleLogout} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '15px', padding: '14px 20px', background: 'transparent', color: '#ff4d4d', cursor: 'pointer', fontWeight: '700' }}>
            <LogOut size={20} />
            {isSidebarOpen && <span>خروج آمن</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '30px', overflowX: 'hidden' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: '900' }}>أهلاً بكِ في لوحة التحكم</h1>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px', fontWeight: '800', color: '#2d3436' }}>المدير العام</p>
              <p style={{ fontSize: '11px', color: '#b2bec3' }}>متصل الآن</p>
            </div>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '900', boxShadow: '0 8px 15px rgba(177, 156, 217, 0.3)' }}>A</div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;
