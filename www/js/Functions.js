function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}

function moveScroll(){
    var scroll = $(document).scrollTop();
    var anchor_top = $(".fixedHeader").offset().top;
    var anchor_bottom = $("#bottom_anchor").offset().top;
    // if (scroll>anchor_top && scroll<anchor_bottom) {
    if (scroll>0 ) {
      // alert("scroll: " + scroll + ";" +  "anchor_top: " + anchor_top + ';' + "anchor_bottom: " + anchor_bottom)
      // alert($('thead').position().top + "; " +$('thead').position().left );
    clone_table = $("#clone");
    if(clone_table.length == 0){
        // clone_table = $("#maintable").clone();
        clone_table = $(".fixedHeader").children('thead').clone();
        clone_table.attr('id', 'clone');
        clone_table.css({position:'fixed',
                 'pointer-events': 'none',
                 top:$(".fixedHeader").children('thead').position().top});
        clone_table.width($(".fixedHeader").width());
        clone_table.height($(".fixedHeader").children('thead').height());
        
        $(".table-container").prepend(clone_table);
        // $("#clone").css({visibility:'hidden'});
        // $("#clone thead").css({visibility:'visible', 'pointer-events':'auto'});
        $("#clone").css({visibility:'visible', 'pointer-events':'auto'});

        // $(".fixedHeader").children('thead').css({visibility:'hidden'});
    }
    } else {
    $("#clone").remove();
    }
}

function moveScrollTest(){
    var scroll = $(document).scrollTop();
    var anchor_top = $(".fixedHeader").offset().top;
    var anchor_bottom = $("#bottom_anchor").offset().top;

    var widths = [];
    $('.fixedHeader tbody tr:eq(1) td').each(
      function () {
        widths.push($(this).width());
      });

    $('.fixedHeader thead th').each(
    function(index){
        // $(this).css('width', widths[index]);
        $(this).css('width', $(this).width());
    });

    // if (scroll>anchor_top && scroll<anchor_bottom) {
    if (scroll> 0 ) {
      // alert("scroll: " + scroll + ";" +  "anchor_top: " + anchor_top + ';' + "anchor_bottom: " + anchor_bottom)
      // alert($('thead').position().top + "; " +$('thead').position().left );
    // clone_table = $("#clone");
    // if(clone_table.length == 0){
    //     // clone_table = $("#maintable").clone();
    //     clone_table = $(".fixedHeader").children('thead').clone();
    //     clone_table.attr('id', 'clone');
    //     clone_table.css({position:'fixed',
    //              'pointer-events': 'none',
    //              top:$(".fixedHeader").children('thead').position().top});
    //     clone_table.width($(".fixedHeader").width());
    //     clone_table.height($(".fixedHeader").children('thead').height());
        
    //     $(".table-container").prepend(clone_table);
    //     // $("#clone").css({visibility:'hidden'});
    //     // $("#clone thead").css({visibility:'visible', 'pointer-events':'auto'});
    //     $("#clone").css({visibility:'visible', 'pointer-events':'auto'});

    //     // $(".fixedHeader").children('thead').css({visibility:'hidden'});
      $(".fixedHeader").children('thead').css({position:"fixed",top:$(".fixedHeader").children('thead').position().top,
        left:$(".fixedHeader").children('thead').position().left,"background-color":"#f9f9f9"
      });




    // }
    } else {
    // $("#clone").remove();
    $(".fixedHeader").children('thead').css({position:"",top:"",left:"","background-color":""});

      $('.fixedHeader thead th').each(
      function(){
          $(this).css('width', '');
      });

    }
}
// $(document).scroll(moveScrollTest); 


// TableThing = function(params) {
//     settings = {
//         table: $('#entriestable'),
//         thead: []
//     };

//     this.fixThead = function() {
//         // empty our array to begin with
//         settings.thead = [];
//         // loop over the first row of td's in &lt;tbody> and get the widths of individual &lt;td>'s
//         $('tbody tr:eq(1) td', settings.table).each( function(i,v){
//             settings.thead.push($(v).width());
//         });

//         // now loop over our array setting the widths we've got to the &lt;th>'s
//         for(i=0;i<settings.thead.length;i++) {
//             $('thead th:eq('+i+')', settings.table).width(settings.thead[i]);
//         }

//         // here we attach to the scroll, adding the class 'fixed' to the &lt;thead> 
//         $(window).scroll(function() {
//             var windowTop = $(window).scrollTop();

//             if (windowTop > settings.table.offset().top) {
//                 $("thead", settings.table).addClass("fixed");
//             }
//             else {
//                 $("thead", settings.table).removeClass("fixed");
//             }
//         });
//     }
// }






///////////////////////////////////////////////////////////////////////////////

//     switched = false;
//     updateTables = function() {
//       if (($(window).width() < 767) && !switched ){
//         switched = true;
//         $("table.responsive").each(function(i, element) {
//           splitTable($(element));
//         });
//         return true;
//       }
//       else if (switched && ($(window).width() > 767)) {
//         switched = false;
//         $("table.responsive").each(function(i, element) {
//           unsplitTable($(element));
//         });
//       }
//     };

$( window ).on( "orientationchange", function( event ) {
  updateTbody();
});


updateTbody = function () {
            var tableHeight = $(window).height()-$("div[data-role=footer]").height() - 16 - $('#RealtimeInfo_Today_Test-table thead').height();
            $('#RealtimeInfo_Today_Test-table tbody').css('height',tableHeight.toString());
}

// function splitTable(original)
//   {
//     original.wrap("<div class='table-wrapper' />");
    
//     var copy = original.clone();
//     copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
//     copy.removeClass("responsive");
    
//     original.closest(".table-wrapper").append(copy);
//     copy.wrap("<div class='pinned' />");
//     original.wrap("<div class='scrollable' />");

//     setCellHeights(original, copy);
//   }
  
//   function unsplitTable(original) {
//     original.closest(".table-wrapper").find(".pinned").remove();
//     original.unwrap();
//     original.unwrap();
//   }

//   function setCellHeights(original, copy) {
//     var tr = original.find('tr'),
//         tr_copy = copy.find('tr'),
//         heights = [];

//     tr.each(function (index) {
//       var self = $(this),
//           tx = self.find('th, td');

