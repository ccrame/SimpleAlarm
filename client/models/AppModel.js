// this will contain everything else
var convertToDay = function(number){
  switch(number){
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  };
};

var today = (new Date).getDay();

var AppModel = Backbone.Model.extend({
  initialize : function(data){
    //data
    this.set('console', new ConsoleModel());
    this.set('eventList', new ListCollection());

    this.get('eventList').on('removeFromList',function(x){
      this.get('eventList').remove(x.cid);
    },this);

    this.get('eventList').on('watch',function(){
      this.get('eventList').render();
    },this);

    this.get('eventList').on('chime',function(){
      window.audioElement.play();
    });

    this.get('console').on('addToList', function(){
      var newEvent = $('#event-form').val();
      var input = $('#time-form').val().split(' ').join('');
      if(newEvent.length < 1 || input.length < 2){
        return;
      }
      var currentTime = new Date;
      var eventTime = new Date;
      var hours = Math.floor(+input / 100);
      var minutes = input%100;

      eventTime.setHours(hours);
      eventTime.setMinutes(minutes);
      eventTime.setSeconds(0);

      if(eventTime < currentTime){
        eventTime.setDate(currentTime.getDate()+1);
      }

      var dayName = convertToDay(eventTime.getDay());

      var obj = {
        event: newEvent,
        time: eventTime,
        day: dayName
      };
      console.log('the list ', this.get('eventList'));
      this.get('eventList').add(obj);

    },this);



  }//initialize
});//AppModel