var ListEntryView = Backbone.View.extend ({
  template: _.template('\
    <span class="event"><%= event %></span>\
    <span class="time"><%= time.getHours() + ":" +\
     (("" + time.getMinutes()).length === 1 ? ("0" + time.getMinutes()) : time.getMinutes()) + " " +\
     day %></span>\
  '),

  initialize: function(){
    this.model.watch();
  },

  events: {
    'click': function(){
      console.log('removing!');
      this.model.removeFromList();
    }
  },

  render: function(){
    return this.$el.addClass('list-entry').html(this.template(this.model.attributes));
  }
});