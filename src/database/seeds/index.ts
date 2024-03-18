import { seedUsers } from './UserSeed.js';
import { seedCompetitions } from './CompetitionSeed.js';
import { seedMatches } from './MatchSeed.js';
import { seedStats } from './StatsSeed.js';

const seedAll = async (fresh: string | boolean | null) => {
  if (fresh) {
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedCompetitions();
    console.log('\n----- COMPETITIONS SEEDED -----\n');
    await seedMatches();
    console.log('\n----- MATCHES SEEDED -----\n');
    await seedStats();
    console.log('\n----- STATS SEEDED -----\n');
  } else {
    console.log('\n----- NOT SEEDING -----\n')
  }
};

export default seedAll;
