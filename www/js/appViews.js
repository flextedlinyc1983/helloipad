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


ava.views.TableRow_New_View = ava.views.UtilityView.extend({

    el: "<tr>",
    render: function() {
        // var html=row_TodayTemplate(this.model.toJSON());
        var html= this.getRow(this.model.toJSON());
        this.$el.append(html);
        return this;
    },
    // template:_.template($('#myModal').html()),

    initialize: function() {
      // this.model.on('change', this.render, this);
      // this.listenTo(this.model, "change", this.render);
      // this.listenTo(this.model, 'change:value', this.render);
    },

    getRow: function (data) {
      var str = "";
      var index = 0;

      var reorderData = reorderSum0ForRow(data);
      var codeNumber = getCodeNumber(data);
      for(var key in reorderData){          


          index += 1;
          
          if(index == 1){              
              str += "<td class='item_" + index + "  codeNumber' >" + "<span id=codeNumber_"+ codeNumber + ">"+ reorderData[key] + "</span>"+  "</td>";       
          }else{
              str += "<td class='item_" + index + "' >" + reorderData[key] + "</td>";            
          }
          
      }
      return str;


      // for(var key in data){
      //     if(key != "code" && key != "isWithdraw"){
      //         index += 1;
      //         str += "<td class='item_" + index + "' >" + data[key] + "</td>";
      //     }
      // }
      // return str;

    }
});



ava.views.TableRow_GetPosInfo_View = ava.views.UtilityView.extend({

    el: "<tr>",
    render: function() {
        var html= this.getRow(this.model.toJSON());
        this.$el.append(html);
        return this;
    },

    initialize: function() {
    },

    getRow: function (data) {
      var str = "";
      for(var key in data){          
          if(key != "id")
              str += "<td>" + data[key] + "</td>";            
  
      }
      return str;
    }
});





ava.views.Table_New_View = Backbone.View.extend({

    tagName: 'table',

    events: {
        // "click .test": "clickEvent",
        "click tbody .codeNumber": "clickEvent" 
    },

    clickEvent: function (e) {
      var tagName = e.toElement.tagName;
      var codeNumber = "";
      if(tagName == "SPAN"){
          codeNumber = $(e.toElement).attr('id').substring(11);
      }else if(tagName == "TD"){
          codeNumber = $(e.toElement).find('span').attr('id').substring(11);
      }

      
      //record scroll position and page group
      var currentPageData = pagesData[window.location.hash] ||  (pagesData[window.location.hash] = {});
      currentPageData.scrollPositon = $('table tbody').scrollTop();
      currentPageData.scrollHeight = $('table tbody').height();

      var tableClass = $('table').attr('class');
      currentPageData.pagegroupPositon = tableClass.substring(tableClass.indexOf('showG') + 5, tableClass.indexOf('showG') + 6);

      Backbone.history.navigate('RealtimeInfo_Today_Test/getPosInfo/' + codeNumber, true);
      
    },

    initialize: function (options) {

        this.options=options;

        this.listenTo(this.collection, 'successOnFetch', this.handleSuccess);
        this.listenTo(this.collection, 'errorOnFetch', this.handleError);

        this.listenTo(this.options.columns, "reset", this.renderHead);

        // this.listenTo(this.collection, "add", this.addOne);
        this.listenTo(this.collection, "reset", this.addAll);
    },

    reset: function () {
      $('div[data-role=page]').find('div[data-role=content]').find('tbody').html("");
      // this.renderHead({'name': '項目', 'value': "總計"});
      return this;
    },

    addAll: function () {
      if(window.location.hash == "#RealtimeInfo_Today_Test"){
      
        if($('#RealtimeInfo_Today_Test-table tbody tr').length == 0){
            this.reset();
            this.collection.each(this.addOne, this);
            this.getTable();
        }else{
            this.reset();
            this.collection.each(this.addOne, this);
        }

      }
    },

    addOne: function (row) {
      if(row.toJSON().isWithdraw == "false"){
        // var row=new ava.views.TableRow_TodayView({model:row});
        var row=new ava.views.TableRow_New_View({model:row});
        this.$el.append(row.render().$el);
      }
      
      return this;

    },

    getTable: function () {
        // console.log('test');
         // this.$el.addClass("showG1");
         this.$el.addClass("showG" + this.options.page.getNowpage());
        // this.$el
    },

    // addOne: function (todo) {
    //   // var allItems = this.$("#todo-list").html();
      
    //   var item = new ava.views.TodoView({model: todo});


    //   this.$("#todo-list").prepend(item.render().el);
    //   // this.$("#todo-list").append(allItems);
    // },

    // addOne: function (row) {
    //     var row=new ava.views.TableRow_TodayView({model:row});
    //     this.$el.append(row.render().$el);
    //     return this;
    // },

    // addAll: function () {
    //   // this.collection.each(this.addOne, this);
    // },

    handleSuccess: function (options) {
        // options will be any options you passed when triggering the custom event

        // if( this.options.attributes.id == "RealtimeInfo_Today_Test-table" ){
        //     $('#' + this.options.attributes.id).table().data( "table" );
        // }



     

            
    },

    handleError: function (options) {
        // options will be any options you passed when triggering the custom event
    },

    render: function() {
        
        if(this.options.columns){
            this.renderHead(this.options.columns);
        }

        // this.collection.each(this.renderOne);

        // this.setEqualColumnWidth();

        this.renderBody();

        return this;
    },

    renderBody : function() {
        this.$el.append("<tbody></tbody>");
        

    },

    renderHead : function(columns) {
      if(getRightTableDisplayPath(this, window.location.hash.substring(1))){
        // var row=new ava.views.TableHeadView({model:model});
        // this.$el.append(row.render().$el);
        // return this;
        $(this.$el).find('thead').remove();
        this.$el.prepend("<thead><tr></tr></thead>");
        columns.models.forEach(this.renderColumnItem, this);
      }

    },

    renderColumnItem : function (column, index) {
    
        var columnItem;
        if(column.attributes.persist == true){
            columnItem = new ava.views.ColumnItemView({model:column.attributes.column, attributes : {"data-tablesaw-priority": "persist"}});
        }else{
            columnItem = new ava.views.ColumnItemView({model:column.attributes.column,attributes : {"class": "item_" + (index + 1).toString()}});
        }
        
        this.$el.find('thead tr').append(columnItem.render().$el);
    },
});



