const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

async function main() {
  await prisma.board.deleteMany()

  const catagories = [
    "Recent",
    "Celebration",
    "Thank You",
    "Inspiration"
  ]

  // await prisma.board.create({ data: { 
  //   title: '', // string
  //   category: catagories[3], // string
  //   owner: '', // string
  // }})

  await prisma.board.create({ data: { 
    title: '☀️ Good Morning 🌻', // string
    category: catagories[3], // string
    owner: 'Bob', // string
    image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3hsZmhhMHMyMWV4a2d3YnNwNWdkbThkcGwybjlpeGY2amt1NGU4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8cOkSOuvIChHNYOyP7/giphy.gif",
    cards: {
      create: [
        {
          title: "Rise and Shine",
          description: "It's go time",
          gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXV5a2txNmt4a3d4em0ycGN2N2NpY2RmNnJwdGt1N2trNHhobDRvZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YHvI6fvc1bwfrP9alV/giphy.gif",
          owner: "Bob",
          votes: 0
        },
        {
          title: "Morning Motivation",
          description: "...Just get some coffee.",
          gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFwZzlrbzMwYTZ3bGZuMnk2bmtvMXM2azdlb2R3d2ZyaGZmeWVieCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M4ecx9P2jI4tq/giphy.gif",
          owner: "Josey",
          votes: 0
        }
      ]
    }
  }})

  await prisma.board.create({ data: { 
    title: '🧑‍🤝‍🧑 Team Updates 🌱', // string
    category: catagories[0], // "Recent"
    owner: 'Alice', // string
    cards: {
      create: [
        {
          title: 'Team Check-In',
          description: 'Description for first card',
          gif: 'https://cdn-icons-gif.flaticon.com/6416/6416351.gif',
          owner: 'Alice',
          votes: 0
        },
        {
          title: 'Collaboration Sprint',
          description: 'Description for second card',
          gif: 'https://i.giphy.com/3o7TKMt1VVNkHV2PaE.webp',
          owner: 'Jerry',
          votes: 0
        },
        {
          title: 'Update',
          description: 'Description for third card',
          gif: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG85dTk1NHh6aW41MzFlZ2gyYjhtejRwZHhnN3g1bjkzNDdyYjJ0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gF8jhb7lTPGzqzfZ0h/giphy.gif',
          owner: 'Sal',
          votes: 0
        }
      ]
    }
  }})

  await prisma.board.create({ data: { 
    title: '🏗️ Project Celebrations 🎉', // string
    category: catagories[1], // "Celebration"
    owner: 'Bob', // string
  }})

  await prisma.board.create({ data: { 
    title: '😊 Grateful Moments 🎁', // string
    category: catagories[2], // "Thank you"
    owner: 'Rosa', // string
  }})

  await prisma.board.create({ data: { 
    title: '🏋️‍♀️ Workout Ideas 🏊', // string
    category: catagories[3], // "Inspiration"
    owner: 'Jordan', // string
  }})

  await prisma.board.create({ data: { 
    title: '📝 Evening Reflections ✨', // string
    category: catagories[0], // "Recent"
    owner: 'Eve', // string
  }})

  await prisma.board.create({ data: { 
    title: '👩‍💻 Weekly Retrospectives 📚', // string
    category: catagories[1], // "Celebration"
    owner: 'Shareena', // string
  }})

  console.log('Board data seeded 🌰 ✅.')
}

main()
.catch(e => {
  console.error('🌰 ❌ Seed error:', e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
})

/* Modal Referecne for board
  board_id  Int       @id @default(autoincrement())
  title     String?
  category  String?
  owner     String?
  image     String?
  createdAt DateTime  @default(now())
  updatedAt DateTime? @updatedAt
  cards     card[]
*/

/* Modal Referecne for card
  card_id     Int     @id @default(autoincrement())
  title       String?
  description String?
  gif         String?
  owner       String?
  votes       Int?    @default(0)
  createdAt DateTime  @default(now())
  updatedAt DateTime? @updatedAt
  board     board?    @relation(fields: [board_id], references: [board_id])
  board_id  Int?
*/