// var should = require('should');
// var request = require('supertest');
// var server = require('../../../app');

// describe('controllers', function() {

//   describe('book', function() {

//     describe('GET /book', function() {

//       it('should return a default string', function(done) {

//         request(server)
//           .get('/book')
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(200)
//           .end(function(err, res) {
//             should.not.exist(err);

//             res.body.should.eql('Hello, stranger!');

//             done();
//           });
//       });

//       it('should accept a name parameter', function(done) {

//         request(server)
//           .get('/book')
//           .query({ name: 'Scott'})
//           .set('Accept', 'application/json')
//           .expect('Content-Type', /json/)
//           .expect(200)
//           .end(function(err, res) {
//             should.not.exist(err);

//             res.body.should.eql('Hello, Scott!');

//             done();
//           });
//       });

//     });

//   });

// });
