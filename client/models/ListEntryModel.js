var ListEntryModel = Backbone.Model.extend({
  removeFromList: function(){
    window.clearTimeout(this.temp);
    this.trigger('removeFromList',this);
  },

  watch: function(){
    if(this.get('time') <= new Date){
      window.clearTimeout(this.temp);
      this.notify();
    } else {
      this.temp = setTimeout(this.watch.bind(this),1000);
    }
  },

  notify: function(){
    this.trigger('chime',this);
  }
});