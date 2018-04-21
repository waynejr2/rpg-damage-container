# rpg-damage-container
rpg combat damage contain which contains damage, bonus damage and damage bonuses and penalties

The intent is for an attack, to pass this container around the various checks for abilities, buffs, magic and such and at each check, add bonuses as required. 
After passing around is completed, you can calculate the final damage.   This doesn't account for savings throws and related.  Think of it as potential damage.

## Usage

```javascript
var DamageContainer = require('rpg-damage-container');

  var dc1 = new DamageContainer();    //without passing an argument it will initialized with base damage of 0
  var dc2 = new DamageContainer(12);  //initialized with passing a base damage of 12
```

setBaseDamage and getBaseDamage are for setting and getting the current base damage.

```javascript
var DamageContainer = require('rpg-damage-container');

  var dc = new DamageContainer();           //without passing an argument it will initialized with base damage of 0
  dc.setBaseDamage(12);                     //sets the base damage to 12.
  dc.getBaseDamage();                       //would return 12.
  dc.setBaseDamage(dc.getBaseDamage + 10);  //add 10 to the current base damage value
```

NOTE:  when damage calculations are made, base damage can be multiplied by damage multiplier (ex:  double/triple damage).  It might not be desirable to add to the base
damage like shown above as it would get doubled/tripled as well and may be over powered.  We have a soluation to that, which is bonusDamage. BonusDamage is added after
the multiplication.

addBonusDamage

```javascript
var DamageContainer = require('rpg-damage-container');

  var dc = new DamageContainer();           //without passing an argument it will initialized with base damage of 0
  dc.setBaseDamage(12);                     //sets the base damage to 12.
  dc.getBaseDamage();                       //would return 12.
  dc.addBonusDamage(10);                    //add 10 to the current BonusDamage
```

##  Calculating Damage

There are a number of methods to calculating the damage.  To understand it you have to look at a situation.  Suppose you have a base damage of 10, and three multipliers of 2, 3, 4 in value.
There are a number of approaches to calculate the damage.  One method simply takes ((2 * 3 * 4) * baseDamage) + bonusDamage which would give 240 damage in this case. A second approach simply
adds 2 3 4 to get 9 then calcuates  ( 9 * baseDamage) + bonusDamage which gives 90 in this case.  

The natural case is where 2 + 3 + 4 is only worth 7.  If you look at normal multiplier as 1, then 2 is the normal plus one and 3 is normal plus 2 and 4 is normal plus 3.  You shouldn't get the
normal more than once.  That is too much.  So accounting for normal just once is:  2 + 2 + 3. So 7 * baseDamage woud be 70.

We add bonus multipliers using addBonusMultiplier

```javascript
var DamageContainer = require('rpg-damage-container');

  var dc = new DamageContainer();           //without passing an argument it will initialized with base damage of 0
  dc.setBaseDamage(10);                     //sets the base damage to 10.
  dc.addBonusMultiplier(2);
  dc.addBonusMultiplier(3);
  dc.addBonusMultiplier(4);
  normal = dc.calculateDamage()             //returns damage value of 70
  additive = dc.calculateDamage2()          //returns damage value of 90
  multiplicative = dc.calculateDamage3()    //returns damage value of 240  
```