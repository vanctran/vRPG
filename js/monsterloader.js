/**
 * Created by Van on 4/26/2017.
 */

function MonsterLoader () {
    var list = [];
    var stateText = "loading";
    console.log("Loading...");
    $.ajax({
        method: "GET",
        url: "js/monsters.json",
        dataType: 'json',
        cache: false,
        success: function(data) {
            console.log("Received AJAX response");
            for(var i = 0; i < data.length; ++i) {
                list.push(data[i]);
            }
            stateText = "loaded";
            $("#start").show();
        },
        error: function(data) {
            console.error(data);
        }

    });

    //Retrieves monster from the loader
    this.getMonster = function(name) {
        console.log(name);
        console.log(list.length);
        for(var i = 0; i < list.length; ++i) {
            if (list[i].name === name) {
                return list[i];
            }
        }
    };

    //Displays the monsters in the loader
    this.displayMonsters = function() {
        for(var j = 0; j < list.length; ++j) {
            console.log(list[j]);
        }
    };
}



