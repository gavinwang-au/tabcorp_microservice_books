'use strict';

var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function () {

  describe('book', function () {

    describe('GET /book', function () {

      var book = {
        category: 'drama',
        description: 'Book 1 of a song and ice and fire',
        id: 1,
        title: 'Game of Thrones'
      };

      it('should return a default string', function (done) {

        request(server).get('/book').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, res) {
          should.not.exist(err);

          res.body[0].should.eql(book);

          done();
        });
      });

      it('should accept a name parameter', function (done) {

        request(server).get('/book/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err, res) {
          should.not.exist(err);

          res.body.should.eql(book);

          done();
        });
      });
    });
  });
});