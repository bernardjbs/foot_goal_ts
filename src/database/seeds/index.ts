import { seedUsers } from './UserSeed.js';

const seedAll = async (fresh: boolean | null) => {
  if (fresh) {
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  } else {
    console.log('\n----- NOT SEEDING -----\n')
  }
};

export default seedAll;
