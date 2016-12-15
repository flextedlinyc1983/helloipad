/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {

        // alert("test");
        // console.log("test");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        // alert("test bindEvents");
        // console.log(document);
        document.addEventListener('deviceready', this.onDeviceReady, false);


        if(cordova.platformId == "android"){
            var agentID = navigator.userAgent.match(/Android\s+([\d\.]+)/)[1];
            var androidversion = parseFloat(agentID);
            if( androidversion >= 5.0){
                window.addEventListener('orientationchange', this.orientationChange);        
                window.addEventListener('resize', this.orientationChange, false);        
            }else{
                window.addEventListener('orientationchange', this.orientationChange);        
            }
        }else{
            window.addEventListener('orientationchange', this.orientationChange);    
        }
        

        window.addEventListener("message", function(event) {
            // alert("Hello from " + event.data);
            if( event.data.frameName == "stockFrameWebCodeCamBtn"){
                // callQRBarcode(event.data.paras.selectQRBarCode);   
                callQRBarcode();    
                // document.getElementById('inappiframestock').contentWindow.callChildiFrameFun("456");
            }
            
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // alert("test");
        // app.receivedEvent('deviceready');
        ////alert(device.cordova);
        //// alert(device.uuid);

        // navigator.globalization.getPreferredLanguage(function(language){
        //   alert(language.value);
        //   window.localStorage.setItem('local_language',language.value);
        // }, function(){alert('globalization error')});

        // FastClick.attach(document.body);

        document.addEventListener("pause", app.onPause, false);
        document.addEventListener("resume", app.onResume, false);
        document.addEventListener("backbutton", app.onBackKeyDown, false);

        window.setTimeout(function () {
          try{
            if(device.platform == "iOS" && StatusBar.isVisible ==false){
              StatusBar.show();
              // StatusBarLengthForStartFlag = true;
              // alert('StatusBarLengthForStartFlag')
            }
            // alert('not StatusBarLengthForStartFlag')
          }catch(err){
            // console.log(err);
            // alert('index' + err)
          }
        },600);
            
            // try{
            //     window.open = cordova.InAppBrowser.open;
            // }catch(err){
            //     // console.log(err);
            //     // alert('index' + err)
            // }
    },
    onBackKeyDown: function () {
        try{
            // if(window.location.hash != ""){
            //     if(usingQrbarScanner){
            //         window.history.back();
            //     }                
            // }else{
            //     navigator.app.exitApp();
            // }

            if(cordova.platformId == "android"){

                if(window.localStorage.getItem('registerSuccess') != "true"){
                    quitAppForAnroid();
                }

                //放置最前面除了未註冊
                //離開應用程式
                if(window.location.hash == "#connectOperation" && $.mobile.activePage.attr("id") == "connectOperation"){
                    quitAppForAnroid();
                }else if (window.location.hash == "" && $.mobile.activePage.attr("id") == "portal"){
                    var activePage = document.getElementById('inappiframerealtimeinfo').contentWindow.getActivePageId();                    
                    if (activePage == "pageRealtimeinfo"){
                        quitAppForAnroid();
                    }
                }else if (window.location.hash == "#attendance" && $.mobile.activePage.attr("id") == "attendance"){
                    var activePage = document.getElementById('inappiframeattendance').contentWindow.getActivePageId();                    
                    if (activePage == "page1"){
                        quitAppForAnroid();
                    }
                }else if (window.location.hash == "#stock" && $.mobile.activePage.attr("id") == "stock"){
                    var activePage = document.getElementById('inappiframestock').contentWindow.getActivePageId();                    
                    if (activePage == "pageStock"){
                        quitAppForAnroid();
                    }
                }

                
                //出勤
                if(window.location.hash == "#attendance"){
                    document.getElementById('inappiframeattendance').contentWindow.backBtnFromAndroid();
                }

                //庫存
                if(window.location.hash == "#stock"){
                    document.getElementById('inappiframestock').contentWindow.backBtnFromAndroid();
                }
                //業績
                if(window.location.hash == ""){
                    document.getElementById('inappiframerealtimeinfo').contentWindow.backBtnFromAndroid();
                }
                //設定
                if($.mobile.activePage.attr("id") == "detailConnectInfo"){
                    $("#hrefBackBtn").trigger( "vclick" );
                }
                //登入
                if(window.location.hash == "#myModal"){
                    $("a.back").trigger( "vclick" );
                }



            }
                
                
        
        }catch(err){
            
        }
        
    },

    orientationChange:function (e) {

        if(usingQrbarScanner){
            qrBarcodeHasRotate = true;     
        }

        // var currentOrientation = "";

        // if (window.orientation == 0) {
        //     currentOrientation = "portrait";
        // } else if (window.orientation == 90) {
        //     currentOrientation = "landscape";
        // } else if (window.orientation == -90) {
        //     currentOrientation = "landscape";
        // } else if (window.orientation == 180) {
        //     currentOrientation = "portrait";
        // }
        // console.log(currentOrientation);


        appRouter.clearTimeoutForPause();
        try{
            // location.reload();
            if(appRouter.getPageCollection() != null){
                appRouter.getPageCollection().getResults();
            }
            // alert("resume");
            appRouter.setCompanyInfoScreen();

            if(window.location.hash == "#connectOperation"){
                var ulHeight = $(window).height() - $("div[data-role=footer]").outerHeight() - 75;
                appRouter.setulHeightForconnectOperation(ulHeight);    
            }

            setPageHeight();

            if(window.location.hash == "#attendance"){
                var attendWidth = $(window).width();
                var attenddivHeight = $(window).height() - 53 + 5 + 5;
                var attendframeHeight = $(window).height() - 53 ;
                $('#Divinappiframeattendance').height(attenddivHeight);
                $('#Divinappiframeattendance').width(attendWidth);
                $('#inappiframeattendance').height(attendframeHeight);
                customIframeAttendanceCSS();
            }

            if(window.location.hash == "#stock"){
                var stockWidth = $(window).width();
                var stockdivHeight = $(window).height() - 53 + 5 + 5;
                var stockframeHeight = $(window).height() - 53 ;
                $('#Divinappiframestock').height(stockdivHeight);
                $('#Divinappiframestock').width(stockWidth);
                $('#inappiframestock').height(stockframeHeight); 

                if(cordova.platformId == "android"){
                    setTimeout(function(){
                        var stockdivHeight = $(window).height() - 53 + 5 + 5;
                        var stockframeHeight = $(window).height() - 53 ;
                        $('#Divinappiframestock').height(stockdivHeight);                
                        $('#inappiframestock').height(stockframeHeight);                         
                    }, 1500);
                }else{

                }                          
            }

            if(window.location.hash == ""){
                var stockWidth = $(window).width();
                var stockdivHeight = $(window).height() - 53 + 5 + 5;
                var stockframeHeight = $(window).height() - 53 ;
                $('#Divinappiframerealtimeinfo').height(stockdivHeight);
                $('#Divinappiframerealtimeinfo').width(stockWidth);
                $('#inappiframerealtimeinfo').height(stockframeHeight);  
                customIframeRealtimeinfoCSS();              
            }
            
        }catch(err) {
            // console.log(err);
        }
    },

    onPause: function () {
        appRouter.clearTimeoutForPause();
        // alert("pause");

        if($.mobile.activePage.attr('id') == "portal"){
            clearTimeoutForRealtimeinfoIframe();    
        }
        
    },

    onResume: function () {

        try{


            if($.mobile.activePage.attr('id') == "portal"){
                resumeTimeoutForRealtimeinfoIframe();    
            }

            // location.reload();
            if(appRouter.getPageCollection() != null){
                appRouter.getPageCollection().getResults();
            }
            // alert("resume");
        }catch(err) {
            // console.log(err);
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // alert("test");
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
        alert('Received Event: ' + id);
    }
};

app.initialize();
