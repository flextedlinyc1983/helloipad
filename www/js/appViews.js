// views


ava.views.UserView = Backbone.View.extend({

	// el: "#user-template",

	tagName: "li",
	className: "",

	template: _.template($("#user-template").html()),

	// template: _.template("<strong><%= Id %></strong> <strong><%= Name %></strong>"),

    render: function () {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },

    initialize: function () {    
      _.bindAll(this, "render");    
		  this.render();
    }

});



ava.views.AdminView = ava.views.UserView.extend({

  //   initialize: function () {        
		// $(this.el).html("hello");
  //   	// _.template $('#my_tpl').html()
  //       // this.model.bind("change", _.bind(this.render, this));
  //   }

});







ava.views.First = Backbone.View.extend({

    render: function () {
        var template = _.template($("#firstPage").html());
        $(this.el).html(template);

        return this;
    },

    initialize: function (options) {
        _.bindAll(this, "render");
        this.render();
    }
});

// ava.views.Second = Backbone.View.extend({

//     render: function () {
//         var template = _.template($("#secondPage").html());

//         $(this.el).html(template);
//         return this;
//     },

//     initialize: function (options) {
//         _.bindAll(this, "render");

//         this.render();
//     }
// });

// ava.views.About = Backbone.View.extend({

//     render: function () {
//         var template = _.template($("#aboutPage").html());

//         $(this.el).html(template);
//         return this;
//     },

//     initialize: function (options) {
//         _.bindAll(this, "render");
//         $(this.el).attr('data-dialog', 'true');
//         this.render();
//     }
// });




ava.views.DivView = Backbone.View.extend({

  // el: "#user-template",

  tagName: "div",
  className: "test",

  // template: _.template($("#user-template").html()),

  // template: _.template("<strong><%= Id %></strong> <strong><%= Name %></strong>"),

    render: function () {
      return this;
    },

    initialize: function () {     
      this.render();
    },

    attributes : function () {
        // Return model data
        return {
          // id : this.model.ge
        };
    }

});


ava.views.InputView = Backbone.View.extend({

  // el: "#user-template",
  type: "text",
  tagName: "input",
  className: "",

  // template: _.template($("#user-template").html()),

  // template: _.template("<strong><%= Id %></strong> <strong><%= Name %></strong>"),

    render: function () {
      return this;
    },

    initialize: function () {     
      this.render();
    },

    attributes : function () {
        // Return model data
        return {
           id : this.model.id,
           type: this.model.type,
           disabled: this.model.disabled  
        };
    }

});


ava.views.LayoutView = Backbone.View.extend({
    tagName: 'div',
    className: '',

    template: _.template($("#layout-template").html()),

    events: {
      'click': 'clickEvent'
    },

    initialize: function() {
      if(this.model.template){
        this.template =  _.template( $(this.model.template).html());  
      }
      
      this.render();
      // this.model.on('change', this.render, this);
      // this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var $el = $(this.el);
      // $el.data('listId', this.model.get('id'));
      $el.html(this.template({}));
      return this;
    },

    open: function() {
      var self = this;
      return false;
    },

    clickEvent: function () {
      // alert("yea");


    }
});




ava.views.SectionItemView = ava.views.DivView.extend({


    attributes : function () {
        // Return model data
        return {
          id : this.model.get("href")
        };
    }

});




ava.views.TabView = Backbone.View.extend({

  // el: "#user-template",

  tagName: "section",


   template: _.template($("#tab-template").html()),

  // template: _.template("<strong><%= Id %></strong> <strong><%= Name %></strong>"),

    render: function () {
      $(this.el).html(this.template(this.model));            
      return this;
    },

    initialize: function () {   
      this.idAttribute = this.model.id;  
      this.render();
    },
    attributes : function () {
        // Return model data
        return {
          id : this.model.id
        };
    }
});




ava.views.CalculatorView = Backbone.View.extend({
    tagName: 'div',
    className: '',

    template: _.template($("#calculator-template").html()),

    events: {
      'click': 'clickEvent'
    },

    initialize: function() {
      this.render();
      // this.model.on('change', this.render, this);
      // this.model.on('destroy', this.remove, this);
    },

    render: function() {
      var $el = $(this.el);
      // $el.data('listId', this.model.get('id'));
      $el.html(this.template({}));
      return this;
    },

    open: function() {
      var self = this;
      return false;
    },

    clickEvent: function () {
      // alert("yea");


    }
});