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
    el:"",
    tagName: 'div',
    className: '',
    template: _.template($("#layout-template").html()),
    // template: _.template($(this.layoutTemplate).html()),
    events: {
      'click': 'clickEvent'
    },

    attributes : function () {
        // Return model data
        return {
          id : this.model.tagId
        };
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



















ava.views.ComboxItemView = ava.views.CollectionView.extend({

    // template: _.template($("#todo-item-template").html()),
    initialize: function(options) {

      this.options = options.subOptions;

      this.rmOutsideTag = this.options.rmOutsideTag;

      this.className = this.options.className;

      this.template = _.template($(this.options.templateName).html());
      this.tagName = this.options.tagName;

      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this);
      // this.listenTo(this.model, "change", this.render);
    },

    render: function() {
      

      // this.el = this.el.childNodes;
      var $el = $(this.el);
      $el.html(this.template(this.model.toJSON()));
      if(this.rmOutsideTag){
        this.el = this.el.children;  
      }      
      return this;
    },
});





ava.views.ComboxView = ava.views.CollectionView.extend({

// ava.views.TodoAppView = Backbone.View.extend({
    // el: $("#todoapp"),
    // statsTemplate: _.template($("#stats-todo-template").html()),
    // tagName: 'div',
    // className: 'inner circleBtn',

    events: {
      // "keypress #new-todo": "createOnEnter",
      // "click #new-todo":  "showAlert",
      // "click .clear-completed": "clearCompleted",
      // "click #toggle-all": "toggleAllComplete"
    },

    showAlert: function(){
      alert('showAlert')
    },

    initialize: function(options,subOptions) {


      this.subOptions = subOptions;

      this.options=options;

      this.rmOutsideTag = options.rmOutsideTag;


      this.collection = options.collection;

      // this.className = this.options.className;
      this.tagName = this.options.tagName;

      // this.template = _.template($(this.options.templateName).html());


      this.listenTo(this.collection, "add", this.addOne);
      this.listenTo(this.collection, "reset", this.addAll);




      if (this.collection.fetch) {
        this.collection.fetch();
      }

    },

    addOne: function (model) {
      
      var item = new this.options.subView({model: model,subOptions: this.subOptions});
      $(this.el).append(item.render().el);            

      // return this;
    },

    addAll: function () {
      this.collection.each(this.addOne, this);
    },

    render: function() {
 
      return this;

    },

    createOnEnter: function(e) {
      // alert(e.keyCode);
      if (e.keyCode != 13) return;
      if (!this.$input.val()) return;

      this.collection.create({title: this.$input.val()});
      this.$input.val("");
    },

    clearCompleted: function() {
      if(this.collection){
        _.invoke(this.collection.done(), "destroy");
      } else {
        _.invoke(todos.done(), "destroy");
      }
      return false;
    },

    toggleAllComplete: function () {
      var done = this.$allCheckbox.checked;
      this.collection.each(function (todo) { todo.save({"done": done}); });
    }
});






ava.views.ClockView = ava.views.CollectionView.extend({


  initialize: function(options) {

    this.options=options;
    this.tagName = this.options.tagName;
    this.template = _.template($(this.options.templateName).html());
    this.rmOutsideTag = this.options.rmOutsideTag;

    

    this.updateTimeAndDate();
    
  },

  updateTimeAndDate: function () {    
    this.model = this.getTimeAndDate();
    this.render();    
    setTimeout(this.updateTimeAndDate.bind(this),  1000 );
  },


  render: function() {

    var $el = $(this.el);
    $el.html(this.template(this.model));    

    return this;

  },

});





ava.views.ComboxDataFromSysParmsView = ava.views.ComboxView.extend({
  initialize: function(options,subOptions) {


    this.subOptions = subOptions;

    this.options=options;

    this.rmOutsideTag = options.rmOutsideTag;


    this.collection = options.collection;

    // this.className = this.options.className;
    this.tagName = this.options.tagName;

    // this.template = _.template($(this.options.templateName).html());


    this.listenTo(this.collection, "add", this.addOne);
    this.listenTo(this.collection, "reset", this.addAll);

  },
});

























var MyView = Backbone.View.extend({
    el         : "#tabs",
    $label     : $("#tabs").find("ul"),
    $content   : $("#tabs").find("div"),
    tabs       : [
      {label : "first", content : "Hello world!", active : true, template: "#content-tmpl"},
      {label : "second", content : "", active : false, template: "#content-tmpl-second"},
      {label : "third", content : "", active : false, template: "#content-tmpl-third"},
      {label : "tab4", content : "", active : false, template: "#content-tmpl-fourth"}
    ],
    labelTmpl       : _.template($("#label-tmpl").html()),
    contentTmpl       : _.template($("#content-tmpl").html()),
    initialize : function () {

    this.$label = $("#tabs").find("ul");
    this.$content = $("#tabs").find("div");

      this.render();
      this.setState();
    },
    render     : function () {
      var labelHtml = "";
      var contentHtml = "";
      _.each(this.tabs, function (tab) {

        var template =  _.template($(tab.template).html());

          labelHtml += this.labelTmpl(tab).trim();
        // contentHtml += this.contentTmpl(tab).trim();
        contentHtml += template(tab).trim();
      }, this);
      this.$label.html(labelHtml);
      this.$content.html(contentHtml);
    },
    setState   : function () {
      var Events = {
        bind    : function () {
          if (!this.o) this.o = $({});
          this.o.on.apply(this.o, arguments);
        },
        trigger : function () {
          if (!this.o) this.o = $({});
          this.o.trigger.apply(this.o, arguments);
        }
      };
      //StateMachine
      var SM = function () {
      };
      SM.fn = SM.prototype;
      $.extend(SM.fn, Events);
      SM.fn.add = function (tab) {
        this.bind("change", function (e, current) {
          if (tab === current) {
            tab.activate();
          }else {
            tab.deactivate();
          }
        });
        tab.changeState = $.proxy(function () {
          this.trigger("change", tab);
        }, this);
      };
      var sm = new SM;
      this.$label.find("li").each(function () {
        $(this).click(function(){
          if(!$(this).hasClass("active")){
            this.changeState();
          }
        });
        this.activate = function(){
          var self = this;
          $(self).addClass("active");
          $("#content-" + $(self).data("label")).removeClass("deactive");
        };
        this.deactivate = function(){
          var self = this;
          $(self).removeClass("active");
          $("#content-" + $(self).data("label")).addClass("deactive");
        };

        sm.add(this);
      });
    }
  });