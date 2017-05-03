/**
 * Created by Van on 5/3/2017.
 */

//The inventory base object for use in this RPG
function Inventory(items) {
    if(items === undefined) {
        items = [];
    }
    this.items = [];

    //Copies items from the constructor from arguments
    for(var key in items) {
        if(items.hasOwnProperty(key)) {
            this.items.push(items[key]);
        }
    }
}

//Displays all items in the inventory
Inventory.prototype.display = function () {
    var items = this.items;
    console.log(this.items);
    for(var i = 0; i < items.length; ++i) {
        console.log(items[i]);
    }
};

//Searches inventory to see if it has an item
Inventory.prototype.has = function (item) {
    var inventory = this.items;
    return inventory.indexOf(item);
};

//Inserts an item to the inventory
Inventory.prototype.insert = function (item) {
    var inventory = this.items;
    inventory.push(item);
};

//Drops the item from the inventory
Inventory.prototype.drop = function (item) {
    var inventory = this.items;
    var index = this.has(item);
    if(index > -1) {
        inventory = inventory.splice(index, 1);
    }
};