//       tx.each(function () {
//         var height = $(this).outerHeight(true);
//         heights[index] = heights[index] || 0;
//         if (height > heights[index]) heights[index] = height;
//       });

//     });

//     tr_copy.each(function (index) {
//       $(this).height(heights[index]);
//     });
//   }

  ///////////////////////////////////////////////////////////////////////////////////////


reorderSum0ForColumn = function (data) {
var result = [];
for(var column in data){



    var value = -1;
            switch (column) {
              case "name":
                  value = 0;
                  break;
              case 'volumeToday':
                  value = 1;
                  break;
              case 'volumeLastYearToday':
                  value = 2;
                  break;
              case 'volumeThisMonth':
                  value = 3;
                  break;
              case 'volumeLastYearThisMonth':
                  value = 4;
                  break;
              case 'deposit':
                  value = 5;
                  break;
              case 'volumeAvailable':
                  value = 6;
                  break;
              case 'target':
                  value = 7;
                  break;
              case 'targetRate':
                  value = 8;
                  break;
              case 'saleTotal':
                  value = 9;
                  break;
              case 'preSaleTotal':
                  value = 10;
                  break;
              case 'customer':
                  value = 11;
                  break;
              case 'customerUPrice':
                  value = 12;
                  break;
              case 'saleAmount':
                  value = 13;
                  break;
              case 'customerAVAmount':
                  value = 14;
                  break;
              case 'memberCount':
                  value = 15;
                  break;
              default:
                  value = -1;
            }

            if(value != -1){
              result[value] = column;
            }

  }

            return result;
}


reorderSum0ForRow = function (data) {
var result = [];
for(var column in data){



    var value = -1;
            switch (column) {
              case "name":
                  value = 0;
                  break;
              case 'volumeToday':
                  value = 1;
                  break;
              case 'volumeLastYearToday':
                  value = 2;
                  break;
              case 'volumeThisMonth':
                  value = 3;
                  break;
              case 'volumeLastYearThisMonth':
                  value = 4;
                  break;
              case 'deposit':
                  value = 5;
                  break;
              case 'volumeAvailable':
                  value = 6;
                  break;
              case 'target':
                  value = 7;
                  break;
              case 'targetRate':
                  value = 8;
                  break;
              case 'saleTotal':
                  value = 9;
                  break;
              case 'preSaleTotal':
                  value = 10;
                  break;
              case 'customer':
                  value = 11;
                  break;
              case 'customerUPrice':
                  value = 12;
                  break;
              case 'saleAmount':
                  value = 13;
                  break;
              case 'customerAVAmount':
                  value = 14;
                  break;
              case 'memberCount':
                  value = 15;
                  break;
              default:
                  value = -1;
            }

            if(value != -1){
              result[value] = data[column];
            }

  }

            return result;
}




function Timeout(fn, interval) {
    var id = setTimeout(fn, interval);
    this.cleared = false;
    this.clear = function () {
        this.cleared = true;
        clearTimeout(id);
    };
}


getCodeNumber = function (data) {
  var result = "";
  for(var column in data){
      if(column == "code"){
        result = data[column];
        break;
      }
  }

  return result;
}



getPosInfo = function (codeNumber) {
  alert(codeNumber);
}



pagesData = {};


// (function($) {
//     $.fn.hasScrollBar = function() {
//         return this.get(0).scrollHeight > this.height();
//     }
// })(jQuery);


function loadBundles(sLang) {
  try{
    jQuery.i18n.properties({
        name:'Messages', 
        path:'bundle/', 
        mode:'both',
        language:sLang, 
        callback: function() {
            // updateExamples();
        }
    });
  }catch(err){
      console.log(err);
  }
}


function updateExamples() {
  // Accessing values through the map
  var ex1 = 'msg_hello';
  alert(jQuery.i18n.prop(ex1));
  var ex2 = 'msg_complex'; var ex2P = 'John';
  alert(jQuery.i18n.prop(ex2, ex2P));

}

function getLocalLangugae(){
  var language = navigator.language;
  window.localStorage.setItem('local_language',language);
  return language;
  
}


function getPortalRowNameFromClick(name){
  // var sLang = window.localStorage.getItem('sLang');
  var value = "";
  // if( sLang == "zh_TW"){
    
    switch (name) {
      case "本日業績":
          value = "本日業績";
          break;
      case '去年本日業績':
          value = "去年本日業績";
          break;
      case '本月業績':
          value = '本月業績';
          break;
      case '去年本月業績':
          value = '去年本月業績';
          break;
      case '現有庫存':
          value = '現有庫存';
          break;
      case '可售金額':
          value = '可售金額';
          break;
    // }

  // }else if(sLang == "en_SG"){

    // switch (name) {
      case "Results of this day":
          value = "本日業績";
          break;
      case 'Last year, the performance of the day':
          value = "去年本日業績";
          break;
      case 'Performance this month':
          value = '本月業績';
          break;
      case 'Last year, the performance of this month':
          value = '去年本月業績';
          break;
      case 'Current inventory':
          value = '現有庫存';
          break;
      case 'Stock available for sale amount':
          value = '可售金額';
          break;
    // }

  // }else if(sLang == "zh_CN"){

    // switch (name) {
      case "本日业绩":
          value = "本日業績";
          break;
      case '去年本日业绩':
          value = "去年本日業績";
          break;
      case '本月业绩':
          value = '本月業績';
          break;
      case '去年本月业绩':
          value = '去年本月業績';
          break;
      case '现有库存':
          value = '現有庫存';
          break;
      case '可售金额':
          value = '可售金額';
          break;
    }

  // }

  return value;
  
}


function getColumnNameFromClick(name){
  var value = "";

    switch (name) {
      case "Today":
          value = "本日";
          break;
      case '本日':
          value = "本日";
          break;
    }

  return value;
  
}


function getChooseLanguageFromNvLang(language) {
    language = language.toLowerCase();

    
    var value = '';
        switch (language) {
          case "zh-tw":
              value = 'zh_TW';
              break;              
          case 'en-sg':
              value = "en_SG";
              break;
          case 'zh-cn':
              value = "zh_CN";
              break;
          default:
              value = "";
        }

    var strArray = language.split('-');
    var mainLang = strArray[0] || "";
    // var subLang = ifstrArray[1] || "";
    if(value == ""){

        switch (mainLang) {
          case "zh":
              value = 'zh_TW';
              break;              
          case 'en':
              value = "en_SG";
              break;              
          default:
              value = "";
        }

    }


    return value;
}


