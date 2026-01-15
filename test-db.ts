import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  try {
    const count = await prisma.product.count();
    console.log("✅ Products in DB:", count);
    
    const products = await prisma.product.findMany({ take: 3 });
    console.log("\n📦 Sample products:");
    products.forEach(p => {
      console.log(`- ${p.name}: Rp ${p.priceCents.toLocaleString("id-ID")}`);
    });
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
