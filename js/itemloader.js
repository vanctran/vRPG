/**
 * Created by Van on 5/3/2017.
 */

function ItemLoader() {
    this.list = [];
    var _this = this;
    var stateText = "loading";
    console.log("Loading Items...");
    $.ajax({
        method: "GET",
        url: "js/items.json",
        dataType: 'json',
        cache: false,
        success: function(data) {
            console.log("Received AJAX response for items");
            for(var i = 0; i < data.length; ++i) {
                for(var key in data[i]) {
                    _this.list[key] = data[i][key];
                }
            }
            console.log(_this.list);
        },
        error: function(data) {
            console.error(data);
        }
    });
}