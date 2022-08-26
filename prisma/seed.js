const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
    },
    // include: { contact: true },
  });

  console.log("Customer created", createdCustomer);

  // Add your code here
  // https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#nested-writes
  const createdContact = await prisma.contact.create({
    data: {
      email: "des@gds.bant",
      phone: "1800-wonk",
      customerId: createdCustomer.id
      // above: tells customerId column to pull from Customer table id 
    },
  });

  console.log("Contact created", createdContact);

  const createdMovie = await prisma.movie.create({
    data: {
        title: "Nope",
        runtimeMins: 120
    },
  });
    
  console.log("Movie created", createdMovie);

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date("August 30, 2022 20:10:00")
    },
  });

  console.log("Screening created", createdScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
