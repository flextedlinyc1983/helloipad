ava.views.CircleBtnMenuView = Backbone.View.extend({
    // el: 'div',
    tagName: 'div',
    className: 'inner circleBtn',

    events: {
      
    },

    initialize: function() {
      // this.collection.on('add', this.render, this);
      this.render();
    },

    render: function() {
      // TODO

      var $el = $(this.el);

      this.collection.each(function(list) {
          var item;
          item = new ava.views.CircleBtnItemView({ model: list});
          $el.append(item.render().el);
      });

      return this;

    }
});

