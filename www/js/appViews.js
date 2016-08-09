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


ava.views.PortalView = ava.views.UtilityView.extend({

  template:_.template($('#portal').html()),

  loginStatus: {
    status: "登入",
    href: "#myModal",
    storeName: "你好"
  },

  render:function (eventName) {

    this.setLoginStatus();


    $(this.el).html(this.template(this.loginStatus));
    return this;
  },

  setLoginStatus: function () {
    if(window.localStorage.getItem('loginSuccess') == "true") {
      this.loginStatus.status = "登出";
      this.loginStatus.href = "#";    
      this.loginStatus.storeName = window.localStorage.getItem('storeName') ? window.localStorage.getItem('storeName') : "???";   
    }else{
      this.loginStatus.status = "登入";
      this.loginStatus.storeName = "你好";
    }
  }


});



ava.views.Page1View = ava.views.UtilityView.extend({

    template:_.template($('#page1').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});


ava.views.ModalView = ava.views.UtilityView.extend({

    template:_.template($('#myModal').html()),

    initialize: function(){
      Backbone.Validation.bind(this);
    },

    render:function (eventName) {    
      // Backbone.Validation.bind(this);

        $(this.el).html(this.template());
        return this;
    },

    events: {
        "click #loginButton": "login",
        "click #loginButtonGetData": "loginGetData"
    },

    remove: function() {
        // Remove the validation binding
        // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    },

    loginTest:function (event) {
        alert("login test");
    },

    login:function (event) {
        event.preventDefault(); // Don't let this button submit the form


        // var data = this.$el.serializeObject();
        var data = $("form[id='loginForm']").serializeObject();
        this.model.set(data);
        if(this.model.isValid(true)){
            // this.model.save();
            // alert('Great Success!');
        }else{
          return false;
        }

        $('.alert-error').hide(); // Hide any errors on a new submit
        // var url = '../api/login';
        var url = 'http://192.168.0.58:8080/flaps2/checkLogin.jsp';
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        console.log('Loggin in... ');
        var formValues = {
            code: $('#code').val(),
            pwd: $('#pwd').val()
            // code: 'flextier99',
            // pwd: '0827203'
        };

        $.ajax({
            context: this,
            timeout: 3000,
            url:url,
            // type:'GET',
            type:'POST',
            // crossDomain: true,
            // headers: { 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/x-www-form-urlencoded' },
            // dataType:"json",
            data: formValues,
            beforeSend: function (){
              // alert('beforesend');
               // $.mobile.showPageLoadingMsg();
               $.mobile.loading('show');
            },
            success:function (data, textStatus, jqXHR) {

                
                if (jqXHR.getResponseHeader('Content-Length') != "4319") {
                    window.localStorage.setItem('loginSuccess', true);

                    window.localStorage.setItem('code', formValues.code);
                    window.localStorage.setItem('pwd', formValues.pwd);

                    var wrapper= document.createElement('div');
                    wrapper.innerHTML= data;
                    window.localStorage.setItem('storeName', $(wrapper).find('div')[1].innerHTML);

                    this.loginGetData();
                }else{
                    window.localStorage.setItem('loginSuccess', false);

                    window.localStorage.setItem('code', "");
                    window.localStorage.setItem('pwd', "");

                    window.localStorage.setItem('storeName', "");
                }
                


                console.log(["Login request details: ", data]);
               
                if(window.localStorage.getItem('loginSuccess') == "false") {  // If there is an error, show the error messages
                    // $('.alert-error').text(data.error.text).show();
                    alert("登入錯誤");
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            },
            error: function(xhr, textStatus, errorThrown){
               alert('request failed');
            },
            complete: function ( jqXHR, textStatus) {
              $.mobile.loading('hide');
            }
        });
    },
});

ava.views.TableView = ava.views.UtilityView.extend({
// var TableView = Backbone.View.extend({
    tagName: 'table',

    initialize : function() {
        _.bindAll(this,'render','renderOne');
        // this.listenTo(this.collection, "change", this.render);
        this.listenTo(this.collection, "add", this.addOne);
        this.listenTo(this.collection, "reset", this.reset);
        // this.collection.fetch();
    },
    reset: function () {
      $('div[data-role=page]').find('div[data-role=content]').find('tbody').html("");
      // this.renderHead({'name': '項目', 'value': "總計"});
      return this;
    },

    render: function() {
        this.renderHead({'name': '項目', 'value': "總計"});

        // this.collection.each(this.renderOne);
        return this;
    },
    renderOne : function(model) {
        var row=new ava.views.TableRowView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
    renderHead : function(model) {
        var row=new ava.views.TableHeadView({model:model});
        this.$el.append(row.render().$el);
        return this;
    },
    addOne: function (realtimeInfo) {
        var row=new ava.views.TableRowView({model:realtimeInfo});
        this.$el.append(row.render().$el);
        return this;
    },

});

ava.views.TableHeadView = ava.views.UtilityView.extend({
// var RowView = Backbone.View.extend({  
    // events: {
    //     "click .age": function() {console.log(this.model.get("name"));}
    // },

    render: function() {
        var html=tableHeadTemplate(this.model);
        this.setElement( $(html) );
        return this;
    },
    // template:_.template($('#myModal').html()),
});

/** View representing a row of that table */
ava.views.TableRowView = ava.views.UtilityView.extend({
// var RowView = Backbone.View.extend({  
    events: {
        "click": function(event) {
          var name = this.model.get("name");
          console.log(name);

          switch (name) {
              case "本日業績":
                  clearTimeout(RealtimeInfoTimeout);
                  Backbone.history.navigate('RealtimeInfo_Today', true);
                  break;
              case 1:
                  day = "Monday";
                  break;
              case 2:
                  day = "Tuesday";
                  break;
              case 3:
                  day = "Wednesday";
                  break;
              case 4:
                  day = "Thursday";
                  break;
              case 5:
                  day = "Friday";
                  break;
              case 6:
                  day = "Saturday";
              default:
                  alert('no match');
          }

        }
    },

    render: function() {
        var html=rowTemplate(this.model.toJSON());
        this.setElement( $(html) );
        return this;
    },
    // template:_.template($('#myModal').html()),

    initialize: function() {
      // this.model.on('change', this.render, this);
      // this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, 'change:value', this.render);
    },
});

var tableHeadTemplate=_.template("<thead>"+"<tr>"+
     "<th class='nameHead'><%= name %></th>"+
     "<th class='valueHead'><%= value %></th>"+
     "</tr>"+"</thead>");

var rowTemplate=_.template("<tr class='item'>"+
     "<td class='name'><%= name %></td>"+
     "<td class='value'><%= value %></td>"+
     "</tr>");




ava.views.RealtimeInfo_Today = ava.views.UtilityView.extend({

  template:_.template($('#RealtimeInfo_Today').html()),

  // loginStatus: {
  //   status: "登入",
  //   href: "#myModal",
  //   storeName: "你好"
  // },

  events: {
      "swipe" : "swipeIt"
  },

  swipeIt: function(e){
    try{
      if (e.gesture.direction == '4') {//left to right
           // Backbone.history.navigate('RealtimeInfo_Today', true);
           window.history.back();
      }
      else if (e.gesture.direction == '2') {// right to left 
          console.log("You swiped left");
      }
    }
    catch(err) {
        console.log("swipeIt" + err);
    }
  },

  render:function (eventName) {

    // this.$el.hammer();
    $(this.el).hammer();

    // this.setLoginStatus();


    // $(this.el).html(this.template(this.loginStatus));

    $(this.el).html(this.template());
    return this;
  },


  // setLoginStatus: function () {
  //   if(window.localStorage.getItem('loginSuccess') == "true") {
  //     this.loginStatus.status = "登出";
  //     this.loginStatus.href = "#";    
  //     this.loginStatus.storeName = window.localStorage.getItem('storeName') ? window.localStorage.getItem('storeName') : "???";   
  //   }else{
  //     this.loginStatus.status = "登入";
  //     this.loginStatus.storeName = "你好";
  //   }
  // }


});