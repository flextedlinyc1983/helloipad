

ava.views.CollectionView = ava.views.UtilityView.extend({
    addAll: function () {
      this.collection.each(this.addOne, this);
    },

    // addOne: function () {
      
    // }

});



