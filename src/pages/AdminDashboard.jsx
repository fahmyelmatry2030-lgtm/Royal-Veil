import React, { useState } from 'react';
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
  ArrowDownRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Cell, PieChart, Pie
} from 'recharts';

// ─── Mock Data ───
const salesData = [
  { name: 'يناير', sales: 4000, revenue: 2400 },
  { name: 'فبراير', sales: 3000, revenue: 1398 },
  { name: 'مارس', sales: 2000, revenue: 9800 },
  { name: 'أبريل', sales: 2780, revenue: 3908 },
  { name: 'مايو', sales: 1890, revenue: 4800 },
  { name: 'يونيو', sales: 2390, revenue: 3800 },
];

const categoryData = [
  { name: 'فساتين سهرة', value: 400 },
  { name: 'عبايات', value: 300 },
  { name: 'أطقم كاجوال', value: 300 },
  { name: 'ملابس أطفال', value: 200 },
];

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

  // Sub-Pages
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              <StatCard title="إجمالي المبيعات" value="٤٥,٨٠٠ شيكل" icon={<DollarSign size={20} />} trend="١٢.٥٪" color="var(--primary-purple)" isUp={true} />
              <StatCard title="الطلبات النشطة" value="٢٤" icon={<ShoppingBag size={20} />} trend="٥.٢٪" color="var(--accent-gold)" isUp={true} />
              <StatCard title="العملاء الجدد" value="١٥٦" icon={<Users size={20} />} trend="٣.١٪" color="#4CAF50" isUp={false} />
              <StatCard title="متوسط قيمة الطلب" value="١,٢٠٠ شيكل" icon={<TrendingUp size={20} />} trend="٨.٤٪" color="#5D3E8B" isUp={true} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '30px' }}>
              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#2d3436' }}>إحصائيات المبيعات الأسبوعية</h3>
                <div style={{ height: '300px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesData}>
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary-purple)" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="var(--primary-purple)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="var(--primary-purple)" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: '#2d3436' }}>توزيع الفئات</h3>
                <div style={{ height: '300px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
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
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#fff', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', cursor: 'pointer' }}>
                  <Filter size={18} /> تصفية
                </button>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--primary-purple)', border: 'none', borderRadius: '8px', fontSize: '14px', color: '#fff', cursor: 'pointer' }}>
                  <Download size={18} /> تصدير تقرير
                </button>
              </div>
            </div>
            
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead style={{ background: '#fafafa' }}>
                  <tr>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700', color: '#555' }}>رقم الطلب</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700', color: '#555' }}>العميل</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700', color: '#555' }}>التاريخ</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700', color: '#555' }}>السعر</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700', color: '#555' }}>الحالة</th>
                    <th style={{ padding: '16px', fontSize: '14px', fontWeight: '700', color: '#555' }}>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5].map(i => (
                    <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                      <td style={{ padding: '16px', fontWeight: '600' }}>#102{i}</td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img src={`https://ui-avatars.com/api/?name=User${i}&background=random`} style={{ width: '32px', height: '32px', borderRadius: '50%' }} alt="user" />
                          <span>عميل رقم {i}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px', color: '#777' }}>٢٠٢٤/٠٤/٣٠</td>
                      <td style={{ padding: '16px', fontWeight: '700' }}>٢,٥٠٠ شيكل</td>
                      <td style={{ padding: '16px' }}>
                        <span style={{ padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', background: '#E8F5E9', color: '#4CAF50' }}>مكتمل</span>
                      </td>
                      <td style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button style={{ color: 'var(--primary-purple)', background: 'none', border: 'none', cursor: 'pointer' }}><Edit size={18}/></button>
                          <button style={{ color: '#ff4d4d', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={18}/></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        );

      case 'products':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--purple-dark)' }}>قائمة المنتجات</h2>
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--primary-purple)', border: 'none', borderRadius: '12px', fontSize: '16px', color: '#fff', cursor: 'pointer', fontWeight: '700' }}>
                <PlusCircle size={20} /> إضافة منتج جديد
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0' }}>
                  <div style={{ height: '200px', background: '#eee', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700' }}>١٢ في المخزن</div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>فستان سهرة كلاسيكي</h4>
                    <p style={{ color: 'var(--primary-purple)', fontWeight: '800', fontSize: '18px', marginBottom: '15px' }}>١,٥٠٠ شيكل</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #eee', background: '#fff', cursor: 'pointer' }}><Edit size={16}/></button>
                      <button style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #eee', background: '#fff', cursor: 'pointer' }}><Trash2 size={16} color="#ff4d4d"/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return <div>قيد التطوير...</div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fcfcfe', direction: 'rtl', fontFamily: 'var(--font-sans)' }}>
      
      {/* ─── Sidebar ─── */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? '280px' : '90px' }}
        style={{ 
          background: '#fff', 
          boxShadow: '2px 0 20px rgba(0,0,0,0.03)', 
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh'
        }}
      >
        <div style={{ padding: '30px 24px', display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'space-between' : 'center' }}>
          {isSidebarOpen && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--primary-purple)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <ShoppingBag size={24} />
              </div>
              <h2 style={{ fontSize: '18px', fontWeight: '900', color: 'var(--purple-dark)', letterSpacing: '0.5px' }}>
                ROYAL PANEL
              </h2>
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
            { id: 'analytics', icon: <TrendingUp size={20} />, label: 'التقارير' },
            { id: 'settings', icon: <Settings size={20} />, label: 'الإعدادات' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '14px 20px',
                marginBottom: '5px',
                background: activeTab === item.id ? 'var(--primary-purple)' : 'transparent',
                borderRadius: '12px',
                border: 'none',
                color: activeTab === item.id ? '#fff' : '#636e72',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'right',
                fontWeight: activeTab === item.id ? '700' : '500'
              }}
            >
              <div style={{ opacity: activeTab === item.id ? 1 : 0.7 }}>{item.icon}</div>
              {isSidebarOpen && <span style={{ fontSize: '15px' }}>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
          <button style={{ 
            width: '100%', display: 'flex', alignItems: 'center', gap: '15px', 
            padding: '14px 20px', background: 'transparent', border: 'none', 
            color: '#ff4d4d', cursor: 'pointer', fontWeight: '700'
          }}>
            <LogOut size={20} />
            {isSidebarOpen && <span>خروج آمن</span>}
          </button>
        </div>
      </motion.aside>

      {/* ─── Main Content ─── */}
      <main style={{ flex: 1, padding: '30px', overflowX: 'hidden' }}>
        
        {/* Top Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={20} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            <input 
              type="text" 
              placeholder="ابحث هنا عن أي شيء..." 
              style={{ 
                padding: '12px 50px 12px 20px', borderRadius: '12px', border: '1px solid #eee',
                width: '350px', fontSize: '14px', outline: 'none', background: '#fff'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
              <p style={{ fontSize: '14px', fontWeight: '800', color: '#2d3436' }}>المدير العام</p>
              <p style={{ fontSize: '11px', color: '#b2bec3' }}>متصل الآن</p>
            </div>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '900', boxShadow: '0 8px 15px rgba(177, 156, 217, 0.3)' }}>
              A
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>

      </main>
    </div>
  );
};

export default AdminDashboard;
