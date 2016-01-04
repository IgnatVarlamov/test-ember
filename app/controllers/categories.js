import Ember from 'ember';

export default Ember.Controller.extend({
  newName: '',
  expDate: null,
  disabled: function() {
    return Ember.isEmpty(this.get('newName'));
  }.property('newName'),
  pieData: function(){
    var arr ={data:  [{value:12, color:"red"},{value:11, color:"yellow"},{value:44, color:"green"}]}
    return arr
  },
  init() {
        Ember.set(this, 'allCategoriesAtStore', this.store.peekAll('category'));
  },
  model: Ember.computed.filter('allCategoriesAtStore', function(item){
          return !item.get('parent.id');
        })
});
