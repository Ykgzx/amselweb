'use client';

import { useState } from 'react';

// ตัวอย่างประเภทสินค้า — คุณสามารถเปลี่ยนตามความต้องการได้
const PRODUCT_CATEGORIES = [
  { value: '', label: 'เลือกประเภทสินค้า' },
  { value: 'electronics', label: 'อุปกรณ์อิเล็กทรอนิกส์' },
  { value: 'fashion', label: 'แฟชั่นและเครื่องแต่งกาย' },
  { value: 'home', label: 'ของแต่งบ้าน' },
  { value: 'beauty', label: 'ความงามและสุขภาพ' },
  { value: 'food', label: 'อาหารและเครื่องดื่ม' },
  { value: 'other', label: 'อื่นๆ' },
];

export default function FormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    productCategory: '', // เปลี่ยนจาก lastName เป็น productCategory
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ข้อมูลที่ส่ง:', formData);
    alert('ส่งข้อมูลเรียบร้อย!');
    setFormData({ firstName: '', productCategory: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">กรอกข้อมูล</h1>

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อ
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* เปลี่ยนเป็น dropdown สำหรับประเภทสินค้า */}
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">
            ประเภทสินค้าที่สนใจ
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            required
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            อีเมล
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            ข้อความเพิ่มเติม
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          ส่งข้อมูล
        </button>
      </form>
    </div>
  );
}