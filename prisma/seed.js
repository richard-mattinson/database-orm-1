const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        },
        include: {contact: true}
    });

    console.log('Customer created', createdCustomer);

    // Add your code here

    const createdContact = await prisma.contact.create({
        data: {
            email: 'des@gds.bant',
            phone: '1800-wonk'
        }
    });

    console.log('Contact created', createdContact);


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
