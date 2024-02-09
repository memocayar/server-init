require('supertest');
require("dotenv").config();

const Server = require('../src/server')
const server = new Server();

describe('set of math test', () => {
  
    test('it is pair', () => {
      expect(6 % 2).toEqual(0);
    });
    
    test('it is not pair', () => {
      expect(7 % 2).not.toEqual(0);
    });
    
  });