const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const events = [
 
    {
      name: "Exposition d'Art Moderne",
      desc: "Une exposition mettant en avant des artistes contemporains.",
      picture: "art.jpg",
      adress: { type: "Point", coordinates: [13.405, 52.52] }, // Berlin
      start_at: new Date("2025-08-20"),
      end_at: new Date("2025-09-05"),
    },
    {
      name: "Salon du Jeu Vidéo",
      desc: "Un salon dédié aux passionnés de jeux vidéo et aux nouvelles technologies.",
      picture: "gaming.jpg",
      adress: { type: "Point", coordinates: [139.6917, 35.6895] }, // Tokyo
      start_at: new Date("2025-10-05"),
      end_at: new Date("2025-10-08"),
    },
    {
      name: "Festival du Cinéma",
      desc: "Un festival célébrant le cinéma indépendant et les productions internationales.",
      picture: "cinema.jpg",
      adress: { type: "Point", coordinates: [-118.2437, 34.0522] }, // Los Angeles
      start_at: new Date("2025-11-01"),
      end_at: new Date("2025-11-10"),
    }
  ];

  for (const event of events) {
    await prisma.event.create({ data: event });
  }

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());