function getRightTableDisplayPath(view, urlHash) {
    
    var tableId = view.$el.attr("id").split('-')[0];
    if( tableId == "getPosInfo"){
      var strGetPosInfo = "RealtimeInfo_Today_Test/getPosInfo";  
      if(urlHash.indexOf(strGetPosInfo) !== -1){

        return true;      
      }else{
        return false;      
      }
    }else if(tableId == "portal"){
      if(urlHash == ""){
        return true;      
      }else{
        return false;      
      }
    }else if(tableId == "business"){
      if(urlHash == "business"){
        return true;      
      }else{
        return false;      
      }
    }else if( tableId == "getBrandStatistics"){
      if(urlHash == "getBrandStatistics"){
        return true;      
      }else{
        return false;      
      }
    }else if(tableId == "RealtimeInfo_Today_Test"){
      if(urlHash == "RealtimeInfo_Today_Test"){
        return true;      
      }else{
        return false;      
      }
    }else if(tableId == "RealtimeInfo_Today_Test"){
      if(urlHash == "RealtimeInfo_Today_Test"){
        return true;      
      }else{
        return false;      
      }
    }
    return false;
    
    
   
}


function relogin() {
    var url = window.localStorage.getItem('ipAdress') + window.localStorage.getItem('AppName') + '/checkLogin.jsp';
    var formValues = {
      code: window.localStorage.getItem('code') || "",
      pwd: window.localStorage.getItem('pwd') || "",
      sLang: window.localStorage.getItem('sLang') || "",
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
                storeName = "";
                window.localStorage.setItem('storeName', storeName);

                // this.loginGetData();
            }
            


            console.log(["Login request details: ", data]);
           
            if(window.localStorage.getItem('loginSuccess') == "false") {  // If there is an error, show the error messages
                // $('.alert-error').text(data.error.text).show();
                // alert($.i18n.prop('msg_myModal_loginError'));
                if(window.location.hash == ""){
                    location.reload();  
                }else{
                    Backbone.history.navigate('', {trigger: true, replace: true});  
                }
                
            }
            else { // If not, send them back to the home page

                // if(window.location.hash == ""){


                // }else{
                //     location.reload();
                // }

                    try{
                        // location.reload();
                        if(appRouter.getPageCollection() != null){
                            appRouter.getPageCollection().getResults();
                        }
                        // alert("resume");
                    }catch(err) {
                        console.log(err);
                    }
            }
        },
        error: function(xhr, textStatus, errorThrown){  
          
          if(xhr.readyState == 0){
              // alert($.i18n.prop('msg_networkError'));
              navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
          }else{
              // alert($.i18n.prop('msg_myModal_loginError'));
              navigator.notification.alert($.i18n.prop('msg_myModal_loginError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
          }         
   
        },
        complete: function ( jqXHR, textStatus) {
          $.mobile.loading('hide');
        }
    });
    
   
}


function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    return  states[networkState];
    // alert('Connection type: ' + states[networkState]);
}


