var getMonster = monsterLoader.getMonster;
var monsterList = ['Goblin', 'Rat', 'Rat'];

var playerInfo = {
    name: "Hero",
    stats: {
        level: 1,
        health: 100,
        mana: 25,
        attack: 15,
        armor: 7,
        experience: 0
    }
};

var player = new Player(playerInfo);
$('#player').html(player.getHTML());

var monster;

//Generates a new opponent from a monster name
$('#start').hide().on('click', function() {
    monster = new Monster(getMonster(randomMonster(monsterList)));
    $('#monster').html(monster.getHTML());
    console.log(monster);
    $('#start').hide();
    $('#attack').show();
});

$('#attack').hide().on('click', function() {
    if(monster === undefined) {
        console.error("Monster does not exist.");
    }
    else {
        player.attackDefender(monster);
        $('#monster').html(monster.getHTML());
        if(monster.health > 0) {
            monster.attackDefender(player);
            $('#player').html(player.getHTML());
        }
    }
    endTurn();
});

// Events to be handled during the end of each battle turn
var endTurn = function() {
    if(player.health === 0) {
        $("body").html("<h1>GAME OVER!</h1>");
    }
    if(monster !== undefined && monster.health === 0) {
        endBattle();
    }
};

// Events to be handled at the end of a battle
var endBattle = function() {
    player.experience += monster.experience;

    //Player restores 5% of base health at the end of a battle.
    player.restoreHealth(player.getPercentBaseHealth(5));
    $player = $("#player");

    //Handle the leveling up
    if(player.evaluateExperience()) {
        $player.html(player.getHTML());
    } else {
        player.normalizeStats();
    }

    monster = undefined;
    $player.html(player.getHTML());
    $("#attack").hide();
    $("#start").show();
};

// Generates retrieves a random monster
var randomMonster = function(monsterList) {
    return monsterList[Math.floor(Math.random() * monsterList.length)];
};

var calculateExperience = function(playerLevel, monsterLevel) {
    if(monsterLevel === playerLevel) {
        return 0;
    }
};