'use strict';


//Modèle de données
var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1},
];


app.service('itemProvider', function () {
    this.getItems = function () {
        
        return items;
        //Possibilité de récupération via BD ou via un Service ($http) ou API
    }
    
});