function loginFromDetailConnect () {
    var url = window.localStorage.getItem('ipAdress') + window.localStorage.getItem('AppName') + '/checkLogin.jsp';
    var formValues = {
      code: window.localStorage.getItem('code') || "",
      pwd: window.localStorage.getItem('pwd') || "",
      sLang: window.localStorage.getItem('sLang') || "",
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

                // window.localStorage.setItem('code', "");
                // window.localStorage.setItem('pwd', "");

                // window.localStorage.setItem('storeName', "");

                
            }else if(jqXHR.getResponseHeader('Content-Length') == "4337"){

                window.localStorage.setItem('loginSuccess', false);

                // window.localStorage.setItem('code', "");
                // window.localStorage.setItem('pwd', "");

                // window.localStorage.setItem('storeName', "");
              
                alert('此帳號無即時業績權限!');

            }else if(strCheckLogin == "系統登入"){
                window.localStorage.setItem('loginSuccess', false);

                // window.localStorage.setItem('code', "");
                // window.localStorage.setItem('pwd', "");

                // window.localStorage.setItem('storeName', "");  
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
                storeName = "";
                window.localStorage.setItem('storeName', storeName);

                // this.loginGetData();
            }
            


            // console.log(["Login request details: ", data]);
           
            if(window.localStorage.getItem('loginSuccess') == "false") {  // If there is an error, show the error messages
                // $('.alert-error').text(data.error.text).show();
                // alert($.i18n.prop('msg_myModal_loginError'));
                // if(window.location.hash == ""){
                //     location.reload();  
                // }else{
                //     Backbone.history.navigate('', {trigger: true, replace: true});  
                // }

                navigator.notification.alert($.i18n.prop('msg_ConnectView_loginError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
                Backbone.history.loadUrl(Backbone.history.fragment);
            }
            else { // If not, send them back to the home page

                // if(window.location.hash == ""){


                // }else{
                //     location.reload();
                // }

                try{
                   footerClickItem = "";
                   Backbone.history.navigate('', true);
                }catch(err) {
                    console.log(err);
                }
            }
        },
        error: function(xhr, textStatus, errorThrown){  
          
          if(xhr.readyState == 0){
              // alert($.i18n.prop('msg_networkError'));
              navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
          }else{
              // alert($.i18n.prop('msg_myModal_loginError'));
              navigator.notification.alert($.i18n.prop('msg_myModal_loginError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
          }         
          Backbone.history.loadUrl(Backbone.history.fragment);
        },
        complete: function ( jqXHR, textStatus) {
          $.mobile.loading('hide');
        }
    });
}




function footerNavItem(page, hash) {
  

  // var selectedItem = $.mobile.activePage.find('div[data-role=footer] ul a:hover').html() || $.mobile.activePage.find('div[data-role=footer] ul a:active').html() || $.mobile.activePage.find('div[data-role=footer] ul a.unused').html() || $.mobile.activePage.find('div[data-role=footer] ul a.selected').html() || "";
  
  var selectedItem = footerClickItem;
  // switch (hash) {
  //   case "":
  //   case "#RealtimeInfo_Today_Test":    
  //       $(page.el).find("div[data-role=footer] ul .index a").addClass('selected');
  //       break;
  //   case "去年本日業績":
  //       var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
  //       currentPageData.group = 1;
  //       Backbone.history.navigate('RealtimeInfo_Today_Test', true);
  //       break;    
  //   default:
  //       // alert('no match');
  // }
  $(page.el).find("div[data-role=footer] ul .index a").removeClass('selected');
  switch (selectedItem) {
    case "":      
    case "業績":      
        $(page.el).find("div[data-role=footer] ul .index a").addClass('selected');
        break;
    case "設定":        
        $(page.el).find("div[data-role=footer] ul .connection a").addClass('selected');
        break;    
    case "出勤":        
        $(page.el).find("div[data-role=footer] ul .attendance a").addClass('selected');
        break;  
    case "庫存":        
        $(page.el).find("div[data-role=footer] ul .stock a").addClass('selected');
        break;  
    case "app業績":        
        $(page.el).find("div[data-role=footer] ul .business a").addClass('selected');
        break;  
    default:
        // alert('no match');
  }

  setFooterItemDisabledByLoginStatus(page);

}

function headerNavItem(page, hash) {
  
  $(page.el).find("div[data-role=header] ul li a").removeClass('selected');

  switch (hash) {
    // case "":
    //         if(window.localStorage.getItem('loginSuccess') != "true"){
    //             // $(page.el).find("div[data-role=header]").css({"display": "none"});
    //             // $(page.el).css({"padding-top": "0px"});
    //             $(page.el).find("div[data-role=header]").remove();
    //         }       
    //         $(page.el).find("div[data-role=header] ul .classIndex1 a").addClass('selected');  
                     
    //     break;
    case "#getBrandStatistics":
            $(page.el).find("div[data-role=header] ul .classIndex2 a").addClass('selected');
        break;
    case "#RealtimeInfo_Today_Test":   
            // var nowPage = page.getNowpage();
            // if(nowPage == "1"){
            //   $(page.el).find("div[data-role=header] ul .classIndex2 a").addClass('selected');  
            // }else if(nowPage == "2"){
            //   $(page.el).find("div[data-role=header] ul .classIndex3 a").addClass('selected');  
            // }else if(nowPage == "3"){
            //   $(page.el).find("div[data-role=header] ul .classIndex4 a").addClass('selected');  
            // }
            setHeaderAreaBySwipe(page);
        break;
    case "去年本日業績":
        var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
        currentPageData.group = 1;
        Backbone.history.navigate('RealtimeInfo_Today_Test', true);
        break;
    case "#business":
        if(window.localStorage.getItem('loginSuccess') != "true"){
            // $(page.el).find("div[data-role=header]").css({"display": "none"});
            // $(page.el).css({"padding-top": "0px"});
            $(page.el).find("div[data-role=header]").remove();
        }       
        $(page.el).find("div[data-role=header] ul .classIndex1 a").addClass('selected');                   
        break;
    default:
        // alert('no match');
  }

}



function setHeaderArea(items, header) {


  
  var menuView = new ava.views.headerArea({collection: items});

  header.find('div[data-role=header] .headerArea').append(menuView.el);
}


function getHeaderAreaItems(hash) {
  var items = null;
  switch (hash) {
    case "":
    case "#RealtimeInfo_Today_Test":    
    case "#getBrandStatistics":    
    case "#business":    
        items = new ava.collections.Menu([
        {title: "即時業績", className:"classIndex1"},
        {title: "本日&本月累積業績", className:"classIndex2"},
        {title: "本日業績", className:"classIndex3"},
        {title: "本月業績", className:"classIndex4"},
        {title: "現有庫存", className:"classIndex5"},
        {title: "本月目標", className:"classIndex6"},
        {title: "銷售金額", className:"classIndex7"},
        {title: "客數", className:"classIndex8"},
        {title: "商品件數", className:"classIndex9"},
        
        ]);
        break;
    case "去年本日業績":
        // var currentPageData = pagesData['portal'] ||  (pagesData['portal'] = {});
        // currentPageData.group = 1;
        // Backbone.history.navigate('RealtimeInfo_Today_Test', true);
        break;    
    default:
        items = new ava.collections.Menu();
  }
  return items;
}




function HeaderAreaClickChangePage(e, hash, targetPage){
    if( $(e.target).hasClass('selected') == true ){
      // Backbone.history.loadUrl(Backbone.history.fragment);
      appRouter.clearTimeout();
      if(appRouter.getPageCollection() != null){
          appRouter.getPageCollection().getResults();
      }
    }else{

      if(hash == "#RealtimeInfo_Today_Test"){
          if(appRouter.getPageView() != null){
            var page = appRouter.getPageView();
              page.setNowpage(targetPage);
              headerNavItem(page,hash);
              page.toggleColumn(targetPage);
          }
      }else{
        Backbone.history.navigate('RealtimeInfo_Today_Test', true);    
      }
      
      
    } 
}


function getHeaderAreaScrollLeft(page) {
  var scrollLeftValue = 0;
  var nowPage = $.mobile.activePage.find('div[data-role=footer] a.selected').html();
  var newPage = $(page.el).find('div[data-role=footer] a.selected').html();
  if (nowPage == newPage) {
    if($.mobile.activePage.attr("id") == "getPosInfo"){
      scrollLeftValue = page.getHeaderScrollleftForgetPosInfo();
    }else if( ($.mobile.activePage.attr("id") == "portal") || ($.mobile.activePage.attr("id") == "business") ){
        
        if(page.getClickValueItemFromPortal()){
          scrollLeftValue = getHeaderItemCenterByClickValueItemFromPortal(page);
        }else{
          scrollLeftValue = $.mobile.activePage.find('div[data-role=header] ul').scrollLeft();  
        }

    }else{       
        scrollLeftValue = $.mobile.activePage.find('div[data-role=header] ul').scrollLeft();          
    }

    //for swipe
    if(swipeForNotRealtimeInfo_Today_Test){
        scrollLeftValueForNotRealtimeInfo_Today_Test = getHeaderItemCenterBySwipeForNotRealtimeInfo_Today_Test(page);
    }
    
  }else{
    scrollLeftValue = 0;
  }
  return scrollLeftValue;
}

function setHeaderAreaScrollLeft(page, value) {
  try{
    $.mobile.activePage.find('div[data-role=header] ul').scrollLeft(value);  
    if(swipeForNotRealtimeInfo_Today_Test){
      swipeForNotRealtimeInfo_Today_Test = false;
      $.mobile.activePage.find('div[data-role=header] ul').animate({scrollLeft: scrollLeftValueForNotRealtimeInfo_Today_Test}, 350);
    }
  }catch(err) {
    // console.log(err);
  }
}


function setHeaderAreaBySwipe(page) {
    var $Page = $(page.el);
    $Page.find('div[data-role=header] ul li a').removeClass('selected');
    var nowPage = page.getNowpage();
    if(nowPage == "1"){
      $Page.find("div[data-role=header] ul .classIndex3 a").addClass('selected');  
    }else if(nowPage == "2"){
      $Page.find("div[data-role=header] ul .classIndex4 a").addClass('selected');  
    }else if(nowPage == "3"){
      $Page.find("div[data-role=header] ul .classIndex5 a").addClass('selected');  
    }else if(nowPage == "4"){
      $Page.find("div[data-role=header] ul .classIndex6 a").addClass('selected');  
    }else if(nowPage == "5"){
      $Page.find("div[data-role=header] ul .classIndex7 a").addClass('selected');  
    }else if(nowPage == "6"){
      $Page.find("div[data-role=header] ul .classIndex8 a").addClass('selected');  
    }else if(nowPage == "7"){
      $Page.find("div[data-role=header] ul .classIndex9 a").addClass('selected');  
    }

    
}

function setHeaderAreaBySwipeLeftForNotRealtimeInfo_Today_Test(page) {
    var $Page = $(page.el);
    var indexSelected = 0;
    $Page.find("div[data-role=header] ul li").each(function(index){
      if($(this).find('a').hasClass('selected')){
      indexSelected = index;
      return false;
      }
    });
    
    $Page.find('div[data-role=header] ul li a').removeClass('selected');
    var name = $Page.find("div[data-role=header] ul .classIndex" + indexSelected +" a").html();   
    setHeaderItemBySwipeForNotRealtimeInfo_Today_Test(name);
}

function setHeaderAreaBySwipeRightForNotRealtimeInfo_Today_Test(page) {
    var $Page = $(page.el);
    var indexSelected = 0;
    $Page.find("div[data-role=header] ul li").each(function(index){
      if($(this).find('a').hasClass('selected')){
      indexSelected = index;
      return false;
      }
    });
    indexSelected += 2;
    $Page.find('div[data-role=header] ul li a').removeClass('selected');
    var name = $Page.find("div[data-role=header] ul .classIndex" + indexSelected +" a").html();   
    setHeaderItemBySwipeForNotRealtimeInfo_Today_Test(name);
}

function setHeaderItemBySwipeForNotRealtimeInfo_Today_Test(name) {
    try {
       switch (name) {
            case "即時業績":
                if($('[data-role=footer] ul li a.selected').parent().attr('class').trim().split(' ')[0] == "index"){
                  Backbone.history.navigate('', true);                 
                }else{
                  Backbone.history.navigate('business', true);
                }
                break;                
            case "本日&amp;本月累積業績":                   
                  Backbone.history.navigate('getBrandStatistics', true);                 
                break;     
            case "本日業績":                   
                  Backbone.history.navigate('RealtimeInfo_Today_Test', true);                 
                break;         
            default:
                // alert('no match');
        }
    }catch(err) {
        // console.log(err);
    }
}


function setHeaderItemCenterBySwipe(page) {
    var $Page = $(page.el);
    var value = 0;
    var selectedLength = 0;
    $Page.find("div[data-role=header] ul li").each(function () {
        if($(this).find('a').hasClass('selected')){
          selectedLength = $(this).outerWidth();
          return false;
        }        
        value += $(this).outerWidth();
    });
    value = value - ($(window).width() - selectedLength)/2;
    // $Page.find("div[data-role=header] ul").scrollLeft(value);
    $Page.find("div[data-role=header] ul").animate({scrollLeft: value}, 350);
}


function footerIndexClick(e) {
    footerClickItem = "業績";
    if( $(e.target).hasClass('selected') == true ){
      // Backbone.history.loadUrl(Backbone.history.fragment);
      // HeaderAreaClickChangePage(e, hash, 0);   

      // var isCorrespFooter = $.mobile.activePage.find('div[data-role=header] ul a.selected').parent().hasClass('classIndex1');
      // if(isCorrespFooter){
      //   appRouter.clearTimeout();
      //   if(appRouter.getPageCollection() != null){
      //       appRouter.getPageCollection().getResults();
      //   }  
      // }else{
      //   Backbone.history.navigate('', true);    
      // }
            
      appRouter.clearTimeout();
      if(appRouter.getPageCollection() != null){
          appRouter.getPageCollection().getResults();
      }  

    }else{
      if(!$(e.target).hasClass('footerItemDisabled')){
          Backbone.history.navigate('', true);    
      }
      
    } 


}

function footerBusinessClick(e) {
  footerClickItem = "app業績";
    // if( $(e.target).hasClass('selected') == true ){
    //   // Backbone.history.loadUrl(Backbone.history.fragment);
    //   // HeaderAreaClickChangePage(e, hash, 0);   
    // }else{
    //   if(!$(e.target).hasClass('footerItemDisabled')){
    //     Backbone.history.navigate('attendance', true); 
    //   }
    // } 
    // alert('stock');
    if( $(e.target).hasClass('selected') == true ){
      // Backbone.history.loadUrl(Backbone.history.fragment);
      // HeaderAreaClickChangePage(e, hash, 0);   
      appRouter.clearTimeout();
      if(appRouter.getPageCollection() != null){
          appRouter.getPageCollection().getResults();
      }  
    }else{
      if(!$(e.target).hasClass('footerItemDisabled')){
        Backbone.history.navigate('business', true); 
      }
    } 
}

function footerStockClick(e) {
  footerClickItem = "庫存";
    // if( $(e.target).hasClass('selected') == true ){
    //   // Backbone.history.loadUrl(Backbone.history.fragment);
    //   // HeaderAreaClickChangePage(e, hash, 0);   
    // }else{
    //   if(!$(e.target).hasClass('footerItemDisabled')){
    //     Backbone.history.navigate('attendance', true); 
    //   }
    // } 
    // alert('stock');
    if( $(e.target).hasClass('selected') == true ){
      // Backbone.history.loadUrl(Backbone.history.fragment);
      // HeaderAreaClickChangePage(e, hash, 0);   
    }else{
      if(!$(e.target).hasClass('footerItemDisabled')){
        Backbone.history.navigate('stock', true); 
      }
    } 
}

function footerAttendanceClick(e) {
  footerClickItem = "出勤";
    if( $(e.target).hasClass('selected') == true ){
      // Backbone.history.loadUrl(Backbone.history.fragment);
      // HeaderAreaClickChangePage(e, hash, 0);   
    }else{
      if(!$(e.target).hasClass('footerItemDisabled')){
        Backbone.history.navigate('attendance', true); 
      }
    } 
}

function footerConnectionClick(e) {
  footerClickItem = "設定";
    if( $(e.target).hasClass('selected') == true ){
      // Backbone.history.loadUrl(Backbone.history.fragment);
      // HeaderAreaClickChangePage(e, hash, 0);   
    }else{
      Backbone.history.navigate('connectOperation', true); 
    } 
}



function setPageHeight(){
    var currentOrientation = "";

    if (window.orientation == 0) {
        currentOrientation = "portrait";
    } else if (window.orientation == 90) {
        currentOrientation = "landscape";
    } else if (window.orientation == -90) {
        currentOrientation = "landscape";
    } else if (window.orientation == 180) {
        currentOrientation = "portrait";
    }
    var statusBar = 0;
    if(currentOrientation == "portrait"){
      statusBar = 20;
    }
    // var pageHeight = $.mobile.activePage.height();
    var pageHeight = $(window).height();
    var headerHeight = $.mobile.activePage.find("[data-role=header]").outerHeight();
    var footerHeight = $.mobile.activePage.find("[data-role=footer]").outerHeight();
    $.mobile.activePage.css("height",(pageHeight - headerHeight - footerHeight - statusBar).toString());
}





function openBrowser() {
   // var url = 'https://cordova.apache.org';
   var url = window.localStorage.getItem('ipAdress') + window.localStorage.getItem('AppName') + '/PDA/Attendance/attendance.jsp';
   var target = '_blank';
   var options = "location=no";
   if(cordova.platformId == "ios"){
      options += ",disallowoverscroll=yes,toolbar=no";
   }else if(cordova.platformId == "android"){
      
   }
   // var ref = cordova.InAppBrowser.open(url, target, options);
   var ref = window.open(url, target, options);
   

   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loadloaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
      reSizeWindow();
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }

   // var codeStr = "";
   // codeStr = " var viewportmeta = document.querySelector('meta[name='viewport']');"
   // function reSizeWindow(){
   //    ref.executeScript({
   //        code: "var itm = document.querySelector('#Main div'); itm.setAttribute('style','width:100%');"
   //    }, function() {
   //        alert("Element Successfully Hijacked");
   //    });
   // }

   function reSizeWindow(){
      window.resizeTo(250, 250);                             // Resizes the new window
      window.focus();     
   }
}




