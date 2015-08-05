var ConsoleModel = Backbone.Model.extend ({
  addToList: function(){
    this.trigger('addToList');
  }

});