import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

const ArrayEditor = ({ label, items = [], schema, onUpdate }) => {
  const handleAdd = () => {
    const newItem = {};
    Object.keys(schema).forEach(key => newItem[key] = '');
    onUpdate([...items, newItem]);
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    onUpdate(newItems);
  };

  const handleChange = (index, key, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [key]: value };
    onUpdate(newItems);
  };

  return (
    <div style={{ marginTop: '20px', borderTop: '1px dashed #ddd', paddingTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <label style={{ fontSize: '14px', fontWeight: '800', color: 'var(--primary-purple)' }}>{label}</label>
        <button 
          onClick={handleAdd}
          style={{ background: 'var(--purple-light)', border: 'none', color: 'var(--primary-purple)', padding: '5px 10px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '700' }}
        >
          <PlusCircle size={14} /> إضافة جديد
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ background: '#fafafa', padding: '15px', borderRadius: '12px', border: '1px solid #eee', position: 'relative' }}>
            <button 
              onClick={() => handleRemove(index)}
              style={{ position: 'absolute', top: '10px', left: '10px', background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer' }}
            >
              <Trash2 size={16} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
              {Object.keys(schema).map(key => (
                <div key={key}>
                  <label style={{ fontSize: '11px', fontWeight: '700', color: '#888', display: 'block', marginBottom: '5px' }}>{schema[key]}</label>
                  {schema[key].includes('وصف') || schema[key].includes('نص') ? (
                    <textarea 
                      value={item[key]}
                      onChange={(e) => handleChange(index, key, e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', minHeight: '60px' }}
                    />
                  ) : (
                    <input 
                      type="text"
                      value={item[key]}
                      onChange={(e) => handleChange(index, key, e.target.value)}
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {items.length === 0 && <p style={{ textAlign: 'center', fontSize: '12px', color: '#aaa' }}>لا يوجد عناصر، اضغط على إضافة جديد.</p>}
      </div>
    </div>
  );
};

export default ArrayEditor;
