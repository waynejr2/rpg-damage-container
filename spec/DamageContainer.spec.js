

var expect = require('chai').expect;
var assert = require('chai').assert;
var path = require('path');
//var basedir = path.resolve('./');
var DamageContainer = require('../index.js');
//var DamageContainer = require(path.resolve(basedir, 'js/DamageContainer'));

describe('Testing DamageContainer', function() {
    describe('instantiate DamageContainer', function() {
        it('is instanceof DamageContainer', function() {
            var dc = new DamageContainer();
            
            var actual = dc instanceof DamageContainer;
            var expected = true;
            
            expect(actual).to.equal(expected);           
        });
        it('instantiate DamageContainer without passing a parameter, calculate should be 0', function() {
            var dc = new DamageContainer();
            
            var actual = dc.calculateDamage();
            var expected = 0;
            
            expect(actual).to.equal(expected);  
        });
        it('instantiate DamageContainer with passing a parameter of 0, calculate should be 0', function() {
            var dc = new DamageContainer(0);
            
            var actual = dc.calculateDamage();
            var expected = 0;
            
            expect(actual).to.equal(expected);  
        });
        it('instantiate DamageContainer with passing a parameter of 1, calculate should be 1', function() {
            var dc = new DamageContainer(1);
            
            var actual = dc.calculateDamage();
            var expected = 1;
            
            expect(actual).to.equal(expected);  
        });
        it('instantiate DamageContainer with passing a parameter of null, calculate should be 0', function() {
            var dc = new DamageContainer(null);
            
            var actual = dc.calculateDamage();
            var expected = 0;
            
            expect(actual).to.equal(expected);  
        });
    });
    
    describe('addBonusDamage test suite', function() {
        it('add 0 bonus damage', function() {
            var dc = new DamageContainer(12);
            
            dc.addBonusDamage(0);
            var actual = dc.calculateDamage();
            var expected = 12;
            
            expect(actual).to.equal(expected);     
        });
        it('add 100 bonus damage', function() {
            var dc = new DamageContainer(12);
            
            dc.addBonusDamage(50);
            dc.addBonusDamage(50);
            var actual = dc.calculateDamage();
            var expected = 112;
            
            expect(actual).to.equal(expected);     
        });
    });
    
    describe('calculateBonusMultiplier test suite', function() {
        it('2 3 4 5 equals 11', function() { 
            var dc = new DamageContainer();
            
            dc.addBonusMultiplier(2);
            dc.addBonusMultiplier(3);
            dc.addBonusMultiplier(4);
            dc.addBonusMultiplier(5);
            
            var actual = dc.calculateBonusMultiplier();
            var expected = 11;
            
            expect(actual).to.equal(expected); 
        });
    });
       
    describe('calculateDamage', function() {
        it('return basedamage of 12', function() {
            var dc = new DamageContainer(12);
            
            var actual = dc.calculateDamage();
            var expected = 12;
            
            expect(actual).to.equal(expected);     
        });

    });
    
    describe('addBonusDamage to 12 basedamage', function() {
        it('add 3 bonus results in 15', function() {
            var dc = new DamageContainer(12);
            
            dc.addBonusDamage(3);
            var actual = dc.calculateDamage();
            var expected = 15;
            
            expect(actual).to.equal(expected);     
        });
    });
    
    describe('addBonusMultiplier', function() {
        it('base 12, add 3, addmultiplier 3 should be 39', function() {
            var dc = new DamageContainer(12);
            
            dc.addBonusDamage(3);
            dc.addBonusMultiplier(3);
            var actual = dc.calculateDamage();
            var expected = 39;
            
            expect(actual).to.equal(expected);     
        });
    });    
    
    describe('addPenaltyMultiplier', function() {
        it('base 12, add 3, addmultiplier 3, addpenaltymultiplier 1/3 should be 15', function() {
            var dc = new DamageContainer(12);
            
            dc.addBonusDamage(3);
            dc.addBonusMultiplier(3);
            dc.addPenaltyMultiplier(1/3);
            var actual = dc.calculateDamage();
            var expected = 15;
            
            expect(actual).to.equal(expected);               
        });
    });
    
    describe('scenarios', function() {
        it('base 6, addmultipliers of 2, 3, 4 to total 42', function() {
            var dc = new DamageContainer(6);
            
            dc.addBonusMultiplier(2);
            dc.addBonusMultiplier(3);
            dc.addBonusMultiplier(4);
            var actual = dc.calculateDamage();
            var expected = 42;
            
            expect(actual).to.equal(expected);     
        });
        
        it('base 4.5, addpenaltymultipliers of .5 to total 2.25', function() {
            var dc = new DamageContainer(4.5);
            
            dc.addPenaltyMultiplier(0.5);
            var actual = dc.calculateDamage();
            var expected = 2.25;
            
            expect(actual).to.equal(expected);     
        });
        
        it('base 4.5, addpenaltymultipliers of .5, .5 to total 1.125', function() {
            var dc = new DamageContainer(4.5);
            
            dc.addPenaltyMultiplier(0.5);
            dc.addPenaltyMultiplier(0.5);
            var actual = dc.calculateDamage();
            var expected = 1.125;
            
            expect(actual).to.equal(expected);     
        });
    });
    
});