function  inappiFrameAttendanceonLoad(){
  try{
    $.mobile.loading('hide');
    // alert('myframe is loaded');  
    // var contents = $(document.getElementById("inappiframeattendance").contentDocument).find('[data-role=page]');
    // var contents=document.getElementById('inappiframeattendance').contentWindow.document;



    // var loadStatus = $(document.getElementById("inappiframeattendance").contentDocument).find('[data-role=page]').length > 0 ? true : false;
    // if(loadStatus){
    //   $('#inappiframeattendance').show({duration:0});
    // }else{
    //   alert('error');
    // }
    
    if( $.mobile.activePage.attr('id') == "attendance"){ 
        if($('#inappiframeattendance').length > 0){
          customIframeAttendanceCSS();
          $('#inappiframeattendance').show({duration:0});
          // customIframeAttendanceSet_PageBackBtn();
        }             
    }

    AttendanceonLoadFinish = true;
    
  }catch(e){
      console.log(e);
  }
}

function  inappiFrameRealtimeinfoLoad(){
  try{
    $.mobile.loading('hide');
    // alert('myframe is loaded');  
    // var contents = $(document.getElementById("inappiframeattendance").contentDocument).find('[data-role=page]');
    // var contents=document.getElementById('inappiframeattendance').contentWindow.document;



    // var loadStatus = $(document.getElementById("inappiframeattendance").contentDocument).find('[data-role=page]').length > 0 ? true : false;
    // if(loadStatus){
    //   $('#inappiframeattendance').show({duration:0});
    // }else{
    //   alert('error');
    // }
    
    if( $.mobile.activePage.attr('id') == "portal"){ 
        if($('#inappiframerealtimeinfo').length > 0){
          customIframeRealtimeinfoCSS();
          $('#inappiframerealtimeinfo').show({duration:0});
          // customIframeAttendanceSet_PageBackBtn();
        }             
    }

    RealtimeinfoLoadFinish = true;
    
  }catch(e){
      console.log(e);
  }
}

