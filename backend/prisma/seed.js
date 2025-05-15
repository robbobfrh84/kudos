const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.test.deleteMany()

  await prisma.test.create({
    data: { name: 'Bob', number: 49 }
  })
  await prisma.test.create({
    data: { name: 'Jordan', number: 11 }
  })
  await prisma.test.create({
    data: { name: 'Shareena', number: 17 }
  })

  console.log('Test data seeded 🌰 ✅.')
}

main()
  .catch(e => {
    console.error('🌰 ❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })