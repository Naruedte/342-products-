import { useState } from 'react';
import { Link } from "@inertiajs/react";


export default function Index({ products }) {// รับพารามิเตอร์ products ที่เป็นข้อมูลของสินค้าทั้งหมด
  // การใช้ useState เพื่อเก็บสถานะของตะกร้า
  const [cart, setCart] = useState([]);// สร้างตัวแปร cart และฟังก์ชัน setCart เพื่อเก็บสินค้าในตะกร้า

  // ฟังก์ชันสำหรับการเพิ่มสินค้าลงในตะกร้า
  const addToCart = (product) => {// สร้างฟังก์ชัน addToCart ที่รับพารามิเตอร์ product
    setCart((prevCart) => [...prevCart, product]); // เพิ่มสินค้าลงในตะกร้า
  };

  // ฟังก์ชันสำหรับการลบสินค้าจากตะกร้า
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove)); // ลบสินค้าที่เลือกออกจากตะกร้า
  };

  // คำนวณราคารวมของสินค้าทั้งหมดในตะกร้า
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);// ใช้ reduce ในการคำนวณราคารวมของสินค้าทั้งหมดในตะกร้า

  // ฟังก์ชันยืนยันการซื้อสินค้า
  const confirmPurchase = () => {
    alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`); // แสดงข้อความขอบคุณพร้อมยอดรวม
    setCart([]); // ล้างตะกร้าหลังจากยืนยันการซื้อ
  };

  return (
    <div
      style={{
        fontFamily: "'Playfair Display', serif", // กำหนดฟอนต์ให้เป็น 'Playfair Display'
        backgroundColor: '#f8f5f0', // กำหนดสีพื้นหลัง
        minHeight: '100vh', // กำหนดความสูงขั้นต่ำให้เต็มหน้าจอ
      }}
    >
      {/* แถบด้านบนของเว็บไซต์ */}
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

      <div style={{ padding: '20px' }}>
        {/* ส่วนของการแสดงชื่อหรือหัวข้อ (ว่าง) */}
        <h1
          style={{
            textAlign: 'center', // จัดตำแหน่งตัวอักษรให้อยู่กลาง
            color: '#b2967d', // กำหนดสีตัวอักษร
            marginBottom: '30px', // กำหนดระยะห่างด้านล่าง
            fontSize: '36px', // กำหนดขนาดตัวอักษร
            letterSpacing: '1px', // ระยะห่างระหว่างตัวอักษร
          }}
        >
          {/* Heading ที่ว่างเปล่า */}
        </h1>

        {/* การแสดงสินค้าทั้งหมดในตะกร้า */}
        <div
          style={{
            border: '3px solid #e6e1dc', // กำหนดขอบของกล่อง
            borderRadius: '16px', // กำหนดให้มุมของกล่องโค้ง
            padding: '30px', // กำหนดระยะห่างภายในกล่อง
            backgroundColor: '#fff', // กำหนดพื้นหลังของกล่องเป็นสีขาว
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // กำหนดเงาให้กับกล่อง
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'grid', // ใช้ grid layout เพื่อจัดตำแหน่งสินค้า
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // กำหนดให้สินค้าปรากฏในคอลัมน์ที่มีขนาดเหมาะสม
              gap: '20px', // ระยะห่างระหว่างสินค้า
            }}
          >
            {products.map((product) => ( 
              <div
                key={product.id}
                style={{
                  border: '2px solid #f0ebe5', // ขอบของการ์ดสินค้า
                  borderRadius: '12px', // กำหนดมุมโค้งของการ์ด
                  padding: '15px', // ระยะห่างภายในการ์ด
                  textAlign: 'center', // จัดข้อความให้ตรงกลาง
                  backgroundColor: '#fff', // พื้นหลังของการ์ดเป็นสีขาว
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // ขยายการ์ดเมื่อโฮเวอร์
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // เพิ่มเงาเมื่อโฮเวอร์
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // คืนขนาดเดิมเมื่อเลื่อนเมาส์ออก
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // คืนเงาเดิม
                }}
              >
                <Link href={`/products/${product.id}`}> {/* ลิงค์ไปยังหน้าแสดงรายละเอียดสินค้า */}
                  <img
                    src={product.imageSRC}    // แสดงภาพสินค้า
                    alt={product.name} // แสดงชื่อสินค้า  
                    style={{
                      width: '100%', // ขยายภาพให้เต็มการ์ด
                      height: '200px', // กำหนดความสูงของภาพ
                      objectFit: 'cover', // ให้ภาพครอบคลุมพื้นที่ได้อย่างพอดี
                      borderRadius: '8px', // มุมโค้งของภาพ
                      marginBottom: '10px', // ระยะห่างจากด้านล่างของภาพ
                    }}
                  />
                </Link>
                <h3 style={{ color: '#5a4633', margin: '10px 0', fontSize: '18px' }}>
                  {product.name}
                </h3>
                <p style={{ color: '#8c7e70', fontSize: '14px', margin: '5px 0' }}>
                  {product.description}
                </p>
                <p style={{ color: '#b2967d', fontWeight: 'bold', marginBottom: '10px' }}>
                  ${product.price}
                </p>
                {/* ปุ่มเพิ่มสินค้าลงในตะกร้า */}
                <button
                  onClick={() => addToCart(product)}// เรียกใช้ฟังก์ชัน addToCart เมื่อคลิกปุ่ม
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '10px 16px',
                    color: '#fff',
                    backgroundColor: '#8c7e70',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s', // การเปลี่ยนสีเมื่อโฮเวอร์
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#705e4e')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#8c7e70')}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ส่วนแสดงสรุปตะกร้า */}
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            border: '1px solid #e6e1dc',
            borderRadius: '8px',
            backgroundColor: '#fff',
            maxWidth: '400px',
            margin: '30px auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              color: '#b2967d',
              fontSize: '20px',
              marginBottom: '10px',
            }}
          >
            Cart Summary
          </h2>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    borderBottom: '1px solid #e6e1dc',
                    padding: '10px 0',
                    textAlign: 'center',
                    color: '#5a4633',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>
                    {item.name} - ${item.price}
                  </span>
                  {/* ปุ่มลบสินค้าจากตะกร้า */}
                  <button
                    onClick={() => removeFromCart(index)}     // เรียกใช้ฟังก์ชัน removeFromCart เมื่อคลิกปุ่ม
                    style={{
                      color: '#fff',
                      backgroundColor: '#d9534f',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      fontSize: '12px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c9302c')}     // การเปลี่ยนสีเมื่อโฮเวอร์
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#d9534f')}    // การเปลี่ยนสีเมื่อเลื่อนเมาส์ออก
                  >
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <li style={{ textAlign: 'center', padding: '10px 0', color: '#8c7e70' }}>
                Your cart is empty
              </li>
            )}
          </ul>
          <h3 style={{ textAlign: 'center', color: '#5a4633', marginTop: '10px' }}>
            Total: ${totalPrice.toFixed(2)}
          </h3>
          {/* ปุ่มยืนยันการซื้อ */}
          {cart.length > 0 && (
            <button
              onClick={confirmPurchase}
              style={{
                display: 'block',
                margin: '20px auto 0',
                padding: '10px 20px',
                color: '#fff',
                backgroundColor: '#5cb85c',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#4cae4c')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#5cb85c')}
            >
              Confirm Purchase
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
