var ListView = Backbone.View.extend ({
  el: '<div class="listView"></div>',
  initialize: function(){
    this.render();
  },

  render: function(){

    console.log('list view render');
    this.$el.children().detach();
    this.$el.html('<div class="list-title">Upcoming Events</div>').append(
      this.collection.map(function(listEntry){
        return new ListEntryView({model: listEntry}).render();
      })
    );
  }
});