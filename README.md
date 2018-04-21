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