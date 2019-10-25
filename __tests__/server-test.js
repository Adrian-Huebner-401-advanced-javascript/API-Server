'use strict';

const server = require('../src/app.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server.app);

describe('Testing the API', () => {
  it('Testing to make sure the 404 middleware works', () => {
    return mockRequest.get('/javascript')
      .then(results => {
        expect(results.status).toEqual(404);
      });
  });
  it('Testing to make sure that GET ALL works', () => {

  });
  it('Testing to make sure that the POST works', () => {
    let obj = { name: 'Test Category', description: 'This is my test'};
    return mockRequest.post('/api/v1/categories').send(obj)
      .then(results => {
        expect(results.status).toEqual(200);
        expect(results.body.name).toBe('Test Category');
      });
  });
  it('Testing to make sure that the GET ONE works', () => {

  });
  it('Testing to make sure that the PUT works', () => {

  });
  it('Testing to make sure that the DELTE works', () => {

  });
});