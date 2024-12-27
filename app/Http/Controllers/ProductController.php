<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // ตัวแปร $products เป็นอาเรย์ที่เก็บข้อมูลของผลิตภัณฑ์ เช่น 'id', 'name', 'description', 'price', และ 'imageSRC'
    // ข้อมูลเหล่านี้ถูกกำหนดไว้ล่วงหน้า แต่ในแอปพลิเคชันจริงๆ จะนำข้อมูลจากฐานข้อมูลมาใช้
    private $products = [
        ['id' => 1, 'name' => 'กระเป๋าสะพายไหล่', 'description' => 'High-performance laptop', 'price' => 1500, 'imageSRC' => 'https://down-th.img.susercontent.com/file/65689cc440c0156137b26c80b8e3530d'],
        ['id' => 2, 'name' => 'Smartphone', 'description' => 'Latest smartphone with great features', 'price' => 800, 'imageSRC' => 'https://tse1.mm.bing.net/th?id=OIP.QArKDCx22zNKzNNyzsZxLwHaHa&pid=Api&P=0&h=180'],
        ['id' => 3, 'name' => 'Tablet', 'description' => 'Portable tablet for everyday use', 'price' => 500, 'imageSRC' => 'https://www.bagscreen.com/wp-content/uploads/2020/03/standard-color-L-01-500x500.jpg'],
        ['id' => 4, 'name' => 'Headphones', 'description' => 'Noise-cancelling headphones', 'price' => 200, 'imageSRC' => 'https://cf.shopee.co.th/file/0e9ae7d020de12ccf82c23dc2fa8753e'],
        ['id' => 5, 'name' => 'Smartwatch', 'description' => 'Stylish smartwatch with health tracking', 'price' => 250, 'imageSRC' => 'https://tse4.mm.bing.net/th?id=OIP.NC3QPGRi6GKNNSM3fDiFwQHaHa&pid=Api&P=0&h=180'],
        ['id' => 6, 'name' => 'Camera', 'description' => 'High-resolution digital camera', 'price' => 1000, 'imageSRC' => 'https://tse4.mm.bing.net/th?id=OIP.YoExt6dqxbLiNhmUBGdaIAHaHa&pid=Api&P=0&h=180'],
        ['id' => 7, 'name' => 'Monitor', 'description' => '4K UHD monitor for professional use', 'price' => 600, 'imageSRC' => 'https://tse4.mm.bing.net/th?id=OIP.JjmblrQf_HEik5u3NkixmQHaHa&pid=Api&P=0&h=180'],
        ['id' => 8, 'name' => 'Keyboard', 'description' => 'Mechanical keyboard with RGB lighting', 'price' => 100, 'imageSRC' => 'https://hqluggage.com/wp-content/uploads/2023/01/line_album_b10005__9.jpg'],
        ['id' => 9, 'name' => 'Mouse', 'description' => 'Wireless ergonomic mouse', 'price' => 50, 'imageSRC' => 'https://lzd-img-global.slatic.net/live/th/p/tsd-by-anne-kokke-kraepaasaphaay-run-akdl016-army-green-5152-188241-1.jpg_720x720q80.jpg'],
        ['id' => 10, 'name' => 'External Hard Drive', 'description' => '2TB portable external hard drive', 'price' => 120, 'imageSRC' => 'https://down-th.img.susercontent.com/file/5a0df775203e58b54d562a1f8cb199a1_tn']
    ];

    /**
     * แสดงรายการผลิตภัณฑ์ทั้งหมด
     * ฟังก์ชันนี้ใช้แสดงรายการผลิตภัณฑ์ทั้งหมด โดยส่งข้อมูลของผลิตภัณฑ์จากตัวแปร $products ไปยังหน้าวิว 'Products/Index'
     * ใช้ Inertia.js ในการส่งข้อมูลไปยังหน้า frontend ในรูปแบบ SPA (Single Page Application)
     */
    public function index()
    {
        // เรนเดอร์หน้า 'Products/Index' และส่งข้อมูลผลิตภัณฑ์ไปยังหน้า frontend
        return Inertia::render('Products/Index', ['products' => $this->products]);  // ส่งข้อมูลผลิตภัณฑ์ไปยังหน้า index
    }

   
    public function create()
    {
        // 
    }

  
     
    public function store(Request $request)
    {
        // 
    }

    /**
     * 
     * 
     * @param string $id ID ของผลิตภัณฑ์ที่ต้องการแสดง
     * @return \Inertia\Response
     */
    public function show(string $id)// รับ id ของผลิตภัณฑ์ที่ต้องการแสดง
    {
        // ค้นหาผลิตภัณฑ์จากอาเรย์ $products โดยใช้ id ที่ระบุ
        $product = collect($this->products)->firstWhere('id', $id);// ค้นหาผลิตภัณฑ์จากอาเรย์ $products โดยใช้ id ที่ระบุ

        // หากไม่พบผลิตภัณฑ์ จะเรียกข้อผิดพลาด 404
        if (!$product) {
            abort(404, 'Product not found');
        }

        // เรนเดอร์หน้า 'Products/Show' และส่งข้อมูลผลิตภัณฑ์ไปยังหน้า frontend
        return Inertia::render('Products/Show', ['product' => $product]);
    }

    /**
     * แสดงฟอร์มแก้ไขข้อมูลผลิตภัณฑ์ที่ระบุ
     * ฟังก์ชันนี้จะใช้แสดงฟอร์มแก้ไขข้อมูลผลิตภัณฑ์ที่มี id ที่ระบุ
     * ฟังก์ชันนี้ยังไม่ได้ใช้งาน
     * 
     * @param string $id ID ของผลิตภัณฑ์ที่ต้องการแก้ไข
     */
    public function edit(string $id)
    {
        // ไม่มีฟังก์ชันที่ใช้งานในตอนนี้
    }

    /**
     * อัพเดตข้อมูลผลิตภัณฑ์ที่ระบุ
     * ฟังก์ชันนี้จะใช้ในการอัพเดตข้อมูลผลิตภัณฑ์หลังจากที่มีการกรอกข้อมูลในฟอร์ม
     * ฟังก์ชันนี้ยังไม่ได้ใช้งาน
     * 
     * @param Request $request ข้อมูลที่ใช้ในการอัพเดตผลิตภัณฑ์
     * @param string $id ID ของผลิตภัณฑ์ที่ต้องการอัพเดต
     */
    public function update(Request $request, string $id)
    {
        // ไนี้
    }

    /**
     *
     * 
     * @param string $id ID ของผลิตภัณฑ์ที่ต้องการลบ
     */
    public function destroy(string $id)
    {
        
    }
}

