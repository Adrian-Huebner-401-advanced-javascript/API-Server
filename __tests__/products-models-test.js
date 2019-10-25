'use strict';

const Products = require('../src/models/products/products-models');
const supergoose = require('./supergoose');

const products = new Products();
// beforeAll(supergoose.startDB);
// afterAll(supergoose.stopDB);

describe('Testing the Products Model', () => {
  it('Can POST a new product', () => {
    let obj = { name: 'Test Product', description: 'This is my testing product', price: 14, category: 'Testing'};
    return products.create(obj)
      .then(result => {
        Object.keys(obj).forEach((key) => {
          expect(result[key]).toEqual(obj[key]);
        });
      });
  });
  it('Can GET one Product by ID', () => {
    let obj = { name: 'Test Product', description: 'This is my testing product', price: 14, category: 'Testing'};
    return products.create(obj)
      .then(result => {
        expect(result.name).toEqual(obj.name);
        return products.get(result._id)
          .then(products => {
            expect(products[0].name).toEqual(obj.name);
          });
      });
  });
  it('Can DELETE a Product', () => {
  
  });
  it('Can PUT a Product', () => {
    
  });
});