ava.views.Table_GetPosInfo_View = ava.views.Table_New_View.extend({
    addAll: function () {

          this.reset();
          this.collection.each(this.addOne, this);

    },

    addOne: function (row) {
  
      var row=new ava.views.TableRow_GetPosInfo_View({model:row});
      this.$el.append(row.render().$el);
      
      return this;

    },

    renderColumnItem : function (column, index) {
            
        var columnItem = new ava.views.ColumnItemView({model:column.attributes.column,attributes : {"class": ""}});        
        
        this.$el.find('thead tr').append(columnItem.render().$el);
    },


});

// {'name': '項目', 'value': "總計"}

ava.views.ColumnItemView = Backbone.View.extend({

    el : "<th></th>",

    render: function() {
        // imagine this is going through a template, but for now
        // lets just return straight html.
        // this.$el.append(this.model + "<p class='test'>testtest</p>");
        this.$el.append(this.model);
        
        for(var key in this.options.attributes){
            this.$el.attr(key, this.options.attributes[key]);
        }
        
        // this.$el.attr("class", 'test');

        return this;

    },
    events: {
        // "click .test": "clickEvent",
        "click": "clickEvent" 
    },
    clickEvent : function () {        
        // console.log(this.model);    


        var name = this.model;          
        name = getColumnNameFromClick(name);
        switch (name) {
            case "本日":
                //record scroll position and page group
                var currentPageData = pagesData[window.location.hash] ||  (pagesData[window.location.hash] = {});
                currentPageData.scrollPositon = $('table tbody').scrollTop();

                var tableClass = $('table').attr('class');
                currentPageData.pagegroupPositon = tableClass.substring(tableClass.indexOf('showG') + 5, tableClass.indexOf('showG') + 6);

                Backbone.history.navigate('getBrandStatistics', true);     
                break;
              default:
                  // alert('no match');
                  // console.log('ColumnItemView');
          }


    },
    initialize: function (options) {
        
        // if(options.attributes){
        //   var attrs = "";
        //   for(var key in options.attributes){
        //     attrs += key + "='" + options.attributes[key] + "' ";
        //   }
        //   this.$el = "<th " + attrs + ">" + "</th>"
        // }
        // this.attributes = options.attributes;
        this.options = options;
    },

});



// var tableHeadTemplate=_.template("<thead>"+"<tr>"+
//      "<th class='nameHead'><%= name %></th>"+
//      "<th class='valueHead'><%= value %></th>"+
//      "</tr>"+"</thead>");


