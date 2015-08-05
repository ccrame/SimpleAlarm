var ListEntryView = Backbone.View.extend ({
  template: _.template('\
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
    this.$el = this.$el.addClass('list-entry').html(this.template(this.model.attributes));
    this.timeLeft().length === 10 ? this.$el.addClass('alert'): this.$el;
    this.$el.append('<div class="event">'+ this.model.get('event') +'</div>');
    this.$el.append('<div class="alarm-time">' + this.alarmTime() + '</div>');
    this.$el.append('<div class="remaining-time">' + this.timeLeft() + '</div>');
    this.$el.append('<div class="day">'+ this.model.get('day') + '</div>');
    return this.$el;
  },

  alarmTime: function(){
    var time = (this.model.get('time')).toTimeString().slice(0,8).split(':'); 
    var hour = +time[0];
    var meridiem = hour < 12 ? 'AM' : 'PM';
    hour = (+time[0] - 1)%12 + 1;
    time[0] = hour;
    return '' + time.join(':') + ' ' + meridiem; 
  },

  timeLeft: function(){
    var ms = Math.floor((this.model.get('time').getTime() - (new Date).getTime()) / 1000);
    var hour = Math.floor(ms/3600);
    hour = hour < 10 ? "0" + hour : hour || "00";
    var minute = Math.floor(ms%3600/60);
    minute = minute < 10 ? "0" + minute : minute || "00";
    var second = Math.floor(ms%60);
    second = second < 10 ? "0" + second : second || "00";
    if(ms > 0){
      return "" + hour + ":" + minute + ":" + second;
    } else {
      return "Time's up!";
    }
  }
});