const db = require('../database/index.js');

const prices = require('../server/scripts/dummy_data.js');



describe('Correctly Seeding A Database', () => {
  db.connection.query('TRUNCATE homes', (error, result) => {
    if (error) {
      return error;
    }
    return result;
  });

  it('Testing Database is Empty', (done) => {
    db.Homes.getPrices((error, result) => {
      expect(result.length).toBe(0);
      done();
    });
  });
  it('Testing Database is Seeded', (done) => {
    db.Homes.seedDatabase(prices, (error, result) => {
      db.Homes.getPrices((error, result) => {
        expect(result.length).toBe(100);
        db.connection.end(() => {
          done();
        });
      });
    });
  });
});
