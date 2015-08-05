var ListEntryModel = Backbone.Model.extend({

  removeFromList: function(){
    this.chime();
    window.alert(this.get('event'));
    window.clearTimeout(this.temp);
    this.trigger('removeFromList',this);
  },

  watch: function(){
    this.temp = setTimeout(this.watch.bind(this),1000);
    if(this.get('time') <= new Date){
      this.chime();
      this.removeFromList();
    } 
  },

  chime: function(){
    this.trigger('chime', this);
  }
});