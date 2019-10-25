'use strict';

const People = require('../src/models/people/people-model');
const supergoose = require('./supergoose');

const people = new People();
// beforeAll(supergoose.startDB);
// afterAll(supergoose.stopDB);

describe('Testing the People Model', () => {
  it('Can POST a new people', () => {
    let obj = {id: 'gh48a9urehsd8w', firstName: 'Pip', lastName: 'Erlemeier', age: 5};
    return people.create(obj)
      .then(result => {
        Object.keys(obj).forEach((key) => {
          expect(result[key]).toEqual(obj[key]);
        });
      });
  });
  it('Can GET one Person by ID', () => {
    let obj = {id: 'gh48a9urehsd8w', firstName: 'Pip', lastName: 'Erlemeier', age: 5};
    return people.create(obj)
      .then(result => {
        expect(result.name).toEqual(obj.name);
        return people.get(result._id)
          .then(people => {
            expect(people[0].name).toEqual(obj.name);
          });
      });
  });
  it('Can DELETE a Person', () => {
  
  });
  it('Can PUT a Person', () => {
    
  });
});