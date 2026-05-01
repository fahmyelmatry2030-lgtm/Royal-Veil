// Store Utility for Royal Veil Admin Panel
// Uses localStorage to persist data in this demo version

const STORAGE_KEYS = {
  ORDERS: 'rv_orders',
  MESSAGES: 'rv_messages',
  CUSTOMERS: 'rv_customers',
  SUBSCRIBERS: 'rv_subscribers',
  STATS: 'rv_stats',
  PRODUCTS: 'rv_products',
  CONTENT: 'rv_site_content'
};

import { initialContent } from '../data/content';

export const storage = {
  // --- Site Content (CMS) ---
  getContent: () => {
    const stored = localStorage.getItem(STORAGE_KEYS.CONTENT);
    if (!stored) return initialContent;
    // Merge stored content with initial to handle new fields
    const parsed = JSON.parse(stored);
    return { ...initialContent, ...parsed };
  },
  saveContent: (newContent) => {
    localStorage.setItem(STORAGE_KEYS.CONTENT, JSON.stringify(newContent));
  },
  // --- Orders ---
  getOrders: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || '[]'),
  saveOrder: (order) => {
    const orders = storage.getOrders();
    const newOrder = { 
      id: Date.now(), 
      date: new Date().toLocaleDateString('ar-EG'),
      status: 'pending',
      ...order 
    };
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify([newOrder, ...orders]));
    
    // Auto-add to customers if phone is new
    if (order.phone) storage.syncCustomer(order);
    return newOrder;
  },

  // --- Messages ---
  getMessages: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]'),
  saveMessage: (msg) => {
    const messages = storage.getMessages();
    const newMessage = {
      id: Date.now(),
      date: 'الآن',
      status: 'unread',
      ...msg
    };
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify([newMessage, ...messages]));
    return newMessage;
  },

  // --- Customers ---
  getCustomers: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.CUSTOMERS) || '[]'),
  syncCustomer: (data) => {
    const customers = storage.getCustomers();
    const existing = customers.find(c => c.phone === data.phone);
    if (!existing) {
      const newCustomer = {
        id: customers.length + 1,
        name: data.fullName || data.name || 'عميلة جديدة',
        email: data.email || '-',
        phone: data.phone,
        orders: 1,
        totalSpent: data.price || '0',
        lastOrder: new Date().toLocaleDateString('ar-EG')
      };
      localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify([newCustomer, ...customers]));
    } else {
      existing.orders += 1;
      existing.lastOrder = new Date().toLocaleDateString('ar-EG');
      localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(customers));
    }
  },

  // --- Subscribers (Newsletter) ---
  getSubscribers: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]'),
  addSubscriber: (phone) => {
    const subs = storage.getSubscribers();
    if (!subs.includes(phone)) {
      localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify([phone, ...subs]));
    }
  },

  // --- Products ---
  getProducts: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS) || '[]'),
  saveProduct: (product) => {
    const products = storage.getProducts();
    const newProduct = { id: Date.now(), ...product };
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify([newProduct, ...products]));
    return newProduct;
  },
  deleteProduct: (id) => {
    const products = storage.getProducts().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }
};
