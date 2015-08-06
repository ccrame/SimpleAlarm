var ListView = Backbone.View.extend ({
  el: '<div class="listView"></div>',
  initialize: function(){
    this.render();
  },

  render: function(){
    var title = this.collection.length > 0 ? '' + this.collection.length + ' Upcoming Events' : 'No Events';
    this.$el.children().detach();
    this.$el.html('<div class="list-title">' + title + '</div>').append(
      this.collection.map(function(listEntry){
        return new ListEntryView({model: listEntry}).render();
      })
    );
  }
});