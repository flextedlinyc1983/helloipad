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