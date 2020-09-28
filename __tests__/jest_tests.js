const db = require('../database/index.js');

const data = require('../server/scripts/dummy_data.js');

describe('Correctly Seeding A Database', () => {
  db.connection.query('TRUNCATE homes', (error, result) => {
    if (error) {
      return error;
    }
    return result;
  });

  it('Testing Database is Empty', (done) => {
    db.getHomePrices((error, result) => {
      expect(result.length).toBe(0);
      done();
    });
  });
  it('Testing Database is Seeded', (done) => {
    db.seedDatabase(data, (error, result) => {
      db.getHomePrices((error, result) => {
        expect(result.length).toBe(100);
        db.connection.end(() => {
          done();
        });
      });
    });
  });
});
