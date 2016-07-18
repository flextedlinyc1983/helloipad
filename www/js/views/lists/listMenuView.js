ava.views.ListMenuView = Backbone.View.extend({
    // el: 'div',
    tagName: 'ul',
    className: 'nav nav-list lists-nav',

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
          var item, sidebarItem;
          item = new ava.views.ListMenuItemView({ model: list});
          $el.append(item.render().el);
      });

      return this;

    }
});

ava.views.ListTabView = ava.views.ListMenuView.extend({


    render: function() {
      // TODO

      var $el = $(this.el);

      this.collection.each(function(list) {
          var item, sidebarItem;
          item = new ava.views.TabItemView({ model: list});
          $el.append(item.render().el);
      });

      return this;

    }
});



ava.views.TabSectionView = ava.views.ListMenuView.extend({


    render: function() {
      // TODO

      var $el = $(this.el);

      this.collection.each(function(list) {
          var item, sidebarItem;
          item = new ava.views.SectionItemView({ tagName: "section", className: "tabs-panel", model: list});
          var el = item.render().el;
          $(el).html(list.get("title"));
          $el.append(el);

      });

      return this;

    }
});