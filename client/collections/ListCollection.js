var ListCollection = Backbone.Collection.extend({
  model: ListEntryModel,

  comparator: function(model){
    return model.get('time');
  }
});
