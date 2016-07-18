ava.views.ListMenuItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-menu-item',

    template: _.template($("#list-menu-item").html()),

    events: {
      'click': 'open'
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
    }
});



ava.views.TabItemView = ava.views.ListMenuItemView.extend({

    className: '',

    template: _.template($("#tab-item").html()),

    open: function() {


    },

    events: {
      "click": "clickEvent"
    },

    clickEvent: function () {
      // alert("yea");
      var $a = $(this.el).find("a");

      if($a.hasClass('active')){
        return;
      }

      tabOperation.$tabAnchors.removeClass('active');
      $a.addClass('active');


      tabOperation.$tabPanels.hide();
      $($a.attr('href')).show();

    }


});