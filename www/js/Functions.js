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