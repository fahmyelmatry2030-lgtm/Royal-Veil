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
  PhoneCall,
  Award,
  Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { storage } from '../utils/storage';
import { initialProducts, CATEGORIES } from '../data/products';

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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', category: 'فساتين', img: '' });
  const navigate = useNavigate();

  // Data State
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [products, setProducts] = useState([]);
  const [siteContent, setSiteContent] = useState(null);

  const refreshProducts = () => {
    const storedProducts = storage.getProducts();
    const deletedIds = storage.getDeletedIds();
    const updatedInitial = storage.getUpdatedInitial();
    
    let combined = [...initialProducts];
    combined = combined.filter(p => !deletedIds.includes(p.id));
    combined = combined.map(p => {
      const update = updatedInitial.find(u => u.id === p.id);
      return update ? { ...p, ...update } : p;
    });
    
    setProducts([...combined, ...storedProducts]);
  };

  useEffect(() => {
    setOrders(storage.getOrders());
    setMessages(storage.getMessages());
    setCustomers(storage.getCustomers());
    setSubscribers(storage.getSubscribers());
    setSiteContent(storage.getContent());
    refreshProducts();
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
    if (window.confirm('هل أنتِ متأكدة من حذف هذا المنتج؟')) {
      storage.deleteProduct(id);
      refreshProducts();
    }
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setNewProduct({
      title: product.title,
      price: product.price.replace(' ₪', '').replace(' شيكل', ''),
      category: product.category,
      img: product.img
    });
    setIsEditMode(true);
    setIsAddModalOpen(true);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.title && newProduct.price) {
      if (isEditMode && editingProduct) {
        storage.updateProduct(editingProduct.id, newProduct);
      } else {
        storage.saveProduct(newProduct);
      }
      refreshProducts();
      setIsAddModalOpen(false);
      setIsEditMode(false);
      setEditingProduct(null);
      setNewProduct({ title: '', price: '', category: 'فساتين', img: '' });
    }
  };

  const handleUpdateContent = (section, field, value) => {
    const updated = { ...siteContent };
    if (!updated[section]) updated[section] = {};
    
    // Support nested fields (e.g. hero.title)
    if (field.includes('.')) {
      const [sub, subField] = field.split('.');
      if (!updated[section][sub]) updated[section][sub] = {};
      updated[section][sub][subField] = value;
    } else {
      updated[section][field] = value;
    }
    
    setSiteContent(updated);
    storage.saveContent(updated);
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
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)' }}>إدارة المتجر</h2>
              <button 
                onClick={() => {
                  setIsEditMode(false);
                  setNewProduct({ title: '', price: '', category: 'فساتين', img: '' });
                  setIsAddModalOpen(true);
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--primary-purple)', border: 'none', borderRadius: '12px', fontSize: '16px', color: '#fff', cursor: 'pointer', fontWeight: '700' }}
              >
                <PlusCircle size={20} /> إضافة منتج جديد
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {products.map(p => (
                <div key={p.id} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img src={p.img || '/Images/placeholder.jpg'} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', height: '40px', overflow: 'hidden' }}>{p.title}</h4>
                    <p style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>{p.category}</p>
                    <p style={{ color: 'var(--primary-purple)', fontWeight: '800', fontSize: '16px', marginBottom: '15px' }}>{p.price} ₪</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => handleOpenEdit(p)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #eee', color: 'var(--primary-purple)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Edit size={16}/>
                      </button>
                      <button onClick={() => deleteProduct(p.id)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #eee', color: '#ff4d4d', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Trash2 size={16}/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {products.length === 0 && <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#888' }}>لا يوجد منتجات حالياً.</p>}
            </div>

            {/* Add Product Modal */}
            <AnimatePresence>
              {isAddModalOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setIsAddModalOpen(false)}
                    style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                  />
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                    style={{ position: 'relative', background: '#fff', width: '100%', maxWidth: '500px', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                  >
                    <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '30px', color: 'var(--primary-purple)' }}>
                      {isEditMode ? 'تعديل المنتج' : 'إضافة منتج جديد'}
                    </h3>
                    <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '700' }}>اسم المنتج</label>
                        <input 
                          type="text" 
                          required
                          value={newProduct.title}
                          onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                          style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '700' }}>السعر (شيكل)</label>
                        <input 
                          type="text" 
                          required
                          value={newProduct.price}
                          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                          style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '700' }}>الفئة</label>
                        <select 
                          value={newProduct.category}
                          onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                          style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                        >
                          {CATEGORIES.filter(c => c !== 'الكل').map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '700' }}>صورة المنتج (من الجهاز)</label>
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                setNewProduct({...newProduct, img: reader.result});
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid #eee', outline: 'none', background: '#fcfcfe' }}
                        />
                        {newProduct.img && (
                          <div style={{ marginTop: '10px', height: '120px', borderRadius: '12px', overflow: 'hidden', border: '2px solid var(--purple-light)' }}>
                            <img src={newProduct.img} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <button type="submit" style={{ flex: 1, padding: '14px', borderRadius: '12px', background: 'var(--primary-purple)', color: '#fff', border: 'none', fontWeight: '800', cursor: 'pointer' }}>
                          {isEditMode ? 'حفظ التعديلات' : 'حفظ المنتج'}
                        </button>
                        <button type="button" onClick={() => setIsAddModalOpen(false)} style={{ flex: 1, padding: '14px', borderRadius: '12px', background: '#f5f5f5', color: '#555', border: 'none', fontWeight: '800', cursor: 'pointer' }}>إلغاء</button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
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

      case 'content':
        if (!siteContent) return null;
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)', marginBottom: '30px' }}>إدارة محتوى الموقع</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {/* Home - Hero */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <LayoutDashboard size={20} /> الصفحة الرئيسية - الغلاف (Hero)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الرئيسي</label>
                  <textarea 
                    value={siteContent.home.hero.title}
                    onChange={(e) => handleUpdateContent('home', 'hero.title', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '100px', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>نص الزر</label>
                  <input 
                    type="text"
                    value={siteContent.home.hero.buttonText}
                    onChange={(e) => handleUpdateContent('home', 'hero.buttonText', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Home - About */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Users size={20} /> الصفحة الرئيسية - من نحن
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان</label>
                  <input 
                    type="text"
                    value={siteContent.home.about.title}
                    onChange={(e) => handleUpdateContent('home', 'about.title', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>الوصف</label>
                  <textarea 
                    value={siteContent.home.about.description}
                    onChange={(e) => handleUpdateContent('home', 'about.description', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '120px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Home - Parallax Quote */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={20} /> الصفحة الرئيسية - الاقتباس
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>النص</label>
                  <textarea 
                    value={siteContent.home.parallax.quote}
                    onChange={(e) => handleUpdateContent('home', 'parallax.quote', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>القائل / المؤسس</label>
                  <input 
                    type="text"
                    value={siteContent.home.parallax.author}
                    onChange={(e) => handleUpdateContent('home', 'parallax.author', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Common - Footer */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Settings size={20} /> تذييل الصفحة (Footer)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>عن الجمعية (Footer Text)</label>
                  <textarea 
                    value={siteContent.common.footer.about}
                    onChange={(e) => handleUpdateContent('common', 'footer.about', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '700' }}>الهاتف</label>
                      <input 
                        type="text"
                        value={siteContent.common.footer.phone}
                        onChange={(e) => handleUpdateContent('common', 'footer.phone', e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان</label>
                      <input 
                        type="text"
                        value={siteContent.common.footer.address}
                        onChange={(e) => handleUpdateContent('common', 'footer.address', e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* About - Hero */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={20} /> صفحة من نحن - الغلاف
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الرئيسي</label>
                  <textarea 
                    value={siteContent.about.hero.title}
                    onChange={(e) => handleUpdateContent('about', 'hero.title', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الفرعي</label>
                  <textarea 
                    value={siteContent.about.hero.subtitle}
                    onChange={(e) => handleUpdateContent('about', 'hero.subtitle', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* About - Legacy */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Crown size={20} /> صفحة من نحن - الإرث
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان</label>
                  <input 
                    type="text"
                    value={siteContent.about.legacy.title}
                    onChange={(e) => handleUpdateContent('about', 'legacy.title', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>الوصف</label>
                  <textarea 
                    value={siteContent.about.legacy.description}
                    onChange={(e) => handleUpdateContent('about', 'legacy.description', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '150px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* About - Vision & Mission */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Target size={20} /> صفحة من نحن - الرؤية والرسالة
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>الرؤية</label>
                  <textarea 
                    value={siteContent.about.vision.description}
                    onChange={(e) => handleUpdateContent('about', 'vision.description', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>الرسالة</label>
                  <textarea 
                    value={siteContent.about.mission.description}
                    onChange={(e) => handleUpdateContent('about', 'mission.description', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Contact Page */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={20} /> صفحة اتصل بنا
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الرئيسي</label>
                  <input 
                    type="text"
                    value={siteContent.contact.hero.title}
                    onChange={(e) => handleUpdateContent('contact', 'hero.title', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الفرعي</label>
                  <textarea 
                    value={siteContent.contact.hero.subtitle}
                    onChange={(e) => handleUpdateContent('contact', 'hero.subtitle', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* FAQ Page */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={20} /> صفحة الأسئلة الشائعة
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الرئيسي</label>
                  <input 
                    type="text"
                    value={siteContent.faq.hero.title}
                    onChange={(e) => handleUpdateContent('faq', 'hero.title', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الفرعي</label>
                  <textarea 
                    value={siteContent.faq.hero.subtitle}
                    onChange={(e) => handleUpdateContent('faq', 'hero.subtitle', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Team Page */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Users size={20} /> صفحة فريق العمل
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الرئيسي</label>
                  <input 
                    type="text"
                    value={siteContent.team.hero.title}
                    onChange={(e) => handleUpdateContent('team', 'hero.title', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الفرعي</label>
                  <textarea 
                    value={siteContent.team.hero.subtitle}
                    onChange={(e) => handleUpdateContent('team', 'hero.subtitle', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                </div>
              </div>

              {/* Shop Page */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShoppingBag size={20} /> صفحة المتجر
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الرئيسي</label>
                  <input 
                    type="text"
                    value={siteContent.shop.hero.title}
                    onChange={(e) => handleUpdateContent('shop', 'hero.title', e.target.value)}
                    style={{ padding: '12px', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }}
                  />
                  <label style={{ fontSize: '13px', fontWeight: '700' }}>العنوان الفرعي</label>
                  <textarea 
                    value={siteContent.shop.hero.subtitle}
                    onChange={(e) => handleUpdateContent('shop', 'hero.subtitle', e.target.value)}
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid #eee', minHeight: '80px', outline: 'none' }}
                  />
                </div>
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
            { id: 'products', icon: <Package size={20} />, label: 'المتجر' },
            { id: 'customers', icon: <Users size={20} />, label: 'العملاء' },
            { id: 'messages', icon: <MessageSquare size={20} />, label: 'الرسائل' },
            { id: 'subscribers', icon: <Bell size={20} />, label: 'المشتركات' },
            { id: 'content', icon: <Edit size={20} />, label: 'إدارة المحتوى' },
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
