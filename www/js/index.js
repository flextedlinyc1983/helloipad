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
        window.addEventListener('orientationchange', this.orientationChange);
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
            if(window.location.hash != ""){
                window.history.back()            
            }else{
                navigator.app.exitApp();
            }
        
        }catch(err){
            
        }
        
    },

    orientationChange:function (e) {
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
            }

            if(window.location.hash == ""){
                var stockWidth = $(window).width();
                var stockdivHeight = $(window).height() - 53 + 5 + 5;
                var stockframeHeight = $(window).height() - 53 ;
                $('#Divinappiframerealtimeinfo').height(stockdivHeight);
                $('#Divinappiframerealtimeinfo').width(stockWidth);
                $('#inappiframerealtimeinfo').height(stockframeHeight);                
            }
            
        }catch(err) {
            // console.log(err);
        }
    },

    onPause: function () {
        appRouter.clearTimeoutForPause();
        // alert("pause");
    },

    onResume: function () {

        try{
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
