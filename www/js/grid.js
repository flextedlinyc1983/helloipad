var columnsTerritory = [

  // {

  //   // name is a required parameter, but you don't really want one on a select all column
  //   name: "",

  //   // Backgrid.Extension.SelectRowCell lets you select individual rows
  //   cell: "select-row",

  //   // Backgrid.Extension.SelectAllHeaderCell lets you select all the row on a page
  //   headerCell: "select-all",

  // },

  {
    name: "id", // The key of the model attribute
    label: "ID", // The name to display in the header
    editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
    // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
    cell: Backgrid.IntegerCell.extend({
      orderSeparator: ''
    })
  }, {
    name: "name",
    label: "Name",
    sortable: false,
    // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
    cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
  }, {
    name: "pop",
    label: "Population",
    cell: "integer" // An integer cell is a number cell that displays humanized integers
  }, {
    name: "percentage",
    label: "% of World Population",
    cell: "number" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
  }, {
    name: "date",
    label: "Date",
    cell: "date"
  }, {
    name: "url",
    label: "URL",
    cell: "uri" // Renders the value in an HTML anchor element
}];

// Initialize a new Grid instance
var gridTerritory = new Backgrid.Grid({
  // row: backgridRedRow,
  columns: columnsTerritory,
  collection: territories,
  className: "my-awesome-css-animated-grid backgrid"
});


var columnsTerritoryTest = [{
    name: "id", // The key of the model attribute
    label: "Num", // The name to display in the header
    editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
    // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
    cell: Backgrid.IntegerCell.extend({
      orderSeparator: ''
    })
  }, {
    name: "name",
    label: "Full Name",
    // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
    cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
  }];


var gridTerritoryTest = new Backgrid.Grid({
  columns: columnsTerritoryTest,
  collection: territoriesTest
});







// territoriesTest.fetch({success: territoriesTest.getColumns});



var getTodoGrid = function (collection) {
  var todoGrid = new Backgrid.Grid({
    columns: collection.columns || "",
    collection: collection
  });

  $(".home-body-left-down").append(todoGrid.render().el);
   $(document).find(".home-body-left-down").addClass("customGrid");        
}




// $.when(todos.fetch()).then(
//   function () {
//     todos.getColumns(todos);
//     getTodoGrid();
//   }  
// );
