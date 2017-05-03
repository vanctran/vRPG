/**
 * Created by Van on 4/25/2017.
 */

function BattleUnit(name, stats) {
    this.name = name;
    this.level = stats.level;
    this.health = stats.health;
    this.mana = stats.mana;
    this.attack = stats.attack;
    this.armor = stats.armor;
    this.experience = stats.experience;
    this.base = {
        health: stats.health,
        mana: stats.mana,
        attack: stats.attack,
        armor: stats.armor
    };
}

BattleUnit.prototype.getHTML = function () {
    var htmlString = '<img ';
    htmlString += 'src="img/';
    htmlString += this.name + '.png" alt="' + this.name + '" ';
    htmlString += 'height="50" width="50">' + '<br>';
    htmlString += '<p>';
    htmlString += 'Name: ' + this.name + '<br>';
    htmlString += 'Level: ' + this.level + '<br>';
    htmlString += 'HP: ' + this.health + '<br>';
    htmlString += 'Mana: ' + this.mana + '<br>';
    htmlString += 'Attack: ' + this.attack + '<br>';
    htmlString += 'Armor: ' + this.armor + '<br>';
    htmlString += 'Experience: ' + this.experience + '<br>';
    return htmlString;
};


// Damage reduced by armor
BattleUnit.prototype.takeDamage = function(damage) {
    var totalDamage = damage - this.armor;
    console.log(this.name + " takes " + totalDamage + " damage.");
    if(totalDamage > this.health) {
        this.health = 0;
        console.log(this.name + " has been slain!");
    }
    else if(totalDamage > 0) {
        this.health -= totalDamage;
    }
};

BattleUnit.prototype.attackDefender = function(defender) {
    console.log(this.name + " is attacking " + defender.name);
    defender.takeDamage(this.attack);
};

BattleUnit.prototype.restoreHealth = function(restore) {
    if(this.health + restore > this.base.health) {
        this.health = this.base.health;
    } else {
        this.health = this.health + restore;
    }
};

BattleUnit.prototype.getPercentBaseHealth = function(percent) {
    return Math.ceil(this.base.health / 100 * percent);
};

BattleUnit.prototype.normalizeStats = function() {
    this.attack = this.base.attack;
    this.armor = this.base.armor;
};

function Player(player) {
    BattleUnit.call(this, player.name, player.stats);
    this.evaluateExperience = function() {
        if(this.experience >= 100) {
            this.experience = this.experience - 100;
            ++this.level;
            this.base.attack += 3;
            this.base.armor += 0.5;
            this.base.health += 5;
            this.base.mana += 3.5;
            this.health = this.base.health;
            this.mana = this.base.mana;
            this.attack = this.base.attack;
            this.armor = this.base.armor;
            return true;
        }
        return false;
    };
}

function Monster(monster) {
    BattleUnit.call(this, monster.name, monster.stats);
}

Monster.prototype = Object.create(BattleUnit.prototype);
Player.prototype = Object.create(BattleUnit.prototype);









