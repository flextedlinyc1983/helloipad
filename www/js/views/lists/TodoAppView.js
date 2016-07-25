ava.views.TodoAppView = ava.views.CollectionView.extend({

// ava.views.TodoAppView = Backbone.View.extend({
    // el: $("#todoapp"),
    statsTemplate: _.template($("#stats-todo-template").html()),
    // tagName: 'div',
    // className: 'inner circleBtn',

    events: {
      "keypress #new-todo": "createOnEnter",
      // "click #new-todo":  "showAlert",
      "click .clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete"
    },

    showAlert: function(){
      alert('showAlert')
    },

    initialize: function() {

      

      // this.el = $("#todoapp");
      // this.collection.on('add', this.render, this);
      // this.render();
      // this.input = $("#new-todo");
      this.$input = this.$("#new-todo");

      this.$allCheckbox = this.$("#toggle-all")[0];



      this.listenTo(this.collection, "add", this.addOne);
      this.listenTo(this.collection, "reset", this.addAll);


      this.listenTo(this.collection, "all", this.render);

      this.$main = this.$("#main");
      this.$footer = this.$("footer");


      this.collection.fetch();

      if(!this.collection.columns){
        this.collection.getColumns();
        getTodoGrid(this.collection);
      }

    },

    addOne: function (todo) {
      // var allItems = this.$("#todo-list").html();
      
      var item = new ava.views.TodoView({model: todo});


      this.$("#todo-list").prepend(item.render().el);
      // this.$("#todo-list").append(allItems);
    },

    addAll: function () {
      this.collection.each(this.addOne, this);
    },

    render: function() {

      if(!this.collection.columns){
        this.collection.getColumns();  
        getTodoGrid(this.collection);
      }
      


      // TODO
      var totalPrice = todos.calcuTotalPrice();
      totalPrice = this.numFormat(totalPrice);

      var done = todos.done().length;
      var remaining = todos.remaining().length;

      if(todos.length){
        this.$main.show();
        this.$footer.show();

        var $statsTemplate = this.statsTemplate({done: done, remaining: remaining, totalPrice: totalPrice});
                $(".home-todos-header").html("<div class='todo-stats-header' style='float:left; color:#daa14c; width: 35%; display: block;line-height: 37px; background: #f4fce8'>" + $statsTemplate + "</div>");
        

        this.$footer.html($statsTemplate);
        this.$el.parent().parent().parent().parent().find(".home-todos-header .todo-stats-header").click(this.clearCompleted)

      }else{
        this.$main.hide();
        this.$footer.hide();

        $(".home-header .todo-stats-header").hide();
      }

      this.$allCheckbox.checked = !remaining;

      // var $el = $(this.el);

      // this.collection.each(function(list) {
      //     var item;
      //     item = new ava.views.CircleBtnItemView({ model: list});
      //     $el.append(item.render().el);
      // });

      // return this;

    },

    createOnEnter: function(e) {
      // alert(e.keyCode);
      if (e.keyCode != 13) return;
      if (!this.$input.val()) return;

      this.collection.create({title: this.$input.val()});
      this.$input.val("");
    },

    clearCompleted: function() {
      if(this.collection){
        _.invoke(this.collection.done(), "destroy");
      } else {
        _.invoke(todos.done(), "destroy");
      }
      return false;
    },

    toggleAllComplete: function () {
      var done = this.$allCheckbox.checked;
      this.collection.each(function (todo) { todo.save({"done": done}); });
    }
});

