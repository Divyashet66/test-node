const request = require('supertest');
const app = require('./index');

// describe('Todo App', () => {
//     describe('GET /', () => {
//       test('should return status 200', async () => {
//         const response = await request(app).get('/');
//         expect(response.statusCode).toBe(200);
//       });
//     });

    describe('POST /addtask', () => {
        test('should return status 200', async () => {
          const body = { newtask: 'do laundry' };
          const response = await request(app).post('/addtask').send(body);
          expect(response.statusCode).toBe(302);
          const redirectedResponse = await request(app).get(response.header.location);
          expect(redirectedResponse.statusCode).toBe(200); // Expect a 200 status code
        });
      });
    describe('POST /removetask', () => {
      test('should remove task and return status 200', async () => {
        const body = { newtask: 'do laundry' };
        const response = await request(app).post('/removetask').send(body);
        expect(response.statusCode).toBe(302);
        const redirectedResponse = await request(app).get(response.header.location);
        expect(redirectedResponse.statusCode).toBe(200);
      });
    });
});
module.exports = app;
