// Store Utility for Royal Veil Admin Panel
// Uses localStorage to persist data in this demo version

const STORAGE_KEYS = {
  ORDERS: 'rv_orders',
  MESSAGES: 'rv_messages',
  CUSTOMERS: 'rv_customers',
  SUBSCRIBERS: 'rv_subscribers',
  STATS: 'rv_stats',
  PRODUCTS: 'rv_products',
  CONTENT: 'rv_site_content',
  DELETED_IDS: 'rv_deleted_ids',
  UPDATED_INITIAL: 'rv_updated_initial'
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
  // --- Deleted/Updated Initial Products ---
  getDeletedIds: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.DELETED_IDS) || '[]'),
  getUpdatedInitial: () => JSON.parse(localStorage.getItem(STORAGE_KEYS.UPDATED_INITIAL) || '[]'),
  
  deleteProduct: (id) => {
    // 1. Remove from custom products
    const customProducts = storage.getProducts().filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(customProducts));
    
    // 2. Track deleted initial ID
    const deletedIds = storage.getDeletedIds();
    if (!deletedIds.includes(id)) {
      localStorage.setItem(STORAGE_KEYS.DELETED_IDS, JSON.stringify([...deletedIds, id]));
    }
  },
  updateProduct: (id, updatedData) => {
    // 1. If it's a custom product
    const customProducts = storage.getProducts();
    const isCustom = customProducts.find(p => p.id === id);
    if (isCustom) {
      const updated = customProducts.map(p => p.id === id ? { ...p, ...updatedData } : p);
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(updated));
    } else {
      // 2. If it's an initial product, track the update
      const updatedInitial = storage.getUpdatedInitial();
      const existingIdx = updatedInitial.findIndex(p => p.id === id);
      if (existingIdx > -1) {
        updatedInitial[existingIdx] = { ...updatedInitial[existingIdx], ...updatedData };
      } else {
        updatedInitial.push({ id, ...updatedData });
      }
      localStorage.setItem(STORAGE_KEYS.UPDATED_INITIAL, JSON.stringify(updatedInitial));
    }
  }
};
