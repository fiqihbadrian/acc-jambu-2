# Admin Panel Documentation

## Access Dashboard

1. Login sebagai admin di homepage menggunakan:
   - Email: `admin@anekacitra.com`
   - Password: `admin123`

2. Setelah login, klik "Dashboard Admin" di header

## Features

### 1. Dashboard Overview
- Statistik real-time:
  - Total produk di database
  - Total pesanan dari semua customers
  - Pesanan yang menunggu pembayaran
- Quick access menu ke semua fitur admin

### 2. Kelola Produk

#### View Products
- Table view dengan semua produk dari database
- Menampilkan gambar, nama, brand, harga, dan stok
- Stock badge dengan color coding:
  - 🔴 Merah: Stok habis (0)
  - 🟡 Kuning: Stok sedikit (<10)
  - 🟢 Hijau: Stok cukup (≥10)

#### Tambah Produk Baru
1. Klik tombol "Tambah Produk"
2. Isi form:
   - Nama Produk (required)
   - Brand (required)
   - Harga dalam Rupiah (required, harus positif)
   - Stok (required, harus positif)
   - Deskripsi (required)
   - URL Gambar (required, harus valid URL)
3. Klik "Tambah Produk"
4. Produk langsung tersimpan di database

#### Edit Produk
1. Klik tombol "Edit" pada row produk
2. Form akan terbuka dengan data existing
3. Ubah field yang diperlukan
4. Klik "Simpan Perubahan"
5. Database akan terupdate

#### Hapus Produk
1. Klik tombol "Hapus" pada row produk
2. Konfirmasi penghapusan
3. Produk akan terhapus dari database

### 3. Kelola Pesanan

#### View Orders
- Table view dengan semua pesanan dari customers
- Informasi yang ditampilkan:
  - ID Pesanan
  - Email customer
  - Total pembayaran
  - Status pembayaran (PENDING/PAID/CANCELLED)
  - Invoice ID
  - Tanggal pesanan

#### Status Badge Color
- 🟡 Kuning (PENDING): Menunggu pembayaran
- 🟢 Hijau (PAID): Sudah dibayar
- 🔴 Merah (CANCELLED): Pesanan dibatalkan

#### Update Status Pesanan
1. Klik tombol "Update" pada row pesanan
2. Modal akan muncul dengan detail pesanan
3. Pilih status baru:
   - Menunggu Pembayaran (PENDING)
   - Sudah Dibayar (PAID)
   - Batal (CANCELLED)
4. Klik "Update Status"
5. Database akan terupdate dan modal tertutup

### 4. Kelola Admin (Coming Soon)
- Fitur untuk menambah/menghapus akun admin
- Untuk sekarang, admin hanya dapat dikelola melalui database

## API Endpoints Used

### Products Management

#### GET /api/admin/products
Mengambil semua produk dari database
- Response: Array of products

#### POST /api/admin/products
Create produk baru
- Request Body:
  ```json
  {
    "name": "string",
    "brand": "string",
    "priceCents": number,
    "stock": number,
    "description": "string",
    "imageUrl": "string"
  }
  ```
- Response: Created product object

#### PUT /api/admin/products/[id]
Update produk existing
- Path Parameter: Product ID
- Request Body: Same as POST
- Response: Updated product object

#### DELETE /api/admin/products/[id]
Hapus produk
- Path Parameter: Product ID
- Response: Success message

### Orders Management

#### GET /api/orders
Mengambil semua orders
- Response: Array of orders dengan customer dan items detail

#### POST /api/orders/payment-status
Update payment status pesanan
- Request Body:
  ```json
  {
    "orderId": number,
    "paymentStatus": "PENDING|PAID|CANCELLED"
  }
  ```
- Response: Updated order object

### Admin Accounts

#### GET /api/admin/admins
Mengambil semua admin users
- Response: Array of admin users

## Security

- Semua route `/dashboard/*` dilindungi oleh middleware
- Semua route `/api/admin/*` dilindungi oleh middleware
- Middleware verify JWT token dari cookie
- Hanya user dengan role "ADMIN" yang bisa akses
- Redirect ke homepage jika tidak authorized

## Tips

1. **Price Input:** Masukkan harga dalam Rupiah langsung (contoh: 2250000 untuk Rp 2.250.000)
2. **Image URL:** Gunakan URL gambar dari sumber terpercaya (Unsplash, CDN, dll)
3. **Stock Management:** Update stok secara berkala untuk akurasi
4. **Brand Consistency:** Gunakan nama brand yang konsisten (Canon, Epson, HP, Brother)
5. **Order Status:** Periksa status pesanan secara berkala dan update jika ada perubahan pembayaran

## Workflow Lengkap

### Ketika Customer Melakukan Pembelian:
1. Customer browse produk di homepage
2. Customer lihat detail produk (modal)
3. Customer tambah ke keranjang
4. Customer checkout dengan mengisi form pengiriman
5. Order dibuat di database dengan status "PENDING"
6. Invoice Xendit dibuat (sandbox mode)

### Tugas Admin:
1. Login ke admin dashboard
2. Klik "Kelola Pesanan"
3. Lihat pesanan dengan status "Menunggu Pembayaran"
4. Ketika customer sudah membayar, update status ke "Sudah Dibayar"
5. Catat nomor resi pengiriman (fitur coming soon)

### Tugas Admin Produk:
1. Login ke admin dashboard
2. Klik "Kelola Produk"
3. Pantau stok produk
4. Tambah produk baru jika ada
5. Update harga jika ada perubahan
6. Hapus produk jika sudah discontinued

## Coming Soon

- Kelola Admin (tambah/hapus akun admin)
- Export/Import data
- Product image upload
- Bulk operations
- Order notes/comments
- Shipping integration
- Real Xendit integration

