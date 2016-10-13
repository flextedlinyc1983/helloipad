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

ava.views.navMenuItem = ava.views.ListMenuItemView.extend({
    className : '',
    initialize: function() {
      var html = this.template(this.model.toJSON());
      this.setElement(html);
    },  
    template: _.template($("#list-menu-item-navMenuItem").html()),
    render: function () {
        return this;
    },
    events: {
        "click": "clickEvent" 
    },

    clickEvent: function (e) {
        
        switch ($(e.currentTarget).attr('li_name')) {
          case "connectOperation":
              Backbone.history.navigate("connectOperation", true);  
              break;
            default:
        }
      
    }
});



ava.views.ConnectView = Backbone.View.extend({
  tagName:  'li',
  template: _.template($('#connect-item-template').html()),

  initialize: function (options) {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);

      this.collection = options.collection;
  },

  render: function () {
      var json = this.model.toJSON();
      json.label_connectName = $.i18n.prop('label_ConnectView_connectName');
      json.label_delete = $.i18n.prop('label_ConnectView_delete');      
      json.defaultValue = $.i18n.prop('label_ConnectView_defaultValue');
      json.inUse = $.i18n.prop('label_ConnectView_inUse');

      json.isInUse = this.setInUse();
      
      
      this.$el.html(this.template(json));
      this.$el.toggleClass('isInUse', json.isInUse);
      return this;
  },
  events: {    
      'click .destroy': 'clear',  
      'click': 'connectDetail',
      'click .connectDefaultSelector': 'defaultSelector'
  },

  setInUse: function () {
      var isUse = false;
      if(window.localStorage.getItem('loginSuccess') == "true"){
          var connectIpAdress = window.localStorage.getItem('ipAdress') || '';
          var connectAppName = window.localStorage.getItem('AppName') || '';
          connectIpAdress = connectIpAdress.substring(7);
          connectAppName = connectAppName.substring(1);
          if(this.model.get('connectIpAdress') == connectIpAdress && this.model.get('connectAppName') == connectAppName){
              isUse = true;
          }
      }
      return isUse;
  },

  defaultSelector: function (e) {
      e.stopImmediatePropagation();
      var radioButton = this.$el.find('input[name=connectDefaultSelector]');
      // if($(radioButton).is(':checked')!= "checked"){
      //     radioButton.attr('checked', true);  
      // }
      if(this.model.get('checked') != true){
        this.clearOldChecked();
        radioButton.attr('checked', true);  
        this.model.setClicked();
        // alert('test');  
        this.updateLocalStorageFromDefault();
      }
      
      
  },
  clearOldChecked: function () {
      var defaultConnect = this.collection.where({"checked": true});
      $(defaultConnect).each(function(index,value){
          value.set({"checked": false});
          value.save();
      })
  },
  connectDetail: function () {
      var connectName = this.model.get('connectName');
      if(connectName == "")
        return false;
      Backbone.history.navigate('connectOperation/detailConnectInfo/' + connectName, true);
  },

  clear: function (e) {
    e.stopImmediatePropagation();
    $.mobile.activePage.focus();

    // this.model.destroy();

    this.removePopUP();
  },

  removePopUP: function () {
    try{
        var self = this;
        navigator.notification.confirm(
        $.i18n.prop('msg_ConnectView_connectPromptMsg'),                  // message
        function (results) {
          if(results == 1){// confirm
            self.model.destroy();    
            self.resetDefaultAfterDelete(); 
            self.rmLocalStorageNotInConnectList();            
            navigator.notification.alert($.i18n.prop('msg_DetailConnectView_DeleteSuccess'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
            self.updateLocalStorageFromDefault();
          }else{
          }
        },
        $.i18n.prop('msg_ConnectView_connectPromptTitle'),                   // title
        [$.i18n.prop('msg_ConnectView_connectPromptConfirm'),$.i18n.prop('msg_ConnectView_connectPromptCancel')],          // buttonName
        '' 
      );
    }catch(err) {      
      // this.model.destroy();  
      // this.resetDefaultAfterDelete();    
      // this.rmLocalStorageNotInConnectList();
    }

  },
  updateLocalStorageFromDefault: function () {
    var isLogin = window.localStorage.getItem('loginSuccess') || '';
    if(isLogin != "true"){
        var defaultConnect = this.collection.where({"checked": true});
        if(defaultConnect.length > 0){
          var defaultModel = defaultConnect[0];
          var connectIpAdress = defaultModel.get('connectIpAdress');
          var connectAppName = defaultModel.get('connectAppName');
          var connectsLang = defaultModel.get('connectsLang');
          var connectCode = defaultModel.get('connectCode');
          var connectPwd = defaultModel.get('connectPwd');

          connectIpAdress = "http://" + connectIpAdress;
          connectAppName = "/" + connectAppName;

          window.localStorage.setItem('ipAdress', connectIpAdress); 
          window.localStorage.setItem('AppName', connectAppName);
          window.localStorage.setItem('sLang', connectsLang);
          window.localStorage.setItem('code', connectCode);
          window.localStorage.setItem('pwd', connectPwd);  

          loadBundles(connectsLang);
          Backbone.history.loadUrl(Backbone.history.fragment);
        }
        
    }
  },
  resetDefaultAfterDelete: function () {
    
    if(this.model.get('checked') == true){
      var maxId = 0;
      this.collection.max(function(m){
        if(m.get('connectId') > maxId){
          maxId = m.get('connectId');
        }            
      });
      var maxModel = this.collection.where({"connectId": maxId})
      if(maxModel.length > 0){
        maxModel[0].setClicked();  
      }      
    }
    
  },
  rmLocalStorageNotInConnectList: function () {
    
    var connectIpAdress = window.localStorage.getItem('ipAdress') || '';
    var connectAppName = window.localStorage.getItem('AppName') || '';
    connectIpAdress = connectIpAdress.substring(7);
    connectAppName = connectAppName.substring(1);
    var oModel = this.collection.where({"connectIpAdress": connectIpAdress, "connectAppName": connectAppName});
    if(oModel.length == 0){          
        window.localStorage.setItem('code', '');
        window.localStorage.setItem('pwd', '');        
        window.localStorage.setItem('AppName', '');
        window.localStorage.setItem('ipAdress', '');  
    }


  }

});  




ava.views.SelectComponentView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#connectSelect').html()),
  initialize: function(options) {
      var self = this;
      var $el = $(this.el);
      options.connectNames.forEach(function (select) {
        $el.prepend(self.template(select));
      });            
  },  
});



