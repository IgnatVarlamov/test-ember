import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('category', {parent: null});
  },

  actions: {
     createCategory: function() {
	    var controller = this.get('controller'),
          store = this.store;

      var category = this.store.createRecord('category', {
        name: controller.get('newName')
      });
	    category.save().then(function(result){
        controller.set('newName', '');
      });
    }
  }
});
