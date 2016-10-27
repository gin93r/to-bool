'use strict'

var expect = require('chai').expect;
var toBool = require('../index');

describe('#toBool', function()
{
    // check that embarkJS.toBool handles all false possibilities
    it('should return false for falsy values', function() {
        expect(toBool("0")).to.be.false;
        expect(toBool(0)).to.be.false; 
        expect(toBool("false")).to.be.false; 
        expect(toBool("fALsE")).to.be.false;
        expect(toBool(false)).to.be.false;
        expect(toBool(undefined)).to.be.false;
        expect(toBool(null)).to.be.false;
        expect(toBool()).to.be.false;
    });

    // check that toBool handles all true possibilities
    it('should return true truthy values', function() {
        expect(toBool(1)).to.be.true;
        expect(toBool("1")).to.be.true;
        expect(toBool("true")).to.be.true;
        expect(toBool(true)).to.be.true;
        expect(toBool("TRuE")).to.be.true;
    });
    // if something that is neither truthy or falsy is passed an error should be thrown
    it('should throw an error if something odd is passed', function() {
        expect(function(){toBool("TRu3")}).to.throw("Could not convert 'tru3' into a boolean.");
    });
});