function customIframeRealtimeinfoCSS(){
  try{


      var iframeDocument = document.getElementById('inappiframerealtimeinfo').contentWindow.document;
      $(iframeDocument).find('[data-role=page]#pageRealtimeinfo  [data-role=footer]').remove();

      var screenHeight = $(window).height() || 0;
      var screenWidth = $(window).width() || 0;
      screenWidth = screenWidth -5;
      // var tabsHeaderHeight = $(iframeDocument).find('[data-role=page]#page1 [data-role=header]').outerHeight() || 0;
      var headerHeight = 55;
      var baseFooterHeight = $.mobile.activePage.find('[data-role=footer]').outerHeight() || 0;
      var theadHeight = $(iframeDocument).find('[data-role=page]#pageRealtimeinfo .table thead').outerHeight();
      var tbodyHeight = screenHeight - headerHeight - theadHeight - baseFooterHeight;
      $(iframeDocument).find('[data-role=page]#pageRealtimeinfo .table tbody').css({"position":"absolute","-webkit-overflow-scrolling":"touch","overflow-y":"auto","height": tbodyHeight + "px"});
      // $(iframeDocument).find('[data-role=page]#page1').css({"height":"100%"});

      // var set_PageHeaderHeight = $(iframeDocument).find('[data-role=page]#set_Page [data-role=header]').outerHeight() || 0;
      // var set_PageHeaderHeight = 90;
      // var set_PageHeight = screenHeight - set_PageHeaderHeight - baseFooterHeight;
      // $(iframeDocument).find('[data-role=page]#set_Page [data-role=content]').css({"position":"absolute","-webkit-overflow-scrolling":"touch","overflow-y":"scroll","width": screenWidth + "px","height": set_PageHeight + "px"});




  }catch(e){
      console.log(e);
  }

}

