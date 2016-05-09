'use strict';

//Definition de la directive
app.directive('decorateItem', function () {
    //Return de l'objet avec ses propriétés
    return {
        template: 'Item "{{ item.name }}" dans la categorie {{ item.category_id }}'
    }
    
})
;
