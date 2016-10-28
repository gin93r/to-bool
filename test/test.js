'use strict'

var expect = require('chai').expect;
var toBool = require('../dist/index');

describe('#toBool', function()
{
    // require to-bool with defaults
    // check that embarkJS.toBool handles all false possibilities
    it('should return false for falsy values', function() {
        expect(toBool("0")).to.be.false;
        expect(toBool(0)).to.be.false; 
        expect(toBool("false")).to.be.false; 
        expect(toBool("fALsE")).to.be.false;
        expect(toBool(false)).to.be.false;
        expect(toBool(undefined)).to.be.false;
        expect(toBool(null)).to.be.false;
    });

    it('should return undefined when "treatUndefinedAsFalse is false', function()
    {
        expect(toBool(undefined, {treatUndefinedAsFalse:false})).to.be.undefined;
    });

    it('should return null when "treatNullAsFalse is false', function()
    {
        expect(toBool(null, {treatNullAsFalse:false})).to.be.null;
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