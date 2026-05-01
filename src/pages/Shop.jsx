import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Filter, Search, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, title: 'فستان سهرة مطرز بخيوط الحرير', price: '450 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0021.jpg' },
  { id: 2, title: 'فستان سهرة بالكريستال والأحجار', price: '1200 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0022.jpg' },
  { id: 3, title: 'عباءة سوداء بتطريز ذهبي فاخر', price: '350 شيكل', category: 'تراث', img: '/Images/IMG-20260429-WA0023.jpg' },
  { id: 4, title: 'فستان زفاف دانتيل كلاسيك', price: '2500 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0024.jpg' },
  { id: 5, title: 'فستان زفاف دانتيل بذيل طويل', price: '2800 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0025.jpg' },
  { id: 6, title: 'فستان سهرة مطرز بخيوط الزهور', price: '900 شيكل', category: 'تطريز', img: '/Images/IMG-20260429-WA0035.jpg' },
  { id: 7, title: 'فستان سهرة كريستال بذيل ملكي', price: '1500 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0036.jpg' },
  { id: 8, title: 'فستان زفاف بطرحة دانتيل طويلة', price: '3200 شيكل', category: 'فساتين', img: '/Images/IMG-20260429-WA0039.jpg' },
  { id: 101, title: 'فستان سهرة ملكي مرصع', price: '3500 شيكل', category: 'فساتين', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.19 PM (7).jpeg' },
  { id: 102, title: 'طقم تفصيل خاص مطرز', price: '2800 شيكل', category: 'تطريز', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.16 PM.jpeg' },
  { id: 103, title: 'فستان مخمل أسود فاخر', price: '3200 شيكل', category: 'فساتين', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.14 PM.jpeg' },
  { id: 104, title: 'عباءة مطرزة يدوياً', price: '1900 شيكل', category: 'تراث', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.17 PM (8).jpeg' },
  { id: 105, title: 'فستان سهرة "أوركيد"', price: '2400 شيكل', category: 'فساتين', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.15 PM.jpeg' },
  { id: 106, title: 'طقم كاجوال راقي', price: '1200 شيكل', category: 'فساتين', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.17 PM (1).jpeg' },
  { id: 107, title: 'فستان زفاف دانتيل', price: '5500 شيكل', category: 'فساتين', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.18 PM (2).jpeg' },
  { id: 108, title: 'فستان حفلات "غزل"', price: '2100 شيكل', category: 'فساتين', img: '/Images/WhatsApp Image 2026-04-30 at 1.39.19 PM (3).jpeg' },
  { id: 109, title: 'فستان بيبي بتطريز ناعم', price: '450 شيكل', category: 'بيبي', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(3).jpeg' },
  { id: 110, title: 'طقم أطفال تراثي', price: '350 شيكل', category: 'بيبي', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(2).jpeg' },
  { id: 111, title: 'فستان أبيض للفتيات', price: '500 شيكل', category: 'بيبي', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.09%20AM.jpeg' },
  { id: 112, title: 'بلوزة بتطريز فلاحي', price: '850 شيكل', category: 'تطريز', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.41.00%20AM.jpeg' },
  { id: 200, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0014.jpg' },
  { id: 201, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0015.jpg' },
  { id: 202, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0016.jpg' },
  { id: 203, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0017.jpg' },
  { id: 204, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0018.jpg' },
  { id: 205, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0020.jpg' },
  { id: 206, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0028.jpg' },
  { id: 207, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0029.jpg' },
  { id: 208, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0030.jpg' },
  { id: 209, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0031.jpg' },
  { id: 210, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0032.jpg' },
  { id: 211, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0034.jpg' },
  { id: 212, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0037.jpg' },
  { id: 213, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0038.jpg' },
  { id: 214, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0040.jpg' },
  { id: 215, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0041.jpg' },
  { id: 216, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0042.jpg' },
  { id: 217, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0043.jpg' },
  { id: 218, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0044.jpg' },
  { id: 219, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0045.jpg' },
  { id: 220, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0047.jpg' },
  { id: 221, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0048.jpg' },
  { id: 222, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0049.jpg' },
  { id: 223, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0050.jpg' },
  { id: 224, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0051.jpg' },
  { id: 225, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0052.jpg' },
  { id: 226, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0053.jpg' },
  { id: 227, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0054.jpg' },
  { id: 228, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/IMG-20260429-WA0055.jpg' },
  { id: 229, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/new_sewing.jpg' },
  { id: 230, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-29%20at%206.25.39%20PM.jpeg' },
  { id: 231, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-29%20at%206.25.40%20PM.jpeg' },
  { id: 232, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.13%20PM%20(1).jpeg' },
  { id: 233, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.13%20PM.jpeg' },
  { id: 234, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.14%20PM%20(1).jpeg' },
  { id: 235, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.14%20PM%20(2).jpeg' },
  { id: 236, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.14%20PM%20(3).jpeg' },
  { id: 237, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.14%20PM%20(4).jpeg' },
  { id: 238, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.14%20PM%20(5).jpeg' },
  { id: 239, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.14%20PM%20(6).jpeg' },
  { id: 240, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(1).jpeg' },
  { id: 241, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(2).jpeg' },
  { id: 242, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(3).jpeg' },
  { id: 243, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(4).jpeg' },
  { id: 244, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(5).jpeg' },
  { id: 245, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(6).jpeg' },
  { id: 246, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(7).jpeg' },
  { id: 247, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.15%20PM%20(8).jpeg' },
  { id: 248, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(1).jpeg' },
  { id: 249, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(2).jpeg' },
  { id: 250, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(3).jpeg' },
  { id: 251, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(4).jpeg' },
  { id: 252, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(5).jpeg' },
  { id: 253, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(6).jpeg' },
  { id: 254, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.16%20PM%20(7).jpeg' },
  { id: 255, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM%20(2).jpeg' },
  { id: 256, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM%20(3).jpeg' },
  { id: 257, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM%20(4).jpeg' },
  { id: 258, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM%20(5).jpeg' },
  { id: 259, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM%20(6).jpeg' },
  { id: 260, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM%20(7).jpeg' },
  { id: 261, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.17%20PM.jpeg' },
  { id: 262, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(1).jpeg' },
  { id: 263, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(3).jpeg' },
  { id: 264, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(4).jpeg' },
  { id: 265, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(5).jpeg' },
  { id: 266, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(6).jpeg' },
  { id: 267, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(7).jpeg' },
  { id: 268, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM%20(8).jpeg' },
  { id: 269, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.18%20PM.jpeg' },
  { id: 270, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.19%20PM%20(1).jpeg' },
  { id: 271, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.19%20PM%20(2).jpeg' },
  { id: 272, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.19%20PM%20(4).jpeg' },
  { id: 273, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.19%20PM%20(5).jpeg' },
  { id: 274, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.19%20PM%20(6).jpeg' },
  { id: 275, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%201.39.19%20PM.jpeg' },
  { id: 276, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(1).jpeg' },
  { id: 277, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM%20(4).jpeg' },
  { id: 278, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%205.36.08%20AM.jpeg' },
  { id: 279, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%206.18.55%20AM%20(1).jpeg' },
  { id: 280, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%206.18.55%20AM%20(2).jpeg' },
  { id: 281, title: 'تصميم حصري', price: 'تواصل لمعرفة السعر', category: 'تشكيلة', img: '/Images/WhatsApp%20Image%202026-04-30%20at%206.18.55%20AM.jpeg' },
];

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['الكل', 'فساتين', 'تطريز', 'تراث', 'بيبي', 'تشكيلة'];

  const filteredProducts = products
    .filter(p => activeCategory === 'الكل' || p.category === activeCategory)
    .filter(p => p.title.includes(searchQuery) || p.category.includes(searchQuery))
    .sort((a, b) => {
      if (sortBy === 'price-low') return parseInt(a.price) - parseInt(b.price);
      if (sortBy === 'price-high') return parseInt(b.price) - parseInt(a.price);
      return 0;
    });

  return (
    <div style={{ direction: 'rtl', backgroundColor: 'var(--bg-white)' }}>
      <Helmet>
        <title>Royal Veil | المتجر - تسوقي أجمل القطع الجاهزة</title>
      </Helmet>

      <PageHeader
        badge="Ready to Wear"
        title="المتجر الإلكتروني"
        subtitle="اختاري من تشكيلتنا الواسعة من القطع الجاهزة والمميزة التي تناسب كل ذوق."
        bgImage="/Images/IMG-20260429-WA0035.jpg"
      />

      {/* Control Bar */}
      <section style={{ 
        borderBottom: '1px solid var(--border-light)', 
        position: 'sticky', 
        top: '68px', 
        background: 'rgba(255,255,255,0.8)', 
        backdropFilter: 'blur(10px)',
        zIndex: 40 
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '12px 2rem' 
        }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setFilterOpen(true)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontWeight: 'bold', 
                fontSize: '14px',
                color: 'var(--primary-purple)',
                background: 'var(--bg-lavender)',
                padding: '8px 16px',
                borderRadius: '50px',
                border: '1px solid var(--border-light)',
                cursor: 'pointer'
              }}
            >
              <Filter size={18} /> تصفية <span className="hidden md:inline">المنتجات</span>
            </button>
            <div style={{ display: 'flex' }} className="hidden md:flex items-center gap-6">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontSize: '13px',
                    fontWeight: activeCategory === cat ? '900' : '500',
                    color: activeCategory === cat ? 'var(--primary-purple)' : 'var(--text-muted)',
                    position: 'relative',
                    padding: '5px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div layoutId="activeCat" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'var(--accent-gold)' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative' }} className="hidden lg:block">
              <input 
                type="text" 
                placeholder="ابحثي هنا..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '10px 40px 10px 15px',
                  border: '1px solid var(--border-light)',
                  borderRadius: '50px',
                  fontSize: '13px',
                  width: '220px',
                  outline: 'none',
                  background: 'var(--bg-white)'
                }}
              />
              <Search size={16} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ 
                border: 'none',
                background: 'none',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--primary-purple)',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="newest">الأحدث</option>
              <option value="price-low">السعر: من الأقل</option>
              <option value="price-high">السعر: من الأعلى</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section style={{ padding: '6rem 0', minHeight: '60vh' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '2.5rem 1.5rem',
            justifyItems: 'center'
          }}>
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <Search size={50} style={{ opacity: 0.2, marginBottom: '20px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-muted)' }}>عذراً، لم نجد نتائج تطابق بحثكِ.</h3>
              <button onClick={() => {setActiveCategory('الكل'); setSearchQuery('');}} style={{ marginTop: '20px', color: 'var(--primary-purple)', fontWeight: '700', background: 'none', border: 'none', borderBottom: '2px solid var(--primary-purple)', cursor: 'pointer' }}>عرض جميع المنتجات</button>
            </div>
          )}
        </div>
      </section>

      {/* Style Enrichment Section */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-lavender)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeader 
            badge="The Experience"
            title="لماذا تتسوقين من جمعية الطرحة الملكية؟"
            subtitle="نحن لا نبيع الملابس فقط، بل نقدم تجربة فريدة مصممة خصيصاً لكِ."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            {[
              { t: 'شحن سريع وآمن', d: 'نصل إليكِ أينما كنتِ في فلسطين وباقي أنحاء العالم بأعلى معايير الأمان.' },
              { t: 'تعديل مجاني', d: 'نقدم خدمة تعديل القياسات مجاناً لضمان المظهر المثالي لكل قطعة تقتنينها.' },
              { t: 'تغليف فاخر', d: 'تصلكِ منتجاتنا في صناديق فاخرة تليق بذوقكِ، لتكون هدية مثالية.' }
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', padding: '2.5rem', borderRadius: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontWeight: '900', marginBottom: '15px', color: 'var(--primary-purple)' }}>{f.t}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Modal */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(90%, 380px)',
                background: 'var(--bg-white)', zIndex: 101, padding: '2.5rem', direction: 'rtl'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--primary-purple)' }}>تصفية المنتجات</h2>
                <button onClick={() => setFilterOpen(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><X size={24} /></button>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '1.5rem' }}>الأقسام</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                      style={{
                        padding: '12px 20px',
                        borderRadius: '12px',
                        textAlign: 'right',
                        fontSize: '15px',
                        fontWeight: activeCategory === cat ? '800' : '500',
                        background: activeCategory === cat ? 'var(--primary-purple)' : 'var(--bg-lavender)',
                        color: activeCategory === cat ? '#fff' : 'var(--text-dark)',
                        border: 'none',
                        transition: 'all 0.2s',
                        cursor: 'pointer'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '1.5rem' }}>البحث السريع</h4>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    placeholder="ابحثي عن منتج..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', padding: '14px 40px 14px 15px', borderRadius: '12px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                  <Search size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', right: '2.5rem' }}>
                <button 
                  onClick={() => setFilterOpen(false)}
                  style={{ 
                    width: '100%', padding: '16px', background: 'var(--primary-purple)', color: '#fff', 
                    fontWeight: '800', borderRadius: '20px', border: 'none', cursor: 'pointer'
                  }}
                >
                  إغلاق وتحديث
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