function  inappiFrameStockLoad(){
  try{
    $.mobile.loading('hide');
    // alert('myframe is loaded');  
    // var contents = $(document.getElementById("inappiframeattendance").contentDocument).find('[data-role=page]');
    // var contents=document.getElementById('inappiframeattendance').contentWindow.document;



    // var loadStatus = $(document.getElementById("inappiframeattendance").contentDocument).find('[data-role=page]').length > 0 ? true : false;
    // if(loadStatus){
    //   $('#inappiframeattendance').show({duration:0});
    // }else{
    //   alert('error');
    // }
    
    if( $.mobile.activePage.attr('id') == "stock"){ 
        if($('#inappiframestock').length > 0){
          customIframeStockCSS();
          $('#inappiframestock').show({duration:0});
          // customIframeAttendanceSet_PageBackBtn();
        }             
    }

    StockLoadFinish = true;
    
  }catch(e){
      console.log(e);
  }
}

function customIframeStockCSS(){
  try{


      var iframeDocument = document.getElementById('inappiframestock').contentWindow.document;
      $(iframeDocument).find('[data-role=page]#page1 [data-role=footer]').remove();

      var screenHeight = $(window).height() || 0;
      var screenWidth = $(window).width() || 0;
      screenWidth = screenWidth -5;
      // var tabsHeaderHeight = $(iframeDocument).find('[data-role=page]#page1 [data-role=header]').outerHeight() || 0;
      var tabsHeaderHeight = 81;
      var baseFooterHeight = $.mobile.activePage.find('[data-role=footer]').outerHeight() || 0;
      var tabsHeight = screenHeight - tabsHeaderHeight - baseFooterHeight -5;
      $(iframeDocument).find('[data-role=page]#page1 #tabs').css({"position":"absolute","-webkit-overflow-scrolling":"touch","overflow-y":"scroll","height": tabsHeight + "px", "width": screenWidth + "px"});
      $(iframeDocument).find('[data-role=page]#page1').css({"height":"100%"});

      // var set_PageHeaderHeight = $(iframeDocument).find('[data-role=page]#set_Page [data-role=header]').outerHeight() || 0;
      var set_PageHeaderHeight = 90;
      var set_PageHeight = screenHeight - set_PageHeaderHeight - baseFooterHeight;
      $(iframeDocument).find('[data-role=page]#set_Page [data-role=content]').css({"position":"absolute","-webkit-overflow-scrolling":"touch","overflow-y":"scroll","width": screenWidth + "px","height": set_PageHeight + "px"});




  }catch(e){
      console.log(e);
  }

}

function customIframeAttendanceCSS(){
  try{


      var iframeDocument = document.getElementById('inappiframeattendance').contentWindow.document;
      $(iframeDocument).find('[data-role=page]#page1 [data-role=footer]').remove();

      var screenHeight = $(window).height() || 0;
      var screenWidth = $(window).width() || 0;
      screenWidth = screenWidth -5;
      // var tabsHeaderHeight = $(iframeDocument).find('[data-role=page]#page1 [data-role=header]').outerHeight() || 0;
      var tabsHeaderHeight = 81;
      var baseFooterHeight = $.mobile.activePage.find('[data-role=footer]').outerHeight() || 0;
      var tabsHeight = screenHeight - tabsHeaderHeight - baseFooterHeight -5;
      $(iframeDocument).find('[data-role=page]#page1 #tabs').css({"position":"fixed","-webkit-overflow-scrolling":"touch","overflow-y":"scroll","height": tabsHeight + "px", "width": screenWidth + "px"});
      $(iframeDocument).find('[data-role=page]#page1').css({"height":"100%"});

      $(iframeDocument).find('[data-role=page]#page1 #tabs [data-role=table]').css({"width": screenWidth + "px"});

      // var set_PageHeaderHeight = $(iframeDocument).find('[data-role=page]#set_Page [data-role=header]').outerHeight() || 0;
      var set_PageHeaderHeight = 90;
      var set_PageHeight = screenHeight - set_PageHeaderHeight - baseFooterHeight;
      $(iframeDocument).find('[data-role=page]#set_Page [data-role=content]').css({"position":"absolute","-webkit-overflow-scrolling":"touch","overflow-y":"scroll","width": screenWidth + "px","height": set_PageHeight + "px"});




  }catch(e){
      console.log(e);
  }

}


function customIframeAttendanceSet_PageBackBtn(){
  try{


      var iframeDocument = document.getElementById('inappiframeattendance').contentWindow.document;
      $(iframeDocument).find('#set_Page form [data-role=header] a').on('click',function(e){
          // alert('test')
          // customIframeAttendanceCSS();
      })

      

  }catch(e){
      console.log(e);
  }

}



function  routerControl (){
  try{
    var hash = window.location.hash;
    switch (hash) {
      case "connectOperation":
          value = 0;
          break;
      case '':
          Backbone.history.navigate('connectOperation', true); 
          break;
      default:          
    }
  }catch(e){
      console.log(e);
  }
}


function  setFooterItemByLoginStatus() {
  if( window.localStorage.getItem('loginSuccess') == "true" ){      
  }else{
      footerClickItem = "設定";
  }
}

