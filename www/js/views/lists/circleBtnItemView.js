ava.views.CircleBtnItemView = ava.views.UtilityView.extend({

// ava.views.CircleBtnItemView = Backbone.View.extend({
    tagName: 'button',
    className: '',

    template: _.template($("#circle-btn-item").html()),

    events: {
      'click': 'clickEvent'
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var $el = $(this.el);
      // $el.data('listId', this.model.get('id'));
      $el.html(this.template(this.model.toJSON()));
      return this;
    },

    open: function() {
      var self = this;
      return false;
    },

    clickEvent: function () {
      

      this.addItemInTodos();

    },

    addItemInTodos: function () {
      // alert("yea");


      todos.create({title: this.model.get("name"), priceFormat: this.numFormat(this.model.get("price")), price: this.model.get("price")});
    },

    // numFormat: function (number) {
    //   return number.toFixed(2).replace(/./g, function(c, i, a) {
    //       return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    //   });
    // }

});



