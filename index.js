

module.exports = (function() {
    
    const pmulti = (a, b) => a * b;
    const badd = (a, b) => a + b;
    
    //do we want to psss in something different or additional?
    //what if we want to log bad numbers to multipliers?  we might want to id the source of those numbers.
    function DamageContainer(iBaseDamage) {
        var baseDamage, bonusDamage, bonusMultiplier, penaltyMultiplier;
        var noBonusDamageIfBaseWithMultipliersIsZero;
        var defaultCalculateDamage;
        
        this.baseDamage = iBaseDamage || 0;
        //this.baseDamage = iBaseDamage === 0 ? 0 : iBaseDamage || 0;
        //this.baseDamage = iBaseDamage === 0 ? iBaseDamage : iBaseDamage || 0;
        this.bonusDamage = [0];
        this.bonusMultiplier = [1];
        this.penaltyMultiplier = [1];
        this.noBonusDamageIfBaseWithMultipliersIsZero = true;
        this.setDefaultCalcToCalculateDamage();
        //this.defaultCalculateDamage = this.calculateDamage;
    }
    
    DamageContainer.prototype.addBonusDamage = function(value) {
        this.bonusDamage.push(value);
    };
    
    //addBonusMultiplier should ignore values < 1
    DamageContainer.prototype.addBonusMultiplier = function(value) {
        this.bonusMultiplier.push(value);
    };
    
    //addPenaltyMultipler    0 =< value < 1. should ignore other values.
    DamageContainer.prototype.addPenaltyMultiplier = function(value) {
        this.penaltyMultiplier.push(value);
    };
    
    DamageContainer.prototype.calculateBonusMultiplier = function() {
        var result;
        var multiplierCount = this.bonusMultiplier.length;
        var bonusTotal = this.bonusMultiplier.reduce(badd);
        result = bonusTotal - multiplierCount + 1;

        return result;
    };
    
    DamageContainer.prototype.calculateBonusMultiplier2 = function() {
        var result;
        //var multiplierCount = this.bonusMultiplier.length;
        if ( this.bonusMultiplier.length === 1 ) {
            result = 1;
        } else {
            result = this.bonusMultiplier.reduce(badd) - 1;
        }
        //result = bonusTotal;
        //result = bonusTotal - multiplierCount + 1;

        return result;
    };
    
    DamageContainer.prototype.calculateBonusMultiplier3 = function() {
        var result;
        //var multiplierCount = this.bonusMultiplier.length;
        /*if ( this.bonusMultiplier.length === 1 ) {
            result = 1;
        } else {
            result = this.bonusMultiplier.reduce(badd) - 1;
        }*/
        result = this.bonusMultiplier.reduce(pmulti);
        //result = bonusTotal;
        //result = bonusTotal - multiplierCount + 1;

        return result;
    };
        
    DamageContainer.prototype.setDefaultCalcToCalculateDamage = function() {
        this.defaultCalculateDamage = this.calculateDamage;
    };
        
    DamageContainer.prototype.setDefaultCalcToCalculateDamage2 = function() {
        this.defaultCalculateDamage = this.calculateDamage2;
    };
        
    DamageContainer.prototype.setDefaultCalcToCalculateDamage3 = function() {
        this.defaultCalculateDamage = this.calculateDamage3;
    };
    
    DamageContainer.prototype.cd = function() {
        return this.defaultCalculateDamage();
    };

    DamageContainer.prototype.calculateDamage = function() {
        var result;
        var bonusDamageTotal = this.bonusDamage.reduce(badd);
        var totalPenaltyMulti = this.penaltyMultiplier.reduce(pmulti);
        var totalBonusMulti = this.calculateBonusMultiplier();
        var baseTimesMultipliers = (this.baseDamage * totalPenaltyMulti * totalBonusMulti);
        
        if ( baseTimesMultipliers ) {
            result = baseTimesMultipliers + bonusDamageTotal;
        } else if ( this.noBonusDamageIfBaseWithMultipliersIsZero ) {
            result = 0;
        } else {
            result = bonusDamageTotal;
        }
        //result = baseTimesMultipliers + bonusDamageTotal;
        //result = (this.baseDamage * totalPenaltyMulti * totalBonusMulti) + bonusDamageTotal;
        
        return result;
    };
    DamageContainer.prototype.calculateDamage2 = function() {
        var result;
        var bonusDamageTotal = this.bonusDamage.reduce(badd);
        var totalPenaltyMulti = this.penaltyMultiplier.reduce(pmulti);
        var totalBonusMulti = this.calculateBonusMultiplier2();
        var baseTimesMultipliers = (this.baseDamage * totalPenaltyMulti * totalBonusMulti);
        
        if ( baseTimesMultipliers ) {
            result = baseTimesMultipliers + bonusDamageTotal;
        } else if ( this.noBonusDamageIfBaseWithMultipliersIsZero ) {
            result = 0;
        } else {
            result = bonusDamageTotal;
        }
        //result = baseTimesMultipliers + bonusDamageTotal;
        //result = (this.baseDamage * totalPenaltyMulti * totalBonusMulti) + bonusDamageTotal;
        
        return result;
    };

    DamageContainer.prototype.calculateDamage3 = function() {
        var result;
        var bonusDamageTotal = this.bonusDamage.reduce(badd);
        var totalPenaltyMulti = this.penaltyMultiplier.reduce(pmulti);
        var totalBonusMulti = this.calculateBonusMultiplier3();
        var baseTimesMultipliers = (this.baseDamage * totalPenaltyMulti * totalBonusMulti);
        
        if ( baseTimesMultipliers ) {
            result = baseTimesMultipliers + bonusDamageTotal;
        } else if ( this.noBonusDamageIfBaseWithMultipliersIsZero ) {
            result = 0;
        } else {
            result = bonusDamageTotal;
        }
        //result = baseTimesMultipliers + bonusDamageTotal;
        //result = (this.baseDamage * totalPenaltyMulti * totalBonusMulti) + bonusDamageTotal;
        
        return result;
    };

    
    DamageContainer.prototype.getBaseDamage = function() {
        return this.baseDamage;
    };
    
    DamageContainer.prototype.setBaseDamage = function(baseDamage) {
        this.baseDamage = baseDamage;
    };
    
    DamageContainer.prototype.setFalseNoBonusDamageIfBaseWithMultipliersIsZero = function() {
        this.noBonusDamageIfBaseWithMultipliersIsZero = false;
    };
    
    DamageContainer.prototype.setTrueNoBonusDamageIfBaseWithMultipliersIsZero = function() {
        this.noBonusDamageIfBaseWithMultipliersIsZero = true;
    };
    
    return DamageContainer;
}());