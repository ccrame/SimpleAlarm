var ClockView = Backbone.View.extend({
  initialize: function(){
    this.render();
    this.refresh();
  },

  refresh: function(){
    this.trigger('refresh',this);
    setTimeout(this.refresh.bind(this),1000);
  },

  render: function(){
    var time = (new Date).toTimeString().slice(0,8).split(':'); 
    var hour = +time[0];
    var meridiem = hour < 12 ? 'AM' : 'PM';
    hour = (+time[0] - 1)%12 + 1;
    time[0] = hour;
    this.$el.addClass('clock').html('\
      <span>'+ time.join(':') + ' ' + meridiem +'</span>\
      ');
  }
});