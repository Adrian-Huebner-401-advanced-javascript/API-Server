'use strict';

const Categories = require('../src/models/categories/categories-model');
const supergoose = require('./supergoose');

const categories = new Categories();
// beforeAll(supergoose.startDB);
// afterAll(supergoose.stopDB);

describe('Testing the Categories Model', () => {
  it('Can POST a new category', () => {
    let obj = { name: 'Test Category', description: 'This is my testing category'};
    return categories.create(obj)
      .then(result => {
        Object.keys(obj).forEach((key) => {
          expect(result[key]).toEqual(obj[key]);
        });
      });
  });
  it('Can GET one Category by ID', () => {
    let obj = { name: 'Test Category', description: 'This is my testing category'};
    return categories.create(obj)
      .then(result => {
        expect(result.name).toEqual(obj.name);
        return categories.get(result._id)
          .then(categories => {
            expect(categories[0].name).toEqual(obj.name);
          });
      });
  });
  it('Can DELETE a Category', () => {
  
  });
  it('Can PUT a Category', () => {
    
  });
});