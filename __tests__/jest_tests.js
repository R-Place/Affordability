const db = require('../database/index.js');

const data = require('../server/scripts/dummy_data.js');

describe('Correctly Seeding A Database', () => { // eslint-disable-line
  // we need to check that the database is empty first
  db.connection.query('TRUNCATE homes', (error, result) => {
    if (error) {
      return error;
    }
    return result;
  });

  it('Testing Database is Empty', (done) => { // eslint-disable-line
    db.getHomePrices((error, result) => {
      expect(result.length).toBe(0); // eslint-disable-line
      done();
    });
  });
  it('Testing Database is Seeded', (done) => { // eslint-disable-line
    db.seedDatabase(data, (error, result) => {// eslint-disable-line
      db.getHomePrices((error, result) => {// eslint-disable-line
        expect(result.length).toBe(100); // eslint-disable-line
        db.connection.end(() => {
          done();
        });
      });
    });
  });
});
