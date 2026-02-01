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