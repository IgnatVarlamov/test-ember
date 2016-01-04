import Ember from 'ember';

export default Ember.Controller.extend({
  newName: '',
  disabled: function() {
    return Ember.isEmpty(this.get('newName'));
  }.property('newName'),

  init() {
      Ember.set(this, 'allCategoriesAtStore', this.store.peekAll('category'));
    },

  model: Ember.computed.filter('allCategoriesAtStore', function(item){
          return !item.get('parent.id');
        })
});