ava.views.DetailConnectView = Backbone.View.extend({
  tagName:  'table',
  template: _.template($('#connect-detail-template').html()),
  initialize: function () {
      this.listenTo(this.model, 'change', this.render);  
  },
  modifyOnClick: function (e) {
      
      $.mobile.activePage.focus();      
      this.modifyPopUP();           
  },
  checkConnectNameRepeat: function (connectName) {
      var connects = new ava.collections.Connects();
      connects.fetch({reset: true});
      connect = connects.where({connectName: connectName})[0];
      if(typeof(connect) == "undefined"){
        return false;
      }else{
        return true;
      }
  },
  updateConnectName: function (connectName) {
      this.model.save({connectName: connectName});
      navigator.notification.alert($.i18n.prop('msg_DetailConnectView_ModifySuccess'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
  },
  modifyPopUP: function () {        
      try{
        var self = this;
        navigator.notification.prompt(
          $.i18n.prop('msg_DetailConnectView_Message'),                  // message
          function (results) {
            if(results.buttonIndex  == 1){// confirm
                var connectName = results.input1.trim();
                if(connectName == ''){
                    navigator.notification.alert($.i18n.prop('msg_DetailConnectView_CannotEmpty'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                    return false;
                }else if(connectName.length > 30){
                    navigator.notification.alert($.i18n.prop('msg_DetailConnectView_OverCharacters'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                    return false;
                }else if(self.checkConnectNameRepeat(connectName)){
                    navigator.notification.alert($.i18n.prop('msg_DetailConnectView_ConnectNameRepeat'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                    return false;
                }
                self.updateConnectName(connectName);                 
            }else{
              //cancel
              // $('#register').show({duration:0});
              // alert('test 2')
            }
          },
          $.i18n.prop('msg_DetailConnectView_Title'),                   // title
          [$.i18n.prop('msg_ConnectOpeView_connectPromptConfirm'),$.i18n.prop('msg_ConnectOpeView_connectPromptCancel')],          // buttonName
          '' 
        );
      }catch(err) {
        // this.setInputName('test123 ' + Math.floor((Math.random() * 100) + 1));
        // this.newConnection();
      }

  },
  render: function () {
      var json = this.model.toJSON();
      json.label_connectName = $.i18n.prop('label_ConnectView_connectName');
      json.label_connectCode = $.i18n.prop('label_ConnectView_connectCode');      
      json.label_connectPwd = $.i18n.prop('label_ConnectView_connectPwd');
      json.label_connectsLang = $.i18n.prop('label_ConnectView_connectsLang');
      json.connectsLang = this.getLang(json.connectsLang);


      json.label_connectIpAdress = $.i18n.prop('label_ConnectView_connectIpAdress');
      json.label_connectAppName = $.i18n.prop('label_ConnectView_connectAppName');
      json.label_ConnectView_modify = $.i18n.prop('label_ConnectView_modify');
      
      
      this.$el.html(this.template(json));      
      return this;
  },

  getLang: function (sLang) {
      var str = '';
      switch (sLang) {
        case "zh_TW":
            str = $.i18n.prop('label_ConnectView_zh_TW');
            break;
        case "en_SG":
            str = $.i18n.prop('label_ConnectView_en_SG');
            break;
        case "zh_CN":
            str = $.i18n.prop('label_ConnectView_zh_CN');
            break;
        case "":
            str = "";
            break;         
          default:
            str = $.i18n.prop('label_ConnectView_zh_TW');
              
      }
      return str;
  }

});
