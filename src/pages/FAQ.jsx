import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import { storage } from '../utils/storage';
import { useEffect } from 'react';

const faqs = [
  {
    category: 'الطلبات والتفصيل',
    icon: '✂️',
    questions: [
      {
        q: 'كيف يمكنني طلب تفصيل خاص؟',
        a: 'يمكنكِ التواصل معنا مباشرة عبر واتساب أو الضغط على زر "طلب تفصيل خاص" في الموقع. سنقوم بتحديد موعد لأخذ المقاسات ومناقشة التصميم معكِ بشكل كامل.'
      },
      {
        q: 'كم يستغرق تنفيذ طلب التفصيل؟',
        a: 'يتراوح وقت التنفيذ عادةً بين أسبوعين إلى أربعة أسابيع حسب تعقيد التصميم وطبيعة القماش. سيتم إبلاغكِ بالوقت الدقيق عند تأكيد الطلب.'
      },
      {
        q: 'هل يمكن التعديل على تصاميمكم الجاهزة؟',
        a: 'نعم بالتأكيد! جميع قطعنا قابلة للتعديل والتخصيص وفق مقاساتكِ ورغباتكِ. لا تترددي في التواصل معنا لأي تعديل تودّين إجراءه.'
      },
    ]
  },
  {
    category: 'الأسعار والدفع',
    icon: '💳',
    questions: [
      {
        q: 'ما هي طرق الدفع المتاحة؟',
        a: 'نقبل الدفع نقداً، أو عبر التحويل البنكي، أو من خلال تطبيقات الدفع الإلكتروني المتاحة في فلسطين. يتم تأكيد الطلب عند دفع عربون 50% مسبقاً.'
      },
      {
        q: 'هل تقبلون الدفع بالتقسيط؟',
        a: 'نعم، نوفر إمكانية الدفع على دفعتين؛ 50% عند تأكيد الطلب، و50% عند الاستلام. للطلبات الكبيرة يمكن الترتيب لجدول دفع مرن.'
      },
      {
        q: 'هل تتغير الأسعار حسب القياسات؟',
        a: 'الأسعار المعروضة هي للمقاسات القياسية. قد تضاف رسوم رمزية إضافية للمقاسات الكبيرة جداً أو للتعديلات الجوهرية على التصميم.'
      },
    ]
  },
  {
    category: 'الشحن والتوصيل',
    icon: '🚚',
    questions: [
      {
        q: 'هل تقدمون خدمة التوصيل؟',
        a: 'نعم، نوفر خدمة التوصيل داخل القدس والمناطق المجاورة. للمناطق الأبعد، يتم التنسيق مع شركات شحن موثوقة ويُحدَّد سعر الشحن حسب الموقع.'
      },
      {
        q: 'كم تبلغ رسوم الشحن؟',
        a: 'الشحن مجاني للطلبات التي تزيد قيمتها عن 200 شيكل داخل القدس. بالنسبة للمناطق الأخرى، تتراوح رسوم الشحن بين 20-50 شيكل حسب المسافة.'
      },
      {
        q: 'ماذا أفعل إذا وصلت القطعة تالفة؟',
        a: 'نحن نضمن جودة جميع منتجاتنا. في حال وصول أي قطعة بها خلل، يرجى التواصل معنا فوراً مع صور واضحة، وسنتكفل بالاستبدال أو الإصلاح الفوري.'
      },
    ]
  },
  {
    category: 'العناية والصيانة',
    icon: '✨',
    questions: [
      {
        q: 'كيف أعتني بالقطع المطرزة يدوياً؟',
        a: 'يُنصح بالغسيل اليدوي بالماء البارد باستخدام مواد تنظيف لطيفة. تجنبي آلة الغسيل والتجفيف الساخن للحفاظ على جودة التطريز ونصوعه.'
      },
      {
        q: 'هل يمكن إصلاح قطعة تضررت؟',
        a: 'نعم، نوفر خدمة الإصلاح والصيانة لقطعنا. سواء كان تطريزاً تمزق أو خياطة احتاجت إعادة، يسعدنا خدمتكِ. تواصلي معنا لمعرفة التفاصيل.'
      },
    ]
  },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      style={{
        border: '1px solid var(--border-light)',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '1rem',
        background: open ? 'var(--purple-light)' : 'var(--bg-white)',
        boxShadow: open ? 'var(--shadow-sm)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.4rem 1.8rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'right',
          direction: 'rtl',
          gap: '1rem',
        }}
      >
        <span style={{
          fontSize: '16px',
          fontWeight: '700',
          color: open ? 'var(--primary-purple)' : 'var(--text-dark)',
          lineHeight: 1.5,
          transition: 'color 0.3s',
        }}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ flexShrink: 0, color: 'var(--primary-purple)' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 1.8rem 1.4rem 1.8rem',
              color: 'var(--text-muted)',
              fontSize: '15px',
              lineHeight: '1.9',
              direction: 'rtl',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.2rem',
            }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [content, setContent] = useState(storage.getContent());

  useEffect(() => {
    setContent(storage.getContent());
  }, []);

  return (
    <div style={{ direction: 'rtl', background: 'var(--bg-white)', minHeight: '100vh' }}>
      <Helmet>
        <title>Royal Veil | الأسئلة الشائعة - كل ما تودّين معرفته</title>
        <meta name="description" content="إجابات على أكثر الأسئلة شيوعاً حول التفصيل والأسعار والشحن والعناية بالملابس في جمعية الطرحة الملكية التعاونية." />
      </Helmet>

      <PageHeader
        badge="FAQ"
        title={content.faq.hero.title}
        subtitle={content.faq.hero.subtitle}
        bgImage="/Images/IMG-20260429-WA0014.jpg"
      />

      {/* Main FAQ Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <SectionHeader
            badge="لديكِ سؤال؟"
            title="كل ما تودّين معرفته"
            subtitle="اختاري الفئة التي يخص سؤالك وستجدين الإجابة مباشرةً."
          />

          {faqs.map((category, ci) => (
            <div key={ci} style={{ marginBottom: '4rem' }}>
              {/* Category Title */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--border-light)',
                }}
              >
                <span style={{ fontSize: '28px' }}>{category.icon}</span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '900',
                  color: 'var(--primary-purple)',
                  fontFamily: 'var(--font-serif)',
                }}>
                  {category.category}
                </h3>
              </motion.div>

              {/* Questions */}
              <div>
                {category.questions.map((item, qi) => (
                  <FAQItem key={qi} q={item.q} a={item.a} index={qi} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-lavender)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--bg-white)',
              borderRadius: '16px',
              padding: '5rem 3rem',
              textAlign: 'center',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Gold top line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)'
            }} />

            <HelpCircle size={50} color="var(--primary-purple)" style={{ margin: '0 auto 1.5rem', opacity: 0.7 }} />
            <h3 style={{
              fontSize: '32px', fontWeight: '900',
              color: 'var(--text-dark)', fontFamily: 'var(--font-serif)', marginBottom: '1rem'
            }}>
              لم تجدي إجابتكِ؟
            </h3>
            <p style={{
              color: 'var(--text-muted)', fontSize: '16px',
              maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8
            }}>
              فريقنا جاهز للإجابة على جميع استفساراتكِ. تواصلي معنا مباشرةً عبر واتساب أو صفحة التواصل.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/${content?.common?.footer?.whatsapp?.replace(/\D/g, '') || '972585040233'}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: '#25D366', color: '#fff',
                  padding: '14px 32px', borderRadius: '50px',
                  fontWeight: '800', fontSize: '15px', textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(37,211,102,0.3)', transition: 'all 0.3s'
                }}
              >
                <MessageCircle size={20} /> تواصل عبر واتساب
              </a>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  background: 'transparent', color: 'var(--primary-purple)',
                  padding: '14px 32px', borderRadius: '50px',
                  fontWeight: '800', fontSize: '15px', textDecoration: 'none',
                  border: '2px solid var(--primary-purple)', transition: 'all 0.3s'
                }}
              >
                صفحة التواصل
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
