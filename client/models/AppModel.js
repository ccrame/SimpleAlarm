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
    this.set('clock', new ClockModel());

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
      var hours; 
      var minutes;
      var newEvent = $('#event-form').val();
      var input = $('#time-form').val().split(' ').join('');
      if(newEvent.length < 1 || input.length < 1){
        return;
      }
      var meridiem = "";
      window.console.log('input is ', input);
      input = input.replace(/[a-z]/ig,function(x){
        meridiem += x;
        return "";
      });
      window.console.log('input after replace is ', input);
      meridiem = (/pm/ig).test(meridiem) ? 12 : 0;
      var currentTime = new Date;
      var eventTime = new Date;
      if((/\:/).test(input)){
        input = input.split(':');
        hours = +input[0] < 12 ? +input[0] + meridiem : +input[0];
        minutes = input[1];
        eventTime.setHours(hours);
        eventTime.setSeconds(0);
        eventTime.setMinutes(minutes);
      } else {
        eventTime.setMinutes(+input + currentTime.getMinutes());
        eventTime.setSeconds(currentTime.getSeconds());
      }


      if(eventTime < currentTime){
        eventTime.setDate(currentTime.getDate()+1);
      }

      var dayName = convertToDay(eventTime.getDay());

      var obj = {
        event: newEvent,
        time: eventTime,
        day: dayName
      };
      this.get('eventList').add(obj);

    },this);



  }//initialize
});//AppModel