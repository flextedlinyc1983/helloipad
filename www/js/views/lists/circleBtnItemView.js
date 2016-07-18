ava.views.CircleBtnItemView = Backbone.View.extend({
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
      alert("yea");


    }
});



