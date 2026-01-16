# Aneka Citra Computer - E-Commerce Printer

Website e-commerce untuk toko printer **Aneka Citra Computer** di Jambu 2, Kota Bogor.

---

**👨‍💻 Developer:** Fiqih Badrian ([@fiqihbadrian](https://github.com/fiqihbadrian))  
**📧 Email:** fiqihbadrian@gmail.com  
**🗓️ Development Period:** January 2026  
**💻 Project Type:** Full-Stack E-Commerce Web Application

---

## Fitur

### Customer Features
- Katalog produk printer dengan detail lengkap
- Shopping cart dengan CRUD operations (Create, Read, Update, Delete)
- Autentikasi (Login & Register)
- Checkout dengan form pengiriman
- Simulasi pembayaran menggunakan Xendit (mode sandbox)
- Product detail modal (Tokopedia-style) dengan quantity selector dan tabs

### Admin Features
- Dashboard admin dengan statistik
- CRUD Produk (Create, Read, Update, Delete)
- Manajemen database produk melalui UI
- Protected routes dengan JWT middleware

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** SQLite dengan Prisma ORM v5.14.0
- **Authentication:** JWT (jose) + bcryptjs
- **Validation:** Zod
- **Payment:** Xendit (sandbox mode)

## Installation

1. Clone repository ini
2. Install dependencies:
```bash
npm install
```

3. Setup environment variables di `.env`:
```env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="your-secret-key-here"
```

4. Generate Prisma client & run migrations:
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Seed database dengan data awal:
```bash
npm run prisma:seed
```

6. Jalankan development server:
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Admin Access

Setelah seed, gunakan kredensial berikut untuk login sebagai admin:

- **Email:** admin@anekacitra.com
- **Password:** admin123

## Project Structure

```
src/
├── app/
│   ├── api/                    # API Routes
│   │   ├── auth/              # Login & Register endpoints
│   │   ├── products/          # Get products
│   │   ├── orders/            # Create order & payment status
│   │   └── admin/             # Admin CRUD endpoints
│   ├── dashboard/             # Admin dashboard pages
│   │   ├── page.tsx          # Dashboard overview
│   │   └── products/         # Product management
│   ├── checkout/             # Checkout page
│   └── page.tsx              # Homepage
├── lib/
│   ├── auth.ts               # JWT & bcrypt utilities
│   ├── db.ts                 # Prisma client
│   └── xendit.ts             # Mock Xendit integration
└── middleware.ts             # Admin route protection

prisma/
├── schema.prisma             # Database schema
├── seed.ts                   # Database seeding script
└── migrations/               # Database migrations
```

## Database Schema

- **User:** Customer accounts dengan role (USER/ADMIN)
- **Admin:** Admin relation (1-to-1 dengan User)
- **Product:** Product catalog dengan brand, price, stock, description
- **Order:** Customer orders dengan payment status
- **OrderItem:** Order line items (relasi many-to-many)

## Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint

# Prisma commands
npm run prisma:generate   # Generate Prisma client
npm run prisma:migrate    # Run database migrations
npm run prisma:studio     # Open Prisma Studio (database GUI)
npm run prisma:seed       # Seed database dengan data awal
```

## Features Detail

### Customer Flow
1. Browse products di homepage
2. Click "Lihat Detail" untuk melihat detail produk lengkap
3. Login/Register jika belum login
4. Tambah produk ke keranjang dengan quantity yang diinginkan
5. Kelola keranjang (update quantity, hapus item)
6. Checkout dengan mengisi form pengiriman
7. Pilih metode pembayaran
8. Simulasi pembayaran (Xendit sandbox)

### Admin Flow
1. Login dengan akun admin
2. Akses Dashboard Admin dari header
3. Kelola Produk:
   - View semua produk dalam table
   - Tambah produk baru
   - Edit produk existing
   - Hapus produk
4. Semua perubahan langsung tersimpan di database

## Security

- Password di-hash menggunakan bcryptjs (salt rounds: 10)
- JWT tokens disimpan dalam httpOnly cookies
- Admin routes protected dengan middleware JWT verification
- Zod validation untuk semua API endpoints

## Coming Soon

- [ ] Manajemen Pesanan (view & update payment status)
- [ ] Manajemen Admin accounts
- [ ] Customer order history
- [ ] Product search & filter
- [ ] Integrasi Xendit production
- [ ] Integrasi pengiriman (shipping API)
- [ ] Product image upload

## Notes

- Database menggunakan SQLite untuk development (mudah setup)
- Xendit masih dalam mode sandbox/simulasi
- Middleware menggunakan deprecated convention (akan migrate ke "proxy")
- Untuk production, ganti SQLite ke PostgreSQL/MySQL

## Preview

![home](https://raw.githubusercontent.com/fiqihbadrian/acc-jambu-2/refs/heads/main/public/hom.png)
![login](https://raw.githubusercontent.com/fiqihbadrian/acc-jambu-2/refs/heads/main/public/log.png)
![das](https://raw.githubusercontent.com/fiqihbadrian/acc-jambu-2/refs/heads/main/public/dashbor.png)
![edit](https://raw.githubusercontent.com/fiqihbadrian/acc-jambu-2/refs/heads/main/public/edit.png)
![admin](https://raw.githubusercontent.com/fiqihbadrian/acc-jambu-2/refs/heads/main/public/admin.png)