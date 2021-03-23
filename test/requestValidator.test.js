const { should, expect, assert } = require('chai');
should();
const validates = require('../request');
describe('Unit-testing request validator function', function() {
    describe('Method Property​ Testing', function() {
        it('Method - can be ​GET​, ​POST​, ​DELETE​ or ​CONNECT', function() {
            let obj = validates({
                method: 'GET',
                uri: 'svn.public.catalog',
                version: 'HTTP/1.1',
                message: 'a'
            });
            let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
            expect(validMethods).to.include(obj.method);
        });
        it('Method - invalid value should throw an error', function() {
            expect(() => validates({
                method: 'GE',
                uri: 'svn.public.catalog',
                version: 'HTTP/1.1',
                message: 'Invalid request header: Invalid Method'
            })).to.throw();
        });
    });
    describe('URI Property​ Testing', function() {
        it('URI​ - must be a valid in passed with an asterisk (​*​)', function() {
            let obj = validates({
                method: 'GET',
                uri: '*',
                version: 'HTTP/1.1',
                message: 'a'
            });
            assert.equal(obj.uri, '*');
        })
    });
});