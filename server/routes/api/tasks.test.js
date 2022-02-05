const app = require('../../server');
const supertest = require('supertest');
const request = supertest(app);

test('Gets the list all tasks endpoint', () => {
  app
    .get('/api/tasks')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBeTruthy();
    });
});
// it('Gets the list all tasks endpoint', async done => {
//   const res = await request.get('/api/tasks');
//   done();
// })