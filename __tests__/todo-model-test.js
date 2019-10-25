'use strict';

const Todo = require('../src/models/todo/todo-model');
const supergoose = require('./supergoose');

const todo = new Todo();
// beforeAll(supergoose.startDB);
// afterAll(supergoose.stopDB);

describe('Testing the Todo Model', () => {
  it('Can POST a new todo', () => {
    let obj = { text: 'Create tests for Lab', category: 'Testing', assignee: 'Everyone in class', difficulty: '4', complete: false };
    return todo.create(obj)
      .then(result => {
        Object.keys(obj).forEach((key) => {
          expect(result[key]).toEqual(obj[key]);
        });
      });
  });
  it('Can GET one Todo by ID', () => {
    let obj = { text: 'Create tests for Lab', category: 'Testing', assignee: 'Everyone in class', difficulty: '4', complete: false };
    return todo.create(obj)
      .then(result => {
        expect(result.name).toEqual(obj.name);
        return todo.get(result._id)
          .then(todo => {
            expect(todo[0].name).toEqual(obj.name);
          });
      });
  });
  it('Can DELETE a Todo', () => {
  
  });
  it('Can PUT a Todo', () => {
    
  });
});