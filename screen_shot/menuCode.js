var menuitems = new ava.collections.Menuitems();
var menu = new ava.views.Menu({collection:menuitems})
menuitems.fetch({reset:true})
$('div[data-role=content]').append(menu.el)

$('#menu').find('ul').each(function(){
$(this).listview()
})