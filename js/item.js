/**
 * Created by Van on 5/3/2017.
 */

function Item (data) {
    this.name = data.name;
    this.description = data.description;
}

Item.prototype.getHTML = function() {
    var htmlString = "";
    htmlString += "Name: " + this.name;
    htmlString += "\nDescription: " + this.description;
    return htmlString;
};

function Equipment (data) {
    Item.call(this, data);
    this.level = data.level;
    this.attack = data.attack;
    this.armor = data.armor;
}
