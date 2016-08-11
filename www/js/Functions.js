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