# rpg-damage-container
rpg combat damage contain which contains damage, bonus damage and damage bonuses and penalties

The intent is for an attack, to pass this container around the various checks for abilities, buffs, magic and such and at each check, add bonuses as required. 
After passing around is completed, you can calculate the final damage.   This doesn't account for savings throws and related.  Think of it as potential damage.

## Usage

```javascript
var DamageContainer = require('rpg-damage-container');

var dc1 = new DamageContainer();   //initialized without passing a base damage amount
var dc2 = new DamageContainer(12);  //initialized with passing a base damage of 12
```