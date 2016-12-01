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

ava.views.navMenu = ava.views.ListMenuView.extend({

    className : "",
    render: function() {
      // TODO

      var $el = $(this.el);

      this.collection.each(function(list) {
          var item, sidebarItem;
          item = new ava.views.navMenuItem({ model: list});
          $el.append(item.render().el);
      });

      //jquery widget initialize
      $(this.el).listview();

      return this;

    }
});


ava.views.ConnectOpeView = Backbone.View.extend({
    el: '#connectOperation',
    events: {
        'click .new-connect': 'createOnClick',
        'click .loginlogout-connect': 'loginlogoutOnClick',
        
    },
    loginlogoutOnClick: function (e) {
        e.preventDefault();   
        $.mobile.activePage.focus();  
        if( window.localStorage.getItem('loginSuccess') == "true" ){
            

            try{
                var self = this;
                navigator.notification.confirm(
                $.i18n.prop('msg_LogoutPromptMsg'),                  // message
                // "確定登出??",
                function (results) {
                  if(results == 1){// confirm

                    //clean session and put before localstorage
                    logoutFromApp();

                    window.localStorage.setItem('loginSuccess', "");
                    window.localStorage.setItem('storeName', "");
                    autoRediectToModal = "true";
                    Backbone.history.navigate('', true); 
                    // navigator.notification.alert($.i18n.prop('msg_DetailConnectView_DeleteSuccess'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                    // self.updateLocalStorageFromDefault();    


                  }else{
                  }
                },
                $.i18n.prop('msg_LogoutPromptTitle'),                   // title
                // "登出作業",
                [$.i18n.prop('msg_ConnectView_connectPromptConfirm'),$.i18n.prop('msg_ConnectView_connectPromptCancel')],          // buttonName
                '' 
              );
            }catch(err) {                  
            }

        }else{
            Backbone.history.navigate('myModal', true); 
        }
    },
    initialize : function () {
        this.$list = $('.connects-list');
        
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'reset', this.addAll);

        
        this.collection.fetch({reset: true});
    },

    addAll: function () {
      this.$list.html('');
      this.$list.listview();
      this.collection.each(this.addOne, this);
      
    },
    addOne: function (connect) {
      var view = new ava.views.ConnectView({ model: connect, collection: this.collection });
      this.$list.prepend(view.render().el);

      this.$list.listview('refresh');
    },

    createOnClick: function (e) {
      // window.setTimeout(_.bind(this.callPopUP, this),500);

      // $.mobile.activePage.focus();
      // $(e.currentTarget).addClass('activate');
      // window.setTimeout(function () {
      //     $(e.currentTarget).find('#new-connect').removeClass('activate');
      // },200);
      
      $.mobile.activePage.focus();
      this.callPopUP();
      
     
    },

    callPopUP: function () {        
        try{
          var self = this;
          navigator.notification.prompt(
            $.i18n.prop('msg_ConnectOpeView_connectPromptTitle'),                  // message
            function (results) {
              if(results.buttonIndex  == 1){// confirm
                // alert(results.input1.trim());
                  // self.getRegisterResult(results.input1.trim());

                  // this.setInputName(results.input1.trim());
                  // self.setInputName('test123 ' + Math.floor((Math.random() * 100) + 1));
                  self.getConnectionResult(results.input1.trim());                 
              }else{
                //cancel
                // $('#register').show({duration:0});
                // alert('test 2')
              }
            },
            $.i18n.prop('msg_ConnectOpeView_connectPromptMsg'),                   // title
            [$.i18n.prop('msg_ConnectOpeView_connectPromptConfirm'),$.i18n.prop('msg_ConnectOpeView_connectPromptCancel')],          // buttonName
            '' 
          );
        }catch(err) {
          // this.setInputName('test123 ' + Math.floor((Math.random() * 100) + 1).toString());
          // this.newConnection(Math.floor((Math.random() * 100) + 1).toString());
        }

    },
    setInputName: function (str) {
      this.inputName = str;
    },
    newConnection: function (connectName, connectIpAdress, connectAppName) {
      var getChecked = false;
      if(this.collection.length == 0){
        getChecked = true;
      }
      var connectItem = {connectName: connectName,
      connectId: this.collection.getMaxId() + 1,
      connectIpAdress: connectIpAdress,
      connectAppName: connectAppName,
      connectCode: '',
      connectPwd: '',
      connectsLang: window.localStorage.getItem('sLang'),
      checked: getChecked};
      this.collection.create(connectItem);
    },
    getConnectionResult: function (code) {
        var self = this;
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

                    var stripAdress = "http://" + str.ip;
                    var strAppName = "/" + str.APN;
                    // if(self.collection.checkRepeatByipAdressAndAppName(stripAdress, strAppName)){
                    if(self.collection.checkRepeatByipAdressAndAppName(str.ip, str.APN)){
                        navigator.notification.alert($.i18n.prop('msg_ConnectOpeView_connectRepeat'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                    }else{
                      //新增連線
                      var connectName = self.collection.getNewNoRepeatConnectName(str.APN);
                      // self.newConnection(connectName, stripAdress, strAppName );
                      self.newConnection(connectName, str.ip, str.APN );
                      navigator.notification.alert($.i18n.prop('msg_ConnectOpeView_connectSuccess'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                      Backbone.history.loadUrl(Backbone.history.fragment);  
                    }
                    
                    
                }else{
                  
                    navigator.notification.alert($.i18n.prop('msg_ConnectOpeView_connectFail'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));

                }
                



            },
            error: function(xhr, textStatus, errorThrown){
              if(xhr.status == "403"){                
                navigator.notification.alert($.i18n.prop('msg_connectCode_error'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
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

});




ava.views.headerArea = ava.views.navMenu.extend({

    className : "",
    render: function() {
      // TODO

      var $el = $(this.el);

      this.collection.each(function(list) {
          var item;
          var className = list.attributes.className + " liHeaderArea";

          item = new ava.views.headerAreaItem({ model: list, attributes : {"class":className}});
          $el.append(item.render().el);
      });

      //jquery widget initialize
      // $(this.el).listview();

      return this;

    }
});