ava.views.PageView = ava.views.UtilityView.extend({

  template:_.template($('#PageView').html()),

  // loginStatus: {
  //   status: "登入",
  //   href: "#myModal",
  //   storeName: "你好"
  // },

  events: {
      "swiperight" : "swipeRight",
      "swipeleft" : "swipeLeft",
  },

  nowPage: 1,

  setNowpage: function(nowPage){
    this.nowPage = nowPage;
  },
  getNowpage: function(){
    return this.nowPage;
  },
  swipeRight: function(e){
    try{

      if($('table').attr('id') == "RealtimeInfo_Today_Test-table"){

        if(this.nowPage != 7){
            this.nowPage += 1;           
            this.toggleColumn(this.nowPage);
        }

      }
    }
    catch(err) {
        // console.log("swipeIt" + err);
    }
  },

  swipeLeft: function(e){
    try{
      
      if($('table').attr('id') == "RealtimeInfo_Today_Test-table"){
        if(this.nowPage != 1){
            this.nowPage -= 1;           
            this.toggleColumn(this.nowPage);
        }
      }

    }
    catch(err) {
        // console.log("swipeIt" + err);
    }
  },

  toggleColumn: function(n) {

      var $table = $('table');
      var currentClass = $table.attr('class');
      if (currentClass.indexOf("showG"+n) == -1) {

            $table.removeClass(currentClass);
            var keepClass = currentClass.replace(/showG./g, "");
            $table.addClass("showG"+n);
            $table.addClass(keepClass);

      }

  },

  render:function (eventName) {

    // this.setLoginStatus();


    // $(this.el).html(this.template(this.loginStatus));
    this.$el.html(this.template({back_text: $.i18n.prop('msg_back_text'), flaps_name: $.i18n.prop('msg_flaps_name')}));

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


ava.views.PortalView = ava.views.UtilityView.extend({

  template:_.template($('#portal').html()),

  loginStatus: {
    status: "",
    href: "#myModal",
    storeName: "",

  },

  getRegister: function () {
    return "test";
  },

  setRegisterStatus: function () {
    var bRegisStat = window.localStorage.getItem('registerSuccess');
    if( bRegisStat && bRegisStat == "true"){
      this.loginStatus.register = "true";    
    }else{
      this.loginStatus.register = "false";    
    }
  },

  render:function (eventName) {



    this.setRegisterStatus();

    this.setLoginStatus();

    this.loginStatus.registerText = $.i18n.prop('msg_PortalView_registerText');
    $(this.el).html(this.template(this.loginStatus));

    return this;
  },

  setLanguage: function () {
    this.loginStatus.sLang = window.localStorage.getItem('sLang') || getChooseLanguageFromNvLang(navigator.language) || "";
  },



  events: {
     "click #myModal": "Logout", 
     "click #register": "Register",  
 

  },
  Register: function () {
    $('#register').hide();
    var self = this;
      navigator.notification.prompt(
        $.i18n.prop('msg_PortalView_registerPromptMsg'),                  // message
        function (results) {
          if(results.buttonIndex  == 1){// confirm
            // alert(results.input1.trim());
              self.getRegisterResult(results.input1.trim());
          }else{
            //cancel
            $('#register').show({duration:0});
          }
        },
        $.i18n.prop('msg_PortalView_registerPromptTitle'),                   // title
        [$.i18n.prop('msg_PortalView_registerPromptConfirm'),$.i18n.prop('msg_PortalView_registerPromptCancel')],          // buttonName
        '' 
      );
  },

  getRegisterResult: function (code) {
    $('#register').show({duration:0});
      // var url = getIpFromDataConfig(setIpBySelf) + getAppNameFromDataConfig(setAppNameBySelf) + '/checkLogin.jsp';
      var url = getIpFromDataConfig(setIpBySelf) + getAppNameFromDataConfig(setAppNameBySelf) + '/checkSubscription.jsp';
        $.ajax({
            timeout: 10000,
            url:url,
            type:'POST',
            // crossDomain: true,
            // headers: { 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/x-www-form-urlencoded' },
            // dataType:"json",
            data: {SubscriptId:code, device_platform: device.platform, device_uuid:device.uuid},
            beforeSend: function (){
               $.mobile.loading('show');
            },
            success:function (data, textStatus, jqXHR) {

                


                if (jqXHR.status == 200) {
                    var str = (data.match(/{([^}]+)}/)[0]);
                    str = str.replace(/'/g,"\"");
                    str = JSON.parse(str);

                    window.localStorage.setItem('ipAdress', "http://" + str.ip );
                    window.localStorage.setItem('AppName', "/" + str.APN );
                    window.localStorage.setItem('registerSuccess', "true");
                    // alert($.i18n.prop('msg_PortalView_registerSuccess'));
                    navigator.notification.alert($.i18n.prop('msg_PortalView_registerSuccess'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                    Backbone.history.loadUrl(Backbone.history.fragment);
                    
                }else{

                    
                    window.localStorage.setItem('ipAdress', "");
                    window.localStorage.setItem('AppName', "");
                    window.localStorage.setItem('registerSuccess', "false");
                    // alert($.i18n.prop('msg_PortalView_registerFail'));
                    navigator.notification.alert($.i18n.prop('msg_PortalView_registerFail'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));

                }
                



            },
            error: function(xhr, textStatus, errorThrown){
              if(xhr.status == "403"){
                // alert($.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_registrationCode_error'));
                navigator.notification.alert($.i18n.prop('msg_registrationCode_error'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              }else if(xhr.status =="0"){
                // alert($.i18n.prop('msg_networkError'));
                navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              }else if(xhr.status =="404"){
                // alert($.i18n.prop('msg_serverError'));
                navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              }
            },
            complete: function ( jqXHR, textStatus) {
              $.mobile.loading('hide');
            }
        });
  },

  Logout:function (event) {
    if($(event.currentTarget).attr("href") == "#myModal"){

    }else {
        event.preventDefault();
        // console.log('Logout');

        var code = window.localStorage.getItem('code');
        var pwd = window.localStorage.getItem('pwd');
        var sLang = window.localStorage.getItem('sLang');
        var registerSuccess = window.localStorage.getItem('registerSuccess');
        var ipAdress = window.localStorage.getItem('ipAdress');
        var AppName = window.localStorage.getItem('AppName');
        localStorage.clear();
        window.localStorage.setItem('code', code);
        window.localStorage.setItem('pwd', pwd);
        window.localStorage.setItem('sLang', sLang);
        window.localStorage.setItem('registerSuccess', registerSuccess);
        window.localStorage.setItem('ipAdress', ipAdress);
        window.localStorage.setItem('AppName', AppName);
        window.localStorage.setItem('loginSuccess', "");
        location.reload();
    }

      
  },

  setLoginStatus: function () {
    if(window.localStorage.getItem('loginSuccess') == "true") {
      this.loginStatus.status = $.i18n.prop('msg_portal_logout');
      this.loginStatus.href = "#Logout";    
      this.loginStatus.storeName = window.localStorage.getItem('storeName') ? window.localStorage.getItem('storeName') : "???";   
    }else{
      this.loginStatus.href = "#myModal";  
      this.loginStatus.status = $.i18n.prop('msg_portal_login');
      this.loginStatus.storeName = $.i18n.prop('msg_portal_hello');
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
      // _.bindAll(this, 'login');
      Backbone.Validation.bind(this);
    },

    render:function (eventName) {    
      // Backbone.Validation.bind(this);

        // $(this.el).html(this.template());
        this.$el.html(this.template({code: window.localStorage.getItem('code') || "", pwd: window.localStorage.getItem('pwd') || "" , sLang:  window.localStorage.getItem('sLang') || getChooseLanguageFromNvLang(navigator.language) || "",
      labelcode: $.i18n.prop('msg_myModal_labelcode'),labelpwd: $.i18n.prop('msg_myModal_labelpwd'),labelslang: $.i18n.prop('msg_myModal_labelslang'),
      login: $.i18n.prop('msg_myModal_login'),submit: $.i18n.prop('msg_myModal_submit')
        ,sel_zh_TW: $.i18n.prop('msg_myModal_sel_zh_TW')
        ,sel_en_SG: $.i18n.prop('msg_myModal_sel_en_SG')
        ,sel_zh_CN: $.i18n.prop('msg_myModal_sel_zh_CN')
        ,back_text: $.i18n.prop('msg_back_text')}));
        return this;
    },


    

    events: {
        "click #loginButton": "login",
        "click #loginButtonGetData": "loginGetData",
        "change #sLang": "langSelect"
    },

    langSelect: function() {        
        loadBundles($('#sLang').val());
        window.localStorage.setItem('sLang', $('#sLang').val()); 
        Backbone.history.loadUrl(Backbone.history.fragment);
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
        var url = window.localStorage.getItem('ipAdress') + window.localStorage.getItem('AppName') + '/checkLogin.jsp';
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        // console.log('Loggin in... ');
        var formValues = {
            code: $('#code').val(),
            pwd: $('#pwd').val(),
            sLang: $('#sLang').val()

            // code: '',
            // pwd: ''
        };

        $.ajax({
            context: this,
            timeout: 10000,
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
                
                var strCheckLogin = $($(data).find('table tr')[0]).text().trim();
                
                if (jqXHR.getResponseHeader('Content-Length') == "4319" || jqXHR.getResponseHeader('Content-Length') == "2827") {

                    window.localStorage.setItem('loginSuccess', false);

                    window.localStorage.setItem('code', "");
                    window.localStorage.setItem('pwd', "");

                    window.localStorage.setItem('storeName', "");

                    
                }else if(jqXHR.getResponseHeader('Content-Length') == "4337"){

                    window.localStorage.setItem('loginSuccess', false);

                    window.localStorage.setItem('code', "");
                    window.localStorage.setItem('pwd', "");

                    window.localStorage.setItem('storeName', "");
                  
                    alert('此帳號無即時業績權限!');

                }else if(strCheckLogin == "系統登入"){
                    window.localStorage.setItem('loginSuccess', false);

                    window.localStorage.setItem('code', "");
                    window.localStorage.setItem('pwd', "");

                    window.localStorage.setItem('storeName', "");  
                }else{
                    //local language
                    loadBundles(formValues.sLang);
                    //local Language for css setting
                    document.documentElement.lang = window.localStorage.getItem('sLang');



                    window.localStorage.setItem('loginSuccess', true);

                    window.localStorage.setItem('code', formValues.code);
                    window.localStorage.setItem('pwd', formValues.pwd);
                    window.localStorage.setItem('sLang', formValues.sLang);                    

                    var wrapper= document.createElement('div');
                    wrapper.innerHTML= data;

                    var storeName = $(wrapper).find('div')[1] ? $(wrapper).find('div')[1].innerHTML : "???";

                    window.localStorage.setItem('storeName', storeName);

                    // this.loginGetData();
                }
                


                // console.log(["Login request details: ", data]);
               
                if(window.localStorage.getItem('loginSuccess') == "false") {  // If there is an error, show the error messages
                    // $('.alert-error').text(data.error.text).show();
                    // alert($.i18n.prop('msg_myModal_loginError'));
                    navigator.notification.alert($.i18n.prop('msg_myModal_loginError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            },
            error: function(xhr, textStatus, errorThrown){
              if(xhr.readyState == 0){
                  // alert($.i18n.prop('msg_networkError'));
                  navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              }else if(xhr.readyState == 4){
                  // alert($.i18n.prop('msg_serverError'));
                  navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              }else{
                  // alert($.i18n.prop('msg_myModal_loginError'));
                  navigator.notification.alert($.i18n.prop('msg_myModal_loginError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              }

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

        this.setEqualColumnWidth();
        return this;
    },

    setEqualColumnWidth: function () {
      // (this.$el.find('thead th')[0]).css('width','50%');
      $(this.$el.find('thead th')[0]).css('width','50%');
      $(this.$el.find('thead th')[1]).css('width','50%');
      // console.log('test');
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

ava.views.Table_TodayView = ava.views.TableView.extend({

    reset: function () {
      $('div[data-role=page]').find('div[data-role=content]').find('tbody').html("");
      // this.renderHead({'name': '項目', 'value': "總計"});
      return this;
    },

    addOne: function (realtimeInfo) {
        var row=new ava.views.TableRow_TodayView({model:realtimeInfo});
        this.$el.append(row.render().$el);
        return this;
    },

    initialize : function() {
        _.bindAll(this,'render','renderOne');
        // this.listenTo(this.collection, "change", this.render);
        this.listenTo(this.collection, "add", this.addOne);
        // this.listenTo(this.collection, "reset", this.reset);
        this.listenTo(this.collection, "reset", this.addAll);
        // this.collection.fetch();
    },

    addAll: function () {
      this.reset();
      this.collection.each(this.addOne, this);

      // this.stackTabke();
      this.getTable();

      this.fixedHeader();
    },

    fixedHeader: function () {
      // this.TableThing = new TableThing();
      // this.TableThing.fixThead(); 

      // this.$el.DataTable( {
      //     fixedHeader: true,
      //     "bFilter": false,
      //     // "paging": false
      // } );

      // this.$el.scroll(moveScroll);
      // $(':jqmData(role=page)').scroll(moveScroll);
      // $(".fixedHeader").children('thead').css({visibility:'hidden'});

      

      this.$el.floatThead(
          {
              position: 'fixed',
              // scrollContainer: function($table){
              //     return $table.closest('.table-container');
              // },
              // responsiveContainer: function($table){
              //     return $table.closest('.table-container');
              // }
              // scrollTop: 0
          }
        );
      // this.$el.css('table-layout', 'auto');

      // this.$el.find('tbody td:eq(0)').css('width','33.33%');
      // this.$el.find('tbody td:eq(1)').css('width','33.33%');
      // this.$el.find('tbody td:eq(2)').css('width','33.33%');
      
        $('table').css('width','100%');
        // $('table').css('table-layout', 'fixed');

      $($('table').get().reverse()).each(function(index){
      
      // this.$el.floatThead('reflow');    
          $($(this).find('thead th')[0]).css('width','34%')
          $($(this).find('thead th')[1]).css('width','33%')
          $($(this).find('thead th')[2]).css('width','33%')
          
          $(this).find('tbody td:eq(0)').css('width','34%')
          $(this).find('tbody td:eq(1)').css('width','33%')
          $(this).find('tbody td:eq(2)').css('width','33%')
        
          
          $(this).floatThead('reflow');
          // $(this).css('table-layout', 'fixed');
      });

    },

    getTable: function () {
        // console.log('test');
         this.$el.addClass("showG1");
        // this.$el
    },

    stackTabke: function () {
        this.$el.stacktable({});
    },
    render: function() {
        this.renderHead({
          'item_1': '店櫃名稱', 
          'item_2': "本日", 
          'item_3': "去年本日 >", 

          'item_4': "本月", 
          'item_5': "去年本月 <>",

          'item_6': "庫存",
          'item_7': '可售金額 <>', 

          'item_8': "本月目標", 
          'item_9': "達成率 <>", 

          'item_10': '銷售金額', 
          'item_11': "訂金金額 <>",

          'item_12': "客數", 
          'item_13': "客單價 <>",

          'item_14': '商品件數', 
          'item_15': "平均客件數", 
          'item_16': "新增會員數 <", 



      });

        // this.collection.each(this.renderOne);
        return this;
    },
    renderHead : function(model) {
        var row=new ava.views.TableHead_TodayView({model:model});
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

ava.views.TableHead_TodayView = ava.views.UtilityView.extend({
// var RowView = Backbone.View.extend({  
    // events: {
    //     "click .age": function() {console.log(this.model.get("name"));}
    // },

    render: function() {
        var html=tableHead_TodayTemplate(this.model);
        this.setElement( $(html) );
        return this;
    },
    // template:_.template($('#myModal').html()),
});

/** View representing a row of that table */
ava.views.TableRowView = ava.views.UtilityView.extend({
// var RowView = Backbone.View.extend({  
    events: {
        "click .value": function(event) {
          var name = this.model.get("name");
          // console.log(name);

          switch (name) {
              case "本日業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 1;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "去年本日業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 1;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "本月業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 2;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "去年本月業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 2;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "現有庫存":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 3;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "可售金額":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 3;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              default:
                  alert('no match');
          }

        },
      "click .name": function(event) {
          var name = this.model.get("name");
          // console.log(name);

          switch (name) {
              case "本日業績":
                  Backbone.history.navigate('getBrandStatistics', true);                                    
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


ava.views.TableRow_TodayView = ava.views.UtilityView.extend({
// var RowView = Backbone.View.extend({  
    events: {
        "click": function(event) {
          var name = this.model.get("name");
          // console.log(name);

          switch (name) {
              case "本日業績":
                  // clearTimeout(RealtimeInfoTimeout);
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
        var html=row_TodayTemplate(this.model.toJSON());
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
     "<td class='name' style='width: 50%;'><%= name %></td>"+
     "<td class='value' style='width: 50%;'><%= value %></td>"+
     "</tr>");


var tableHead_TodayTemplate=_.template("<thead>"+"<tr>"+
     "<th class='item_1' data-priority='1' ><%= item_1 %></th>"+
     "<th class='item_2' data-priority='2' ><%= item_2 %></th>"+
     "<th class='item_3' data-priority='3' ><%= item_3 %></th>"+
     "<th class='item_4' data-priority='4' ><%= item_4 %></th>"+
     "<th class='item_5' data-priority='5' ><%= item_5 %></th>"+
     "<th class='item_6' data-priority='6' ><%= item_6 %></th>"+
     "<th class='item_7' data-priority='7' ><%= item_7 %></th>"+
     "<th class='item_8' data-priority='8' ><%= item_8 %></th>"+
     "<th class='item_9' data-priority='9' ><%= item_9 %></th>"+
     "<th class='item_10' data-priority='10' ><%= item_10 %></th>"+
     "<th class='item_11' data-priority='11' ><%= item_11 %></th>"+
     "<th class='item_12' data-priority='12' ><%= item_12 %></th>"+
     "<th class='item_13' data-priority='13' ><%= item_13 %></th>"+
     "<th class='item_14' data-priority='14' ><%= item_14 %></th>"+
     "<th class='item_15' data-priority='15' ><%= item_15 %></th>"+
     "<th class='item_16' data-priority='16' ><%= item_16 %></th>"+
     "</tr>"+"</thead>");

var row_TodayTemplate=_.template("<tr class='item'>"+
     "<td class='item_1 name'><%= name %></td>"+                                          //1
     
     "<td class='item_2 volumeToday'><%= volumeToday %></td>"+                            //2
     "<td class='item_3 volumeLastYearToday'><%= volumeLastYearToday %></td>"+            //3
      "<td class='item_4 volumeThisMonth'><%= volumeThisMonth %></td>"+                   //4

      "<td class='item_5 volumeLastYearThisMonth'><%= volumeLastYearThisMonth %></td>"+   //5 
      

      "<td class='item_6 deposit'><%= deposit %></td>"+   //6
      "<td class='item_7 volumeAvailable'><%= volumeAvailable %></td>"+   //7

      "<td class='item_8 target'><%= target %></td>"+   //8
      "<td class='item_9 targetRate'><%= targetRate %></td>"+   //9


      "<td class='item_10 saleTotal'><%= saleTotal %></td>"+   //10
      "<td class='item_11 preSaleTotal'><%= preSaleTotal %></td>"+   //11


      "<td class='item_12 customer'><%= customer %></td>"+   //12
      "<td class='item_13 customerUPrice'><%= customerUPrice %></td>"+   //13
      
      "<td class='item_14 saleAmount'><%= saleAmount %></td>"+   //14
      "<td class='item_15 customerAVAmount'><%= customerAVAmount %></td>"+   //15
      "<td class='item_16 memberCount'><%= memberCount %></td>"+   //16


     "</tr>");

// 'item_1': '店櫃名稱',    name
// 'item_2': "本日",        volumeToday
// 'item_3': "去年本日",    volumeLastYearToday
// 'item_4': "本月",        volumeThisMonth
// 'item_5': "去年本月",    volumeLastYearThisMonth
// 'item_6': '商品件數', 
// 'item_7': "平均客件數", 
// 'item_8': "新增會員數", 
// 'item_9': "客數", 
// 'item_10': "客單價",
// 'item_11': '銷售金額', 
// 'item_12': "訂金金額", 
// 'item_13': "本月目標", 
// 'item_14': "達成率", 
// 'item_15': "庫存",
// 'item_16': '可售金額', 


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

  nowPage: 1,

  // fixedHeader: function () {
  //     $('.fixedHeader tbody tr:eq(1) td').each(
  //     function(){
  //         $(this).css('width', $(this).width());
  //     });
  // },

    // fixedHeader: function () {
    
    //   this.$el.find('table#RealtimeInfo_Today-table').floatThead(
    //       {
    //           scrollTop: 0
    //       }
    //     );

    // },

  swipeIt: function(e){
    try{
      if (e.gesture.direction == '4') {//left to right
           // Backbone.history.navigate('RealtimeInfo_Today', true);
           // window.history.back();
          
            if(this.nowPage == 6){
             $('table').css('table-layout', '');
            }


            if(this.nowPage != 7){
                 this.nowPage += 1;           
                this.toggleColumn(this.nowPage);

                // this.fixedHeader();
            }

      }
      else if (e.gesture.direction == '2') {// right to left 

            if(this.nowPage == 7){
              this.hideOneColumn();
            }


            if(this.nowPage != 1){
                 this.nowPage -= 1;           
                this.toggleColumn(this.nowPage);

                // this.fixedHeader();
            }


      }
    }
    catch(err) {
        // console.log("swipeIt" + err);
    }
  },

  hideOneColumn: function () {
    // $(this.$el.find('thead th.item_16')).css('display', 'none')
    
    $(this.$el.find('thead th.floatThead-col')[3]).css('display', 'none')
    $('table').css('table-layout', 'auto');
    $('table tbody tr td.item_13').css('border-right','0px solid black')
  },

  toggleColumn: function(n) {
      // var currentClass = document.getElementById("mytable").className;
      var currentClass = $('#RealtimeInfo_Today-table').attr('class');
      if (currentClass.indexOf("showG"+n) == -1) {
          // document.getElementById("mytable").className = currentClass.replace("show"+n, "");


          // $('#RealtimeInfo_Today-table').removeClass(currentClass)
          // var keepClass = currentClass.replace(/showG./g, "");
          // $('#RealtimeInfo_Today-table').addClass("showG"+n);
          // $('#RealtimeInfo_Today-table').addClass(keepClass);

          $(this.$el.find('table').get().reverse()).each(function(index){
            
            $('table').css('width','100%');



            // $(this).css('table-layout', 'auto');
            if(n == 7){
              
              // $(this).find('thead').css('display', 'block');

              $($(this).find('thead th')[0]).css('width','33%')
              $($(this).find('thead th')[13]).css('width','21%')
              $($(this).find('thead th')[14]).css('width','22%')
              $($(this).find('thead th')[15]).css('width','24%')              

 
                // 

            } else if ((n == 6)){

              $($(this).find('thead th')[0]).css('width','34%')
              $($(this).find('thead th')[11]).css('width','33%')
              $($(this).find('thead th')[12]).css('width','33%')

            }else if ((n == 5)){

              $($(this).find('thead th')[0]).css('width','34%')
              $($(this).find('thead th')[9]).css('width','33%')
              $($(this).find('thead th')[10]).css('width','33%')
            }else if ((n == 4)){
              $($(this).find('thead th')[0]).css('width','34%')
              $($(this).find('thead th')[7]).css('width','33%')
              $($(this).find('thead th')[8]).css('width','33%')
            }else if ((n == 3)){

              $($(this).find('thead th')[0]).css('width','34%')
              $($(this).find('thead th')[5]).css('width','33%')
              $($(this).find('thead th')[6]).css('width','33%')
            }else if ((n == 2)){
              $($(this).find('thead th')[0]).css('width','34%')
              $($(this).find('thead th')[3]).css('width','33%')
              $($(this).find('thead th')[4]).css('width','33%')
            }else if ((n == 1)){
              $($(this).find('thead th')[0]).css('width','34%')
              $($(this).find('thead th')[1]).css('width','33%')
              $($(this).find('thead th')[2]).css('width','33%')
            }


            if ((n == 7)){


              $(this).find('tbody td:eq(0)').css('width','33%')
              $(this).find('tbody td:eq(13)').css('width','21%')
              $(this).find('tbody td:eq(14)').css('width','22%')
              $(this).find('tbody td:eq(15)').css('width','24%')

            } else if ((n == 6)){

              $(this).find('tbody td:eq(0)').css('width','34%')
              $(this).find('tbody td:eq(11)').css('width','33%')
              $(this).find('tbody td:eq(12)').css('width','33%')
            } else if ((n == 5)){
              $(this).find('tbody td:eq(0)').css('width','34%')
              $(this).find('tbody td:eq(9)').css('width','33%')
              $(this).find('tbody td:eq(10)').css('width','33%')
            } else if ((n == 4)){
              $(this).find('tbody td:eq(0)').css('width','34%')
              $(this).find('tbody td:eq(7)').css('width','33%')
              $(this).find('tbody td:eq(8)').css('width','33%')
            } else if ((n == 3)){
              $(this).find('tbody td:eq(0)').css('width','34%')
              $(this).find('tbody td:eq(5)').css('width','33%')
              $(this).find('tbody td:eq(6)').css('width','33%')
            } else if ((n == 2)){
              $(this).find('tbody td:eq(0)').css('width','34%')
              $(this).find('tbody td:eq(3)').css('width','33%')
              $(this).find('tbody td:eq(4)').css('width','33%')
            } else if ((n == 1)){
              $(this).find('tbody td:eq(0)').css('width','34%')
              $(this).find('tbody td:eq(1)').css('width','33%')
              $(this).find('tbody td:eq(2)').css('width','33%')
            }

 
             // $(this).   display: block;
            // $(this).floatThead();
            
// $(this).find('thead').hide();
// $(this).find('tbody').hide();
            $(this).removeClass(currentClass);
            var keepClass = currentClass.replace(/showG./g, "");
            $(this).addClass("showG"+n);
            $(this).addClass(keepClass);


            // $(this).find('thead').css('display', '');

            if(index == 0){
              $(this).floatThead('reflow');
            }
            

            
          });



  // $(this.$el.find('table').get().reverse()).each(function(){
  //     $(this).find('thead').show();
  //     $(this).find('tbody').show();
  // });



      }
      else {
          // document.getElementById("mytable").className += " " + "show"+n;
          // $('#RealtimeInfo_Today-table').addClass("showG"+n)
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




ava.views.Table_getBrandStatistics_View = ava.views.Table_New_View.extend({
    addAll: function () {

          this.reset();
          this.collection.each(this.addOne, this);

    },

    addOne: function (row) {
  
      var row=new ava.views.TableRow_getBrandStatistics_View({model:row});
      this.$el.append(row.render().$el);
      
      return this;

    },

    renderColumnItem : function (column, index) {
            
        var columnItem = new ava.views.ColumnItemView({model:column.attributes.column,attributes : {"class": ""}});        
        
        this.$el.find('thead tr').append(columnItem.render().$el);
    },


});



ava.views.TableRow_getBrandStatistics_View = ava.views.UtilityView.extend({

    el: "<tr>",
    render: function() {
        var html= this.getRow(this.model.toJSON());
        this.$el.append(html);
        return this;
    },

    initialize: function() {
    },

    getRow: function (data) {
      var str = "";
      for(var key in data){          
          if(key != "code")
              str += "<td>" + data[key] + "</td>";            
  
      }
      return str;
    }
});




ava.views.Table_portal_View = ava.views.Table_New_View.extend({
    addAll: function () {

          this.reset();
          this.collection.each(this.addOne, this);

    },

    addOne: function (row) {
  
      var row=new ava.views.TableRow_portal_View({model:row});
      this.$el.append(row.render().$el);
      
      return this;

    },

    renderColumnItem : function (column, index) {
            
        var columnItem = new ava.views.ColumnItemView({model:column.attributes.column,attributes : {"class": ""}});        
        
        this.$el.find('thead tr').append(columnItem.render().$el);
    },


});



ava.views.TableRow_portal_View = ava.views.UtilityView.extend({

    el: "<tr>",
    render: function() {
        var html= this.getRow(this.model.toJSON());
        this.$el.append(html);
        return this;
    },

    initialize: function() {
    },

    getRow: function (data) {

      var item = data.item;
      var str = "";
      for(var key in item){          
          if(key == "name"){
              str += "<td class='name'>" + item[key] + "</td>";             
           }else if(key == "value"){
              str += "<td class='value'>" + item[key] + "</td>";            
           }
           
  
      }
      return str;
    },

    events: {
        "click .value": function(event) {
          var name = this.model.attributes.item.name;
          name = getPortalRowNameFromClick(name);
          // console.log(name);

          switch (name) {
              case "本日業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 1;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "去年本日業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 1;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "本月業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 2;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "去年本月業績":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 2;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "現有庫存":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 3;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              case "可售金額":
                  var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
                  currentPageData.group = 3;
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);
                  break;
              default:
                  alert('no match');
          }

        },
      "click .name": function(event) {
          var name = this.model.attributes.item.name;
          name = getPortalRowNameFromClick(name);
          // console.log(name);

          switch (name) {
              case "本日業績":
                  Backbone.history.navigate('getBrandStatistics', true);                                    
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
                  // alert('no match');
                  // console.log('TableRow_portal_View')
          }

        }
    },
});



ava.views.CompanyInfoView = Backbone.View.extend({

   tagName: "div",
   template: _.template($("#Company_Info").html()),
    render:function () {
      this.$el.html(this.template({companyInfo_tw: $.i18n.prop('msg_companyInfo_tw'), companyInfo_china: $.i18n.prop('msg_companyInfo_china')}));
      return this;
    },
});


ava.views.Menu  = Backbone.View.extend({

  //define this.el, the wrapper element
  //id: '',
  tagName: 'div',
  className: 'menu',
  id: 'menu',
  
  //template function
  template: _.template($('#menu-template').html()),

  initialize: function(options) {

    if (!options.collection) throw 'no collection provided';

    //listen on non-this events
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render); //collection loaded
  },
  events: {
    //"click": "console"
  },
  close: function (){
    this.unbind();
    this.collection.unbind();
  },
  /***************************************
   Render the view into the view's element
  ****************************************/
  render: function (event){

    var content = this.template({}); //compiling template =  create DOM fragment
    var $el = $(this.el);
    
    $el.html(content);

    //render list menu
    $el.append(this.renderMenu(this.collection.root()));
    return this;
  },
  /**********************************************
   Render list menu. Input is an array of models.
   Output is DOM fragment.
  **********************************************/
  renderMenu: function(list){
    if(_.size(list) === 0) {return null;}
    var $dom = $("<ul></ul>");
    _.each(list, function(model){
      $dom.append(this.renderMenuItem(model));
      var kids = this.collection.children(model);
      $dom.find(':last').append(this.renderMenu(kids)); //recursive
    }, this);
    return $dom;

  },
  //  returns a DOM element fragment for a single menu item
  renderMenuItem: function (model){
    var view = new ava.views.Menuitem({model: model});
    return view.render().el;
  },
  console: function (event){
    console.log(event, 'event');
  }
});


ava.views.Menuitem = Backbone.View.extend({
  
  //define this.el, the wrapper element
  //el: $('#menu'),  //used in cases where the view wrapper already exists in the DOM
  tagName: 'li',
  //id: '',
  //className: 'menuitem',

  // Cache the template function for a single item.
  template: _.template($('#menu-item-template').html()),
  
  initialize: function(options) {
    _.bindAll(this, 'render'); 
    this.model.bind('change', this.render);
  },
  events: {
  },
  close: function (){
    this.unbind();
    this.model.unbind();
  },
  //render the view using a template
  render: function (event) {
    var content = this.template(this.model.toJSON());
    $(this.el).html(content);
    return this;
  }
});