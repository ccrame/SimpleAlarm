var AppView = Backbone.View.extend ({
  initialize: function(app){
    this.consoleView = new ConsoleView({model: this.model.get('console')});
    this.listView = new ListView({collection: this.model.get('eventList')});
    this.clockView = new ClockView({model: this.model.get('clock')});

    this.clockView.on('refresh',function(){
      this.clockView.render();
      this.listView.render();
    },this);

    this.model.get('eventList').on('add', function(){
      this.listView.render();
    },this);

    this.model.get('eventList').on('remove', function(){
      this.listView.render();
    },this);
    //main app controller
  },

  render: function(){
    return this.$el.html([
      this.consoleView.$el,
      this.clockView.$el,
      this.listView.$el
    ]);
  }

});