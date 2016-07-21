ava.views.TodoView = ava.views.UtilityView.extend({
// ava.views.TodoView = Backbone.View.extend({
    tagName: 'li',
    // className: '',

    template: _.template($("#todo-item-template").html()),

    events: {
      // 'click': 'clickEvent',
      "click .toggle" : "toggleDone",
    },

    initialize: function() {
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      this.listenTo(this.model, "change", this.render);
    },

    render: function() {


      this.model.setPriceFormat();


      var $el = $(this.el);
      // $el.data('listId', this.model.get('id'));
      $el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass("done", this.model.get("done"));
      this.$input = this.$(".edit");
      return this;
    },

    open: function() {
      var self = this;
      return false;
    },

    clickEvent: function () {
      alert("yea");


    },
    toggleDone: function() {
      this.model.toggle();
    },

});



