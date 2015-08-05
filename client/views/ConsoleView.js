var ConsoleView = Backbone.View.extend ({
  initialize: function(){
    this.$el.append('<button class="mybutton">add to list</button>')
  },

  events:{
    'click .mybutton' : 'buttonClick'
  },

  buttonClick:  function(){
    this.model.addToList();
  }
});