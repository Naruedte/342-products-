import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ product }) {
    return (
        <div
            style={{
                fontFamily: "'Playfair Display', serif", // กำหนดฟอนต์ให้เป็น 'Playfair Display'
                backgroundColor: '#f8f5f0', // กำหนดสีพื้นหลัง
                minHeight: '100vh', // กำหนดความสูงขั้นต่ำให้เต็มหน้าจอ
                padding: '20px',
            }}
        >
            <div
                style={{
                    backgroundColor: '#5a4633', // กำหนดสีพื้นหลังของแถบด้านบน
                    padding: '10px 20px',
                    color: '#fff', // กำหนดสีตัวอักษรเป็นขาว
                    fontWeight: 'bold', // ตัวอักษรหนา
                    fontSize: '18px',
                    position: 'sticky', // ให้แถบนี้ติดอยู่ที่ด้านบน
                    top: '0',
                    zIndex: '10', // ให้แถบนี้อยู่บนสุด
                }}
            >
                Luxe Bag Collection
            </div>

            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
                    <img
                        src={product.imageSRC}
                        alt={product.name}
                        className="w-auto h-64 object-cover rounded-lg mb-4 mx-auto"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {product.name}
                    </h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-lg font-semibold text-gray-700 mb-6">
                        Price: ${product.price}
                    </p>
                    <hr className="mb-6" />
                    <Link
                        href="/products"
                        className="inline-flex items-center text-white py-2 px-4 rounded-full text-sm font-medium shadow-md transition-all duration-300"
                        style={{ backgroundColor: '#5a4633' }}
                    >
                        Back to All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}