function  setFooterItemDisabledByLoginStatus(page) {
  if( window.localStorage.getItem('loginSuccess') == "true" ){  
      $(page.el).find("div[data-role=footer] ul a").removeClass('defaultSelect');
  }else{
      $(page.el).find("div[data-role=footer] ul a").each(function () {
        if(!$(this).hasClass('defaultSelect')){
          $(this).addClass('footerItemDisabled');
        }
      });
  }
}


function clearRealtimeBusinessPagesData(){
  try{
    if(footerClickItem != "業績" && footerClickItem != "app業績"){
        if(typeof(pagesData['portal']) != "undefined"){        
            delete pagesData['portal'];
        }
        if(typeof(pagesData['#RealtimeInfo_Today_Test']) != "undefined"){        
            delete pagesData['#RealtimeInfo_Today_Test'];
        }
    }
  }catch(e){
      console.log(e);
  }
}


function getHeaderItemCenterByClickValueItemFromPortal(page) {
    var $Page = $(page.el);
    var $activePage = $.mobile.activePage;
    var value = 0;
    var selectedLength = 0;
    var indexSelected = 0;
    $Page.find("div[data-role=header] ul li").each(function(index){
      if($(this).find('a').hasClass('selected')){
      indexSelected = index;
      return false;
      }
    });

    $activePage.find("div[data-role=header] ul li").each(function (index) {
        if(index == indexSelected){
          selectedLength = $(this).outerWidth();
          return false;
        }        
        value += $(this).outerWidth();
    });
    value = value - ($(window).width() - selectedLength)/2;
    return value;
    // $Page.find("div[data-role=header] ul").scrollLeft(value);
    // $Page.find("div[data-role=header] ul").animate({scrollLeft: value}, 500);
}

function getHeaderItemCenterBySwipeForNotRealtimeInfo_Today_Test(page){
    var value = getHeaderItemCenterByClickValueItemFromPortal(page);
    return value;
}


var usingQrbarScanner = false;
var qrBarcodeHasRotate = false;
function  callQRBarcode() {
    goQrBarCodePage();
    
    setTimeout(function(){
      runQrBarcode()
    }, 100);
    // alert('test ' + proCode);

    // cordova.plugins.barcodeScanner.scan(
    //     function (result) {
    //         alert("We got a barcode\n" +
    //               "Result: " + result.text + "\n" +
    //               "Format: " + result.format + "\n" +
    //               "Cancelled: " + result.cancelled);
    //     },
    //     function (error) {
    //         alert("Scanning failed: " + error);
    //     },
    //     {
    //         // "preferFrontCamera" : true, // iOS and Android
    //         "showFlipCameraButton" : true, // iOS and Android
    //         "prompt" : "Place a barcode inside the scan area", // supported on Android only
    //         "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    //         // "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
    //     }
    // );

    usingQrbarScanner = true;
    
}

function runQrBarcode() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {

            usingQrbarScanner = false;

            if(cordova.platformId == "ios"){              
              setTimeout(function(){ 
                screen.unlockOrientation();
              }, 500);  
            }
            
            // goQrBarCodePage();
            // resizeWindowByqrbarcode();

            setTimeout(function(){ 

                if(!result.cancelled)
                {
                    if(result.format == "QR_CODE")
                    {                    
                        // alert("qr " + result.text);
                    }else{
                        // alert("bar " + result.text);
                    }
                    goStockQuery(qrBarcodeHasRotate, result.text.trim());
                    qrBarcodeHasRotate = false; 
                }else{
                    goStockPage(qrBarcodeHasRotate, false); 
                    qrBarcodeHasRotate = false;   
                    // reloadFromQrBarRotation();  
                }
            
            }, 0);  
            // if(!result.cancelled)
            // {
            //     if(result.format == "QR_CODE")
            //     {
            //         // navigator.notification.prompt("Please enter name of data",  function(input){
            //         //     var name = input.input1;
            //         //     var value = result.text;

            //         //     var data = localStorage.getItem("LocalData");
            //         //     console.log(data);
            //         //     data = JSON.parse(data);
            //         //     data[data.length] = [name, value];

            //         //     localStorage.setItem("LocalData", JSON.stringify(data));

            //         //     alert("Done");
            //         // });
            //         alert("qr " + result.text);
            //     }else{
            //         alert("bar " + result.text);
            //     }
            // }
        },
        function (error) {
            alert("Scanning failed: " + error);
            qrBarcodeHasRotate = false;
            goStockPage(qrBarcodeHasRotate, true); 
            usingQrbarScanner = false;
            if(cordova.platformId == "ios"){            
              setTimeout(function(){ 
                screen.unlockOrientation();
              }, 1500);  
            }
            
        },
       {
            // "preferFrontCamera" : true, // iOS and Android
            "showFlipCameraButton" : false, // iOS and Android
            "prompt" : "Place a barcode inside the scan area", // supported on Android only
            "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            "orientation" : "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
        }
    );
}

function  goStockQuery(qrBarcodeHasRotate, value) {
    document.getElementById('inappiframestock').contentWindow.goStockQuery(qrBarcodeHasRotate, value);
}

function  goStockPage(qrBarcodeHasRotate, isError) {
    document.getElementById('inappiframestock').contentWindow.goStockPage(qrBarcodeHasRotate, isError);
}

function  goQrBarCodePage() {
  if(cordova.platformId == "ios"){
    var orientation = '';
    if(window.orientation == 0 || window.orientation == 180){
        orientation = 'portrait';
    }else{
        orientation = 'landscape';
    }
    screen.lockOrientation(orientation);
    setTimeout(function(){ 
      screen.lockOrientation(orientation);
    }, 250);
    setTimeout(function(){ 
      screen.lockOrientation(orientation);
    }, 500);
    setTimeout(function(){ 
      screen.lockOrientation(orientation);
    }, 1000);
    setTimeout(function(){ 
      screen.lockOrientation(orientation);
    }, 1500); 

  }
    document.getElementById('inappiframestock').contentWindow.goQrBarCodePage();
}

function  resizeWindowByqrbarcode() {
    document.getElementById('inappiframestock').contentWindow.resizeWindowByqrbarcode();
}

function reloadFromQrBarRotation(){
    Backbone.history.loadUrl(Backbone.history.fragment);
    
    setTimeout(function(){ 
        window.dispatchEvent(new Event('resize'));
    }, 500);  
}