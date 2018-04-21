

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
    
    describe('getBaseDamage', function() {
        it('base 99, getBaseDamage equals 99', function() {
          var dc = new DamageContainer(99);
          
          var actual = dc.getBaseDamage();
          var expected = 99;
          
          expect(actual).to.equal(expected);          
        });
    });
    
    describe('setBaseDamage', function() {
        it('initial base 99, setBaseDamage equals 1', function() {
          var dc = new DamageContainer(99);
          dc.setBaseDamage(1);
          
          var actual = dc.getBaseDamage();
          var expected = 1;
          
          expect(actual).to.equal(expected);          
        });
        
        it('use with getBaseDamage to bump initial baseDamage', function() {
          var dc = new DamageContainer(99);
          dc.setBaseDamage(dc.getBaseDamage() + 1);
            
          var actual = dc.getBaseDamage();
          var expected = 100;
          
          expect(actual).to.equal(expected); 
        });
    });
    
    describe('calculateBonusMultiplier2 test suite', function() {
        it('default equals 1', function() { 
            var dc = new DamageContainer();
            
            var actual = dc.calculateBonusMultiplier2();
            var expected = 1;
            
            expect(actual).to.equal(expected); 
        });
        it('2 3 4 5 equals 14', function() { 
            var dc = new DamageContainer();
            
            dc.addBonusMultiplier(2);
            dc.addBonusMultiplier(3);
            dc.addBonusMultiplier(4);
            dc.addBonusMultiplier(5);
            
            var actual = dc.calculateBonusMultiplier2();
            var expected = 14;
            
            expect(actual).to.equal(expected); 
        });
    });
    
    describe('calculateDamage2 Test suite', function() {
        describe('addBonusDamage test suite', function() {
            it('add 0 bonus damage', function() {
                var dc = new DamageContainer(12);
            
                dc.addBonusDamage(0);
                var actual = dc.calculateDamage2();
                var expected = 12;
            
                expect(actual).to.equal(expected);     
            });
        
            it('add 100 bonus damage', function() {
                var dc = new DamageContainer(12);
            
                dc.addBonusDamage(50);
                dc.addBonusDamage(50);
                var actual = dc.calculateDamage2();
                var expected = 112;
            
                expect(actual).to.equal(expected);     
            });
        });
        
        describe('scenarios', function() {
            it('base 6, addBonusDamage 50, with 0 mutliplier results in 0 ', function() {
                var dc = new DamageContainer(6);
            
                dc.addBonusMultiplier(0);
                dc.addBonusDamage(50);
                var actual = dc.calculateDamage2();
                var expected = 0;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 6, addmultipliers of 2, 3, 4 to total 54', function() {
                var dc = new DamageContainer(6);
            
                dc.addBonusMultiplier(2);
                dc.addBonusMultiplier(3);
                dc.addBonusMultiplier(4);
                var actual = dc.calculateDamage2();
                var expected = 54;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 6, addmultipliers of 2, 3, 4 and penalty to 0.5 to total 27', function() {
                var dc = new DamageContainer(6);
            
                dc.addBonusMultiplier(2);
                dc.addBonusMultiplier(3);
                dc.addBonusMultiplier(4);
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage2();
                var expected = 27;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 4.5, addpenaltymultipliers of .5 to total 2.25', function() {
                var dc = new DamageContainer(4.5);
            
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage2();
                var expected = 2.25;
            
                expect(actual).to.equal(expected);     
            });
        
            it('base 4.5, addpenaltymultipliers of .5, .5 to total 1.125', function() {
                var dc = new DamageContainer(4.5);
            
                dc.addPenaltyMultiplier(0.5);
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage2();
                var expected = 1.125;
            
                expect(actual).to.equal(expected);     
            });
        
            it('setFalseNoBonusDamageIfBaseWithMultipliersIsZero baseDamage=10, bonusDamage=5, result should be 5', function() {
                var dc = new DamageContainer(10);
            
                dc.addBonusDamage(5);
                dc.addPenaltyMultiplier(0);
                dc.addBonusMultiplier(2);
                dc.setFalseNoBonusDamageIfBaseWithMultipliersIsZero();
                var actual = dc.calculateDamage2();
                var expected = 5;
            
                expect(actual).to.equal(expected);     
            });
        
        
            it('setTrueNoBonusDamageIfBaseWithMultipliersIsZero after setting to false to make sure it works', function() {
                var dc = new DamageContainer(10);
            
                dc.addBonusDamage(5);
                dc.addPenaltyMultiplier(0);
                dc.addBonusMultiplier(2);
                dc.setFalseNoBonusDamageIfBaseWithMultipliersIsZero();
                var actual = dc.calculateDamage();
                var expected = 5;
                dc.setTrueNoBonusDamageIfBaseWithMultipliersIsZero();
                var actual2 = dc.calculateDamage2();
                var expected2 = 0;
            
                expect(actual).to.equal(expected);            
                expect(actual2).to.equal(expected2);     
            });
        });
        
    });
    
    
    describe('calculateDamage3 Test suite', function() {
        describe('addBonusDamage test suite', function() {
            it('add 0 bonus damage', function() {
                var dc = new DamageContainer(12);
            
                dc.addBonusDamage(0);
                var actual = dc.calculateDamage3();
                var expected = 12;
            
                expect(actual).to.equal(expected);     
            });
        
            it('add 100 bonus damage', function() {
                var dc = new DamageContainer(12);
            
                dc.addBonusDamage(50);
                dc.addBonusDamage(50);
                var actual = dc.calculateDamage3();
                var expected = 112;
            
                expect(actual).to.equal(expected);     
            });
        });
        
        describe('scenarios', function() {
            it('base 6, addBonusDamage 50, with 0 mutliplier results in 0 ', function() {
                var dc = new DamageContainer(6);
            
                dc.addBonusMultiplier(0);
                dc.addBonusDamage(50);
                var actual = dc.calculateDamage3();
                var expected = 0;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 6, addmultipliers of 2, 3, 4 to total 144', function() {
                var dc = new DamageContainer(6);
            
                dc.addBonusMultiplier(2);
                dc.addBonusMultiplier(3);
                dc.addBonusMultiplier(4);
                var actual = dc.calculateDamage3();
                var expected = 144;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 6, addmultipliers of 2, 3, 4 and penalty to 0.5 to total 72', function() {
                var dc = new DamageContainer(6);
            
                dc.addBonusMultiplier(2);
                dc.addBonusMultiplier(3);
                dc.addBonusMultiplier(4);
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage3();
                var expected = 72;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 10, addmultipliers of 10, 10, 10 to total 10000', function() {
                var dc = new DamageContainer(10);
            
                dc.addBonusMultiplier(10);
                dc.addBonusMultiplier(10);
                dc.addBonusMultiplier(10);
                var actual = dc.calculateDamage3();
                var expected = 10000;
            
                expect(actual).to.equal(expected);     
            });
            it('base 10, addmultipliers of 10, 10, 10 and penalty to 0.5, 0.5 to total 2500', function() {
                var dc = new DamageContainer(10);
            
                dc.addBonusMultiplier(10);
                dc.addBonusMultiplier(10);
                dc.addBonusMultiplier(10);
                dc.addPenaltyMultiplier(0.5);
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage3();
                var expected = 2500;
            
                expect(actual).to.equal(expected);     
            });
            
            it('base 4.5, addpenaltymultipliers of .5 to total 2.25', function() {
                var dc = new DamageContainer(4.5);
            
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage3();
                var expected = 2.25;
            
                expect(actual).to.equal(expected);     
            });
        
            it('base 4.5, addpenaltymultipliers of .5, .5 to total 1.125', function() {
                var dc = new DamageContainer(4.5);
            
                dc.addPenaltyMultiplier(0.5);
                dc.addPenaltyMultiplier(0.5);
                var actual = dc.calculateDamage3();
                var expected = 1.125;
            
                expect(actual).to.equal(expected);     
            });
        
            it('setFalseNoBonusDamageIfBaseWithMultipliersIsZero baseDamage=10, bonusDamage=5, result should be 5', function() {
                var dc = new DamageContainer(10);
            
                dc.addBonusDamage(5);
                dc.addPenaltyMultiplier(0);
                dc.addBonusMultiplier(2);
                dc.setFalseNoBonusDamageIfBaseWithMultipliersIsZero();
                var actual = dc.calculateDamage3();
                var expected = 5;
            
                expect(actual).to.equal(expected);     
            });
        
        
            it('setTrueNoBonusDamageIfBaseWithMultipliersIsZero after setting to false to make sure it works', function() {
                var dc = new DamageContainer(10);
            
                dc.addBonusDamage(5);
                dc.addPenaltyMultiplier(0);
                dc.addBonusMultiplier(2);
                dc.setFalseNoBonusDamageIfBaseWithMultipliersIsZero();
                var actual = dc.calculateDamage();
                var expected = 5;
                dc.setTrueNoBonusDamageIfBaseWithMultipliersIsZero();
                var actual2 = dc.calculateDamage3();
                var expected2 = 0;
            
                expect(actual).to.equal(expected);            
                expect(actual2).to.equal(expected2);     
            });
        });
        
    });
    
    describe('cd test suite, test setting of cd', function() {
        it('base 10, addmultipliers of 10, 10, 10 to total 280', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            var actual = dc.cd();
            var expected = 280;
        
            expect(actual).to.equal(expected);     
        });
        
        it('base 10, addmultipliers of 10, 10, 10 to total 300', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.setDefaultCalcToCalculateDamage2();
            var actual = dc.cd();
            var expected = 300;
        
            expect(actual).to.equal(expected);     
        });
        
        it('base 10, addmultipliers of 10, 10, 10 to total 10000', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.setDefaultCalcToCalculateDamage3();
            var actual = dc.cd();
            var expected = 10000;
        
            expect(actual).to.equal(expected);     
        });
        
        
        it('base 10, addmultipliers of 10, 10, 10 to total 280 set then set again.', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.addBonusMultiplier(10);
            dc.setDefaultCalcToCalculateDamage3();
            var actual = dc.cd();
            var expected = 10000;
        
            expect(actual).to.equal(expected);
            
            dc.setDefaultCalcToCalculateDamage();
            var actual = dc.cd();
            var expected = 280;
        
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
        
        it('baseDamage = 10 + bonusDamage = 5, mutiplier is 0 so result should be 0', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusDamage(5);
            dc.addPenaltyMultiplier(0);
            dc.addBonusMultiplier(2);
            var actual = dc.calculateDamage();
            var expected = 0;
            
            expect(actual).to.equal(expected);     
        });
        
        it('setFalseNoBonusDamageIfBaseWithMultipliersIsZero baseDamage=10, bonusDamage=5, result should be 5', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusDamage(5);
            dc.addPenaltyMultiplier(0);
            dc.addBonusMultiplier(2);
            dc.setFalseNoBonusDamageIfBaseWithMultipliersIsZero();
            var actual = dc.calculateDamage();
            var expected = 5;
            
            expect(actual).to.equal(expected);     
        });
        
        
        it('setTrueNoBonusDamageIfBaseWithMultipliersIsZero after setting to false to make sure it works', function() {
            var dc = new DamageContainer(10);
            
            dc.addBonusDamage(5);
            dc.addPenaltyMultiplier(0);
            dc.addBonusMultiplier(2);
            dc.setFalseNoBonusDamageIfBaseWithMultipliersIsZero();
            var actual = dc.calculateDamage();
            var expected = 5;
            dc.setTrueNoBonusDamageIfBaseWithMultipliersIsZero();
            var actual2 = dc.calculateDamage();
            var expected2 = 0;
            
            expect(actual).to.equal(expected);            
            expect(actual2).to.equal(expected2);     
        });
    });
    
});